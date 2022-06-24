require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  hardhat: {
    chainId: 1,
    forking: {
      url: "https://eth-mainnet.alchemyapi.io/v2/w6Ol6mdlPVKcEh_Eu5BEyPIDKUsIxs47",
    },
  },
  live: {
    url: "https://eth-mainnet.alchemyapi.io/v2/w6Ol6mdlPVKcEh_Eu5BEyPIDKUsIxs47",
    accounts: [
      "34afec3c082278a4478e340f8a17f0f471d2f064d7d2dd03d5d4e1cc87f80f17",
    ],
  },
  solidity: "0.8.15",
};
