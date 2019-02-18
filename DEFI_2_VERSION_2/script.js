// ABI contract
const abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "list",
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
	}
];

const provider = new ethers.providers.Web3Provider(ethereum);
const addresses =  ethereum.enable();
const address = addresses[0]
const dapp = { address, provider };
const marketPlaceIllustrator = new ethers.Contract("0xa6d3f256e0527f475583a606d50472570ef8dde5", abi, dapp.provider.getSigner());
console.log(dapp);


// List Offers
async function listOffers() {
   let offers =  await marketPlaceIllustrator.list();
   // create fragment
   const f = document.createDocumentFragment();
   // loop offers
   for(offer of offers) {
	   	doc = document.createElement("div");
	   	if(offer.state <= 1) {
	   	doc.innerHTML = `
	   	<table class="table table-dark">
		  <thead>
		    <tr>
		      <th scope="col">#</th>
		      <th scope="col">Title</th>
		      <th scope="col">Description</th>
		      <th scope="col">Minimum reputation</th>
		      <th scope="col">Remuneration</th>
		      <th scope="col">Time limit</th>
		      <th scope="col">Candidate</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <th scope="row">${offers.indexOf(offer)}</th>
		      <td>${offer.title}</td>
		      <td>${offer.description}</td>
		      <td>${offer.minReputation}</td>
		      <td>${offer.enumeration}</td>
		      <td>${offer.timeLimit}</td>
		      <td><button onclick="apply(${offers.indexOf(offer)})">Click</button></td>	      
		    </tr>
		  </tbody>
		</table>`;
	   	f.appendChild(doc);
	   } else {
	   	doc.innerHTML = "Désolée, il n'y a pas d'offres pour le moment.";
	   	f.appendChild(doc);
	   }
   }
   document.body.appendChild(f);
   console.log(offers);
}

// Apply

async function apply(index) {
	console.log(index);
	await marketPlaceIllustrator.applyToOffer(index);
}

// Registration for customers

async function customer(name) {
	name = document.getElementById('name').value;
	await marketPlaceIllustrator.customerRegistration(name);
}

// Add offers

async function add(title,description,reputation,renumeration,timeLimit) {
	title 			= 	document.getElementById("title").value;
	description 	= 	document.getElementById("des").value;
	reputation  	= 	document.getElementById("rep").value;
	renumeration 	= 	document.getElementById("enum").value;
	timeLimit 		= 	document.getElementById("t").value;

	await marketPlaceIllustrator.addOffer(title,description,reputation,renumeration,timeLimit);
}

// Registration for illustrator

async function illustrator(name) {
	name = document.getElementById('n').value;
	await marketPlaceIllustrator.illustratorRegistration(name);
}
