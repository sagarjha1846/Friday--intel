import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { ReactComponent as Bug } from '../images/svg/bug.svg';
import { useEffect } from 'react';
import { useState } from 'react';
import { httpCall } from '../axios/httpService';

const Notication = () => {
  const [notification, setNotification] = useState([]);
  const [isDeleteSuccess, setIsDeleteSuccess] = useState('');

  useEffect(() => {
    if (isDeleteSuccess === true || isDeleteSuccess === '') {
      console.log(isDeleteSuccess);
      httpCall('notification.php', 'GET', {}, {})
        .then((resp) => {
          setIsDeleteSuccess(false);
          if (resp.Result !== 'Not Found') {
            setNotification(
              [
                ...JSON.parse(resp.unseen).map((el) => ({
                  ...el,
                  seen: false,
                })),
                ...JSON.parse(resp.seen).map((el) => ({ ...el, seen: true })),
              ].sort((a, b) => a.time_passed - b.time_passed),
            );
          } else {
            setIsDeleteSuccess(false);

            setNotification([]);
          }
        })
        .catch((err) => {
          setIsDeleteSuccess(false);
          console.log(err);
        });
    }
  }, [isDeleteSuccess]);

  const deleteAllNotification = () => {
    httpCall('notification.php?delete=all', 'DELETE', {}, {})
      .then((res) => setIsDeleteSuccess(true))
      .catch((err) => setIsDeleteSuccess(false));
  };

  const handleReadNotification = (id) => {
    httpCall(`notification.php?seen=${id}`, 'DELETE', {}, {})
      .then((res) => setIsDeleteSuccess(true))
      .catch((err) => setIsDeleteSuccess(false));
  };

  const handleDeleteNotification = (id) => {
    httpCall(`notification.php?delete=${id}`, 'DELETE', {}, {})
      .then((res) => setIsDeleteSuccess(true))
      .catch((err) => setIsDeleteSuccess(false));
  };

  const seenAllNotification = () => {
    httpCall('notification.php?seen=all', 'DELETE', {}, {})
      .then((res) => setIsDeleteSuccess(true))
      .catch((err) => setIsDeleteSuccess(false));
  };

  console.log(notification);
  return (
    <div>
      <span className="noti notifications ">
        <article className="noti-data h-full w-full">
          <h2>Notifications {notification.length}</h2>
          <div className="overflow-y-scroll w-full h-[80%]  py-10 notification-list">
            {notification && notification.length > 0 ? (
              notification.map((el) => (
                <section
                  onClick={() =>
                    el.seen
                      ? handleDeleteNotification(el.id)
                      : handleReadNotification(el.id)
                  }
                  key={el.id}
                  className="notification-sections cursor-pointer "
                >
                  <p
                    className={`notifications ${
                      el.seen ? ' text-gray-400' : 'text-black'
                    }`}
                  >
                    <Bug style={{ fill: 'var(--primary-color)' }} />
                    &#160; {el.notification}
                  </p>
                  {/* <p className="datestamp">5m ago</p> */}
                </section>
              ))
            ) : (
              <div className="  w-full h-full grid place-items-center">
                <h1>No More Notification</h1>
              </div>
            )}
          </div>

          <section className="delete-noti-btn">
            <button onClick={seenAllNotification} className="noti-icon-delete">
              <i class="fa-solid fa-check-double"></i>
            </button>
            <button
              onClick={deleteAllNotification}
              className="noti-icon-delete"
            >
              <RiDeleteBinLine />
            </button>
            <h4 className="clear-noti">Clear Notification</h4>
          </section>
        </article>
        <div className="noti-triangle"></div>
      </span>
    </div>
  );
};

export default Notication;
