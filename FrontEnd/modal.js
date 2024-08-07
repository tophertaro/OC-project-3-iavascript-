import { data, displayWorks } from "./script.js";

let modal, closeButton;

// PARTIE MODAL
function createModal() {
  // Création de la balise <dialog>
  modal = document.createElement("dialog");
  modal.id = "modal";

  // Création de la div pour le contenu de la modale
  const modalContent = document.createElement("div");
  modalContent.id = "dialog-content";

  // Création du bouton pour fermer la modale
  closeButton = document.createElement("span");
  closeButton.id = "close-btn";
  closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  // Création du titre de la modale
  const modalTitle = document.createElement("h3");
  modalTitle.textContent = "Galerie photo";

  // Création de la div pour les travaux
  const galleryModal = document.createElement("div");
  galleryModal.id = "gallery-modal";

  // Création du bouton 'ajouter une photo'
  const addPhoto = document.createElement("input");
  addPhoto.id = "add-photo";
  addPhoto.type = "submit";
  addPhoto.value = "Ajouter une photo";

  // Ajout de tous les éléments dans le contenu de la modale
  modalContent.appendChild(closeButton);
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(galleryModal);
  modalContent.appendChild(addPhoto);

  // Ajout du contenu de la modale dans l'élément <dialog>
  modal.appendChild(modalContent);
  
  // Ajout de la modale dans le corps du document
  document.body.appendChild(modal);
}


async function displayWorksInModal(works) {
  let gallery = document.getElementById("gallery-modal");
  gallery.innerHTML = ""; //supprime le contenu html dans la div gallery-js

  let galleryContent = ""; //la variable va contenir le code html pour chaque travail généré
  works.forEach((work) => {
    galleryContent += ` <div>
            <span><i class="fa-solid fa-trash-can" data-id="${work.id}"></i></span>
          <img src="${work.imageUrl}" alt="${work.title}" />
        </div>
      `;
  });

  gallery.innerHTML = galleryContent; //valeur de galleryContent inséré dans le HTML class gallery
  // On ajoute les évènements de suppression.
  addDeletionEvents();
}

function addDeletionEvents() {
  const trashes = document.querySelectorAll(".fa-trash-can");
  trashes.forEach((trash) => {
    console.log(trash);
    trash.addEventListener("click", function ($event) {
      // @TODO : Appel API de suppression du work via l'id.
      fetch().then(() => {
        const id = $event.target.dataset.id;
        data.works = data.works.filter((work) => work.id !== Number(id));
        displayWorks(data.works);
        displayWorksInModal(data.works);
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  createModal();

  // Ouverture de la modale lorsqu'on clique sur le bouton "Modifier"
  document.getElementById("edit-projects").onclick = function () {
    modal.showModal();
    // On affiche la galerie.
    displayWorksInModal(data.works);
  };
  // fermeture de la modale
  closeButton.onclick = () => modal.close();
});