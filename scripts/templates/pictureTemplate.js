/* eslint-disable no-unused-vars */
class pictureTemplate {
  /**
   * Constructeur de la classe pictureTemplate
   * @param {Object} media - Un objet représentant un média contenant les propriétés nécessaires pour créer une carte photo.
   */
  constructor(media) {
      this._media = media; // Initialise la propriété _media avec l'objet media fourni
  }

  /**
   * Crée et ajoute une carte photo à la collection d'éléments photo sur la page.
   */
  createCardPhotoCollection() {
      const fichesImage = document.querySelector(".collection"); 
      const dataElement = document.createElement("a"); 
      dataElement.classList.add("myCurrentImage");
      const imageElement = document.createElement("img"); 
      imageElement.classList.add("fit_picture"); 
      const titlelikes = document.createElement("div"); 
      const title = document.createElement("p"); 
      const likes = document.createElement("p");
      const iconElement = document.createElement('i'); 
      titlelikes.classList.add("title"); 

      // Vérifie si l'objet media contient une propriété image
      if (this._media.image) {
          imageElement.src = `./assets/images/${this._media.image}`; 
          imageElement.alt=`${this._media.title}`;
          title.innerText = `${this._media.title}  `;
          likes.innerText = ` ${this._media.likes}`; 
          iconElement.classList.add('fas', 'fa-heart', 'btnLike'); 
          iconElement.setAttribute('data-id', this._media.id); 
          
          fichesImage.appendChild(dataElement); 
          dataElement.appendChild(imageElement); 
          dataElement.appendChild(titlelikes); 
          titlelikes.appendChild(title); 
          titlelikes.appendChild(likes); 
          likes.appendChild(iconElement); 
      }
  }
}
