const fs = require('fs');
require('@nomiclabs/hardhat-waffle');

const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  solidity: '0.8.4',
  networks: {
    localhost: {
      url: 'http://localhost:8545',
    },
    hardhat: {
      chainId: 1337,
    },
  },
};
