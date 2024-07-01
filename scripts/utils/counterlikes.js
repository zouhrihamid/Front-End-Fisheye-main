/**
 * Fonction pour calculer le nombre total de likes dans une collection.
 * @param {Array} collection - Le tableau d'objets média.
 * @returns {number} - Le nombre total de likes.
 */
/* eslint-disable no-unused-vars */
const calculateTotalLikes = (collection) => {
    return collection.reduce((acc, media) => acc + media.likes, 0);
};

/**
 * Fonction pour mettre à jour l'affichage du nombre total de likes sur la page.
 * @param {number} totalLikes - Le nombre total de likes à afficher.
 */
const updateTotalLikesDisplay = (totalLikes) => {
    const likesElement = document.querySelector(".nombreTotale .likes"); 
    likesElement.textContent = `${totalLikes}    `; 
    const iconElement = document.createElement('i'); 
    likesElement.appendChild(iconElement); 
    iconElement.classList.add('fas', 'fa-heart'); 
};

/**
 * Fonction pour gérer le clic sur le bouton de like.
 * @param {HTMLElement} btn - Le bouton de like qui a été cliqué.
 * @param {Array} collection - Le tableau d'objets média.
 */
const handleLikeButtonClick = (btn, collection) => {
    const mediaId = parseInt(btn.getAttribute('data-id'));
    const media = collection.find(media => media.id === mediaId); 

    if (media) {
        // Alterne l'état de like et met à jour le nombre de likes du média
        if (!btn.classList.contains("liked")) {
            media.likes++; 
        } else {
            media.likes--; 
        }

        btn.classList.toggle("liked"); 

        // Met à jour le nombre de likes pour l'élément média spécifique
        const mediaLikesElement = btn.parentElement.firstChild;
        mediaLikesElement.textContent = `${media.likes}`; 

        // Met à jour le nombre total de likes
        const totalLikes = calculateTotalLikes(collection); 
        updateTotalLikesDisplay(totalLikes); 
    }
};

/**
 * Fonction principale pour afficher le nombre total de likes et configurer les écouteurs d'événements.
 * @param {Array} collection - Le tableau d'objets média.
 */
const displayTotalLikes = (collection) => {
    // Affichage initial du nombre total de likes
    const totalLikes = calculateTotalLikes(collection); 
    updateTotalLikesDisplay(totalLikes); 

    // Configuration des écouteurs d'événements pour les boutons de like
    document.querySelectorAll(".btnLike").forEach(btn => { 
        btn.addEventListener("click", () => handleLikeButtonClick(btn, collection)); 
    });
};

