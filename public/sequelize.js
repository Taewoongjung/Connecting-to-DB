// 사용자 등록 시
document.getElementById('user-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('사용자 로그인');
    const name = e.target.username.value;
    const psw = e.target.userpsw.value;
    console.log('name : ' + name );
    console.log('password : ' + psw );
    //const saved = e.target.issave.checked;
    if (!name) {
      return alert('이름을 입력하세요');
    }
    if (!psw) {
      return alert('비밀번호를 입력하세요');
    }
    try {
      console.log('로그인 before');
      await axios.post('/users', { name, psw });
      console.log('sequelize 라우터에 name : ' + name );
      console.log('sequelize 라우터에 password : ' + psw );
      console.log('로그인 after');
    } catch (err) {
      console.error(err);
    }
    e.target.username.value = '';
    e.target.userpsw.value = '';
    //e.target.issave.checked = false;
});