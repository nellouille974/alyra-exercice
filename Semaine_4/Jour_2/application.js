async function createMetaMaskDapp() {
 try {
   // Demande à MetaMask l'autorisation de se connecter
   const addresses = await ethereum.enable();
   const address = addresses[0]
   // Connection au noeud fourni par l'objet web3
   const provider = new ethers.providers.Web3Provider(ethereum);
   const dapp = { address, provider };
   console.log(dapp);
   // get balance
   dapp.provider.getBalance(dapp.address).then((balance) => {
       let etherString = ethers.utils.formatEther(balance);
	   console.log("Balance: " + etherString);
	   document.getElementById('balance').innerHTML = etherString;
	});
   // get last blocknumber
   dapp.provider.getBlockNumber().then((blocknumber) => {
       console.log("Current block number : " + blocknumber);
	   document.getElementById('block').innerHTML = blocknumber;
   });
   // get current gas price
   dapp.provider.getGasPrice().then((gasPrice) => {
       gasPriceString = gasPrice.toString();
	   console.log("Current gas price: " + gasPriceString);
	   document.getElementById('gas').innerHTML = gasPriceString;
	});
   // contrat
   let abi =
[
	{
		"constant": false,
		"inputs": [
			{
				"name": "dev",
				"type": "bytes32"
			}
		],
		"name": "remettre",
		"outputs": [
			{
				"name": "ordre",
				"type": "uint256"
			}
		],
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
		"name": "cred",
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
				"name": "url",
				"type": "string"
			}
		],
		"name": "produireHash",
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
				"name": "destinataire",
				"type": "address"
			},
			{
				"name": "valeur",
				"type": "uint256"
			}
		],
		"name": "transfer",
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
				"name": "hashUrl",
				"type": "bytes32"
			}
		],
		"name": "Remise",
		"type": "event"
	}
];

	let contratCredibilite = new ethers.Contract("0x2074c1c6e94739e23aa1b750fa7990ef0959deeb", abi, dapp.provider);
	let maCredibilite = await contratCredibilite.cred(dapp.address);
	console.log(maCredibilite.toString(), "maCredibilite"); // le résultat est 0 j'imagine que c'est parce que je ne gère pas dans mon contract le fait d'obtenir
	//de la crédibilité en rendant son devoir ?

	//ecouter evenement
	contratCredibilite.on('Remise', (dev , event) => {
		console.log(dev,"cool j'écoute");
	});

 } catch(err) {
   // Gestion des erreurs
   console.error(err);
 }
}
