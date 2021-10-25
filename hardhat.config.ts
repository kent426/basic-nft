import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";

import { mnemonic } from "./helpers";
require("dotenv").config();
const { API_URL } = process.env;

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
const defaultNetwork = "hardhat";

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  defaultNetwork,

  paths: {
    artifacts: "./artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337,
      accounts: {
        mnemonic: mnemonic({ defaultNetwork }),
      },
    },
    ropsten: {
      url: API_URL,
      accounts: {
        mnemonic: mnemonic({ defaultNetwork }),
      },
    },
  },
};

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default config;
