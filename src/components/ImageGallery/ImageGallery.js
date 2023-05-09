import React, { Component } from 'react';
import { fetchImages } from '../Services/ImageAPI';

export class ImageGallery extends Component {
  state = {
    imageHits: [],
    isLoading: false,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuerry = prevProps.searchQuerry;
    const nextQuerry = this.props.searchQuerry;

    if (prevQuerry !== nextQuerry) {
      this.setState({ isLoading: true });

      try {
        const response = await fetchImages(nextQuerry);
        console.log(response);

        if (response !== undefined) {
          return this.setState({ imageHits: response });
        }
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { imageHits, isLoading, error } = this.state;
    return (
      <>
        {error && <h2>{error.message}</h2>}
        {isLoading && <div>Loading...</div>}
        {imageHits && (
          <ul className="gallery">
            {imageHits.map(({ id, webformatURL }) => {
              return (
                <li key={id} className="gallery-item">
                  <img src={webformatURL} alt="user_image" />
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}
