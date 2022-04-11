import { notification } from 'antd';

function openNotificationWithIcon(type, message, description, placement) {
  placement = placement || 'topRight';
  notification[type]({ message, description, placement });
}

export function successNotification(message, description, placement) {
  openNotificationWithIcon('success', message, description, placement);
}

export function errorNotification(message, description, placement) {
  openNotificationWithIcon('error', message, description, placement);
}

export function infoNotification(message, description, placement) {
  openNotificationWithIcon('info', message, description, placement);
}

export function warningNotification(message, description, placement) {
  openNotificationWithIcon('warning', message, description, placement);
}
