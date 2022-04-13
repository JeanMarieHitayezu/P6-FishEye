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
                <h2 class="photographer_heading">${this.name}</h2>
            </a>
            <div class="photographer-datas">
                <p class="photographer-datas_location" lang="en">${this.location}</p> 
                <p class="photographer-datas_tagline">${this.tagline}</p>
                <p class="photographer-datas_price-per-day">${this.price}€/jour</p>
            </div>
        </article>
        `;    
    }

    displayHeader() {
        
        document.getElementById("photograph-header").innerHTML = `
            <div>
                <h1 class="photograph-name">${this.name}</h1>
                <p class="photograph-location">${this.location}</p>
                <p class="photograph-text">${this.tagline}</p>
            </div>
            <div>
                <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            </div>
            <img class="photograph-picture" src="../${this.picture}" alt="${this.name}"  aria-label="${this.name}">
            `;
    }
}