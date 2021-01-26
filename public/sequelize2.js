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

const signup = document.getElementById('signup-form');
const signup_btn = document.getElementById('signup-btn');
signup_btn.addEventListener('click', () => {
  signup.setAttribute('action', '/signup/check-signup');
  signup.setAttribute('method', 'POST');
});