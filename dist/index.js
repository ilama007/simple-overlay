function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var reactPortal = require('react-portal');

var styles = {"overlay":"_styles-module__overlay__3qw0K","overlayBackground":"_styles-module__overlayBackground__OK5K3","modal":"_styles-module__modal__Xt-75"};

var Overlay = function Overlay(_ref) {
  var shouldOpen = _ref.shouldOpen,
      classNameOverlay = _ref.classNameOverlay,
      children = _ref.children;
  return shouldOpen && /*#__PURE__*/React.createElement(reactPortal.Portal, null, /*#__PURE__*/React.createElement("div", {
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

exports.Modal = Modal;
exports.Overlay = Overlay;
//# sourceMappingURL=index.js.map
