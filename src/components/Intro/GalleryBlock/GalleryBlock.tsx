import './galleryBlock.scss';

const PictruteIcon = () => <div className={"intro-gallery_icon-wrapper"}>
    <svg viewBox="0 0 22 17">
        <path d="M1.88 0C1.4 0 .93.2.58.55a1.9 1.9 0 0 0-.54 1.33v6.33a.4.4 0 0 0 0 .34v6.57c0 .5.2.97.54 1.33.35.35.81.55 1.3.55h18.27c.5 0 .96-.2 1.3-.55.35-.36.55-.83.55-1.33V1.88c0-.5-.2-.97-.54-1.33a1.83 1.83 0 0 0-1.3-.55H1.87Zm0 .77h18.27c.61 0 1.1.5 1.1 1.11v5.5c-1.27-1.32-2.58-1.89-3.84-1.9-1.49-.01-2.88.71-4.19 1.62-1.31.9-2.55 2.02-3.72 2.9l-.11.07C8.4 8.98 7.35 7.8 5.9 7.2c-1.35-.57-3.02-.54-5.11.53V1.88c0-.62.47-1.1 1.08-1.1Zm8.76 1.57c-.5 0-.98.2-1.34.57-.35.36-.55.85-.55 1.36 0 1.07.85 1.94 1.89 1.94s1.9-.87 1.9-1.94c0-1.06-.86-1.93-1.9-1.93Zm0 .77c.63 0 1.14.52 1.14 1.16 0 .65-.5 1.16-1.14 1.16-.63 0-1.14-.51-1.14-1.16 0-.64.5-1.16 1.14-1.16Zm6.74 3.14c1.23.01 2.5.62 3.86 2.32v6.55c0 .62-.48 1.1-1.09 1.1H1.88a1.06 1.06 0 0 1-.77-.31 1.1 1.1 0 0 1-.31-.8V8.6C2.9 7.4 4.4 7.4 5.62 7.92c1.2.5 2.15 1.54 3.1 2.58-.86.57-1.69 1-2.39 1-.1 0-.2.04-.26.1a.39.39 0 0 0 0 .55c.07.08.16.12.26.12 1.22 0 2.42-.74 3.62-1.64 1.2-.91 2.44-2.03 3.7-2.9 1.25-.87 2.5-1.49 3.73-1.48Z"/>
    </svg>
</div>

const GalleryRoute = () => <div className={"gallery_route-link-wrapper"}>
    <a href={"/gallery"} className={"gallery_route-link"}>
        <svg viewBox="0 0 30 30" >
            <path d="M13.47 12.63c-7.12 4.78.12 13.42 10.24 8.95-11.66 3.4-12.95-7.13-10.24-8.95Z"/>
            <path d="M16.12 20.9c11.23-1.56 10.7-9.96 10.7-13.6 5.05 4.77 1.93 17.04-10.7 13.6Z"/>
            <path d="M24.72 15.14C27.42 3.9 18.26 1.3 12.85 1.57c7.43-1.99 17.5 1.9 11.87 13.57Z"/>
            <path d="M21.9 1.85c-7.07-2.77-15.86.9-19.6 3.9 0 0 6.05-9.7 19.6-3.9ZM15.87 17.87c7.11-4.77-.12-13.42-10.24-8.95 11.66-3.4 12.94 7.13 10.24 8.95Z"/>
            <path d="M13.21 9.6C2 11.16 2.93 19.24 2.93 22.82-2.12 18.07.59 6.16 13.2 9.6Z"/>
            <path d="M4.62 15.13c-2.38 11.8 7.27 13.58 12.44 12.7-6.68 2.8-17.4-.29-12.44-12.7Z"/>
            <path d="M8.7 28.73c7.27 1.87 15.6-2.87 19.48-5.65 0 0-5.47 10.48-19.49 5.65ZM27.25 5.27c2.82 3.63 3.3 5.57 2.22 10.3.23-4.87-.1-6.3-2.22-10.3ZM.08 18.27c-.26 2.69 0 3.62 2.47 5.59a10.6 10.6 0 0 1-2.47-5.59Z"/>
        </svg>
    </a>
</div>

const GalleryBlock = () => {

    return (
        <div className={"intro__gallery"}>
            <h2>gallery</h2>
            <PictruteIcon />
            <GalleryRoute />
        </div>
    );
}

export default GalleryBlock;