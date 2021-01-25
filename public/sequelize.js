async function getUser() {
    try {
      const res = await axios.get('/users');
      const users = res.data;
      console.log(users);
    //   const tbody = document.querySelector('#user-list tbody');
    //   tbody.innerHTML = '';
    //   users.map(function (user) {
    //     const row = document.createElement('tr');
    //     row.addEventListener('click', () => {
    //       getComment(user.id);
    //     });
    //     // 로우 셀 추가
    //     let td = document.createElement('td');
    //     td.textContent = user.id;
    //     row.appendChild(td);
    //     td = document.createElement('td');
    //     td.textContent = user.name;
    //     row.appendChild(td);
    //     td = document.createElement('td');
    //     td.textContent = user.password;
    //     row.appendChild(td);
    //     tbody.appendChild(row);
    //   });
    } catch (err) {
      console.error(err);
    }
}

// 사용자 등록 시
document.getElementById('user-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const psw = e.target.userpsw.value;
    //const saved = e.target.issave.checked;
    if (!name) {
      return alert('이름을 입력하세요');
    }
    if (!psw) {
      return alert('나이를 입력하세요');
    }
    try {
      await axios.post('/users', { name, psw });
      console.log('등록하기');
      getUser();
    } catch (err) {
      console.error(err);
    }
    e.target.username.value = '';
    e.target.userpsw.value = '';
    //e.target.issave.checked = false;
});
  
// // 사용자 등록 시
// const bb = document.getElementById('signup-form')
// bb.addEventListener('submit', async (e) => {
// // const handler2 = async (e) => {
//     e.preventDefault();
//     const name = e.target.username.value;
//     const psw = e.target.userpsw.value;
//     const psw_re = e.target.userpsw_re.value;
//     //const saved = e.target.issave.checked;
//     if (!name) {
//       return alert('이름을 입력하세요');
//     }
//     if(psw){
//         return alert('비번을 입력하세요');
//     }
//     if (psw != psw_re) {
//         return alert('일치하지 않습니다 다시 입력 하세요');
//     }
//     try {
//       console.log('!')
//       await axios.post('/signup', { name, psw });
//       //getUser();
//     } catch (err) {
//       console.error(err);
//     }
//     e.target.username.value = '';
//     e.target.userpsw.value = '';
//     //e.target.issave.checked = false;
// });
