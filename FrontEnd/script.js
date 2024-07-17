


 
   fetchWorks();

// (1.1) FETCH API projets architecte 

async function fetchWorks(){

    try{ //bloc try pour capturer et gérer les erreurs qui pourraient survenir dans le bloc de code try
      const response = await fetch('http://localhost:5678/api/works') // requête http vers l'url 

      if(!response.ok){ //si reponse pas ok = lancer une erreur
        throw new Error("Could not fetch resource")
      } else { 
        const works = await response.json(); //si reponse ok = await attend que la reponse soit convertie en JSON qui sera stocké dans la const works
        console.log(works)
      }
      
    }
      catch(error){
        console.error(error)
      }
}



