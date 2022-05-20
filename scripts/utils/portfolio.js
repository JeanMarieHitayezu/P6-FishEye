
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
        this.displayDropdown();
        this.listenForFilter();
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

    displayDropdown() {
        this.openSort();
        this.closeSort();
    }

    changeDropdown(titre) {
        document.getElementById("populaire").style.display = "none";
        document.getElementById("titre").style.display = "none";
        document.getElementById("date").style.display = "none";
        document.getElementById(titre).style.display = "block";
    }

    filterForDate() {
        this.all = this.all.sort(function(a, b) {
            let dateA = a.date;
            let dateB = b.date;
            if (dateA > dateB) {
                return 1;
            }
            if (dateA < dateB) {
                 return -1;
            } 
        });
    }

    filterForPopularity() {
        this.all = this.all.sort((a, b) => {
            return b.likes - a.likes;
        });
    }

    filterForTitle() {
        this.all = this.all.sort(function(a, b) {
            let titleA = a.title;
            let titleB = b.title;
            if (titleA < titleB) {
                 return -1;
            } 
            if (titleA > titleB) {
                return 1;
            }
        });
    }

    listenForFilter() {
        document.querySelectorAll(".filter").forEach(filter => {
            filter.addEventListener("click", () => {
                let filtre = filter.getAttribute("data-filter");
                if (filtre == "date") {
                    this.filterForDate();
                    this.changeDropdown("date");
                } else if (filtre == "titre") {
                    this.filterForTitle();
                    this.changeDropdown("titre");
                } else if (filtre == "populaire") {
                    this.filterForPopularity();
                    this.changeDropdown("populaire");
                }
                this.render();
            });
        });
    }

    openSort() {
        document.querySelectorAll(".arrow-down").forEach(buttonDown => {
            buttonDown.addEventListener("click", () => {
                document.querySelectorAll(".dropdown-content").forEach(menu => {
                    menu.style.display = "block";
                    buttonDown.style.display = "none";
                    document.querySelectorAll(".dropbtn").forEach(button => {
                        button.focus();
                    });
                 });
                 document.querySelectorAll(".arrow-up").forEach(buttonUp => {
                    buttonUp.style.display = "block";
                 });
            });
        });
    }

    closeSort() {
        document.querySelectorAll(".arrow-up").forEach(buttonUp => {
            buttonUp.addEventListener("click", () => {
                document.querySelectorAll(".dropdown-content").forEach(menu => {
                    menu.style.display = "none";
                    buttonUp.style.display = "none";
                });
                document.querySelectorAll(".arrow-down").forEach(buttonDown => {
                    buttonDown.style.display = "block";
                });
            });
        });
    }

}