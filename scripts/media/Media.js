export default class Media {

    constructor (data) {
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.date = data.date;
        this.price = data.price;
        this.likes = data.likes;
        this.description = data.alt;
        this.template = null;
        this.liked = false;
    }
}
