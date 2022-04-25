//Mettre le code JavaScript lié à la page photographer.html

import Photographer from "../factories/photographer.js";
import Portfolio from "../utils/portfolio.js";

fetch("../data/photographers.json")
    .then(response => response.json())
    .then(data => {
        let photographerDetails = data.photographers.find(photographe => photographe.id == getId());
        let photographer = new Photographer(photographerDetails);
        photographer.displayHeader();
        photographer.showDailyPrice();
        photographer.showModalName();

        let portfolio = new Portfolio(photographerDetails);
        let medias = data.medias.filter(media => media.photographerId == getId());
        portfolio.hydrate(medias);
        portfolio.render();
    })
    function getId() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get("id");
    }    