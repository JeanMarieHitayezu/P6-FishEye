export default class Api {
    
     
    constructor (url) {
        this._url = url
    }
    

    async getPhotographers() {

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
                console.log(`Fetch haven't succeed to retrieve the photographers datas. ${error}.`)
            });
    
        return photographers;
    
    }
     
}