import { IMediator } from "../Mediator/Mediator";

class ImageStorage {
    private mediator: IMediator;
    private images: { [key: string]: string[] }
    private cacheImages: { [key: string]: any[] }
    private events

    constructor ({ mediator }: { mediator: IMediator }) {
        this.mediator = mediator;
        this.images = {};
        this.cacheImages = {};

        this.events = this.mediator.getEventNames();

        this.mediator.subscribe(this.events.GALLERY_IMAGES_LOADED, (images: { [key: string]: string[] }) => this.setImagesTitlesToCache(images));
    }

    private setImagesTitlesToCache(images: { [key: string]: string[] }) {
        setTimeout(() => {
            this.images = images;
            this.images["all"] = Object.values(images)
                .reverse()
                .reduce((acc, arr) => acc.concat(arr), []);
            this.mediator.call(this.events.IMAGES_TITLES_CACHED, this.images);
        }, 2000)
    }

    public getImageTitles() {
        if (this.images.all) {
            return this.images;
        }
        return null;
    }
}

export default ImageStorage;