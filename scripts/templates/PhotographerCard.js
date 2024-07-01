/* eslint-disable no-unused-vars */

class PhotographerCard {
  /**
   * Constructeur de la classe PhotographerCard
   * @param {Object} photographer - Un objet représentant un photographe contenant les propriétés nécessaires pour créer une carte de photographe.
   */
  constructor(photographer) {
    this._photographer = photographer; // Initialise la propriété _photographer avec l'objet photographe fourni
  }

  /**
   * Crée et ajoute une carte de photographe à la section d'éléments de photographes sur la page.
   */
  createPhotographerCard() {
    // Récupération de l'élément du DOM qui accueillera les fiches de photographes
    const sectionFiches = document.querySelector(".photographer_section");
    sectionFiches.setAttribute("alt","les cartes des photographes");
    sectionFiches.setAttribute("rol","image ");
    // Création d’une balise <a> dédiée aux photographes
    const dataElement = document.createElement("a");
    dataElement.href = `./photographer.html?id=${this._photographer.id}`;

    const imageElement = document.createElement("img"); 
    imageElement.src = this._photographer.portrait;
    imageElement.alt = `${this._photographer.name}`; 
    imageElement.title=`carte de photographe ${this._photographer.name}`;
    const namePhotographer = document.createElement("h2"); 
    namePhotographer.innerText = this._photographer.name;

    const cityCountryPhotographer = document.createElement("h3"); 
    cityCountryPhotographer.innerText = `${this._photographer.city}, ${this._photographer.country}`; 

    const descriptionElement = document.createElement("span"); 
    descriptionElement.innerText = this._photographer.tagline; 

    const priceElement = document.createElement("p");
    priceElement.innerText = `${this._photographer.price} €/jour`; 

    // Rattacher la balise <a> à la section des fiches
    sectionFiches.appendChild(dataElement);

    // Rattacher img et les informations du photographe à l'élément <a>
    dataElement.appendChild(imageElement);
    dataElement.appendChild(namePhotographer); 
    dataElement.appendChild(cityCountryPhotographer); 
    dataElement.appendChild(descriptionElement); 
    dataElement.appendChild(priceElement); 
  }
}