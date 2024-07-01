/* eslint-disable no-unused-vars */
class collectionDataPhotoCard {
  // Constructeur pour initialiser l'objet avec un photographe
  constructor(photographer) {
      this._photographer = photographer; // Photographe à afficher
  }

  // Méthode pour créer et afficher la collection de photos du photographe
  createDataPhotoCollection() {
      // Récupération de l'élément du DOM qui accueillera la fiche
      const fichesImage = document.querySelector(".image_photographer");

      // Création d'une balise dédiée pour le portrait du photographe
      const imageElement = document.createElement("img");
      imageElement.src = this._photographer.portrait; 

      // Ajout de l'élément image à la section
      fichesImage.appendChild(imageElement);

      // Récupération de l'élément du DOM qui accueillera les données du photographe
      const fichesData = document.querySelector(".data_photographer");

      // Création et ajout du nom du photographe
      const namePhotographer = document.createElement("h2");
      namePhotographer.innerText = this._photographer.name;
      const citycountryPhotographer = document.createElement("h1");
      citycountryPhotographer.innerText = `${this._photographer.city}, ${this._photographer.country}`;
      const descriptionElement = document.createElement("h3");
      descriptionElement.innerText = this._photographer.tagline;

      // Ajout des éléments de données à la section
      fichesData.appendChild(namePhotographer);
      fichesData.appendChild(citycountryPhotographer);
      fichesData.appendChild(descriptionElement);
  }
}