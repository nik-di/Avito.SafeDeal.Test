export const formatDate = (timestamp) => {
  const dateFromTimestamp = new Date(timestamp);
  const digitNovember = 9;
  const monthFromDate =
      (dateFromTimestamp.getMonth()+1) > digitNovember ?
      dateFromTimestamp.getMonth()+1 :
      `0${dateFromTimestamp.getMonth()+1}`;
  const dayFromDate =
  dateFromTimestamp.getDate().toString().length > 1 ?
  dateFromTimestamp.getDate() :
  `0${dateFromTimestamp.getDate()}`;

  return `${dayFromDate}.${monthFromDate}.${dateFromTimestamp.getFullYear()}`;
}
