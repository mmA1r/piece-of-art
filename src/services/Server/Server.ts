import { Socket } from "socket.io-client";
import { Sockets } from "../../config"; 
import { IMediator } from "../Mediator/Mediator";

export interface IServer {
    getGalleryImagesEmit(): void;
}

class Server implements IServer {
    private socket: Socket;
    private SOCKET: typeof Sockets;
    private mediator: IMediator;
    
    constructor(socket: Socket, mediator: IMediator) {
        this.socket = socket;
        this.SOCKET = Sockets;
        this.mediator = mediator;

        this.socket.on(this.SOCKET.GET_GALLERY_IMAGES, data => this.getGalleryImagesOn(data));
    }

    public getGalleryImagesEmit() {
        this.socket.emit(this.SOCKET.GET_GALLERY_IMAGES, { category: '' });
    }

    private getGalleryImagesOn(data: any) {
        console.log(data);
        //return new Promise<any>((resolve) => {
        //    this.socket.on(this.SOCKET.GET_GALLERY_IMAGES, response => {
        //        if (response) {
        //            resolve(true);
        //        }
        //        resolve(null);
        //    });
        //});
    }
}

export default Server;