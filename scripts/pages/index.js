import Photographer from "../factories/photographer.js";
import Api from "../factories/api.js"


init()
async function init() {
    const data = new Api("data/photographers.json")

    const photographers = await data.getPhotographers();

    displayData(photographers);

    function displayData(photographers) {

        const photographersSection = document.querySelector(".photographer_section");
    
        photographers.forEach((photographer) => {
            const photographerModel = new Photographer(photographer);
    
            const userCardDOM = photographerModel.getUserCardDOM();
    
            photographersSection.innerHTML += userCardDOM;
    
        });    
    }    

};
