import {makeAutoObservable} from "mobx";

export default class ProductStore{
    constructor() {
        this._types = [
            {id: 1, name:"Диски"},
            {id: 2, name:"Кассеты"},
            {id: 3, name:"Пластинки"}
        ]
        this._products = [
            {id: 1, name:"Rise", author:"Skillet", price: 100, img:`https://cdns-images.dzcdn.net/images/cover/8371d7162676a323868ca2e2f5cf4fc4/1000x1000.jpg`},
            {id: 2, name:"Rise", author:"Skillet", price: 100, img:`https://cdns-images.dzcdn.net/images/cover/8371d7162676a323868ca2e2f5cf4fc4/1000x1000.jpg`},
            {id: 3, name:"Rise", author:"Skillet", price: 100, img:`https://cdns-images.dzcdn.net/images/cover/8371d7162676a323868ca2e2f5cf4fc4/1000x1000.jpg`},
            {id: 4, name:"Rise", author:"Skillet", price: 100, img:`https://cdns-images.dzcdn.net/images/cover/8371d7162676a323868ca2e2f5cf4fc4/1000x1000.jpg`}
        ]
        this._selectedType ={}
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setProducts(products){
        this._products = products
    }

    setSelectedType(type){
        this._selectedType = type
    }

    get types(){
        return this._types
    }
    get products(){
        return this._products
    }
    get selectedType(){
        return this._selectedType
    }
}