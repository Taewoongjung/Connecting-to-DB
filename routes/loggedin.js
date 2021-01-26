const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/', async (req, res, next) => {
    try{
        const {id, passwd} = req.body;
        console.log(id, passwd);

        const data = await User.findOne({ where: { name: id, }, },);
        //해당 ID의 자료가 없는 경우
        if( data === null || data === undefined) {
            console.log('로그인 자료가 없습니다. ID: ' + id);
            const data = {success:false, msg:'로그인 정보가 정확하지 않습니다.'};
            res.json(data);
            return;
        }

        if(data.password !== passwd){
            console.log('로그인 암호가 틀립니다. ID: ' + id);
            const data = {success:false, msg:'로그인 정보가 정확하지 않습니다.'};
            res.json(data);

        } else{
            console.log("aa@@");
            console.log("로그인 성공했습니다. ID: " + id);
            res.render('loggedin', {me: id});
            // 세션에 필요한 정보 설정
        }
        //res.send('hi');
    }
    catch(err){
        console.error(err);
        next(err);
    }
});

router.get('/home', async (req, res, next) => {
    try{
        console.log('good');
        res.redirect('/');
    } catch(err){
        console.error(err);
        next(err);
    }
});

module.exports = router;