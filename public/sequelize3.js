const loggedin = document.getElementById('loggedin-form_home-form');
const home_btn = document.getElementById('home-btn');
home_btn.addEventListener('click', () => {
  loggedin.setAttribute('action', '/loggedin/home');
  loggedin.setAttribute('method', 'GET');
});