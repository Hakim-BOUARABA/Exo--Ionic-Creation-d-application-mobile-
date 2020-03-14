const design = document.querySelector('#input-design');
const montant = document.querySelector('#input-montant');
const boutonConfirmer = document.querySelector('#btn-confirm');
// pour recuper la liste (listeAchats) en lui ajoutant des choses 
const liste_Achats = document.querySelector('#listeAchats');


const alertCtrl = document.querySelector('ion-alert-controller');
// vue qu'on a pas met d'id, on a pas besoin de #

const boutonAnnuler = document.querySelector('#btn-cancel');
const montant_achats = document.querySelector('#total_Achats');
let totalAchat=0;


const clear = () => {
  design.value = '';
  montant.value = '';
}

boutonAnnuler.addEventListener( 'click' , clear);

  
boutonConfirmer.addEventListener( 'click' , () => {
    const designation_recup =design.value; // recuperer la valeur du designe et la mettre dans designation_recup et vu que c'est constant on rajoute const
    const somme_recup = montant.value;

    if(designation_recup.trim().length <=2 || somme_recup <=0  || somme_recup.trim().lenght <=0){
    // console.log("erreur de designation ou de montant")  // .trim() permet d'enlever les espaces et .length permet de recuperer la taille   || = ou

    alertCtrl.create({
      message: 'Veuillez entrez des données correctes',
      header: 'Valeurs incorrectes',
      buttons: ["J'ai compris"]
       }).then(alertElement => {
           alertElement.present();
    });


    return;
    }

  // pour recuper la liste (listeAchats) en lui ajoutant des choses 
  newItem = document.createElement("ion-item");
  newItem.textContent = designation_recup + " :"+ somme_recup + ":€";
  liste_Achats.appendChild(newItem);

  totalAchat += +somme-recup 
  // cela veut dire totalAchat = totalAchat+somme_recup
  // +somme-recup se comporte comme un numbre
  // console.log(totalAchat);

  montant_achats.textContent = totalAchat;


clear ();

  console.log(designation_recup, somme_recup);
  
}); 
