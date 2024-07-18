import { useGallery } from './hooks/use-gallery';

const photos = [
  { src: 'gallery-1.jpg', alt: 'Gallery 1' },
  { src: 'gallery-2.jpg', alt: 'Gallery 2' },
  { src: 'gallery-3.jpg', alt: 'Gallery 3' },
  { src: 'gallery-4.jpg', alt: 'Gallery 4' },
  { src: 'gallery-5.jpg', alt: 'Gallery 5' },
];

export const Gallery = () => {
  const { currentPhoto, nextPhoto, prevPhoto } = useGallery(photos);

  return (
    <div>
      <button onClick={prevPhoto}>Previous</button>
      <img src={currentPhoto.src} alt={currentPhoto.alt} />
      <button onClick={nextPhoto}>Next</button>
    </div>
  );
};
