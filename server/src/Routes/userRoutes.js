const express = require('express');
const {signin,
       signup,
       verifyCodeFromClient,
       sendVerificationCode,
       resendVerificationCode}= require('../Controllers/userController');
const userRouter = express.Router();

userRouter.post('/signup',signup);

userRouter.post('/signin',signin);

userRouter.post('/send-Verification-Code',sendVerificationCode);

userRouter.post('/code-verfication',verifyCodeFromClient);

userRouter.post('/resend-code',resendVerificationCode);`` 

module.exports = userRouter;