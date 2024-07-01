/* eslint-disable no-unused-vars */
class Api {
  /**
   * Constructeur pour initialiser l'url du fichier json
   * @param {string} url - URL du fichier JSON
   */
  constructor(url) {
    this._url = url;
  }

  /**
   * Fonction pour récupérer les données du fichier JSON
   * @returns {Object} - Un objet contenant les données des photographes et des médias
   */
  async get() {
    try {
      // Fetch les données de l'URL avec une requête sans CORS
      const response = await fetch(this._url, { mode: 'no-cors' });

    
      const promise = await response.json();

    
      const data = promise["photographers"];
      const data_media = promise["media"];

    
      return { data, data_media };
    } catch (error) {
   
      console.error('Error fetching data:', error);
      return [];  
    }
  }
}

class PhotographerApi extends Api {
  /**
   * Classe PhotographerApi qui hérite de la classe Api
   * @param {string} url - URL du fichier JSON
   */
  constructor(url) {
    super(url);
  }

  /**
   * Fonction pour obtenir les données des photographes
   * @returns {Object} - Les données des photographes et des médias
   */
  async getphotographer() {
   
    return this.get();
  }
}