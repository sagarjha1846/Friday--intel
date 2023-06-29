import React, { useRef, useState } from 'react';
import '../css/PopUp.css';
import Draggable from 'react-draggable';
import { IoMdCloseCircleOutline } from "react-icons/io";

import '../css/PopUp.css';

function PopUp() {
  const [popups, setPopups] = useState([]);
  const parentRef = useRef();

  const openPopup = () => {
    const newPopup = {
      id: Date.now(),
      minimized: false,
    };
    setPopups([...popups, newPopup]);
  };

  const closePopup = (id) => {
    setPopups(popups.filter((popup) => popup.id !== id));
  };

  const minimizePopup = (id) => {
    setPopups(
      popups.map((popup) => {
        if (popup.id === id) {
          return {
            ...popup,
            minimized: true,
          };
        }
        return popup;
      }),
    );
  };

  const restorePopup = (id) => {
    setPopups(
      popups.map((popup) => {
        if (popup.id === id) {
          return {
            ...popup,
            minimized: false,
          };
        }
        return popup;
      }),
    );
  };

  return (
    <div className="popup-div-btn"  ref={parentRef}>
      <button className="popup-btn" onClick={openPopup}>
        URL Check
      </button>
      {popups.map((popup) => (
        <div className="popup-container">
        <Draggable handle=".popup-header" key={popup.id}>
          <div className={`popup ${popup.minimized ? 'minimized' : ''}`}>
            <div className="popup-header">
              <div className="globe-popup">
                <button
                  className="minimize-button"
                  onClick={() => minimizePopup(popup.id)}
                >
                  -
                </button>
                <button
                  className="close-button"
                  onClick={() => closePopup(popup.id)}
                >
                 {/* <IoMdCloseCircleOutline/> */}
                 X
                </button>
                <button
                  className="restore-button"
                  onClick={() => restorePopup(popup.id)}
                >
                  Restore
                </button>
              </div>
            </div>
            <div className="information-div">
              <section className="information-popup-left">
                <h1 className="popup-info">INFORMATION</h1>
                <div className="popup-info-head">URL:</div>
                <p className="popup-head-value">
                  zlibrary24tuxziyiyfr7zd46yt...axkmxm4o5374ptpc52fad.onion
                </p>
                <div className="popup-info-head">Scanned Date:</div>
                <p className="popup-head-value">2023-01-01</p>
                <div className="popup-info-head">Content Size:</div>
                <p className="popup-head-value">6297 Bytes</p>
                <div className="popup-info-head">Content Hash:</div>
                <p className="popup-head-value">
                  bdhbsdd56d64cd1c65xc4c98sdb6dcv64dcv981x94sdcs1x1xs9sqdc9qsds1sxs94d
                </p>
                <div className="popup-info-head">Source:</div>
                <p className="popup-head-value">View Source</p>
              </section>
              <section className="information-popup-right">
                <span className="popup-link-value">
                  zlibrary24tuxziyiyfr7zd46yt...axkmxm4o5374ptpc52fad.onion
                </span>
              </section>
            </div>
          </div>
        </Draggable>
        </div>
      ))}
    </div>
  );
}

export default PopUp;
