const ethers = require('ethers')
const Ipfs= require('ipfs')
const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
const node = new Ipfs();
const express = require('express')
const app = express()

// ABI contract
const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "idDoc",
				"type": "string"
			}
		],
		"name": "payerStockage",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "listIdDoc",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "id",
				"type": "string"
			}
		],
		"name": "Epingler",
		"type": "event"
	}
];


node.on('ready', () => {
	 console.log("IPFS prêt");

	 provider.getNetwork().then(
	   r =>  console.log("Ethereum connecté sur ", r)
	 )
	const contract = new ethers.Contract("0x205a60ba232eb60f87928e7229dcebf0c8ab70fc", abi, provider.getSigner());
	 //event
	contract.on("Epingler", (idDoc, event) => {

	    console.log(idDoc,"ecoute evenement");

		node.add(new node.types.Buffer(idDoc), (err,filesAdded) => {
			if (err) {
				return console.error('Error',err,res);
			}
			filesAdded.forEach(file => {
				console.log('Add success', file.hash);
				let hash = file.hash;

				node.pin.add(hash, function (err, result) {
		    		if (err) {
		    			console.log('Error pin', err);
		    		}
					console.log(result[0].hash +' was pinned');
	    		})
			});
		})

	});
});




