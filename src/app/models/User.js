module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING 
    },
    email: {
      type: DataTypes.STRING 
    },
    password_hash: {
      type: DataTypes.STRING
    }
  })
  return User
}