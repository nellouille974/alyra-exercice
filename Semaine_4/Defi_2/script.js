async function createMetaMaskDapp() {
 try {
   // Demande à MetaMask l'autorisation de se connecter
   const addresses = await ethereum.enable();
   const address = addresses[0]
   // Connection au noeud fourni par l'objet web3
   const provider = new ethers.providers.Web3Provider(ethereum);
   const dapp = { address, provider };
   console.log(dapp);
   //contract
   let abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "getOffers",
		"outputs": [
			{
				"components": [
					{
						"name": "user",
						"type": "address"
					},
					{
						"name": "nameOfUser",
						"type": "string"
					},
					{
						"name": "enumeration",
						"type": "uint256"
					},
					{
						"name": "timeLimit",
						"type": "uint256"
					},
					{
						"name": "state",
						"type": "string"
					},
					{
						"name": "description",
						"type": "string"
					},
					{
						"name": "minReputation",
						"type": "uint256"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "user",
				"type": "address"
			},
			{
				"name": "nameOfUser",
				"type": "string"
			},
			{
				"name": "enumeration",
				"type": "uint256"
			},
			{
				"name": "timeLimit",
				"type": "uint256"
			},
			{
				"name": "state",
				"type": "string"
			},
			{
				"name": "description",
				"type": "string"
			},
			{
				"name": "minReputation",
				"type": "uint256"
			}
		],
		"name": "addOffer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
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
		"name": "offers",
		"outputs": [
			{
				"name": "user",
				"type": "address"
			},
			{
				"name": "nameOfUser",
				"type": "string"
			},
			{
				"name": "enumeration",
				"type": "uint256"
			},
			{
				"name": "timeLimit",
				"type": "uint256"
			},
			{
				"name": "state",
				"type": "string"
			},
			{
				"name": "description",
				"type": "string"
			},
			{
				"name": "minReputation",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "reputation",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "nameOfUser",
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
		"constant": false,
		"inputs": [
			{
				"name": "user",
				"type": "address"
			},
			{
				"name": "name",
				"type": "string"
			}
		],
		"name": "registration",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

	let contratIllustrator = new ethers.Contract("0xe89141073d94cc332d2ce34f9cfaccb42cf29234", abi, dapp.provider);
	let off = await contratIllustrator.getOffers();
	console.log(off);
	f = document.createDocumentFragment();
	for(t of off){
		d = document.createElement('div');
		d.innerHTML = t.nameOfUser +" "+ t.enumeration.toString() +" "+ t.state +" "+ t.description +" "+ t.minReputation.toString();
		f.appendChild(d);
	}
	document.body.appendChild(f);
 } catch(err) {
   // Gestion des erreurs
   console.error(err);
 }
}
