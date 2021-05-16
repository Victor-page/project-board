const intervalId = setInterval(() => {
  console.log('Sending analytics...');
}, 10000);

document.getElementById('stop-analytics-btn').addEventListener('click', () => {
  clearInterval(intervalId);
  // clearTimeout(intervalId); // also works
});
