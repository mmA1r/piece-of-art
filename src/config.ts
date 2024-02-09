export interface IConfig {
    LOCATION: Location;
    PROTOCOL: string;
    HOST_NAME: string;
    SERVER_PORT: number;
    SERVER_PATH: string;
}

export enum Events {
    GALLERY_IMAGES_LOADED = 'GALLERY_IMAGES_LOADED',
    IMAGES_TITLES_CACHED = 'IMAGES_TITLES_CACHED'
}

export enum Triggers  {
    plug = 'plug'
}

export enum Sockets {
    GET_GALLERY_IMAGES = 'GET_GALLERY_IMAGES',
    GET_INTRO_IMAGES = 'GET_INTRO_IMAGES'
}

class CONFIG implements IConfig {
    LOCATION = window.location;
    PROTOCOL = this.LOCATION.protocol;
    HOST_NAME = this.LOCATION.hostname;
    SERVER_PORT = 3001;
    SERVER_PATH = `${this.PROTOCOL}//${this.HOST_NAME}:${this.SERVER_PORT}`;

    EVENTS = Events;
    TRIGGERS = Triggers;
    SOCKET = Sockets;
}

export default CONFIG;