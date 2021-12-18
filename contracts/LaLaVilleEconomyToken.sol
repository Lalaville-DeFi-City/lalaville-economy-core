//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "./Constants.sol";

contract LaLaVilleEconomyToken {
    address public contractOwner;
    uint256 public totalTokens = 0;

    // declare types

    constructor(address _owner) {
        contractOwner = _owner;
    }

    function getTotalBorrowPool() external view returns (uint256) {
        return totalTokens / 3;
    }
}