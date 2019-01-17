#Exercice 1.2
def compteOccurence(text):
	long=len(text) 
	for i in range(0,long):
		print( "Le caractére " , text[i] , "est présent " , text.count(text[i]) , "fois dans le texte")

compteOccurence("Alyra")
