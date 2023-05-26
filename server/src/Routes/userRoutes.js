const express = require('express');
const {signin,signup,verifyCodeFromClient,sendVerificationCode}= require('../Controllers/userController');
const userRouter = express.Router();

userRouter.post('/signup',signup);

userRouter.post('/signin',signin);

userRouter.post('/send-verification-code',sendVerificationCode);

module.exports = userRouter;