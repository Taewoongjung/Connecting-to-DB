const express = require('express');
// const User = require('../models/user');

const router = express.Router();
router.route('/')
    .get(async (req, res, next) => {
        try{
            console.log('로그아웃 라우터 실행');
            // const users = await User.findAll();
            res.render('loggedin', { me: req.body.name });
        } catch (err) {
            console.log(err);
            next(err);
        }
    });

module.exports = router;