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