import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function ({
  getNamedAccounts,
  deployments,
  getChainId,
  getUnnamedAccounts,
}: HardhatRuntimeEnvironment) {
  // code here
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  // the following will only deploy "GenericMetaTxProcessor" if the contract was never deployed or if the code changed since last deployment
  await deploy("BasicNFT", {
    from: deployer,
  });
};
const tags = ["BasicNFT"];
export default func;
export { tags };
