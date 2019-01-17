//Exercice 1.1
function chiffreCesar(msg, cle) {
	var message = "";
	for(var i = 0; i < msg.length; i++) {
		var msgEncode = msg.charCodeAt(i);

		if(msgEncode >= 97 && msgEncode <= 122) {
			message += String.fromCharCode((msgEncode - 97 + cle) % 26 + 97);
		}
	}
	return message;
}
chiffreCesar("test",1);

//Entrainement 2.1

function cryptVigenere(msg, cle) {
	var message = "";
	for(var i = 0, a = 0; i < msg.length; i++) {
		var msgEncode = msg.charCodeAt(i);
			message += String.fromCharCode((msgEncode - 97 + a % cle.length ) % 26 + 97);
			a++;
	}
	return message;	
}
cryptVigenere("test","abc");



