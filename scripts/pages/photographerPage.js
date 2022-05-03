//Mettre le code JavaScript lié à la page photographer.html

import Photographer from "../factories/photographer.js";
import Portfolio from "../utils/portfolio.js";





fetch("../data/photographers.json")
    .then(response => response.json())
    .then(data => {
        let photographerDetails = data.photographers.find(photographer => photographer.id == getId());
        let photographer = new Photographer(photographerDetails);
        photographer.displayHeader(); 
        photographer.showDailyPrice();
        photographer.showModalName();
        
        let medias = data.medias.filter(media => media.photographerId == getId());
        let photoProfil = new Portfolio(photographerDetails);
        photoProfil.hydrate(medias);
        photoProfil.render();
        photoProfil.displayLightbox();
    });
    function getId() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get("id");
        
    }    