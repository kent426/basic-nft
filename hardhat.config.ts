import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

//
// Select the network you want to deploy to here:
//
const defaultNetwork = "localhost";

const config: HardhatUserConfig = {
  solidity: "0.7.3",
  defaultNetwork,

  networks: {
    hardhat: {
      chainId: 31337,
    },
  },
};

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default config;
