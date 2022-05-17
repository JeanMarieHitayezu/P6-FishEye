
import Factory from "../factories/mediaFactory.js";


export default class Portfolio {

    constructor() {
        this.all = [];
        this.slideIndex;
        this.totalLike = [];
    }

    render() {
        this.display();
        this.openLightbox();
        this.listenForLike();
    }
    
    display() {
        let html = " ";
        this.all.forEach(media => {
            html += media.buildPhotographer();
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
        document.getElementById("lightbox-body").innerHTML = this.all[this.slideIndex].retrieveLightbox();
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
            this.lightboxNextSlide();
        });
        document.getElementById("previous").addEventListener("click", () => {
            this.lightboxPreviousSlide();
        });
        document.addEventListener("keydown", (e) => {
            let key = e.which;
            if (key == "27") {
                this.closeLightbox();
            }
            if (key == "37") {
                this.lightboxPreviousSlide();
            }
            if (key == "39") {
                this.lightboxNextSlide();
            }
        });
    }    

    openLightbox() {
        document.querySelectorAll(".image-link").forEach(images => {
            images.addEventListener("click", (e) => {
                e.preventDefault();
                let id = e.target.getAttribute("photoid");
                this.slideIndex = this.all.findIndex(media => media.id == id);
                this.showLightbox();
            });
        });
        document.querySelectorAll(".description").forEach(description => {
            description.addEventListener("click", (e) => {
                e.preventDefault();
            });
        });
    }

    lightboxNextSlide() {
        this.slideIndex++;
        if (this.slideIndex == this.all.length) {
            this.slideIndex = 0;
        }
        let id = this.all[this.slideIndex].id;
        this.showLightbox(id);
    }

    lightboxPreviousSlide() {
        this.slideIndex--;
        if (this.slideIndex == -1) {
            this.slideIndex = this.all.length - 1;
        }
        let id = this.all[this.slideIndex].id;
        this.showLightbox(id);
    }

    listenForLike() {
        document.querySelectorAll(".like").forEach(heart => {
            heart.addEventListener("click", (e) => {
                e.preventDefault();
                let id = heart.getAttribute("data-id");
                let media = this.all.find(media => media.id == id);
                media.likeCount();
                this.displayTotal();
            });
        });
        this.updateLikes();
    }

    displayTotal() {
        this.updateLikes();
    }

    updateLikes() {
        let total = 0;
        this.all.forEach(media => {
            total += media.likes;
        });
        document.getElementById("total-like").innerHTML = total;
    }

    displayDropdown() {
        this.openSort();
        this.closeSort();
    }
}