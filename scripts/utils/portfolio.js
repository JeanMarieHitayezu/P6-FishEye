
import Factory from "../factories/mediaFactory.js";


export default class Portfolio {

    constructor() {
        this.all = [];
        this.currentSlideIndex;
    }

    render() {
        this.display();
        this.openLightbox();
    }
    
    display() {
        let html = " ";
        this.all.forEach(media => {
            html += media.built();
        });
        document.getElementById("photographer-works").innerHTML = html;
    }

    hydrate(medias) {
        medias.forEach(media => {
            let factory = new Factory(media);
            let medias = factory.build(media);
            this.all.push(medias);
        });
    }
    
    showLightbox() {
        document.getElementById("lightbox-works").style.display = "block";
        document.getElementById("lightbox-body").innerHTML = this.all[this.currentSlideIndex].retrieveLightbox();
        document.getElementById("lightbox-works").setAttribute("aria-hidden", "false");
    }

    closeLightbox() {
        document.getElementById("lightbox-works").style.display = "none";
        document.getElementById("lightbox-works").setAttribute("aria-hidden", "true");
    }

    displayLightbox() {
        document.getElementById("close").addEventListener("click", () => {
            this.closeLightbox();
        });
        document.getElementById("next").addEventListener("click", () => {
            this.lightboxNext();
        });
        document.getElementById("previous").addEventListener("click", () => {
            this.lightboxPrevious();
        });
        document.addEventListener("keydown", (e) => {
            let key = e.which;
            if (key == "27") {
                this.closeLightbox();
            }
            if (key == "37") {
                this.lightboxPrevious();
            }
            if (key == "39") {
                this.lightboxNext();
            }
        });
    }    

    openLightbox() {
        document.querySelectorAll(".image-link").forEach(images => {
            images.addEventListener("click", (e) => {
                e.preventDefault();
                let id = e.target.getAttribute("photoid");
                this.currentSlideIndex = this.all.findIndex(media => media.id == id);
                this.showLightbox();
            });
        });
        document.querySelectorAll(".description").forEach(description => {
            description.addEventListener("click", (e) => {
                e.preventDefault();
            });
        });
    }

    lightboxNext() {
        this.currentSlideIndex++;
        if (this.currentSlideIndex == this.all.length) {
            this.currentSlideIndex = 0;
        }
        let id = this.all[this.currentSlideIndex].id;
        this.showLightbox(id);
    }

    lightboxPrevious() {
        this.currentSlideIndex--;
        if (this.currentSlideIndex == -1) {
            this.currentSlideIndex = this.all.length - 1;
        }
        let id = this.all[this.currentSlideIndex].id;
        this.showLightbox(id);
    }
}