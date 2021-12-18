# LaLaVille Metaverse Core Economy

``` Economy core for LaLaVille Metaverse.

``` Install dependencies
yarn

``` Compile contracts locally
./shell-scripts/start-node.sh
./shell-scripts/compile.sh

``` Deploy contracts to the local Hardhat node
./shell-scripts/start-node.sh
export HARDHAT_DEPLOY_NETWORK=<testnet_name> // kovan
./shell-scripts/deploy.sh
export DEPLOYED_CONTRACT_ADDRESS=<deployed_addr> // 0x..

``` Verify contract on local node
npx hardhat verify --network $HARDHAT_DEPLOY_NETWORK $DEPLOYED_CONTRACT_ADDRESS "wow!"
