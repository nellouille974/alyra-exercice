const ethers = require('ethers')
const Ipfs= require('ipfs')
const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
const node = new Ipfs();

// ABI contract
const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "idDoc",
				"type": "uint256"
			}
		],
		"name": "payerStockage",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "Epingler",
		"type": "event"
	}
];

const contract = new ethers.Contract("0x9e3f78611e1866e187e13c3bd21fc681e511ae2b", abi, provider.getSigner());

node.on('ready', () => {
 console.log("IPFS prêt");

 provider.getNetwork().then(
   r =>  console.log("Ethereum connecté sur ", r)
 )
});

//event
contract.on("Epingler", (id, event) => {

    console.log(id.toString(),"ecoute evenement");

    node.pin.add(id, function (err, pinset) {
    	if (err) {
    		throw err;
    	}

    	console.log(pinset,"pinset");
    })
});
