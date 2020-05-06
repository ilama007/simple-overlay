import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';

var styles = {"overlay":"_styles-module__overlay__3qw0K","overlayBackground":"_styles-module__overlayBackground__OK5K3","modal":"_styles-module__modal__Xt-75"};

const Overlay = ({
  shouldOpen,
  classNameOverlay,
  children
}) => {
  return shouldOpen && /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement("div", {
    className: `${styles.overlayBackground} ${classNameOverlay} ${styles.overlay}`
  }, children));
};
Overlay.propTypes = {
  shouldOpen: PropTypes.bool.isRequired,
  classNameOverlay: PropTypes.string
};
const Modal = ({
  shouldOpen,
  modalTitle,
  modalBody,
  buttonOneTitle,
  buttonTwoTitle,
  onButtonOneHandler,
  onButtonTwoHandler,
  className
}) => {
  const handleButtonOneClick = () => {
    onButtonOneHandler && onButtonOneHandler();
  };

  const handleButtonTwoClick = () => {
    onButtonTwoHandler && onButtonTwoHandler();
  };

  return /*#__PURE__*/React.createElement(Overlay, {
    shouldOpen: shouldOpen || false,
    classNameOverlay: className
  }, /*#__PURE__*/React.createElement("div", {
    className: `${styles.modal} modal-container`
  }, modalTitle && /*#__PURE__*/React.createElement("div", {
    className: "modal-title"
  }, /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: modalTitle
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: modalBody
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-actions"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleButtonOneClick
  }, buttonOneTitle || 'Ok'), /*#__PURE__*/React.createElement("button", {
    onClick: handleButtonTwoClick
  }, buttonTwoTitle || 'Cancel'))));
};
Modal.propTypes = {
  shouldOpen: PropTypes.bool.isRequired,
  modalTitle: PropTypes.string,
  modalBody: PropTypes.string.isRequired,
  buttonOneTitle: PropTypes.string,
  buttonTwoTitle: PropTypes.string,
  onButtonOneHandler: PropTypes.func,
  onButtonTwoHandler: PropTypes.func,
  className: PropTypes.string
};

export { Modal, Overlay };
//# sourceMappingURL=index.modern.js.map
