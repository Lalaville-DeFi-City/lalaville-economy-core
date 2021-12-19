//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "./Constants.sol";
import "./BaseCore.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LaLaVilleEconomyToken is BaseCore, Constants {
    uint256 private initialTokensDistribution = 10000;
    // Map all busy builders.
    mapping (address => bool) public busyBuilders;
    // Map all created contracts.
    mapping (string => BuildContract) public buildContracts;
    // Map rewards to contractId.
    mapping (string => uint) public buildContractRewards;

    constructor(address _owner) {
        contractOwner = _owner;
        balances[address(this)] += initialTokensDistribution;
        IERC20(address(this)).approve(address(this), initialTokensDistribution);
    }

    function replyBuildRequest(string calldata contractId, bool accept) public view {
        BuildContract memory _contract = buildContracts[contractId];

        if (accept) {
            _contract.status = BuildContractStatus.inProgress;
            // TODO: lock reward ?
        } else {
            _contract.status = BuildContractStatus.declined;
            // TODO: notify ceo
        }
    }

    function hireBuilder(uint rewardTokens, address builder) external payable {
        require(rewardTokens > 0, "Reward must be higher then zero.");
        require(rewardTokens >= balances[msg.sender], "Not enouht funds.");
        require(busyBuilders[builder] == true, "Asked NFT builder currently busy");

        busyBuilders[builder] = true;
        string memory contractId = "0xhaha";

        buildContracts[contractId] = BuildContract(
            rewardTokens,
            BuildContractStatus.suspended,
            builder,
            msg.sender
        );

        emit BuildContractCreated(contractId);
    }

    function changeBuilder(string calldata contractId, bool removeContract, address newBuilder) public view {
        BuildContract memory _contract = buildContracts[contractId];

        if (removeContract) {
            _contract.status = BuildContractStatus.closed;
            // TODO: return reward ?
        } else {
            _contract.status = BuildContractStatus.suspended;
            _contract.builder = newBuilder;
            // TODO: notify builder
        }
    }

    function rewardBuilder(string calldata contractId) external payable {
        BuildContract memory _contract = buildContracts[contractId];

        require(_contract.reward > 0, "Cannot find requested contract.");
        _contract.status = BuildContractStatus.completed;
        busyBuilders[_contract.builder] = false;

        emit RewardBuilder(_contract.builder);

        IERC20(address(this)).transfer(_contract.builder, _contract.reward);
    }
}