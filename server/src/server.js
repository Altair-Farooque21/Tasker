const express = require('express');
// routes modules
const userRouter = require('./Routes/userRoutes');
const notesRouter = require('./Routes/notesRoutes');
const taskRouter = require('./Routes/taskRoutes');
const projectRoutes = require('./Routes/projectRoutes');
const trackRoutes = require('./Routes/trackRoutes');
// mongoose API for MongoDB
const mongoose = require('mongoose');
// for cross-origin access
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());

// initial end point for the userRouter routes 
app.use('/users',userRouter);
app.use('/notes',notesRouter);
app.use('/tasks',taskRouter);
app.use('/projects',projectRoutes);
app.use('/track',trackRoutes);


mongoose.connect('mongodb+srv://TaskerDB0863:AltairTaskerDB23@takserappcluster0863.jzoy9pb.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    app.listen(5000,()=>{
        console.log('server started at port 5000');
    })
})
.catch((error)=>{
    console.log(error);
})