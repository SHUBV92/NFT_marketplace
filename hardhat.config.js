require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    localhost: {
      url: 'http://localhost:8545',
    },
  },
};
