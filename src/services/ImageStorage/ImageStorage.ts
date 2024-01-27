import { IMediator } from "../Mediator/Mediator";

class ImageStorage {

    mediator: IMediator;
    images: { [key: string]: '' }

    constructor ({ mediator }: { mediator: IMediator }) {
        this.mediator = mediator;
        this.images = {}
    }

    getImages(year: string) {

    }
}

export default ImageStorage;