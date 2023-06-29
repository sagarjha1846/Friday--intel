import { httpCall } from '../../../axios/httpService';

const deleteAllNotification = async () => {
  const data = await httpCall('notification.php?seen=all', 'DELETE', {}, {});
  return data;
};

const readNotificationByID = async (id) => {
  const data = await httpCall(`notification.php?seen=${id}`, 'DELETE', {}, {});
  return data;
};

const deleteNotificationByID = async (id) => {
  const data = await httpCall(
    `notification.php?delete=${id}`,
    'DELETE',
    {},
    {},
  );
  return data;
};

const readAllNotification = async () => {
  const data = await httpCall('notification.php?seen=all', 'GET', {}, {});
  return data;
};

const getAllNotification = async () => {
  const data = await httpCall('notification.php', 'GET', {}, {});
  return data;
};

const notificationService = {
  readAllNotification,
  deleteNotificationByID,
  readNotificationByID,
  deleteAllNotification,
  getAllNotification,
};

export default notificationService;
