export const formatDate = (date = new Date()) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedDate = `${day}/${month}/${year}`;

  let formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;

  const amOrPm = hours >= 12 ? 'pm' : 'am';

  formattedTime += ` ${amOrPm}`;

  return `${formattedDate} ${formattedTime}`;
};
