// Sélectionne les éléments du DOM nécessaires pour la gestion du modal de contact
const mainElement = document.querySelector("main");
const body = document.querySelector("body");
const header = document.querySelector("header");
const modal = document.querySelector("#contact_modal");
// const form = document.querySelector("#modalform");
const formInputs = document.querySelectorAll(".formInput input, .formInput textarea");
const formlabel = document.querySelectorAll(".formInput label");
const Openformcontact = document.querySelector("#open_modal_btn");
const Closeformcontact = document.querySelector("#modal_close_btn");

// Sélectionne les éléments focusables à l'intérieur du modal
const focusableElementsString = 'input:not([disabled]), textarea:not([disabled]), button:not([disabled])';
let focusableElements = [];

// Ajoute des écouteurs d'événements pour ouvrir et fermer le modal
Openformcontact.addEventListener("click", displayModal);
Closeformcontact.addEventListener("click", closeModal);
const submitButton = document.querySelector(".submit_button");
const modalTitle = document.querySelector(".modal header h2");

// Fonction pour gérer la soumission du formulaire
function confirmation() {
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const email = document.getElementById("email");

    submitButton.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
        var formData = new FormData();
        formData.append("firstname", firstname.value);
        formData.append("lastname", lastname.value);
        formData.append("email", email.value);
        const modalSuccessMessage = document.querySelector(".success-message");
        console.log(formData.get("firstname"));
        console.log(formData.get("lastname"));
        console.log(formData.get("email"));
        // Vérifie si tous les champs sont valides
        if (get_first_name() === "" && get_last_name() === "" && validateEmail() === "" && get_message() === "") {
            // Affiche le message de succès
            modalSuccessMessage.innerHTML = `Merci pour votre contact <br/> ${formData.get("firstname")} ${formData.get("lastname")} <br/> ${formData.get("email")}<br/> Nous reviendrons vers vous dans les meilleurs délais.`;
            formInputs.forEach(input => input.style.display = "none"); 
            formlabel.forEach(label => label.style.display = "none"); 
            modalTitle.style.display = "none";
            modalSuccessMessage.style.display = "block"; 
            submitButton.style.display = "none"; 
        } else {
            get_first_name();
            get_last_name();
            validateEmail();
            get_message();
        }
    });
}

// Appelle la fonction de confirmation pour configurer l'écouteur d'événements de soumission
confirmation();

// Ajoute un écouteur d'événements pour fermer le modal avec la touche "Escape"
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        e.preventDefault(); 
        closeModal(); 
    }
});

// Fonction pour afficher le modal de contact
function displayModal() {
    modal.setAttribute("aria-hidden", "false"); 
    body.style.overflow = 'hidden'; 
    mainElement.setAttribute("aria-hidden", "true");
    header.setAttribute("aria-hidden", "true");
    modal.style.display = "grid"; 
    Closeformcontact.focus(); 

    // Récupère tous les éléments focusables à l'intérieur du modal
    focusableElements = modal.querySelectorAll(focusableElementsString);
    if (focusableElements.length > 0) {
        focusableElements[0].focus(); 
    }

    // Ajoute un écouteur d'événements pour capturer le focus à l'intérieur du modal
    document.addEventListener('keydown', trapFocus);
}

// Fonction pour fermer le modal de contact
function closeModal() {
    modal.setAttribute("aria-hidden", "true"); 
    mainElement.setAttribute("aria-hidden", "false"); 
    header.setAttribute("aria-hidden", "false"); 
    body.style.overflow = 'auto';
    modal.style.display = "none"; 

    // Supprime l'écouteur d'événements pour capturer le focus
    document.removeEventListener('keydown', trapFocus);
}

// Fonction pour capturer le focus à l'intérieur du modal
function trapFocus(e) {
    const isTabPressed = (e.key === 'Tab' || e.keyCode === 9); 
    if (!isTabPressed) {
        return;
    }

    const firstFocusableElement = focusableElements[0]; 
    const lastFocusableElement = focusableElements[focusableElements.length - 1]; 

    if (e.shiftKey) {
        // Si la touche "Shift" est enfoncée pour la combinaison "Shift + Tab"
        if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus(); 
            e.preventDefault(); 
        }
    } else {
        // Si la touche "Tab" est enfoncée
        if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus(); 
            e.preventDefault(); 
        }
    }
}

// Fonction pour valider le prénom et afficher une erreur si nécessaire
function get_first_name() {
    const message = document.getElementById("verifyFirstName");
    message.innerHTML = ""; // Efface les messages d'erreur précédents
    let first = document.getElementById("firstname").value;
    
    try {
        if (first.length == 0) throw "Le champs Prénom est vide";
        if (first.length < 2) throw "Le champ Prénom a un minimum de 2 caractères";
        if (!isNaN(first)) throw "Le champs doit contenir des caractères, pas des numéros";
        return ""; // Pas d'erreur
    }
    catch (err) {
        message.innerHTML = err; // Affiche le message d'erreur
    }
}

// Fonction pour valider le nom de famille et afficher une erreur si nécessaire
function get_last_name() {
    const message = document.getElementById("verifylastName");
    message.innerHTML = ""; // Efface les messages d'erreur précédents
    let last = document.getElementById("lastname").value;
    
    try {
        if (last.length == 0) throw "Le champs Nom est vide";
        if (last.length < 2) throw "Le champ Nom de famille a un minimum de 2 caractères";
        if (!isNaN(last)) throw "Le champs doit contenir des caractères, pas des numéros";
        return ""; 
    }
    catch (err) {
        message.innerHTML = err; // Affiche le message d'erreur
    }
}

// Fonction pour valider le message et afficher une erreur si nécessaire
function get_message() {
    const verifymsg = document.getElementById("verifymessage");
    verifymsg.innerHTML = ""; 
    let messageValue = document.getElementById("message").value;
    
    try {
        if (messageValue.length == 0) throw "Le champs message est vide";
        if (messageValue.length < 10) throw "Le champs doit contenir un minimum de 10 caractères";
        return ""; 
    }
    catch (err) {
        verifymsg.innerHTML = err; 
    }
}

// Fonction pour valider l'email et afficher une erreur si nécessaire
function validateEmail() {
    const verifyemail = document.getElementById("verifyemail");
    verifyemail.innerHTML = ""; 
    const email = document.getElementById("email").value;
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+"); 
    
    try {
        if (email.length === 0) throw "Le champs Email est vide";
        if (!emailRegExp.test(email)) throw "Email n'est pas valide";
        return ""; // Pas d'erreur
    }
    catch (err) {
        verifyemail.innerHTML = err; 
    }
}