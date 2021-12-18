//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "./Events.sol";

contract BaseCore is EventEmitter {
    address public contractOwner;
    mapping (address => uint) public balances;

    function getTotalBorrowPool() external view returns (uint256) {
        return balances[contractOwner] / 3;
    }

    function deposit(uint _amount) public payable {
        require(msg.value >= 1 ether / 100, "Not enouht funds.");
        balances[msg.sender] += _amount;
        emit DepositSuccess(msg.sender, msg.value);
    }
}
