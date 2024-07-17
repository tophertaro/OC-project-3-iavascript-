


 


// (1.1) FETCH API projets architecte 

async function fetchWorks(){

    try{ //bloc try pour capturer et gérer les erreurs qui pourraient survenir dans le bloc de code try
      const response = await fetch('http://localhost:5678/api/works') // requête http vers l'url 

      if(!response.ok){ //si reponse pas ok = lancer une erreur
        throw new Error("Could not fetch resource")
      } else { 
        const works = await response.json(); //si reponse ok = await attend que la reponse soit convertie en JSON qui sera stocké dans la const works
        displayWorks(works) //après récupération des données, appel la fonction pour afficher les travaux
      }
      
    }
      catch(error){
        console.error(error)
      }
}

function displayWorks(works){ 
  let gallery = document.getElementById('gallery-js'); 
  gallery.innerHTML =''; //supprime le contenu html dans la div gallery-js
  

  let galleryContent = '';
  works.forEach(work => {
    galleryContent += 
    ` <figure>
        <img src="${work.imageUrl}" alt="${work.title}"
        <figcaption>${work.title}</figcaption>
      </figure>
    `
  });

  gallery.innerHTML = galleryContent;

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


