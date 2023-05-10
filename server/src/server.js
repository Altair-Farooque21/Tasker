const express = require('express');
const userRouter = require('./Routes/userRoutes');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
// initial end point for the userRouter routes 
app.use('/users',userRouter);


mongoose.connect('mongodb+srv://TaskerDB0863:AltairTaskerDB23@takserappcluster0863.jzoy9pb.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    app.listen(5000,()=>{
        console.log('server started at port 5000');
    })
})
.catch((error)=>{
    console.log(error);
})