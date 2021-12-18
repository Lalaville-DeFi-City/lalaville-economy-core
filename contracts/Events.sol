//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract EventEmitter {
    event DepositSuccess(address indexed _from, uint _value);
    event BuildContractCreated(string contractId);
    event BuildContractConfirmed(string contractId);
    event RewardBuilder(address builder);
}
