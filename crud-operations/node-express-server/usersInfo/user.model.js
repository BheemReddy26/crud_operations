
module.exports = (sequelize, DataTypes) => {
 

    const User = sequelize.define("User", {
      id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true
      },
     email: {
        type:DataTypes.STRING(225),
        required: true,
        unique:true

     },
      password: {
        type: DataTypes.STRING(1025),
        required:true
      },
     

    })
  
    return User;
  };