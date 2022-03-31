// https://eth-ropsten.alchemyapi.io/v2/JGKS_BY_KkzofRsFeJDNFGsrRSLIlJse

//V2: https://eth-rinkeby.alchemyapi.io/v2/JGKS_BY_KkzofRsFeJDNFGsrRSLIlJse

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/JGKS_BY_KkzofRsFeJDNFGsrRSLIlJse',
      accounts: [
        '725defade43234448e39f43a8a56df326be881d6028c2640e04201664eb6e311',
      ],
    },
  },
};
