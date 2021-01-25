// 사용자 등록 시
document.getElementById('signup-form').addEventListener('submit', async (e) => {
    console.log('!!');
    e.preventDefault();
    const name = e.target.username.value;
    const psw = e.target.userpsw.value;
    const psw_re = e.target.userpsw_re.value;
    //const saved = e.target.issave.checked;
    if (!name) {
      return alert('이름을 입력하세요');
    }
    if(!psw){
        return alert('비번을 입력하세요');
    }
    if (psw !== psw_re) {
        return alert('일치하지 않습니다 다시 입력 하세요');
    }
    try {
      console.log('@');
      await axios.post('/signup', { name, psw });
      //getUser();
    } catch (err) {
      console.error(err);
    }
    e.target.username.value = '';
    e.target.userpsw.value = '';
    //e.target.issave.checked = false;
});