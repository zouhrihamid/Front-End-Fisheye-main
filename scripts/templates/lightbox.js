/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Sélectionne l'élément lightbox et lui attribue un ID
const lightbox = document.querySelector(".lightbox");
lightbox.setAttribute('id', 'myModal');
document.getElementById("myModal").style.display = "none"; // Cache la lightbox par défaut


/**
 * Ouvre la lightbox avec l'image ou la vidéo correspondante à l'index fourni.
 * @param {number} index - L'index de l'image ou de la vidéo dans la liste.
 * @param {Array} list - La liste des médias (images ou vidéos).
 */

function openModalLight(index, list) {
    const modal = document.getElementById("myModal");
    modal.style.display = "block"; // Affiche la lightbox

    currentIndex = index;
//cacher par defaut nombre totale like
document.querySelector(".nombreTotale").style.display="none";
    // Crée des éléments img et video pour afficher le média
    const imageElement = document.createElement("img");
    const titleimage=document.createElement("span");
    const videoElement = document.createElement("video");

    // Affiche l'image si elle existe
    if (list[index].image) {
        imageElement.src = `./assets/images/${list[index].image}`;
        titleimage.innerText = list[index].title;
        console.log(list[index].name);
        // imageElement.style.maxWidth = "100%";
        // imageElement.style.maxHeight = "100%";
        modal.innerHTML = ''; 
        modal.appendChild(imageElement); // Ajoute l'image au modal
        modal.appendChild(titleimage);
    // Affiche la vidéo si elle existe
    } else if (list[index].video) {
        videoElement.src = `./assets/images/${list[index].video}`;
        videoElement.autoplay = true;
        videoElement.controls = true;
        videoElement.style.maxWidth = "100%";
        videoElement.style.maxHeight = "100%";
        modal.innerHTML = ''; 
        modal.appendChild(videoElement); 
    }

    // Crée un bouton de fermeture et l'ajoute à la lightbox
    const close = document.createElement("a");
    close.classList.add("lightbox_close");
    close.innerHTML = '&#x2715;'; 
    close.setAttribute('onclick', "closeModalLight()");
    lightbox.appendChild(close);

    // Crée un bouton pour passer à l'image suivante et l'ajoute à la lightbox
    const next = document.createElement("a");
    next.classList.add("lightbox_next");
    next.innerHTML = '&#10095;'; 
    next.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % list.length;
        openModalLight(currentIndex, list);
    });
    lightbox.appendChild(next);

    // Crée un bouton pour passer à l'image précédente et l'ajoute à la lightbox
    const prev = document.createElement("a");
    prev.classList.add("lightbox_prev");
    prev.innerHTML = '&#10094;'; 
    prev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + list.length) % list.length;
        openModalLight(currentIndex, list);
    });
    lightbox.appendChild(prev);

    // Gère les événements du clavier pour naviguer dans la lightbox
    document.onkeyup = (event) => {
        if (event.key === 'Escape') {
            closeModalLight(); 
        }
        if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + list.length) % list.length;
            openModalLight(currentIndex, list); 
        }
        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % list.length;
            openModalLight(currentIndex, list); 
        }
    };
}

/**
 * Ferme la lightbox et désactive les événements du clavier associés.
 */
function closeModalLight() {
    document.getElementById("myModal").style.display = "none"; 
    document.onkeyup = null; 
    
document.querySelector(".nombreTotale").style.display="block";
}