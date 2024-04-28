import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imageUrl, onClick }) => {
  return (
    <li className="ImageGalleryItem" onClick={onClick}>
      <img className="ImageGalleryItem-image" src={imageUrl} alt="" />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string,
  onClick: PropTypes.func,
};
