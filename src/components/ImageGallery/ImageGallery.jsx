import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = props => {
  const {
    searchName,
    loadData,
    page,
    data,
    changeStatus,
    showModal,
    isModalOpen,
  } = props;
  return (
    <>
      <ImageGalleryList>
        <ImageGalleryItem
          searchName={searchName}
          loadData={loadData}
          page={page}
          data={data}
          changeStatus={changeStatus}
          showModal={showModal}
          isModalOpen={isModalOpen}
        />
      </ImageGalleryList>
    </>
  );
};

ImageGalleryList.propTypes = {
  searchName: PropTypes.string,
  loadData: PropTypes.func,
  page: PropTypes.number,
  data: PropTypes.array,
  changeStatus: PropTypes.func,
  showModal: PropTypes.func,
};
