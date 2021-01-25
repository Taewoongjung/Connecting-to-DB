const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.route('/')
    .get(async (req, res, next) => {
        try{
            console.log('!!')
            const users = await User.findAll();
            //res.json(users);
            res.render('signup', { users });
        } catch (err) {
            console.log(err);
            next(err);
        }
    })
    .post(async (req, res, next) => {
        console.log(req.body);
        try {
            const user = await User.create({
                name: req.body.name,
                password: req.body.psw,
            });
            res.redirect(307, 'index');
        } catch (err) {
            console.error(err);
            next(err);
        }
    });
    
module.exports = router;