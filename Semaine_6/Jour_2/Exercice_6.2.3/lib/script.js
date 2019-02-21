 /**
 * Transaction deplacement
 * @param {fr.laposte.Deplacement} tx
 * @transaction
 */
async function deplacement(tx) {  
    tx.colis.localisation = tx.arrivee;
    const registre = await getAssetRegistry('fr.laposte.Colis');
    await registre.update(tx.colis);
}

 /**
 * Transaction modifier
 * @param {fr.laposte.modifierEtat} tx
 * @transaction
 */
async function modifier(tx) { 
    if(tx.colis.etat != tx.etatArrivee) {
      tx.colis.etat = tx.etatArrivee;
    }
    const registre = await getAssetRegistry('fr.laposte.Colis');
    await registre.update(tx.colis);
}

 /**
 * Transaction livraison
 * @param {fr.laposte.Livraison} tx
 * @transaction
 */
async function livraisonFinal(tx) {  
    tx.colis.localisation = tx.arrivee;
    const registre = await getAssetRegistry('fr.laposte.Colis');
    await registre.update(tx.colis);
  
   let event = getFactory().newEvent('fr.laposte', 'LivraisonEvent');
    event.colis = tx.colis;
  	event.depart = tx.depart;
    event.arrivee = tx.arrivee;
    emit(event);
}