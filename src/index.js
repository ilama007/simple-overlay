import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import styles from './styles.module.css';

export const Overlay = ({ shouldOpen, classNameOverlay, children }) => {
  return (
    shouldOpen && (
      <Portal>
        <div
          className={`${styles.overlayBackground} ${classNameOverlay} ${styles.overlay}`}
        >
          {children}
        </div>
      </Portal>
    )
  );
};

Overlay.propTypes = {
  shouldOpen: PropTypes.bool.isRequired,
  classNameOverlay: PropTypes.string
};

export const Modal = ({
  shouldOpen,
  modalTitle,
  modalBody,
  buttonOkTitle,
  buttonCancelTitle,
  onOkHandler,
  onCancelHandler,
  className
}) => {
  const handleOKClick = () => {
    onOkHandler && onOkHandler();
  };

  const handleCancelClick = () => {
    onCancelHandler && onCancelHandler();
  };
  return (
    <Overlay shouldOpen={shouldOpen || false} classNameOverlay={className}>
      <div className={`${styles.modal} modal-container`}>
        {modalTitle && (
          <div className='modal-title'>
            <div dangerouslySetInnerHTML={{ __html: modalTitle }} />
          </div>
        )}
        <div className='modal-body'>
          <div dangerouslySetInnerHTML={{ __html: modalBody }} />
        </div>
        <div className='modal-actions'>
          <button onClick={handleOKClick}>{buttonOkTitle || 'Ok'}</button>
          <button onClick={handleCancelClick}>
            {buttonCancelTitle || 'Cancel'}
          </button>
        </div>
      </div>
    </Overlay>
  );
};

Modal.propTypes = {
  shouldOpen: PropTypes.bool.isRequired,
  modalTitle: PropTypes.string,
  modalBody: PropTypes.string.isRequired,
  buttonOkTitle: PropTypes.string,
  buttonCancelTitle: PropTypes.string,
  onOkHandler: PropTypes.func,
  onCancelHandler: PropTypes.func,
  className: PropTypes.string
};
