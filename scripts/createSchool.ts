import {ethers} from "hardhat";

async function main() {
    const [owner, otherAccount] = await ethers.getSigners();

    const SchoolFactoryContract = "0xeD259eEcf8bB320f82d8B82e4CAd495b8917a2dc";
    const schoolFactoryContract = await ethers.getContractAt("ISchoolFactory", SchoolFactoryContract);
    await schoolFactoryContract.waitForDeployment();

    const createSchoolTx = await schoolFactoryContract.createSchool("My School");
    await createSchoolTx.wait();

    const getDeployedSchoolsTx = await schoolFactoryContract.getDeployedSchools();
    // await getDeployedSchoolsTx.wait();

    
    console.log("Deployed schools: ", getDeployedSchoolsTx);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});