/* eslint-disable no-unused-vars */
class videoTemplate {
    /**
     * Constructeur de la classe videoTemplate
     * @param {Object} media - Un objet représentant un média contenant les propriétés nécessaires pour créer une carte vidéo.
     */
    constructor(media) {
        this._media = media; // Initialise la propriété _media avec l'objet media fourni
    }
  
    /**
     * Crée et ajoute une carte vidéo à la collection d'éléments vidéo sur la page.
     */
    createCardVideoCollection() {
        const fichesImage = document.querySelector(".collection"); 
        const dataElement = document.createElement("a"); 
        dataElement.classList.add("myCurrentImage"); 
    
        const videoElement = document.createElement("video"); 
        videoElement.classList.add("fit_video");
    
        const titlelikes = document.createElement("div");
        const title = document.createElement("p"); 
        const likes = document.createElement("p"); 
        const iconElement = document.createElement('i'); 
        titlelikes.classList.add("title"); 
  
        // Vérifie si l'objet media contient une propriété video
        if (this._media.video) {
            videoElement.src = `./assets/images/${this._media.video}`; 
            videoElement.alt=`${this._media.title}`;
            videoElement.autoplay = false; 
            videoElement.controls = false; 
             videoElement.width = 300; 
             videoElement.height = 400; 
            title.innerText = `${this._media.title}  `;
            likes.innerText = ` ${this._media.likes}`; 
            iconElement.classList.add('fas', 'fa-heart', 'btnLike'); 
            iconElement.setAttribute('data-id', this._media.id);
            fichesImage.appendChild(dataElement); 
            dataElement.appendChild(videoElement);
            dataElement.appendChild(titlelikes);
            titlelikes.appendChild(title); 
            titlelikes.appendChild(likes); 
            likes.appendChild(iconElement); 
        }
    }
  }
