export default class Media {

    constructor (data) {
        this.id = data.id;
        this.likes = data.likes;
        this.liked = false;
    }

    likeCount() {
        let count = document.querySelector(`.photographer-like[data-id="${this.id}"]`);
        let heart = document.querySelector(`.like[data-id="${this.id}"]`);
        this.liked = !this.liked; 
        if (this.liked) {
            this.likes++;
            heart.style.color = "#901C1C";
        } else {
            this.likes--;
            heart.style.color = "#D3573C";
        }
        count.innerHTML = this.likes;
    }
    
}