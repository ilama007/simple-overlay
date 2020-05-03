# simple-overlay

[![NPM](https://img.shields.io/npm/v/simple-overlay.svg)](https://www.npmjs.com/package/simple-overlay) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install ilama007/simple-overlay
```

## Usage

### Example #1 (Using all the available PROPS)

```jsx
import React, { useState } from 'react';
import { Modal } from '@ilama007/simple-overlay';
import '@ilama007/simple-overlay/dist/index.css';

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  const onCancelClick = () => {
    setOpenModal(false);
  };
  const onOkClick = () => {
    setOpenModal(false);
    console.log('Ok Button Clicked!');
  };

  /**
   * 
    shouldOpen: true/false (required)
    modalTitle: htmlString (optional)
    modalBody: htmlString (required)
    buttonOkTitle: string (optional)
    buttonCancelTitle: string (optional)
    onOkHandler: function (optional)
    onCancelHandler: function (optional)
    className: string (optional)
*/
  return (
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
  );
};

export default App;
```

## Usage

### Example #2 (Using barebone Overlay component)

```jsx
import React, { useState } from 'react';

import { Overlay } from 'simple-overlay';
import 'simple-overlay/dist/index.css';

const App = () => {
  const [openOverlay, setOpenOverlay] = useState(false);

  /**
   * 
    shouldOpen: true/false (required)
    classNameOverlay: string (optional)
*/
  return (
    <>
      <button onClick={() => setOpenOverlay(true)}>Open overlay</button>
      <Overlay shouldOpen={openOverlay} classNameOverlay='my-overlay'>
        <div>
          <h1>
            Overlay is a barebone component to build any kind of modal component
            from the scratch. The idea here is BringYourOwnModal on top of the
            overlay.
          </h1>
        </div>
      </Overlay>
    </>
  );
};

export default App;
```

## License

MIT © [Dilip Lama](https://github.com/Dilip Lama)
