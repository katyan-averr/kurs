const uuid = require('uuid')
const path = require('path')
const {Productt} = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController{
    async create(req, res, next){
        try{
        let {name, author, artist, price, typeId, genreId} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const productt = await Productt.create({name, price, author, artist, typeId, genreId, img: fileName})

        return res.json(productt) 
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getAll(req, res){
        let {typeId, genreId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let productts;
        if (!typeId && !genreId){
            productts =await Productt.findAndCountAll({limit, offset})
        }
        if (typeId && !genreId){
            productts =await Productt.findAndCountAll({where:{typeId}})
        }
        if (!typeId && genreId){
            productts =await Productt.findAndCountAll({where:{genreId}})
        }
        if (typeId && genreId){
            productts =await Productt.findAndCountAll({where:{typeId},where:{genreId}, limit, offset})
        }
        return res.json(productts)
    }

    async getOne(req, res){
        const {id} = req.params
        const productt = await Productt.findOne({where:{id}})
        return res.json(productt)
    }
}

module.exports = new ProductController()