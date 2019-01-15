//var nbAleatoire = Math.floor(Math.random() * 100);
var nbAleatoire = 15;
var result = prompt("Entrez un chiffre entre 1 et 100");

if(nbAleatoire === result){
	alert("Youhou");
} else if(result + 5 === nbAleatoire ){
	alert("T'es chaud");
}
else{
	alert("raté!");
}
