import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";

import { LaLaVilleEconomyToken } from "../../typechain";

let token: LaLaVilleEconomyToken;
let contractPerformer: SignerWithAddress;

beforeEach(async () => {
  contractPerformer = (await ethers.getSigners())[0];
  const LaLaVilleEconomyToken = await ethers.getContractFactory(
    "LaLaVilleEconomyToken"
  );
  token = await LaLaVilleEconomyToken.deploy(contractPerformer.address);
});

describe("[CONTRACT] LaLaVilleEconomyToken_Contract_owner", function () {
  it("[CONTRACT] Should create Contract successfully and reward could be locked", async () => {
    const contractCreationResponse = await token.requestContract(
      100,
      contractPerformer.address
    );
    const events = (await contractCreationResponse.wait()).events;
    const eventArgs = (events as any)[0].args;
    const rewardForSigner10 = await token.buildContractRewards(
      contractPerformer.address
    );

    expect(rewardForSigner10.toString()).to.be.equal("100");
    expect(eventArgs[0]).to.be.a("string");
  });

  it("[CONTRACT] Should allow performer to approve our Contract, start working and be rewarded", async () => {
    const contractCreationResponse = await token.requestContract(
      100,
      contractPerformer.address
    );
    const contractCreationEvents = (await contractCreationResponse.wait())
      .events;
    const contractIdAsBytes = ethers.utils.toUtf8Bytes(
      (contractCreationEvents as any)[0].args[0]
    );
    const replyContractResponse = await token.replyContractRequest(
      contractIdAsBytes,
      true
    );
    const contractReplyEvents = (await replyContractResponse.wait()).events;
    const rewardPerformerResponse = await token.rewardBuilder(
      contractIdAsBytes
    );
    const rewardPerformerEvents = (await rewardPerformerResponse.wait()).events;
    const reward = (rewardPerformerEvents as any)[0].args[1];
    // TODO: fix reward allocation.
    // eslint-disable-next-line no-unused-vars
    const performerBalance = await token.balanceOf(contractPerformer.address);

    expect((contractReplyEvents as any)[0].event).to.be.equal(
      "BuildContractConfirmed"
    );
    expect(reward).to.be.equal("100");
  });
});
