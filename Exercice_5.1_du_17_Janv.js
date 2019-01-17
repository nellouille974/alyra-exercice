var CryptoJS = require("crypto-js");

//Exercice 5.1

function generateAdr(cle) {
	var hash = CryptoJS.SHA256(cle);
		hash1 = CryptoJS.RIPEMD160(hash);
		idDebut = "0x00" + hash1;
		end = CryptoJS.SHA256(idDebut);
		endCup = end.toString().substring(0,4);
		idFin = idDebut + endCup;
		return idFin;
		// words  = CryptoJS.enc.Base58.parse(idFin);						error
  		//base58 = CryptoJS.enc.Base58.stringify(words);
  		//return base58;

}

generateAdr("12");