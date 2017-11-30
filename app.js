const express = require("express");
const logger = require("morgan");

const app = express();

//Middlewares
app.use(logger('dev'));

//Routes
app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'You requested the index page'
    })
})

//Catch 404 errors and forward them to handlers
app.use((req, res, next) =>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

//Error handlers
app.use((err, req, res, next) =>{
    const error = app.get('env') === 'development'? err: {};
    const status = err.status || 500;
    
    //Respond to user
    res.status(status).json({
        error:{
            'message': error.message
        }
    })
    
    //Respond to ourselves
    console.error(err);
})

//start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, process.env.IP, () =>{
    console.log('Listening to port ' + PORT);
})