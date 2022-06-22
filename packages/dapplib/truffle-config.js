require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remember erosion gloom arch success gate'; 
let testAccounts = [
"0x2260002b222dfbf9013c42119d106f3bac02406ec33c5c75b8be7a8b4ca7b1e7",
"0x70e9dc31613f5a6652e3f28be13e0aee87f8ddfa2cfa640f21ff39991559d89e",
"0x565a66f7455395d58958e334fb2d34038af805c22d3b1a48343292bab3aec3cd",
"0xea8acc0fbfad128def0aac7bca390e0d80367a77fe501c45d41e8341e2ee8070",
"0x86b7bca2785ab07fb6551e38a735aedd0513d5eda64b7775cc646dba121135bd",
"0xabef7649647543e00ede0801c7ad445fbbdb11148664c456de17c0d0c2128aea",
"0xa2a553064451f6f5ef7b0e613d6aaa108dedad23286ba5f95002e853b70e506e",
"0x004d31da9c5f0686b8204029d480330cbfe6ef5b03ff454f81014f22b421185a",
"0x31597ad0b77c7d1520ead44145ce34810dd5af9f108cb54a4bb5664241da125a",
"0x028244df8dbe9c817877907adc3050504196d0678c0ff9b18298cab70fdeec7b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


