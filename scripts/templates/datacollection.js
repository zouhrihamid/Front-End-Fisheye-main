/* eslint-disable no-unused-vars */
class media {
    // Constructeur pour initialiser l'objet media avec des données
    constructor(data) {
        this._id = data.id; 
        this._photographerId = data.photographerId; 
        this._title = data.title; 
        this._image = data.image; 
        this._video = data.video; 
        this._likes = data.likes; 
        this._date = data.date; 
        this._price = data.price; 
    }

    // Méthode getter pour l'id
    get id() {
        return this._id;
    }

    // Méthode getter pour l'identifiant du photographe
    get photographerId() {
        return this._photographerId;
    }

    // Méthode getter pour l'image (corrigée pour utiliser this._image)
    get image() {
        return `./assets/photographers/${this._image}`;
    }

    // Méthode getter pour la vidéo
    get video() {
        return `./assets/photographers/${this._video}`;
    }

    // Méthode getter pour le titre
    get title() {
        return this._title;
    }

    // Méthode getter pour le nombre de likes
    get likes() {
        return this._likes;
    }

    // Méthode getter pour la date
    get date() {
        return this._date;
    }

    // Méthode getter pour le prix
    get price() {
        return this._price;
    }
}