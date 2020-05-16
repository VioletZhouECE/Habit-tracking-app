const user_model = require('../models/user');

exports.login = (req, res) => {
    res.send("Hello");
    //empty method
};

exports.signup = (req, res) => {
   //retrieve validator result
   //skip for now
   //retrieve user from db
    console.log(req.body);
    user_model.find({username:req.body.username})
            .then(result => {
                if (result !== null){
                    let err = new Error();
                    err.status = 422;
                    throw err;
                } else {
                    //create a new user in db
                    return user_model.create({
                        username: req.body.username,
                        //to-do: use bcrypt
                        password: req.body.password
                    })
                }
            })
            //send back response
            .then(user =>{
                res.status = 201;
                res.send("User created successfully");
            })
            .catch(err =>{
                if (!err.status){
                    err.status = 500;
                }
                next(err);
                }
            );
};