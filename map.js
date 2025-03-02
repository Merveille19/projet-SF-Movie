const markers = [] ;
const movies = [] ;
// Interaction avec l'API pour récupérer des données externes 
fetch("./data.json") // utilisation de l'API fetch our charger notre fichier
.then((response) => response.json()) // convertit la reponse en json 
.then((result)=>{
    movies = result

    console.log(result)     
})
.catch((error) => console.log("shit happened ", error)) 


let map = L.map('map').setView([37.773972, -122.431297], 13); // 13 reresente la dimension
    
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([37.773972, -122.431297]).addTo(map)
    .bindPopup('SAN FRANSISCO')
    .openPopup();
       
// effacer les marqueurs existant
    function addMarkersToMap(movies, markers){      
    markers.forEach(marker => map.removeLayer(marker));
    //markers = []

    // recherchons les nouveaux marqueurs
        movies.forEach(movie =>{
        if (movie.lng && movie.lat){
            const longitude = parseFloat( movie.lng);
            const latitude = parseFloat(movie.lat);
            const marker = L.marker([longitude, latitude]).addTo(map)
            .bindPopup(`
                longitude : ${movie.lng}
                latitude : ${movie.lat}`);
            
           markers.push(marker);     
        }
        });

    }
    
let titrefilm = document.getElementsByClassName('searchbar').addEventListener('input', searchfilter())

function searchfilter(movies){
    let searchresult =  titrefilm.value.toLowerCase(); // convertissonms le texte de entre en miniscule
    let searchresultf = movies.filter(movie => movie.title.toLowerCase().includes(searchresult));
     
}
            



      
