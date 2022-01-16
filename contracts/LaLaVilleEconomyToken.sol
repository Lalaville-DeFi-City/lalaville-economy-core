// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "./Constants.sol";
import "./BaseCore.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LaLaVilleEconomyToken is BaseCore, Constants {
    uint256 constant public INITIAL_TOKENS_SUPPLY_AMOUNT = 10000;
    // Map all busy builders.
    mapping (address => bool) public busyBuilders;
    // Map all created contracts.
    mapping (bytes32 => BuildContract) public buildContracts;
    // Map rewards to contractId.
    mapping (address => uint256) public buildContractRewards;
    address private deployer;
    // TODO: ? IERC20(contractOwner).

    constructor(address owner) {
        contractOwner = owner;
        balances[contractOwner] = INITIAL_TOKENS_SUPPLY_AMOUNT;
        deployer = msg.sender;
    }

    function balanceOf(address owner) public view returns (uint256) {
        return balances[owner];
    }

    function getContractById(bytes32 contractId) public view returns (BuildContract memory _contr) {
        return buildContracts[contractId];
    }

    function allocate(address to, uint256 amount) public {
        require (msg.sender == deployer, "Only owner can call it.");
        require (balances[contractOwner] > amount, "Insufficient funds.");
        balances[to] += amount;
        balances[contractOwner] -= amount;
    }

    function lockReward(uint256 reward, address lockedFrom, address lockedTo) private {
        buildContractRewards[lockedTo] = reward;
        balances[lockedFrom] -= reward;
        balances[contractOwner] += reward;
    }

    function returnReward(address lockedTo, address lockedFrom) private {
        balances[lockedFrom] += buildContractRewards[lockedTo];
        balances[contractOwner] -= buildContractRewards[lockedTo];
    }

    // expected caller role: performer
    function replyContractRequest(bytes32 contractId, bool accept) public {
        BuildContract memory _contract = buildContracts[contractId];
        require(msg.sender == _contract.performer, "Only performer can reply.");

        if (accept) {
            _contract.status = BuildContractStatus.inProgress;
            emit BuildContractConfirmed(bytes32ToString(contractId), _contract.performer);
        } else {
            _contract.status = BuildContractStatus.declined;
            emit BuildContractDeclined(bytes32ToString(contractId), _contract.performer);
        }
    }

    // expected caller role: customer
    function requestContract(uint256 rewardTokens, address performer) public {
        require(rewardTokens > 0, "Reward must be higher then zero.");
        require(rewardTokens <= balances[msg.sender], "Not enouht funds.");
        require(busyBuilders[performer] != true, "NFT builder currently busy.");

        lockReward(rewardTokens, msg.sender, performer);
        bytes32 contractId = uintToString(random());

        busyBuilders[performer] = true;
        buildContracts[contractId] = BuildContract(
            rewardTokens,
            BuildContractStatus.suspended,
            performer,
            msg.sender
        );

        string memory contractIdAsString = bytes32ToString(contractId);
        emit BuildContractCreated(contractIdAsString, msg.sender, performer, busyBuilders[performer]);
    }

    // expected caller role: customer
    /* function changeBuilder(bytes32 contractId, bool removeContract, address newBuilder) public {
        BuildContract memory _contract = buildContracts[contractId];

        if (removeContract) {
            _contract.status = BuildContractStatus.closed;
            busyBuilders[_contract.performer] = false;

            returnReward(_contract.performer, _contract.customer);
        } else {
            _contract.status = BuildContractStatus.suspended;
            busyBuilders[_contract.performer] = false;
            _contract.performer = newBuilder;
            busyBuilders[newBuilder] = true;

            emit BuilderChanged(bytes32ToString(contractId), newBuilder);
        }
    } */

    // expected caller role: customer
    function rewardBuilder(bytes32 contractId) public {
        BuildContract memory _contract = buildContracts[contractId];

        require(_contract.reward > 0, "Cannot find requested contract.");
        require(msg.sender == _contract.customer, "Only owner can confirm reward.");
        _contract.status = BuildContractStatus.completed;
        busyBuilders[_contract.performer] = false;

        balances[_contract.customer] -= _contract.reward;
        balances[_contract.performer] += _contract.reward;

        emit RewardBuilder(_contract.performer, _contract.reward);
    }
}