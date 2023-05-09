import React from 'react';
import css from '../ImageGallery/Gallery.module.css';

export function ImageGalleryItem({ images, onClick }) {
  return (
    <>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <li key={id} className={css.ImageGalleryItem}>
            <img
              src={webformatURL}
              alt="user_image"
              className={css.ImageGalleryItemImage}
              onClick={() => onClick(largeImageURL)}
            />
          </li>
        );
      })}
    </>
  );
}
