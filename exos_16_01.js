// Exercice 1.2.1
function factorielle(a) {
	if(a>1) {
		return a*factorielle(a-1);
	} else {
		return 1;
	}
}

// Exercice 1.2.5

// en admettant qu'il y est une classe déjà créer comme dans l'exemple mais en JavaScript

function find(self,val) {
	if(self.valeur == val) {
		return true;
	} else if(self.valeur < val){
		return find(self.left,val);
	} else {
		return find(self.right, val)
	}
}

function infixe(self){
	if(self.left != null) {
		return infixe(self.left)
	} else if(self.right != null) {
		return infixe(self.right);
	}
}

// Exercice 1.2.7

function hash(string, max) {
	var a = 0;
	for (var i = 0; i < string.length ; i++) {
		a += string.charCodeAt(i);
	}
	var result = a % max;
	console.log(result);
	return result;
}


