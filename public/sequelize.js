window.onload = () => {
  const param = (new URL(location.href)).searchParams;
  const error_param = param.get('error');
  const success_param = param.get('success');
  if(error_param){
    alert(error_param);
  }
  else if(success_param){
    location.href="/";
  }
}


const login = document.getElementById('user-form');
const login_btn = document.getElementById('login-btn');
login_btn.addEventListener('click', () => {
  login.setAttribute('action', '/loggedin');
  login.setAttribute('method', 'POST');
});
