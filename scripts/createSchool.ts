import {ethers} from "hardhat";

async function main() {
    const SchoolFactoryContract = 0xeD259eEcf8bB320f82d8B82e4CAd495b8917a2dc;
    const schoolFactory = await ethers.getContractAt("ISchoolFactory", SchoolFactoryContract);

    await schoolFactory.createSchool("Sepolia School");

    console.log("SchoolFactory deployed to ", schoolFactory.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});