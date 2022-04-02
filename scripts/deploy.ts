import { ethers } from "hardhat";

async function main() {

  // We get the contract to deploy
  const SubscriptionsContract = await ethers.getContractFactory("Subscriptions");
  const subscriptionsContract = await SubscriptionsContract.deploy();

  await subscriptionsContract.deployed();

  console.log("Contract deployed to:", subscriptionsContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
