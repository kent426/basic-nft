import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";

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
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      // 1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
      // 4: "0xA296a3d5F026953e17F472B497eC29a5631FB51B", // but for rinkeby it will be a specific address
      // goerli: "0x84b9514E013710b9dD0811c9Fe46b837a4A0d8E0", //it can also specify a specific netwotk name (specified in hardhat.config.js)
    },
  },
};

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default config;
