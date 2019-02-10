// ABI contract
const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "illustrator",
				"type": "address"
			},
			{
				"name": "hashOffer",
				"type": "bytes32"
			}
		],
		"name": "acceptOffer",
		"outputs": [
			{
				"components": [
					{
						"name": "customer",
						"type": "address"
					},
					{
						"name": "illustrator",
						"type": "address"
					},
					{
						"name": "title",
						"type": "string"
					},
					{
						"name": "description",
						"type": "string"
					},
					{
						"name": "minReputation",
						"type": "uint256"
					},
					{
						"name": "state",
						"type": "uint8"
					},
					{
						"name": "listOfCandidates",
						"type": "address[]"
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
						"name": "hashUrl",
						"type": "bytes32"
					},
					{
						"name": "hashOffer",
						"type": "bytes32"
					}
				],
				"name": "",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "title",
				"type": "string"
			},
			{
				"name": "description",
				"type": "string"
			},
			{
				"name": "minReputation",
				"type": "uint256"
			},
			{
				"name": "enumeration",
				"type": "uint256"
			},
			{
				"name": "timeLimit",
				"type": "uint256"
			}
		],
		"name": "addOffer",
		"outputs": [
			{
				"components": [
					{
						"name": "customer",
						"type": "address"
					},
					{
						"name": "illustrator",
						"type": "address"
					},
					{
						"name": "title",
						"type": "string"
					},
					{
						"name": "description",
						"type": "string"
					},
					{
						"name": "minReputation",
						"type": "uint256"
					},
					{
						"name": "state",
						"type": "uint8"
					},
					{
						"name": "listOfCandidates",
						"type": "address[]"
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
						"name": "hashUrl",
						"type": "bytes32"
					},
					{
						"name": "hashOffer",
						"type": "bytes32"
					}
				],
				"name": "",
				"type": "tuple"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "hashOffer",
				"type": "bytes32"
			}
		],
		"name": "applyToOffer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			}
		],
		"name": "customerRegistration",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "hashUrl",
				"type": "bytes32"
			},
			{
				"name": "hashOffer",
				"type": "bytes32"
			}
		],
		"name": "deliveryHashWork",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			}
		],
		"name": "illustratorRegistration",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "offer",
				"type": "address[]"
			}
		],
		"name": "appliedToOffer",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "customers",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "reputation",
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
				"name": "url",
				"type": "string"
			}
		],
		"name": "hashUrlWork",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "pure",
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
		"name": "illustrators",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "reputation",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "offers",
		"outputs": [
			{
				"components": [
					{
						"name": "customer",
						"type": "address"
					},
					{
						"name": "illustrator",
						"type": "address"
					},
					{
						"name": "title",
						"type": "string"
					},
					{
						"name": "description",
						"type": "string"
					},
					{
						"name": "minReputation",
						"type": "uint256"
					},
					{
						"name": "state",
						"type": "uint8"
					},
					{
						"name": "listOfCandidates",
						"type": "address[]"
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
						"name": "hashUrl",
						"type": "bytes32"
					},
					{
						"name": "hashOffer",
						"type": "bytes32"
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
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "offersHashDictionnary",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
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
				"type": "bytes32"
			}
		],
		"name": "offersMapping",
		"outputs": [
			{
				"name": "customer",
				"type": "address"
			},
			{
				"name": "illustrator",
				"type": "address"
			},
			{
				"name": "title",
				"type": "string"
			},
			{
				"name": "description",
				"type": "string"
			},
			{
				"name": "minReputation",
				"type": "uint256"
			},
			{
				"name": "state",
				"type": "uint8"
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
				"name": "hashUrl",
				"type": "bytes32"
			},
			{
				"name": "hashOffer",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
// Connection metaMask
async function createMetaMaskDapp() {
 try {
   // Demande à MetaMask l'autorisation de se connecter
   const addresses = await ethereum.enable();
   const address = addresses[0]
   // Connection au noeud fourni par l'objet web3
   const provider = new ethers.providers.Web3Provider(ethereum);
   const dapp = { address, provider };
   const marketPlaceIllustrator = new ethers.Contract("0x57cd457cb96824a840b0fb0415ab4e90bed8679b", abi, dapp.provider.getSigner());
   console.log(dapp);
   // List Offers
   let offers =  await marketPlaceIllustrator.offers();
   // create fragment
   const f = document.createDocumentFragment();
   // loop offers
   for(offer of offers) {
	   	doc = document.createElement("div");
	   	if(offer.state <= 1) {
	   	doc.innerHTML = `<p>Titre :  ${offer.title} </p>
	   					<p>Description : ${offer.description} </p>
	   					<p>Réputation minimum requise : ${offer.minReputation} </p>
	   					<p>Rénumération : ${offer.enumeration} </p>
	   					<p>Délai : ${offer.timeLimit} </p>`;
	   	f.appendChild(doc);
	   } else {
	   	doc.innerHTML = "Désolée, il n'y a pas d'offres pour le moment.";
	   	f.appendChild(doc);
	   }
   }
   document.body.appendChild(f);
   console.log(offers);
 } catch(err) {
   // Gestion des erreurs
   console.error(err);
 }
}
