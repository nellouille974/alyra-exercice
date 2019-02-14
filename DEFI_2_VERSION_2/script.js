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
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "acceptOffer",
		"outputs": [],
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
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
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
				"name": "url",
				"type": "string"
			},
			{
				"name": "index",
				"type": "uint256"
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
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "offers",
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
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

const provider = new ethers.providers.Web3Provider(ethereum);
const addresses =  ethereum.enable();
const address = addresses[0]
const dapp = { address, provider };
const marketPlaceIllustrator = new ethers.Contract("0x60b8b4be21deec998fd5d923d76f7896d8d39e7e", abi, dapp.provider.getSigner());
console.log(dapp);


// List Offers
async function listOffers() {
   let offers =  await marketPlaceIllustrator.offers(0);
   // create fragment
   const f = document.createDocumentFragment();
   // loop offers
   for(offer of offers) {
	   	doc = document.createElement("div");
	   	//if(offer.state <= 1) {
	   	doc.innerHTML = `<p>Titre :  ${offer.title} </p>
	   					<p>Description : ${offer.description} </p>
	   					<p>Réputation minimum requise : ${offer.minReputation} </p>
	   					<p>Rénumération : ${offer.enumeration} </p>
	   					<p>Délai : ${offer.timeLimit} </p>`;
	   	f.appendChild(doc);
	   //} else {
	   	doc.innerHTML = "Désolée, il n'y a pas d'offres pour le moment.";
	   	f.appendChild(doc);
	   //}
   }
   document.body.appendChild(f);
   console.log(offers);
}
