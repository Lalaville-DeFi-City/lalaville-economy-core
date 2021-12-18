#!/usr/bin/env bash

HARDHAT_PATH=./
echo $HARDHAT_DEPLOY_NETWORK

cd $HARDHAT_PATH
npx hardhat run --network $HARDHAT_DEPLOY_NETWORK scripts/deploy.ts
