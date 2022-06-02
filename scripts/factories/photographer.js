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
    
    // CODE DE LA PAGE D'ACCUEIL
    getUserCardDOM() {
        
        return `
        <article class="photographer-info">
            <a href="/photographer.html?id=${this.id}" aria-describedby="${this.name} - Fisheye">
                <div class="photographer-heading" aria-label="photo du photographe et son nom">
                    <img class="user" src="./${this.picture}" alt="${this.name}" />
                    <h2 class="photographer_heading">${this.name}</h2><br/>
                </div>                
            </a>
            <div class="photographer-datas">
                <p class="photographer-datas_location" lang="en">${this.location}</p> 
                <p class="photographer-datas_tagline">${this.tagline}</p>
                <p class="photographer-datas_price-per-day">${this.price}€/jour</p>
            </div>
        </article>
        `;    
    }
    
    //CODE DE LA PARTIE SUPERIEURE DE LA PAGE PHOTOGRAPHE
    displayHeader() {

        document.getElementById("photograph-header").innerHTML = `
            <div>
                <h1 tabindex="0" class="photograph-name">${this.name}</h1>
                <p id="photograph-location">${this.location}</p>
                <p class="photograph-text">${this.tagline}</p>
                
            </div>
            <div>
                <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            </div>
            <img tabindex=0" class="photograph-picture" src="../${this.picture}" alt="Photo de profil de ${this.name}">
            `;
    }

    showDailyPrice() {

        document.getElementById("box").innerHTML = `
        <span id="total-like" aria-described="likes"></span>
        <span title="likes" class="fas fa-heart"></span>
        <span id="daily-price">${this.price}€/jour</span>`; 
    }
    showModalName() {

        document.getElementById("contact-photographer").innerHTML = `
        <div class="modal-header" tabindex="0">
            <h2 >Contactez-moi</h2>
            <h2>${this.name}</h2>
        </div>
        `;
    } 

    displayDropdown() {
        
        document.getElementById("dropdown-wrapper").innerHTML = `
        <p id="dropdown-text" aria-label="Trier par"><strong>Trier par</strong></p>
        <div class="dropdown" id="populaire">
            <button class="dropbtn filter" role="button" aria-haspopup="listbox" aria-expanded="false" data-filter="populaire">Popularité</button>
            <a title="Dropdown Menu" href="#"  role="button" aria-haspopup="listbox" class="fas fa-chevron-down arrow-down"></a>
            <div class="dropdown-content">
                <button class="filter" role="listbox"  aria-activedescendant="date" data-filter="date">Date</button>
                <button class="filter" role="listbox" aria-descendant="titre" data-filter="titre">Titre</button>
            </div>
            <a title="Dropdown Menu" href="#"  class="fas fa-chevron-up arrow-up"></a>
        </div>
        <div class="dropdown" id="date">
            <button class="dropbtn filter" role="button" data-filter="date">Date</button>
            <a title="Dropdown Menu" href="#"  class="fas fa-chevron-down arrow-down"></a>
            <div class="dropdown-content">
                <button class="filter" role="listbox" aria-activedescendant="popularite" data-filter="populaire">Popularité</button>
                <button class="filter" role="listbox" data-filter="titre">Titre</button>
            </div>
            <a title="Dropdown Menu" href="#"  class="fas fa-chevron-up arrow-up" alt="arrow-up"></a>
        </div>
        <div class="dropdown" id="titre">
            <button class="dropbtn filter" role="listbox" aria-activedescendant="filtre" data-filter="titre">Titre</button>
            <a title="Dropdown Menu" href="#"  class="fas fa-chevron-down arrow-down"></a>
            <div class="dropdown-content">
                <button class="filter" role="listbox" data-filter="date">Date</button>
                <button class="filter" role="listbox" data-filter="populaire">Popularité</button>
            </div>
            <a title="Dropdown Menu" href="#"  role="button" class="fas fa-chevron-up arrow-up"></a>
        </div>
        `;
    }
         
}