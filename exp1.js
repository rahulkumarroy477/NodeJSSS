const express = require('express')
const app = express()

// ejs
        app.set("view engine","ejs")
//

// middleware

        // static files
                app.use(express.static('./public'));

        //
        app.use(function(req,res,next)
        {   
            // jo bhi chalana hai
            console.log('middleware1');
            next();
        })
        app.use(function(req,res,next)
        {   
            // jo bhi chalana hai
            console.log('middleware2');
            next();
        })
//

// routing
        app.get('/',function(req,res){
            // res.send('Hell world');
            //ejs part
            res.render("index1")
            //
        })
        app.get('/login',function(req,res){
            res.render('login');
        })
        // app.get('/profile/harsh',function(req,res)
        // {
        //     res.send('wecome to your profile: Harsh')
        // })
//

// dynamic routing
        app.get('/profile/:username',function(req,res)
        {
            res.send(`Hello ${req.params.username}`);
        })

//

// error handling
        app.get('/error',function(req,res){
            throw Error('go to hell');
        })

        app.use(function errorHandler (err, req, res, next) {
            if (res.headersSent) {
              return next(err)
            }
            res.status(500)
            res.render('error', { error: err })
          })
//
app.listen(3000);