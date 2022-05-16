const uuid = require('uuid')
const path = require('path')
const {Producttt} = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController{
    async create(req, res, next){
        try{
        let {name, author, artist, descrip, price, typeId, genreId} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const producttt = await Producttt.create({name, price, author, artist, descrip, typeId, genreId, img: fileName})

        return res.json(producttt) 
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getAll(req, res){
        let {typeId, genreId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let producttts;
        if (!typeId && !genreId){
            producttts =await Producttt.findAndCountAll({limit, offset})
        }
        if (typeId && !genreId){
            producttts =await Producttt.findAndCountAll({where:{typeId}})
        }
        if (!typeId && genreId){
            producttts =await Producttt.findAndCountAll({where:{genreId}})
        }
        if (typeId && genreId){
            producttts =await Producttt.findAndCountAll({where:{typeId},where:{genreId}, limit, offset})
        }
        return res.json(producttts)
    }

    async getOne(req, res){
        const {id} = req.params
        const producttt = await Producttt.findOne({where:{id}})
        return res.json(producttt)
    }
}

module.exports = new ProductController()