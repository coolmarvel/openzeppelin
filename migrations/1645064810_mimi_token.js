const MimiToken = artifacts.require("MimiToken");

module.exports = function (_deployer) {
  _deployer.deploy(MimiToken);
};