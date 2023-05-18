import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
export class App extends React.Component {
  state = {
    searchImg: ``,
    page: 1,
    data: [],
    status: `idle`,
    showModal: false,
    largeImageURL: ``,
  };

  onSubmit = searchImg => {
    this.setState({ searchImg });
    this.setState({ data: [] });
    this.setState({ page: 1 });
  };

  loadMore = page => {
    this.setState({ page: this.state.page + 1 });
  };

  loadData = data => {
    this.setState({ data: [...this.state.data, ...data] });
  };

  changeStatus = status => {
    this.setState({ status });
  };

  showModalOnClick = url => {
    this.setState({ showModal: true, largeImageURL: url });
  };

  onModalClose = () => {
    this.setState({ showModal: false, largeImageURL: '' });
  };

  render() {
    const { searchImg, page, data, status, showModal, largeImageURL } =
      this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          searchName={searchImg}
          page={page}
          data={data}
          loadData={this.loadData}
          showModal={this.showModalOnClick}
          isModalOpen={this.showModal}
          changeStatus={this.changeStatus}
        />
        {status === `pending` && <Loader />}
        {data.length > 1 && <Button onClick={this.loadMore} />}
        {showModal && (
          <Modal
            largeImageURL={largeImageURL}
            onModalClose={this.onModalClose}
          />
        )}
      </>
    );
  }
}
