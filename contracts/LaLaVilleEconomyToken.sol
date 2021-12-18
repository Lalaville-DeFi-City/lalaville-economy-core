//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "./Constants.sol";
import "./BaseCore.sol";

contract LaLaVilleEconomyToken is BaseCore, Constants {
    uint256 private initialTokensDistribution = 10000;
    mapping (address => bool) public busyBuilders;
    mapping (string => BuildContract) public buildContracts;
    mapping (string => uint) public buildContractRewards;

    constructor(address _owner) {
        contractOwner = _owner;
        balances[contractOwner] += initialTokensDistribution;
    }

    function replyBuildRequest(string calldata contractId) public view {
        // TODO
    }

    function hireBuilder(uint rewardTokens, address builder) external payable {
        require(rewardTokens >= balances[msg.sender], "Not enouht funds.");
        require(busyBuilders[builder] == true, "Asked NFT builder currently busy");

        busyBuilders[builder] = true;
        string memory contractId = "0xhaha";

        emit BuildContractCreated(contractId);
    }

    function removeBuilder(string calldata contractId) public view {
        // TODO
    }

    function rewardBuilder(string calldata contractId) external payable {
        BuildContract memory _contract = buildContracts[contractId];
        balances[_contract.builder] += _contract.reward;
        _contract.status = BuildContractStatus.completed;
        busyBuilders[_contract.builder] = false;

        emit RewardBuilder(_contract.builder);
    }
}