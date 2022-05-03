
import Factory from "../factories/mediaFactory.js";


export default class Portfolio {

    constructor() {
        this.all = [];
        this.totalLike = [];
        this.currentSlideIndex;
    }
    render() {
        this.display();
        
    }
    display() {
        let html = " ";
        this.all.forEach(media => {
            html += media.buildPhotographer();
            document.getElementById("photographer-works").innerHTML = html;
        });
    }

    hydrate(medias) {
        medias.forEach(media => {
            let factory = new Factory(media);
            let medias = factory.build(media);
            this.all.push(medias);
        });
    } 
}