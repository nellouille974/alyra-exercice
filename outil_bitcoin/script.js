function convertHexaToDeci(nbr) {
	var deci = parseInt(nbr, 16);
	return deci;
}

function convertDeciToHexa(dec) {
	dec = parseInt(dec, 10);
	var hexadecimal = dec.toString(16); 
	if(dec.lenght % 2 == 1) {
		hexadecimal = "0" + hexadecimal;
	}
	return hexadecimal;
}

function convertHexaLittleIndianToHexa(h) {
	// fonction à revoir (utiliser exemple du cours)
	if(h.lenght % 2 == 1) {
		h = '0' + h;
	}
	var result = "";

	for (var i = 0; i < h.length-1; i+=2) {
		result = h[i] + h[i + 1] + result;
	//	console.log(result);
	}

	return result;
}

function convertvarIntToDeci(nbrInt) {
	// revoir varInt fonction non fonctionnel
	//Gérer les cas où ça commence par un de ces trois là : 0xfd, 0xfe, 0xff;
	begin = "0x"+nbrInt[2]+nbrInt[3];
	//console.log(begin);
	if(begin == "0xfd") {
		var cut = nbrInt.substring(4,6);
		result = parseInt(cut, 16);
		//console.log(result);
	}
}

function calculDifficulte(cibleActuel) {
	var cibleMax = 2.7 * Math.pow(10,67);
	return cibleMax / cibleActuel;
}

document.getElementById('conv1').addEventListener('click', event => {
	var hexa = document.getElementById('hexa').value;
	document.getElementById('deci').innerHTML = convertHexaToDeci(hexa);
}),


document.getElementById('conv2').addEventListener('click', event => {
	var decimal = document.getElementById('decimal').value;
	document.getElementById('hexad').innerHTML = convertDeciToHexa(decimal);
}),

document.getElementById('conv3').addEventListener('click', event => {
	var indian = document.getElementById('indian').value;
	document.getElementById('a').innerHTML = '0x' + convertHexaLittleIndianToHexa(indian);
}),

document.getElementById('conv4').addEventListener('click', event => {
	var varInt = document.getElementById('varint').value;
	document.getElementById('decima').innerHTML = convertvarIntToDeci(varInt);
}),

document.getElementById('conv6').addEventListener('click', event => {
	var cible = document.getElementById('cible').value;
	document.getElementById('difficult').innerHTML = calculDifficulte(cible);
})


