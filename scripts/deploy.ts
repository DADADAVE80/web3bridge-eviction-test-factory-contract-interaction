import { ethers } from "hardhat";

async function main() {
  const schoolFactory = await ethers.deployContract("SchoolFactory");

  await schoolFactory.waitForDeployment();

  console.log(
    "SchoolFactory deployed to ", schoolFactory.target
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
