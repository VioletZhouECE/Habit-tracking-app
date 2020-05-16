const models = require('../models');

exports.login = (req, res, next) => {
    //retrieve user from db 
    models.user.findAll({where : {username:req.body.username,
                                  password:req.body.password}})
                .then(result => {
                if (result.length === 0){
                    let err = new Error('Wrong username or password');
                    err.statusCode = 401;
                    throw err;
                } else {
                        let login_user = result[0];
                        res.statusCode = 200;
                        let response = {
                            msg : 'authentication succeeded!',
                            userId: login_user.id.toString(),
                            //jw token to be added 
                        }
                        res.json(response);
                    }
                })
                .catch(err =>{
                    if (!err.statusCode){
                        err.statusCode = 500;
                    }
                    next(err);
                    }
                );

}

exports.signup = (req, res, next) => {
   //retrieve validator result
   //skip for now
   //retrieve user from db
    models.user.findAll({where : {username:req.body.username}})
            .then(result => {
                if (result.length !== 0){
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
                let response = {
                    msg : 'User created successfully!'
                }
                res.json(response);
            })
            .catch(err =>{
                if (!err.statusCode){
                    err.statusCode = 500;
                }
                next(err);
                }
            );
};