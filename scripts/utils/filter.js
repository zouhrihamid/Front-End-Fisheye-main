/* eslint-disable no-unused-vars */
class FiltercollectionAdapter {
    /**
     * Constructeur de la classe FiltercollectionAdapter
     * @param {array} collection - Le tableau d'objets à filtrer et trier.
     * @param {string} typefilter - Le type de filtre à appliquer ('titre', 'Date', 'Popularité').
     */
    constructor(collection, typefilter) {
        this.collection = collection; 
        this.typefilter = typefilter; 
    }

    /**
     * Filtre et trie la collection selon le type de filtre spécifié.
     * @returns {array} - La collection filtrée et triée.
     */
    async filtercollectionBytype() {
        // Crée une instance de CollectionFilter avec la collection fournie
        const collectionfilter = new CollectionFilter(this.collection);
        // Utilise la méthode filterByType de CollectionFilter pour trier la collection
        return collectionfilter.filterByType(this.typefilter);
    }
}

class CollectionFilter {
    /**
     * Constructeur de la classe CollectionFilter
     * @param {array} collection - Le tableau d'objets à filtrer et trier.
     */
    constructor(collection) {
        this.collection = collection; // Initialise la collection
    }

    /**
     * Filtre et trie la collection selon le type de filtre spécifié.
     * @param {string} typeFilter - Le type de filtre à appliquer ('titre', 'Date', 'Popularité').
     * @returns {array} - La collection filtrée et triée.
     */
    filterByType(typeFilter) {
        // Utilise une instruction switch pour appliquer le filtre approprié
        switch(typeFilter) {
            case 'titre':
                // Trie la collection par titre (ordre alphabétique)
                this.collection.sort((a, b) => {
                    let titreA = a.title.toLowerCase(); 
                    let titreB = b.title.toLowerCase(); 
                    if (titreA < titreB) return -1; 
                    if (titreA > titreB) return 1;  
                    return 0; 
                });
                break;
            case 'Date':
                // Trie la collection par date (ordre décroissant)
                this.collection.sort((a, b) => {
                    let dateA = new Date(a.date); 
                    let dateB = new Date(b.date); 
                    return dateB - dateA;
                });
                break;
            case 'Popularité':
                // Trie la collection par popularité (ordre décroissant des likes)
                this.collection.sort((a, b) => b.likes - a.likes);
                break;
            default:
                // Si le type de filtre n'est pas reconnu, retourne la collection telle quelle
                return this.collection;
        }
        // Retourne la collection filtrée et triée
        return this.collection;
    }
}