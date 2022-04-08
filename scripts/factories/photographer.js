export default class Photographer {

    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.location = `${data.city}, ${data.country}`;
        this.tagline = data.tagline;
        this.price = data.price;
        this.picture = `assets/photographers/photographers_ID_photos/${data.alt}`;
        this.media = [data.media];
    }
    
    getUserCardDOM() {
        
        return `
        <article class="">
            <a href="/photographer.html?id=${this.id}" aria-label="${this.name} - Fisheye">
                <img class="user" src="./${this.picture}" alt="${this.name}" />

                <h2 class="photographer__heading">
                    ${this.name}
                </h2>
            </a>

            <div class="photographer-datas">
                <p class="photographer-datas_location" lang="en">
                    ${this.location} 
                </p>        

                <p class="photographer-datas_tagline">
                    ${this.tagline}
                </p>

                <p class="photographer-datas_price-per-day">
                    ${this.price}€/jour
                </p>
            </div>
        </article>`;

    
    }
}