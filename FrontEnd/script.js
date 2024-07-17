
// (1.1) FETCH API & display projets architecte 

async function fetchWorks() {

    try{ //bloc try pour capturer et gérer les erreurs qui pourraient survenir dans le bloc de code try
      const response = await fetch('http://localhost:5678/api/works') // requête http vers l'url 

      if(!response.ok){ //si reponse pas ok = lancer une erreur
        throw new Error('Could not fetch works')
      } else { 
        const works = await response.json(); //si reponse ok = await attend que la reponse soit convertie en JSON qui sera stocké dans la const works
        displayWorks(works) //après récupération des données, appel la fonction pour afficher les travaux
      }
      
    }
      catch(error){ //ce bloc gère les erreurs survenue dans le bloc try
        console.error(error)
      }
}

function displayWorks(works) { 
  let gallery = document.getElementById('gallery-js'); 
  gallery.innerHTML =''; //supprime le contenu html dans la div gallery-js
  

  let galleryContent = ''; //la variable va contenir le code html pour chaque travail généré
  works.forEach(work => {
    galleryContent += 
    ` <figure>
        <img src="${work.imageUrl}" alt="${work.title}"
        <figcaption>${work.title}</figcaption>
      </figure>
    `
  });

  gallery.innerHTML = galleryContent; //valeur de galleryContent inséré dans le HTML class gallery

  /* Méthode alternatif
  works.forEach(work => {
    const figure = document.createElement('figure')

    const img = document.createElement('img')
      img.src = work.imageUrl;
      img.alt = work.title;


    const figcaption = document.createElement('figcaption')
      figcaption.textContent = work.title


      figure.appendChild(img);
      figure.appendChild(figcaption);
      gallery.appendChild(figure);
});*/

}

fetchWorks();


// (1.2) Filtre & display par catégorie

async function fetchCategories() {
  try {
    const response = await fetch ('http://localhost:5678/api/categories');

      if(!response.ok) {
        throw new Error('Could not fetch categories')
      } else {
        const categories = await response.json()
        createFilters(categories);
      }
  }
  catch {

  }
}

function createFilters(categories){
  let filters = document.getElementById('filters')

  let filtersBtn = '';

  filtersBtn += `<button>Tous</button>`
  
  categories.forEach(category => {
    filtersBtn += 
    ` <button>
        ${category.name}
      </button>`
});

filters.innerHTML = filtersBtn;

}

fetchCategories();
