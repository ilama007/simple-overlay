function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var reactPortal = require('react-portal');

var styles = {"overlay":"_3qw0K","overlayBackground":"_OK5K3","modal":"_Xt-75"};

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
      buttonOkTitle = _ref2.buttonOkTitle,
      buttonCancelTitle = _ref2.buttonCancelTitle,
      onOkHandler = _ref2.onOkHandler,
      onCancelHandler = _ref2.onCancelHandler,
      className = _ref2.className;

  var handleOKClick = function handleOKClick() {
    onOkHandler && onOkHandler();
  };

  var handleCancelClick = function handleCancelClick() {
    onCancelHandler && onCancelHandler();
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
    onClick: handleOKClick
  }, buttonOkTitle || 'Ok'), /*#__PURE__*/React.createElement("button", {
    onClick: handleCancelClick
  }, buttonCancelTitle || 'Cancel'))));
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

exports.Modal = Modal;
exports.Overlay = Overlay;
//# sourceMappingURL=index.js.map
