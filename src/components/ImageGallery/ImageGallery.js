import { Button } from 'components/Button/Button';
import React, { Component } from 'react';
import { fetchImages } from '../Services/ImageAPI';

export class ImageGallery extends Component {
  state = {
    imageHits: [],
    isLoading: false,
    error: null,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuerry = prevProps.searchQuerry;
    const nextQuerry = this.props.searchQuerry;

    if (prevQuerry !== nextQuerry) {
      this.setState({ isLoading: true });

      try {
        const response = await fetchImages(nextQuerry);

        if (response !== undefined) {
          return this.setState({
            imageHits: response,
          });
        }

        this.resetPage();
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  resetPage = () => {
    this.setState({ imageHits: [], page: 1 });
  };

  onClick = async () => {
    const { searchQuerry } = this.props;
    const { page } = this.state;

    this.setState({ isLoading: true });

    try {
      const response = await fetchImages(searchQuerry, page + 1);

      if (response !== undefined) {
        return this.setState(prevState => ({
          imageHits: [...prevState.imageHits, ...response],
          page: prevState.page + 1,
        }));
      }

      this.resetPage();
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { imageHits, isLoading, error } = this.state;
    console.log(imageHits.length);

    return (
      <>
        {error && <h2>Something went wrong...</h2>}
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
        {imageHits.length >= 12 && <Button onClick={this.onClick} />}
      </>
    );
  }
}
