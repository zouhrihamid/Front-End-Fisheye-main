/* eslint-disable no-undef */

// Récupération des paramètres de l'URL
const urlParams = new URLSearchParams(window.location.search);
const identify = urlParams.get('id'); // Récupération de l'identifiant du photographe à partir des paramètres de l'URL
const select = document.getElementById('select');
let filter = select.value; // Récupération de la valeur du filtre sélectionné

// eslint-disable-next-line no-unused-vars
let currentIndex = 0; // Initialisation de l'index courant pour la gestion de la lightbox

class App {
    constructor() {
        // Initialisation de l'API des photographes avec le fichier JSON
    
        this.photographerApi = new PhotographerApi('./data/photographers.json');
    }

    async main() {
        // Récupération des données des photographes et des médias
        const photographeData = await this.photographerApi.getphotographer();
        const dataMedia = photographeData.data_media;
        const dataPhotographer = photographeData.data;
    
        // Recherche du photographe correspondant à l'identifiant
        const dataPhotoCollection = dataPhotographer.find((element) => element.id == identify);
      
        const photoGrapher = new photographer(dataPhotoCollection);
    
        const collectioncard = new collectionDataPhotoCard(photoGrapher);
        collectioncard.createDataPhotoCollection();
        
        // Affichage du prix du photographe
        const fichesprice = document.querySelector(".nombreTotale");
        const price = document.createElement("p");
        fichesprice.appendChild(price);
        price.classList.add("price");
        price.innerText = `${photoGrapher._price} €/jour`;
      
        // Ajout du nom du photographe dans la modale de contact
        const modalTitle = document.querySelector(".modal header h2");
        const namemodal = document.createElement("span");
        modalTitle.appendChild(namemodal);
        namemodal.innerText = `${photoGrapher._name}`;
        
        // Filtrage des médias du photographe
        const media = dataMedia.filter(element => element.photographerId == identify);

        // Fonction pour mettre à jour l'affichage des médias en fonction du filtre
        const updateMediaDisplay = async () => {
           
            const filterAdapter = new FiltercollectionAdapter(media, filter);
            const filterMedia = await filterAdapter.filtercollectionBytype();
            displayMediaCollection(filterMedia); // Affichage des médias filtrés
           
            displayTotalLikes(filterMedia); // Affichage du nombre total de likes
        };

        // Écouteur d'événement pour le changement de filtre
        const filterInput = document.querySelector(".filter_description");
        filterInput.addEventListener("change", async (event) => {
            filter = event.target.value;
            await updateMediaDisplay();
        });

        // Mise à jour initiale de l'affichage des médias
        await updateMediaDisplay();
    }
}

// Fonction pour afficher la collection de médias
const displayMediaCollection = (collection) => {
    const fichesImage = document.querySelector(".collection");
    fichesImage.innerHTML = '';  // Effacer le contenu existant

    // Parcours de la collection de médias
    collection.forEach((element, index) => {
        const mediaItem =  MediaFactory.createMedia(element);  // Utilisation de MediaFactory pour créer l'objet media
        
        if (mediaItem) {
            if (element.video) {
                mediaItem.createCardVideoCollection(); // Création de la carte vidéo
            } else if (element.image) {
                mediaItem.createCardPhotoCollection(); // Création de la carte photo
            }

            // Ajout d'un écouteur d'événement pour ouvrir la lightbox
            const mediaElement = document.querySelector(`img[src='./assets/images/${element.image}'], video[src='./assets/images/${element.video}']`);
            if (mediaElement) {
                mediaElement.addEventListener('click', function() {
                    currentIndex = index;
                 
                    openModalLight(index, collection); // Ouverture de la lightbox
                });
            }
        }
    });

    // Écouteur d'événement pour rediriger vers la page d'accueil
    const acceuil = document.querySelector(".logo");
    acceuil.addEventListener('click', () => {
        window.location.href = "index.html"; // Remplacer par l'URL de votre page d'accueil
    });
}

// Initialisation de l'application
const app = new App();
app.main();
