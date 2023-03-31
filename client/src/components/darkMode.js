function darkMode() {
  const currentBackgroundColor = window.getComputedStyle(document.body).getPropertyValue('background-color');
  const oppositeColor = currentBackgroundColor === 'rgb(128, 128, 128)' ? 'white' : 'grey';
  document.body.style.backgroundColor = oppositeColor;
}
export default darkMode;
