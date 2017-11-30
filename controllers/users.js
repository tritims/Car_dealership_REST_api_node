const User  = require('../models/users');

module.exports = {
    index: (req, res, next) =>{
            User.find({})
            .then(users =>{
                res.status(200).json(users);
            })
            .catch(err =>{
                next(err) //what does this do?
            })
        },
    
    newUser : (req, res, next) =>{
        const newUser = new User(req.body);
        newUser.save()
        .then(user =>{
            res.status(200).json({"status":"200"});
        })
        .catch(err =>{
            next(err);
        })
    }
}