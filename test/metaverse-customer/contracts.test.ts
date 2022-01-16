import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";

import { LaLaVilleEconomyToken } from "../../typechain";

let token: LaLaVilleEconomyToken;
let signers: Array<SignerWithAddress>;
const CONTRACT_REWARD = 100;

beforeEach(async () => {
  signers = await ethers.getSigners();
  const LaLaVilleEconomyToken = await ethers.getContractFactory(
    "LaLaVilleEconomyToken"
  );
  token = await LaLaVilleEconomyToken.deploy(signers[0].address);
  await token.allocate(signers[2].address, 1000);
});

describe("[CONTRACT] LaLaVilleEconomyToken_Contract", function () {
  it("[CONTRACT] Should create Contract successfully and reward could be locked", async () => {
    const contractCreationResponse = await token
      .connect(signers[2])
      .requestContract(CONTRACT_REWARD, signers[5].address);
    const events = (await contractCreationResponse.wait()).events;
    const contractIdAsBytes = ethers.utils.toUtf8Bytes(
      (events as any)[0].args[0]
    );
    const createdContract = await token.getContractById(contractIdAsBytes);

    expect(createdContract[1]).to.be.equal(1);
  });

  it("[CONTRACT] Should allow performer to approve our Contract, start working and be rewarded", async () => {
    const contractCreationResponse = await token
      .connect(signers[2])
      .requestContract(CONTRACT_REWARD, signers[3].address);
    const contractCreationEvents = (await contractCreationResponse.wait())
      .events;
    const contractIdAsBytes = ethers.utils.toUtf8Bytes(
      (contractCreationEvents as any)[0].args[0]
    );
    const replyContractResponse = await token
      .connect(signers[3])
      .replyContractRequest(contractIdAsBytes, true);
    const contractReplyEvents = (await replyContractResponse.wait()).events;
    await token.connect(signers[2]).rewardBuilder(contractIdAsBytes);
    const performerBalanceAfterReward = await token.balanceOf(
      signers[3].address
    );

    expect((contractReplyEvents as any)[0].event).to.be.equal(
      "BuildContractConfirmed"
    );
    expect(performerBalanceAfterReward).to.be.equal(CONTRACT_REWARD.toString());
  });
});
