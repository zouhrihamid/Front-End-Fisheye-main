class App {
    constructor() {
        // Initialisation de l'API des photographes avec le fichier JSON
        // eslint-disable-next-line no-undef
        this.photographerApi = new PhotographerApi('./data/photographers.json');
    }
   
    async init() {
        // Je récupère mes données du fichier photographers.json       
        const photographe_data = await this.photographerApi.getphotographer();
        const dataPhotographer = photographe_data.data;
      
    
        // Boucle à travers les données des photographes
        for (let i = 0; i < dataPhotographer.length; i++) {
            // eslint-disable-next-line no-undef
            const photo_grapher = new photographer(dataPhotographer[i]);
            // eslint-disable-next-line no-undef
            const photographerCard = new PhotographerCard(photo_grapher); 
            photographerCard.createPhotographerCard(); 
        }
    }
}

// Sélection de l'élément du DOM avec la classe "logo"
const acceuil = document.querySelector(".logo");
acceuil.addEventListener('click', () => {
    // Redirection vers l'URL de la page d'accueil
    window.location.href = "index.html"; // Remplacer par l'URL de votre page d'accueil
});

// Initialisation de l'application
const app = new App();
app.init();