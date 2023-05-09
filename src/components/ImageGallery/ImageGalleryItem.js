import React from 'react';
import css from '../ImageGallery/Gallery.module.css';

export default function ImageGalleryItem({ images }) {
  return (
    <>
      {images.map(({ id, webformatURL }) => {
        return (
          <li key={id} className={css.ImageGalleryItem}>
            <img
              src={webformatURL}
              alt="user_image"
              className={css.ImageGalleryItemImage}
            />
          </li>
        );
      })}
    </>
  );
}
