import { Socket } from "socket.io-client";
import { Sockets } from "../../config"; 
import { IMediator } from "../Mediator/Mediator";

export interface IServer {
    getGalleryImagesEmit(): void;
    getIntroImagesEmit(): void;
}

class Server implements IServer {
    private socket: Socket;
    private SOCKET: typeof Sockets;
    private mediator: IMediator;
    private events;
    
    constructor(socket: Socket, mediator: IMediator) {
        this.socket = socket;
        this.SOCKET = Sockets;
        this.mediator = mediator;

        this.events = this.mediator.getEventNames();

        this.socket.on(this.SOCKET.GET_GALLERY_IMAGES, data => this.getGalleryImagesOn(data));
        this.socket.on(this.SOCKET.GET_INTRO_IMAGES, data => this.getIntroImagesOn(data));
    }

    public getIntroImagesEmit() {
        this.socket.emit(this.SOCKET.GET_INTRO_IMAGES);
    }

    private getIntroImagesOn(data: any) {
        
    }

    public getGalleryImagesEmit() {
        this.socket.emit(this.SOCKET.GET_GALLERY_IMAGES);
    }

    private getGalleryImagesOn(data: any) {
        this.mediator.call(this.events.GALLERY_IMAGES_LOADED, data.data);
    }
}

export default Server;