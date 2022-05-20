export default class Photographer {

    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.location = `${data.city}, ${data.country}`;
        this.tagline = data.tagline;
        this.price = data.price;
        this.picture = `assets/photographers/photographers_ID_photos/${data.alt}`;
        this.media = [data.media];
        this.photographerid = data.photographerid;
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

    showDailyPrice() {
        document.getElementById("box").innerHTML = `
        <span id="total-like"></span>
        <span class="fas fa-heart"></span>
        <span id="daily-price">${this.price}€/jour</span>`; 
    }
    showModalName() {
        document.getElementById("contact-photographer").innerHTML = `
        <p>Contactez-moi</p>
        <p>${this.name}</p>
        `;
    }

    displayDropdown() {
        
        document.getElementById("dropdown-wrapper").innerHTML = `
        <p id="dropdown-text" aria-label="Trier par">Trier par</p>
        <div class="dropdown" id="populaire">
            <button class="dropbtn filter" role="button" aria-haspopup="listbox" aria-expanded="false" data-filter="populaire">Popularité</button>
            <a title="Dropdown Menu" href="#"  class="fas fa-chevron-down arrow-down"></a>
            <div class="dropdown-content">
                <button class="filter" role="listbox" data-filter="date">Date</button>
                <button class="filter" role="listbox" data-filter="titre">Titre</button>
            </div>
            <a title="Dropdown Menu" href="#"  class="fas fa-chevron-up arrow-up"></a>
        </div>
        <div class="dropdown" id="date">
            <button class="dropbtn filter" role="button" data-filter="date">Date</button>
            <a title="Dropdown Menu" href="#"  class="fas fa-chevron-down arrow-down"></a>
            <div class="dropdown-content">
                <button class="filter" role="listbox" data-filter="populaire">Popularité</button>
                <button class="filter" role="listbox" data-filter="titre">Titre</button>
            </div>
            <a title="Dropdown Menu" href="#"  class="fas fa-chevron-up arrow-up"></a>
        </div>
        <div class="dropdown" id="titre">
            <button class="dropbtn filter" role="listbox" data-filter="titre">Titre</button>
            <a title="Dropdown Menu" href="#"  class="fas fa-chevron-down arrow-down"></a>
            <div class="dropdown-content">
                <button class="filter" role="listbox" data-filter="date">Date</button>
                <button class="filter" role="listbox" data-filter="populaire">Popularité</button>
            </div>
            <a title="Dropdown Menu" href="#"  class="fas fa-chevron-up arrow-up"></a>
        </div>
        `
    }
}