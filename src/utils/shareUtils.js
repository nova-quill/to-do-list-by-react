export const getTwitterShareUrl = (task, url) =>
  `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    task.taskTitle + " - " + task.taskDescription
  )}&url=${encodeURIComponent(url)}`;

export const getFacebookShareUrl = (url) =>
  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

export const getWhatsappShareUrl = (task, url) =>
  `https://wa.me/?text=${encodeURIComponent(`${task.taskTitle} - ${url}`)}`;


export const getTelegramShareUrl = (task, url) =>
  `https://t.me/share/url?url=${encodeURIComponent(
    url
  )}&text=${encodeURIComponent(task.taskTitle + " - " + task.taskDescription)}`;

export const getMessengerShareUrl = (url) =>
  `fb-messenger://share?link=${encodeURIComponent(url)}`;
