import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItemLi, ImageGalleryImg } from './ImageGalleryItem.styled';
export class ImageGalleryItem extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    const URL = `https://pixabay.com/api/`;
    const API_KEY = `34859456-27066b05c1480cb7e2dfb47d0`;
    const { searchName, page, changeStatus, loadData } = this.props;
    if (prevProps.searchName !== searchName || prevProps.page !== page) {
      changeStatus(`pending`);
      fetch(
        `${URL}?q=${searchName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return console.log(` Error ${res.status}`);
        })
        .then(responce => {
          loadData(responce.hits);
          changeStatus(`resolved`);
        })
        .catch(error => console.log(`Error ${error.status}`));
    }
  }

  render() {
    const { data, showModal } = this.props;

    return data.map(({ id, webformatURL, largeImageURL }) => {
      return (
        <ImageGalleryItemLi key={id}>
          <ImageGalleryImg
            src={webformatURL}
            alt="Photo card"
            onClick={() => showModal(largeImageURL)}
          />
        </ImageGalleryItemLi>
      );
    });
  }
}

ImageGalleryItem.propTypes = {
  changeStatus: PropTypes.func,
  loadData: PropTypes.func,
  searchName: PropTypes.string.isRequired,
  page: PropTypes.number,
  data: PropTypes.array,
  showModal: PropTypes.func,
};
