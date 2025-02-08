const hre = require("hardhat");

async function main() {
  // Define contract parameters
  const rentAmount = hre.ethers.parseEther("0.1"); // 0.1 ETH as rent
  const securityDeposit = hre.ethers.parseEther("0.5"); // 0.5 ETH deposit
  const dueDate = Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60; // Due in 30 days

  // Get the contract factory
  const RentalAgreement = await hre.ethers.getContractFactory("RentalAgreement");

  // Deploy contract with parameters
  const rentalAgreement = await RentalAgreement.deploy(rentAmount, securityDeposit, dueDate);

  await rentalAgreement.waitForDeployment(); // Wait for deployment

  console.log(`RentalAgreement deployed at: ${rentalAgreement.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
