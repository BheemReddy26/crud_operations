const jwt = require('jsonwebtoken')
const config = require('config')

const db = require("../studentInfo/models");
const valid = require("../helpers/validate");
const _ = require("lodash");
const bcrypt = require("bcrypt");

const User = db.User;

const authenticate = async (req, res) => {
  //console.log(req.body);
  const { details } = await valid(req.body);
  //console.log(details)
  if (details) return res.status(400).send(details[0].message);

  try {
    let user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      return res.status(400).json({error:{ message:"Invalid email or password"}})
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json({error:{ message:"Invalid email or password"}})
    }

   const token = jwt.sign({_id:user.id}, config.get("jwtPrivateKey"))

   res.status(200).json({"jwt_token":token});
  } catch {
    res.status(400).send("something failed");
  }
};

module.exports = { authenticate };
