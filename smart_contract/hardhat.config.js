require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/2faychst__B3qFfiv9xN9yVZnwEwNq9q',
      accounts: ['']
    }
  }
};
