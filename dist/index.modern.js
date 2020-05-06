import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';

var styles = {"overlay":"_3qw0K","overlayBackground":"_OK5K3","modal":"_Xt-75"};

var Overlay = function Overlay(_ref) {
  var shouldOpen = _ref.shouldOpen,
      classNameOverlay = _ref.classNameOverlay,
      children = _ref.children;
  return shouldOpen && /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement("div", {
    className: styles.overlayBackground + " " + classNameOverlay + " " + styles.overlay
  }, children));
};
Overlay.propTypes = {
  shouldOpen: PropTypes.bool.isRequired,
  classNameOverlay: PropTypes.string
};
var Modal = function Modal(_ref2) {
  var shouldOpen = _ref2.shouldOpen,
      modalTitle = _ref2.modalTitle,
      modalBody = _ref2.modalBody,
      buttonOneTitle = _ref2.buttonOneTitle,
      buttonTwoTitle = _ref2.buttonTwoTitle,
      onButtonOneHandler = _ref2.onButtonOneHandler,
      onButtonTwoHandler = _ref2.onButtonTwoHandler,
      className = _ref2.className;

  var handleButtonOneClick = function handleButtonOneClick() {
    onButtonOneHandler && onButtonOneHandler();
  };

  var handleButtonTwoClick = function handleButtonTwoClick() {
    onButtonTwoHandler && onButtonTwoHandler();
  };

  return /*#__PURE__*/React.createElement(Overlay, {
    shouldOpen: shouldOpen || false,
    classNameOverlay: className
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.modal + " modal-container"
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
