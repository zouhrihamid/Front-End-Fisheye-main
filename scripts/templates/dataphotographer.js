
/* eslint-disable no-unused-vars */
class photographer {
    /**
     * Constructeur de la classe photographer
     * @param {Object} data - Un objet représentant un photographe contenant les propriétés 
     * nécessaires pour créer une instance de photographe.
     */
    constructor(data) {
      // Initialisation data du photographe
      this._id = data.id; 
      this._portrait = data.portrait;
      this._city = data.city; 
      this._country = data.country; 
      this._tagline = data.tagline;
      this._price = data.price; 
      this._name = data.name; 
    }
  
    /**
     * Getter pour l'ID du photographe
     * @returns {number} - L'ID du photographe
     */
    get id() {
      return this._id;
    }
  
    /**
     * Getter pour le portrait du photographe
     * @returns {string} - Le chemin du fichier portrait du photographe
     */
    get portrait() {
      return `./assets/photographers/${this._portrait}`;
    }
  
    /**
     * Getter pour la ville du photographe
     * @returns {string} - La ville du photographe
     */
    get city() {
      return this._city;
    }
  
    /**
     * Getter pour le pays du photographe
     * @returns {string} - Le pays du photographe
     */
    get country() {
      return this._country;
    }
  
    /**
     * Getter pour la tagline du photographe
     * @returns {string} - La tagline du photographe
     */
    get tagline() {
      return this._tagline;
    }
  
    /**
     * Getter pour le tarif du photographe
     * @returns {number} - Le tarif du photographe en €/jour
     */
    get price() {
      return this._price;
    }
  
    /**
     * Getter pour le nom du photographe
     * @returns {string} - Le nom du photographe
     */
    get name() {
      return this._name;
    }
  }