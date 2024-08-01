import { displayWorks, fetchWorks } from "./script.js";

// PARTIE MODAL

// Création de la balise <dialog>
const modal = document.createElement('dialog');
modal.id = 'modal';

// Création de la div pour le contenu de la modale
const modalContent = document.createElement('div');
modalContent.id = 'dialog-content';

// Création du bouton pour fermer la modale
const closeButton = document.createElement('span');
closeButton.id = 'close-btn';
closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';

// Création du titre de la modale
const modalTitle = document.createElement('h3');
modalTitle.textContent = 'Galerie photo';

// Création de la div pour les travaux
const galleryModal = document.createElement('div');
galleryModal.id = 'gallery-modal';

const modalWorks = displayWorksInModal();
modalWorks.id = 'modal-works';



async function displayWorksInModal() {
    const works = await fetchWorks()
    displayWorks(works, 'gallery-modal');
}

// Création du logo trash
const binGallery = document.createElement ('span');
binGallery.id = 'bin-gallery';
binGallery.innerHTML = '<i class="fa-solid fa-trash-can"></i>';


// Création du bouton 'ajouter une photo'
const addPhoto = document.createElement('input');
addPhoto.id = 'add-photo';
addPhoto.type = 'submit';
addPhoto.value = 'Ajouter une photo';


// Ajout de tous les éléments dans le contenu de la modale
modalContent.appendChild(closeButton);
modalContent.appendChild(modalTitle);
modalContent.appendChild(galleryModal);
modalContent.appendChild(binGallery);
modalContent.appendChild(addPhoto);

// Ajout du contenu de la modale dans l'élément <dialog>
modal.appendChild(modalContent);
// Ajout de la modale dans le corps du document
document.body.appendChild(modal);


// Ouverture de la modale lorsqu'on clique sur le bouton "Modifier"
document.getElementById('edit-projects').onclick = function() {
    modal.showModal();
};
// Event fermeture modale
closeButton.onclick = () => modal.close();


