const hre = require("hardhat");

/**
 * Contract Address
 */
const ensAddress = "0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e";
const resolverAddress = "0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41";
const _reverseRegistrar = "0x084b1c3C81545d370f3634392De611CaaBFf8148";

async function main() {
  const CNSController = await hre.ethers.getContractFactory("CNSController");
  const cns = await CNSController.deploy(ensAddress, resolverAddress);

  await cns.deployed();

  console.log("CNSController deployed to:", cns.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
