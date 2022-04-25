//Mettre le code JavaScript lié à la page photographer.html

import Photographer from "../factories/photographer.js"

fetch("../data/photographers.json")
    .then(response => response.json())
    .then(data => {
        let photographerDetails = data.photographers.find(photographe => photographe.id == getId());
        let photographer = new Photographer(photographerDetails);
        photographer.displayHeader();
        photographer.showDailyPrice();
        photographer.showModalName();
    })
    function getId() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get("id");
    }    