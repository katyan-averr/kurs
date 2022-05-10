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

// const Product = sequelize.define('product', {
//     id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     name: {type: DataTypes.STRING, unique: true, allowNull: false},
//     author: {type: DataTypes.STRING, unique: true, allowNull: false},
//     artist: {type: DataTypes.STRING, unique: true, allowNull: false},
//     price: {type: DataTypes.INTEGER, unique: true, allowNull: false},
//     img:{type: DataTypes.STRING, allowNull: false}
// })

const Productt = sequelize.define('productt', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    author: {type: DataTypes.STRING, unique: true, allowNull: false},
    artist: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, unique: true, allowNull: false},
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

// Type.hasMany(Product)
// Product.belongsTo(Type)

// Product.hasMany(Basket_Product)
// Basket_Product.belongsTo(Product)

// Genre.hasMany(Product)
// Product.belongsTo(Genre)


Type.hasMany(Productt)
Productt.belongsTo(Type)

Productt.hasMany(Basket_Product)
Basket_Product.belongsTo(Productt)

Genre.hasMany(Productt)
Productt.belongsTo(Genre)


module.exports ={
    User, Basket, Productt, Basket_Product, Type, Genre
}