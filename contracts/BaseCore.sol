// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "./Events.sol";

contract BaseCore is EventEmitter {
    address public contractOwner;
    mapping (address => uint) public balances;

    function getTotalBorrowPool() external view returns (uint256) {
        return balances[contractOwner] / 3;
    }

    function deposit(uint amount) public payable {
        // Allow deposit just value that higher then 0.1 ether.
        require(msg.value >= 1 ether / 100, "Not enouht funds.");
        balances[msg.sender] += amount;
        emit DepositSuccess(msg.sender, msg.value);
    }

    function random() public view returns (uint rand) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp)));
    }

    function bytes32ToString(bytes32 _bytes32) public pure returns (string memory) {
        uint8 i = 0;

        while(i < 32 && _bytes32[i] != 0) {
            i++;
        }

        bytes memory bytesArray = new bytes(i);

        for (i = 0; i < 32 && _bytes32[i] != 0; i++) {
            bytesArray[i] = _bytes32[i];
        }

        return string(bytesArray);
    }

    function uintToString(uint v) public pure returns (bytes32 ret) {
        if (v == 0) {
            ret = "0";
        }

        else {
            while (v > 0) {
                ret = bytes32(uint(ret) / (2 ** 8));
                ret |= bytes32(((v % 10) + 48) * 2 ** (8 * 31));
                v /= 10;
            }
        }

        return ret;
    }
}
