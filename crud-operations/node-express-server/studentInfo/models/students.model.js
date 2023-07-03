module.exports = (sequelize, DataTypes) => {
    const Students = sequelize.define("students", {
      student_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true
      },
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      standard: {
        type: DataTypes.INTEGER
      },
     

    }, {
        createdAt: false,
        updatedAt:false});
  
    return Students;
  };