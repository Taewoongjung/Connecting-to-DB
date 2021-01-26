const loggedin = document.getElementById('loggedin-form_logout-form');
const logout_btn = document.getElementById('logout-btn');
logout_btn.addEventListener('click', () => {
  loggedin.setAttribute('action', '/loggedin/home');
  loggedin.setAttribute('method', 'GET');
});