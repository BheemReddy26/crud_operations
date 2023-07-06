const db = require("../studentInfo/models");
const _ = require("lodash")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const config = require('config');

const User = db.User;

const getDetails = async (req, res) => {
  let user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (user) {
    return res.status(400).send("User already registered!");
  }

  try {
    let info = {
      id: req.body.id,
      email: req.body.email,
      password: req.body.password,
    };
    // console.log(info); 
    const salt = await bcrypt.genSalt(10)
    info.password = await bcrypt.hash(info.password, salt)
    
    const user = await User.create(info);
    const token = jwt.sign({_id:user.id}, config.get("jwtPrivateKey"))


    
    res.status(200).header('x-auth-token', token).send(_.pick(user, ['id', 'email']));
  } catch {
    res.status(400).send("something failed");
  }
};

const get = async (req, res) => {
  try {
    res.status(200).send("This is also working");
  } catch {
    res.stauts(500).send("what is wrong with your code");
  }
};

const deleteUser = async (req, res ) => {
    try {  let id = req.params.id
        await User.destroy({where: {id:id}});
       res.status(200).send({data:'users details deleted'})

    }
    catch {
        res.status(500).send("you entered wrong id")
    }
}

module.exports = { getDetails, get ,deleteUser};
