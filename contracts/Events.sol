// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract EventEmitter {
    // General events.
    event DepositSuccess(address indexed from, uint256 value);

    // Contract base events.
    event BuildContractCreated(string contractId, address owner, address busyBuilder, bool setBusy);
    event BuildContractConfirmed(string contractId, address performer);
    event BuildContractDeclined(string contractId, address performer);

    // Contract other events.
    event RewardBuilder(address performer, uint256 reward);
    event BuilderChanged(string contractId, address newBuilder);

}
