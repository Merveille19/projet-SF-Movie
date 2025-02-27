
// Interaction avec l'API pour récupérer des données externes 

    const dataTable = [] 
    fetch("./data.json") // utilisation de l'API fetch our charger notre fichier
    .then((response) => response.json()) // convertit la reponse en json 
    .then((result)=>{
        // dataTable = result
        console.log(result)
    })
    .catch((error) => console.log("shit happened ", error)) 
