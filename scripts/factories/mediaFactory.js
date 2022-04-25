import Photo from "../media/Photo.js";
import Video from "../media/Video.js";

export default class Factory {

    build(media) {
        if (media.image) {
            media = new Photo(media);
        } else {
            media = new Video(media);
        }
        return media;
    }

}