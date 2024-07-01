/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class MediaFactory {
    static createMedia(data) {
        // Vérifie si les données sont valides
        if (!data) {
            return null; 
        }

        // Vérifie si les données contiennent une vidéo
        if (data.video) {
            return new videoTemplate(data); 
        }

        // Vérifie si les données contiennent une image
        if (data.image) {
            return new pictureTemplate(data); 
        }

        // Affiche un avertissement si les données ne contiennent ni vidéo ni image
        console.warn('No valid media type found in data');
        return null;
    }
}

