import './imagesColumn.scss';

const Image = ({ imageName }: { imageName: string }) => {
    return (
        <div className={`gallery__image-wrapper`}>
            <img className='gallery__image' src={`/assets/waterfall/avif/${imageName}.avif`}></img>
        </div>
    );
}

const ImagesColumn = ({ images }: { images: string[] }) => {
    return (
        <div className='gallery__images-column'>
            { images.map((image, index) => <Image imageName={image} key={index}/>) }
        </div>
    );
}

export default ImagesColumn;