// CODE DE LA PAGE D'ACCUEIL

import Photographer from "../factories/photographer.js";

async function displayPhotographers() {

    const photographers = fetch("data/photographers.json")
        .then(function (result) {
            if (result.ok) {
                return result.json();
            }
        })
        .then(function (photographersData) {
            return photographersData.photographers;
        })
        .catch(function (error) {
            throw new Error(`getPhotographer api request failed. ${error}.`);
        });

    return photographers;
    
}

displayPhotographers();

async function init() {

    const photographers = await displayPhotographers();
    
    displayData(photographers);
    
}
init();

function displayData(photographers) {
            
    const photographersUnit = document.querySelector(".photographer_section");
    
    photographers.forEach((photographer) => {
        const photographerModel = new Photographer(photographer);
        
        const userCardDOM = photographerModel.getUserCardDOM();
        
        photographersUnit.innerHTML += userCardDOM;
        
    });    
} 
