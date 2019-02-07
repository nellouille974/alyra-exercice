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

 } catch(err) {
   // Gestion des erreurs
   console.error(err);
 }
}
