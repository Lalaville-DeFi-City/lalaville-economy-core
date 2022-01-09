import { expect } from "chai";
import { ethers } from "hardhat";

const TOKENS_SUPPLY = "10000";

describe("[CONTRACT] LaLaVilleEconomyToken_core", function () {
  it("Should deploy core contract and assign tokens supply", async () => {
    const signers = await ethers.getSigners();
    const signer = signers[signers.length - 1];

    const LaLaVilleEconomyToken = await ethers.getContractFactory(
      "LaLaVilleEconomyToken"
    );

    const token = await LaLaVilleEconomyToken.deploy(signer.address);

    const tokenBalance = await token.balanceOf(signer.address);

    expect(tokenBalance.toString()).equal(TOKENS_SUPPLY);
  });
});
