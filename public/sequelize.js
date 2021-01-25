// // 사용자 등록 시
// document.getElementById('user-form').addEventListener('submit', async (e) => {
//     e.preventDefault();
//     console.log('사용자 로그인');
//     const name = e.target.username.value;
//     const psw = e.target.userpsw.value;
//     console.log('name : ' + name );
//     console.log('password : ' + psw );
//     //const saved = e.target.issave.checked;
//     if (!name) {
//       return alert('이름을 입력하세요');
//     }
//     if (!psw) {
//       return alert('비밀번호를 입력하세요');
//     }
//     try {
//       console.log('로그인 before');
//       await axios.post('/users', { name, psw });
//       await axios.get('/loggedin', { name });
//       console.log('sequelize 라우터에 psw  : ' + psw );
//       console.log('로그인 after');
//     } catch (err) {
//       console.error(err);
//     }
//     e.target.username.value = '';
//     e.target.userpsw.value = '';
//     //e.target.issave.checked = false;
// });

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
