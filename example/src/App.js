import React, { useState } from 'react';

import { Overlay, Modal } from 'simple-overlay';
import 'simple-overlay/dist/index.css';

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openOverlay, setOpenOverlay] = useState(false);

  const onCancelClick = () => {
    setOpenModal(false);
  };
  const onOkClick = () => {
    setOpenModal(false);
    console.log('Ok Button Clicked!');
  };
  return (
    <>
      <div>
        <button onClick={() => setOpenModal(true)}>Open Modal</button>
        <Modal
          shouldOpen={openModal}
          onCancelHandler={onCancelClick}
          onOkHandler={onOkClick}
          modalTitle='<h2>Modal Title<h2>'
          modalBody='<h3>This is the modal body</h3>'
          className='my-modal'
          buttonOkTitle='Yes'
          buttonCancelTitle='Nope'
        >
          <p>Test</p>
        </Modal>
      </div>

      <div>
        <button onClick={() => setOpenOverlay(true)}>Open overlay</button>
        <Overlay shouldOpen={openOverlay} classNameOverlay='my-overlay'>
          <div>
            <h1>
              Overlay is a barebone component to build any kind of modal
              component from the scratch. The idea here is BringYourOwnModal on
              top of the overlay.
            </h1>
          </div>
        </Overlay>
      </div>
    </>
  );
};

export default App;
