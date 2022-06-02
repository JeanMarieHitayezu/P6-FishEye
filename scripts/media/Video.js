import Media from "../media/Media.js";

export default class Video extends Media {

    constructor(data) {
        super(data);
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.video = data.video;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
        this.alt = data.alt;
    }

    // Intégration des videos dans la page des photographes
    built() {
        return `
        <div class="image-wrapper">
            <a class="image-link" date="${this.date}" price="${this.price}" photoid="${this.id}" title="${this.title}" tabindex="0">
                <video width="350" height="350" poster class="image-link videos" alt="${this.alt}" photoid="${this.id}" >
                    <source src="assets/photographers/${this.photographerId}/${this.video}" type="video/mp4">
                </video>
            </a>
            <div class="description-wrapper" >
                <p class="description" tabindex="0" title="${this.title}">${this.alt} </p>
                <span id="Likes" aria-describedby="Likes" title="Likes" tabindex="0" >
                    <span class="photographer-like"  data-id="${this.id}">${this.likes} </span>
                    <a href="#" title="Likes" class="fas fa-heart like" data-id="${this.id}"></a>
                </span>
            </div>
        </div>`;
    }

    retrieveLightbox() {
        return `
        <div id="lightbox">
            <video width="80%" height="87%" controls id="lightbox-video" alt="${this.alt}">
                <source src="assets/photographers/${this.photographerId}/${this.video}" type="video/mp4">
            </video>
            <p id="lightbox-description">${this.title}</p>
        </div>
        `;
    }

    
}