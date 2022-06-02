import Media from "../media/Media.js";

export default class Photo extends Media {
    

    constructor(data) {
        super(data);
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.image = data.image;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
        this.alt = data.alt;
    
    }
// Intégration des images dans la page des photographes

    built() {
        return `
        <div class="image-wrapper">
            <a class="image-link" href="#" date="${this.date}" price="${this.price}" title="${this.title}" photoid="${this.id}" aria-label="${this.title} vue rapprochée" tabindex="0">
                <img class="photos" src="assets/photographers/${this.photographerId}/${this.image}" alt="${this.title}" photoid="${this.id}" alt="${this.alt}">
            </a>
            <div class="description-wrapper">
                <p class="description" tabindex="0" title="${this.alt}">${this.title}</p>
                <span id="Likes" aria-describedby="Likes" title="Likes" tabindex="0">
                    <span title="Likes" class="photographer-like" data-id="${this.id}">${this.likes}</span>    
                    <a href="#" title="Likes" class="fas fa-heart like" data-id="${this.id}" ></a>
                </div>
            </div>
        </div>`;
    }

    retrieveLightbox() {
        return `
        <div id="lightbox">
            <img id="lightbox-image" class="photos" src="assets/photographers/${this.photographerId}/${this.image}" alt="${this.alt}" photoid="${this.id}" aria-label="${this.title}">
            <p id="lightbox-description">${this.title}</p>
        </div>
        `;
    }

}