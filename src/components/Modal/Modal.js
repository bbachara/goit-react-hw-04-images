import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ imageUrl, onClose }) => {
  return (
    <div className="Overlay" onClick={onClose}>
      <div className="Modal">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  imageUrl: PropTypes.string,
  onClose: PropTypes.func,
};
