
// Interaction avec l'API pour récupérer des données externes 

    const movies = [] 
    fetch("./data.json") // utilisation de l'API fetch our charger notre fichier
    .then((response) => response.json()) // convertit la reponse en json 
    .then((result)=>{
        //movies = result
        console.log(result)
    })
    .catch((error) => console.log("shit happened ", error)) 
