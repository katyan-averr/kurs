const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Basket_Product = sequelize.define('basket_product', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})


// const Productt = sequelize.define('productt', {
//     id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     name: {type: DataTypes.STRING, unique: true, allowNull: false},
//     author: {type: DataTypes.STRING, unique: true, allowNull: false},
//     artist: {type: DataTypes.STRING, unique: true, allowNull: false},
//     price: {type: DataTypes.INTEGER, unique: true, allowNull: false},
//     descrip: {type: DataTypes.STRING, unique: true, allowNull: false},
//     img:{type: DataTypes.STRING, allowNull: false}
// })

const Producttt = sequelize.define('producttt', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    author: {type: DataTypes.STRING, unique: true, allowNull: false},
    artist: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, unique: true, allowNull: false},
    descrip: {type: DataTypes.STRING, unique: true, allowNull: false},
    img:{type: DataTypes.STRING, allowNull: false}
})

const Type = sequelize.define('type', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Genre = sequelize.define('genre', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(Basket_Product)
Basket_Product.belongsTo(Basket)


Type.hasMany(Producttt)
Producttt.belongsTo(Type)

Producttt.hasMany(Basket_Product)
Basket_Product.belongsTo(Producttt)

Genre.hasMany(Producttt)
Producttt.belongsTo(Genre)

// Type.belongsToMany(Genre)
// Genre.belongsToMany(Type)


module.exports ={
    User, Basket, Producttt, Basket_Product, Type, Genre
}