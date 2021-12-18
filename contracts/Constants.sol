//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract Constants {
    enum BuildContractStatus {
        inProgress,
        completed,
        declined
    }

    struct BuildContract {
        uint reward;
        BuildContractStatus status;
        address builder;
        address ceo;
    }
}