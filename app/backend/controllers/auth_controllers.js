const models = require('../models');

exports.login = (req, res, next) => {
    res.send("some dummy text");
}

exports.signup = (req, res, next) => {
   //retrieve validator result
   //skip for now
   //retrieve user from db
    models.user.findAll({where : {username:req.body.username}})
            .then(result => {
                if (result.length !== 0){
                    console.log(result)
                    let err = new Error('A user with that user name already exists');
                    err.statusCode = 422;
                    throw err;
                } else {
                    //create a new user in db
                    return models.user.create({
                        username: req.body.username,
                        //to-do: use bcrypt
                        password: req.body.password
                    })
                }
            })
            //send back response
            .then(user =>{
                res.statusCode = 201;
                res.send("User created successfully");
            })
            .catch(err =>{
                if (!err.statusCode){
                    err.statusCode = 500;
                }
                next(err);
                }
            );
};