import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";

import { LaLaVilleEconomyToken } from "../../typechain";

const TOKENS_SUPPLY = "10000";

describe("[BASE] LaLaVilleEconomyToken_base", function () {
  let signers: Array<SignerWithAddress>;
  let token: LaLaVilleEconomyToken;

  beforeEach(async () => {
    signers = await ethers.getSigners();
    const signer = signers[0];
    const LaLaVilleEconomyToken = await ethers.getContractFactory(
      "LaLaVilleEconomyToken"
    );
    token = await LaLaVilleEconomyToken.deploy(signer.address);
  });

  it("[BASE] Should assign initial tokens supply to own address", async () => {
    const tokenBalance = await token.balanceOf(signers[0].address);

    expect(tokenBalance.toString()).equal(TOKENS_SUPPLY);
  });

  it("[BASE] Should allocate certain amount of tokens to some customer", async () => {
    const tokensAmount = 100;

    await token.allocate(signers[1].address, tokensAmount);

    const balanceOf = await token.balanceOf(signers[1].address);

    expect(balanceOf).to.be.equal(tokensAmount.toString());
  });
});
