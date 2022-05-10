import {makeAutoObservable} from "mobx";

export default class ProductStore{
    constructor() {
        this._types = []
        this._genres = []
        this._productts = []
        this._selectedType ={}
        this._selectedGener ={}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setGeners(genres){
        this._genres = genres
    }
    setProducts(productts){
        this._productts = productts
    }

    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedGener(genre){
        this._selectedGener = genre
    }

    setPage(page){
        this._page = page
    }
    setTotalCount(count){
        this._totalCount = count
    }

    get types(){
        return this._types
    }
    get genres(){
        return this._genres
    }
    get productts(){
        return this._productts
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedGener(){
        return this._selectedGener
    }
    get totalCount(){
        return this._totalCount
    }
    get page(){
        return this._page
    }
    get limit(){
        return this._limit
    }
}