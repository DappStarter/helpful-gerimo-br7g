require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth outside purity harvest hidden slot genre'; 
let testAccounts = [
"0x42fdad98725b75ab67db8bff77a8190d344f75f448f37b327e1622ff787b7bcc",
"0x9b99b63dc06dbe47fb2b39b719bd9c43eb38a932bc48a066acedb2c00c5968ff",
"0x9373d4a8f29d7442a51007fffbbe4411bccba6d9804bf2f5fcaeb570a5f84c5c",
"0x4212fd451a967e6a9b9a98be3a78c587079363bdfcf233de738126c8fed2e2df",
"0xc8a601e44ad8698fdb3bf3128e6ef1913f539a64572c3ce2fd4dd48bf7d3f88b",
"0xd9a8baf93b5daa6495f8c14c6cdf1c2a901a3ea6630f4eda7256019fa004ce8f",
"0x874e9fb61aa739a07e2ccce1494036afd88d2434d39ead453e772af8fa5e9bba",
"0x26efc463f95d22e7aa1cf8f49ed93a96bd2094f9c6aea0387f77bcf5d8d27141",
"0x6f5f8b035bc09d6b71127f32e864a50b2b187bd6ca914b7cedab52381448fa15",
"0x5118e698f0d72dcabbcde1bc8f3714673510107213cfb0fc6e83150f3e962250"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

