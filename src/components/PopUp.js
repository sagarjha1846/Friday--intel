import React, { useState } from 'react';

import '../css/PopUp.css';
// function PopUp() {
//   const [popup, setPop] = useState(false);
//   const handleClickOpen = () => {
//     setPop(!popup);
//   };
//   const closePopup = () => {
//     setPop(false);
//   };
//   return (
//     <div className='popup-div-btn'>
//       <button className='popup-btn' onClick={handleClickOpen}>URL Check</button>
//       <div>
//         {popup ? (
//           <div className="main">
//             <div className="popup">
//               <div className="popup-header">
//                 <div className='globe-popup'>
//                   <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M22.75 13C22.75 18.3848 18.3848 22.75 13 22.75C7.6152 22.75 3.25 18.3848 3.25 13C3.25 7.6152 7.6152 3.25 13 3.25C18.3848 3.25 22.75 7.6152 22.75 13Z" fill="var(--primary-color-2)" fill-opacity="0.1" />
//                     <path fillRule="evenodd" clipRule="evenodd" d="M13 2.4375C13 2.4375 15.1484 2.4375 17.1117 3.26789C17.1117 3.26789 19.0073 4.06969 20.4688 5.53118C20.4688 5.53118 21.9303 6.99268 22.7321 8.88835C22.7321 8.88835 23.5625 10.8516 23.5625 13C23.5625 13 23.5625 15.1484 22.7321 17.1116C22.7321 17.1116 21.9303 19.0073 20.4688 20.4688C20.4688 20.4688 19.0073 21.9303 17.1117 22.7321C17.1117 22.7321 15.1484 23.5625 13 23.5625C13 23.5625 10.8516 23.5625 8.88835 22.7321C8.88835 22.7321 6.99268 21.9303 5.53118 20.4688C5.53118 20.4688 4.06968 19.0073 3.26789 17.1117C3.26789 17.1117 2.4375 15.1484 2.4375 13C2.4375 13 2.4375 10.8516 3.26789 8.88835C3.26789 8.88835 4.06969 6.99268 5.53119 5.53118C5.53119 5.53118 6.99268 4.06969 8.88835 3.26789C8.88835 3.26789 10.8516 2.4375 13 2.4375ZM13 4.0625C13 4.0625 11.1811 4.0625 9.52137 4.76452C9.52137 4.76452 7.91762 5.44285 6.68023 6.68023C6.68023 6.68023 5.44285 7.91761 4.76452 9.52137C4.76452 9.52137 4.0625 11.1811 4.0625 13C4.0625 13 4.0625 14.8189 4.76452 16.4786C4.76452 16.4786 5.44285 18.0824 6.68023 19.3198C6.68023 19.3198 7.91762 20.5571 9.52137 21.2355C9.52137 21.2355 11.1811 21.9375 13 21.9375C13 21.9375 14.8189 21.9375 16.4786 21.2355C16.4786 21.2355 18.0824 20.5571 19.3198 19.3198C19.3198 19.3198 20.5572 18.0824 21.2355 16.4786C21.2355 16.4786 21.9375 14.8189 21.9375 13C21.9375 13 21.9375 11.1811 21.2355 9.52137C21.2355 9.52137 20.5572 7.91762 19.3198 6.68023C19.3198 6.68023 18.0824 5.44285 16.4786 4.76452C16.4786 4.76452 14.8189 4.0625 13 4.0625Z" fill="var(--primary-color-2)" />
//                     <path d="M3.80859 10.5625H22.1914C22.6401 10.5625 23.0039 10.1987 23.0039 9.75C23.0039 9.30127 22.6401 8.9375 22.1914 8.9375H3.80859C3.35986 8.9375 2.99609 9.30127 2.99609 9.75C2.99609 10.1987 3.35986 10.5625 3.80859 10.5625Z" fill="var(--primary-color-2)" />
//                     <path d="M3.80859 17.0625H22.1914C22.6401 17.0625 23.0039 16.6987 23.0039 16.25C23.0039 15.8013 22.6401 15.4375 22.1914 15.4375H3.80859C3.35986 15.4375 2.99609 15.8013 2.99609 16.25C2.99609 16.6987 3.35986 17.0625 3.80859 17.0625Z" fill="var(--primary-color-2)" />
//                     <path fillRule="evenodd" clipRule="evenodd" d="M13 2.70166C13 2.70166 14.1601 2.70166 15.1522 3.68152C15.1522 3.68152 15.9946 4.51342 16.6195 5.97266C16.6195 5.97266 17.875 8.90423 17.875 13.0001C17.875 13.0001 17.875 17.096 16.6195 20.0275C16.6195 20.0275 15.9946 21.4868 15.1522 22.3187C15.1522 22.3187 14.1601 23.2985 13 23.2985C13 23.2985 11.8399 23.2985 10.8478 22.3187C10.8478 22.3187 10.0054 21.4868 9.38049 20.0275C9.38049 20.0275 8.125 17.096 8.125 13.0001C8.125 13.0001 8.125 8.90423 9.38049 5.97266C9.38049 5.97266 10.0054 4.51342 10.8478 3.68152C10.8478 3.68152 11.8399 2.70166 13 2.70166ZM13 4.32666C13 4.32666 12.5071 4.32666 11.9896 4.8377C11.9896 4.8377 11.3739 5.44585 10.8743 6.61239C10.8743 6.61239 9.75 9.23756 9.75 13.0001C9.75 13.0001 9.75 16.7626 10.8743 19.3878C10.8743 19.3878 11.3739 20.5543 11.9896 21.1625C11.9896 21.1625 12.5071 21.6735 13 21.6735C13 21.6735 13.4929 21.6735 14.0104 21.1625C14.0104 21.1625 14.6261 20.5543 15.1257 19.3878C15.1257 19.3878 16.25 16.7626 16.25 13.0001C16.25 13.0001 16.25 9.23756 15.1257 6.61239C15.1257 6.61239 14.6261 5.44585 14.0104 4.8377C14.0104 4.8377 13.4929 4.32666 13 4.32666Z" fill="var(--primary-color-2)" />
//                   </svg>

//                   <span className='popup-link-heading'>zlibrary24tuxziyiyfr7zd46yt...axkmxm4o5374ptpc52fad.onion</span>
//                 </div>
//                 <button onClick={closePopup}>
//                   {' '}
//                   <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M16.3447 8.98517C16.5178 8.81206 16.6154 8.57692 16.6154 8.33211C16.6154 8.08729 16.5181 7.8525 16.345 7.67939L16.3371 7.67152C16.1647 7.50355 15.933 7.40903 15.6923 7.40903C15.4475 7.40903 15.2127 7.50628 15.0396 7.67939L12 10.719L8.96041 7.67939C8.7873 7.50628 8.55251 7.40903 8.30769 7.40903C8.06288 7.40903 7.82809 7.50628 7.65498 7.67939C7.48187 7.8525 7.38462 8.08729 7.38462 8.33211C7.38462 8.57692 7.48187 8.81171 7.65498 8.98482L10.6946 12.0244L7.65532 15.0637C7.48221 15.2368 7.38462 15.4719 7.38462 15.7167C7.38462 15.7186 7.38462 15.7204 7.38463 15.7223C7.38471 15.7352 7.38506 15.7481 7.38568 15.7611C7.3967 15.9903 7.49271 16.2072 7.65498 16.3694C7.82809 16.5425 8.06288 16.6398 8.30769 16.6398C8.55251 16.6398 8.7873 16.5425 8.96041 16.3694L12 13.3298L15.0396 16.3694C15.2127 16.5425 15.4475 16.6398 15.6923 16.6398C15.9371 16.6398 16.1719 16.5425 16.345 16.3694C16.5181 16.1963 16.6154 15.9615 16.6154 15.7167C16.6154 15.4719 16.5181 15.2371 16.345 15.064L13.3054 12.0244L16.3447 8.98517Z" fill="var(--primary-color)" />
//                     <path fillRule="evenodd" clipRule="evenodd" d="M12 0.0244141C12 0.0244141 14.4408 0.0244141 16.6712 0.967812C16.6712 0.967812 18.8249 1.87873 20.4853 3.53913C20.4853 3.53913 22.1457 5.19953 23.0566 7.35319C23.0566 7.35319 24 9.58364 24 12.0244C24 12.0244 24 14.4652 23.0566 16.6956C23.0566 16.6956 22.1457 18.8493 20.4853 20.5097C20.4853 20.5097 18.8249 22.1701 16.6712 23.081C16.6712 23.081 14.4408 24.0244 12 24.0244C12 24.0244 9.55922 24.0244 7.32878 23.081C7.32878 23.081 5.17512 22.1701 3.51472 20.5097C3.51472 20.5097 1.85432 18.8493 0.943399 16.6956C0.943399 16.6956 0 14.4652 0 12.0244C0 12.0244 0 9.58363 0.943399 7.35319C0.943399 7.35319 1.85432 5.19953 3.51472 3.53913C3.51472 3.53913 5.17512 1.87873 7.32878 0.967812C7.32878 0.967812 9.55922 0.0244141 12 0.0244141ZM12 1.87057C12 1.87057 9.93359 1.87057 8.04795 2.66813C8.04795 2.66813 6.22593 3.43878 4.82015 4.84456C4.82015 4.84456 3.41436 6.25034 2.64372 8.07236C2.64372 8.07236 1.84615 9.95801 1.84615 12.0244C1.84615 12.0244 1.84615 14.0908 2.64371 15.9765C2.64371 15.9765 3.41436 17.7985 4.82015 19.2043C4.82015 19.2043 6.22593 20.6101 8.04795 21.3807C8.04795 21.3807 9.9336 22.1783 12 22.1783C12 22.1783 14.0664 22.1783 15.9521 21.3807C15.9521 21.3807 17.7741 20.6101 19.1799 19.2043C19.1799 19.2043 20.5856 17.7985 21.3563 15.9765C21.3563 15.9765 22.1538 14.0908 22.1538 12.0244C22.1538 12.0244 22.1539 9.95801 21.3563 8.07236C21.3563 8.07236 20.5856 6.25034 19.1799 4.84456C19.1799 4.84456 17.7741 3.43877 15.9521 2.66813C15.9521 2.66813 14.0664 1.87057 12 1.87057Z" fill="var(--primary-color)" />
//                   </svg>

//                 </button>
//               </div>
//               <div className='information-div'>
//                 {/* <p>This is simple popup in React js</p> */}
//                 <section className='information-popup-left'>
//                   <h1 className='popup-info'>INFORMATION</h1>
//                   <div  className='popup-info-head'>
//                     URL:
//                   </div>
//                   <p className='popup-head-value'>
//                   zlibrary24tuxziyiyfr7zd46yt...axkmxm4o5374ptpc52fad.onion
//                   </p>
//                   <div className='popup-info-head'>
//                     Scanned Date:
//                   </div>
//                   <p className='popup-head-value'>
//                   2023-01-01
//                   </p>
//                   <div className='popup-info-head'>
//                     Content Size:
//                   </div>
//                   <p className='popup-head-value'>
//                   6297 Bytes
//                   </p>
//                   <div className='popup-info-head'>
//                     Content Hash:
//                   </div>
//                   <p className='popup-head-value'>
//                   bdhbsdd56d64cd1c65xc4c98sdb6dcv64dcv981x94sdcs1x1xs9sqdc9qsds1sxs94d
//                   </p>
//                   <div className='popup-info-head'>
//                     Source:
//                   </div>
//                   <p className='popup-head-value'>
//                   View Source
//                   </p>
//                 </section>
//                 <section className='information-popup-right'>
//                   <span className='popup-link-value'>
//                   zlibrary24tuxziyiyfr7zd46yt...axkmxm4o5374ptpc52fad.onion
//                   </span>
//                 </section>
//               </div>
//             </div>
//           </div>
//         ) : (
//           ''
//         )}
//       </div>
//     </div>
//   );
// }
// export default PopUp;

// import React, { useState } from 'react';
import Draggable from 'react-draggable';

import '../css/PopUp.css';

function PopUp() {
  const [popups, setPopups] = useState([]);

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
    <div className="popup-div-btn">
      <button className="popup-btn" onClick={openPopup}>
        URL Check
      </button>
      {popups.map((popup) => (
        <Draggable handle=".popup-header" key={popup.id}>
          <div className={`popup ${popup.minimized ? 'minimized' : ''}`}>
            <div className="popup-header">
              <div className="globe-popup">
                {/* <svg>...</svg> */}
                {/* <span>...</span> */}
                <button
                  className="minimize-button"
                  onClick={() => minimizePopup(popup.id)}
                >
                  Minimize
                </button>
                <button
                  className="close-button"
                  onClick={() => closePopup(popup.id)}
                >
                  Close
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
      ))}
    </div>
  );
}

export default PopUp;
