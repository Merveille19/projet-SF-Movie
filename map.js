const markers = [] ;
const movies = [] ;
let map;
let moviesdata;

// Interaction avec l'API pour récupérer des données externes 

//prenons en compte le temps de ch
document.addEventListener("DOMContentLoaded", () => {
    initmap();
    loadmoviedata();
});

// initialisons la carte Leaflet
function initmap(){
    map = L.map('map').setView([37.773972, -122.431297], 12); // 12 reresente la dimension
        
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}

// chargeons le fichier JSON
function loadmoviedata(){
    fetch("data.json") // utilisation de l'API fetch our charger notre fichier
        .then(response => response.json()) // convertit la reponse en json 
        .then((result)=>{
        moviesdata = result;
        addMarkersToMap(moviesdata);
        console.log(result)     
        })
        .catch((error) => console.log("shit happened ", error)) 
}

       
// effacer les marqueurs existant
function addMarkersToMap(movies){      
    markers.forEach(marker => map.removeLayer(marker));
    //markers = [];

    // recherchons les nouveaux marqueurs
    movies.forEach(movie =>{
        if (movie.lng && movie.lat){
            const longitude = parseFloat( movie.lng);
            const latitude = parseFloat(movie.lat);
            const marker = L.marker([latitude, longitude])
                .addTo(map)
                .bindPopup(`
                titrefilm : ${movie.title}
                longitude : ${movie.lng}
                latitude : ${movie.lat}`);
            
            markers.push(marker);     
        }
    });

}
    
    // recherche et filtrage
let titrefilm = document.getElementsByClassName('searchbar')[0]

function searchfilter(movies){
    let searchresult =  titrefilm.value.toLowerCase(); // convertissonms le texte de entre en miniscule
    let searchresultf = movies.filter(movie => movie.title.toLowerCase().includes(searchresult));
    addMarkersToMap(searchresultf)
}

let titrefilmtrouve = titrefilm.addEventListener('input', searchfilter(movies))
            



      
