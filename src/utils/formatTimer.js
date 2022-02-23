export const formatTimer = (milisseconds) => {
  let seconds = parseInt(milisseconds / 1000);
  const minutes = parseInt(seconds / 60);
  seconds = seconds%60;
  if (seconds < 10){
    seconds = `0${seconds}`
  }
  return `${minutes}:${seconds}`
};