const express = require('express');
const { REPL_MODE_SLOPPY } = require('repl');
const User = require('../models/user');

const router = express.Router();

router.route('/')
    .get(async (req, res, next) => {
        try{
            const users = await User.findAll();
            res.json(users);
        } catch (err) {
            console.log(err);
            next(err);
        }
    })
    .post(async (req, res, next) => {
        const reqName = req.body.name;
        const reqPassword = req.body.psw;
        console.log("@@@");
        //아이디 확인
        User.findOne({ where: { name:reqName } })
            .then(function(data){
                //해당 ID의 자료가 없는 경우
                if( data === null || data === undefined) {
                    console.log('로그인 자료가 없습니다. ID:' + reqName);
                    const data = {success:false, msg:'로그인 정보가 정확하지 않습니다.'};
                    res.json(data);
                    return;
                }

                if(data.password !== reqPassword){
                    console.log('로그인 암호가 틀립니다. ID: ' + reqName);
                    const data = {success:false, msg:'로그인 정보가 정확하지 않습니다.'};
                    res.json(data);

                }else{
                    console.log("로그인 성공되었습니다. ID: " + reqName);
                    res.render('/loggedin', {reqName});
                    // 세션에 필요한 정보 설정
                }
            })
            .catch(function (err) {
                console.log('로그인 프로세스 오류 : ' + err);
            })
    });
    
module.exports = router;