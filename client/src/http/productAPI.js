import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) =>{
    const {data} = await $authHost.post('api/type', type)
    return data
} 

export const fetchTypes = async () =>{
    const {data} = await $host.get('api/type')
    return data
}

export const createGener = async (genre) =>{
    const {data} = await $authHost.post('api/genre', genre)
    return data
} 

export const fetchGeners = async () =>{
    const {data} = await $host.get('api/genre')
    return data
}

export const createProduct = async (producttt) =>{
    const {data} = await $authHost.post('api/producttt', producttt)
    return data
} 

export const fetchProducts = async (typeId, genreId, page, limit = 5) =>{
    const {data} = await $host.get('api/producttt', {params: {
        typeId, genreId, page, limit
    }})
    return data
}

export const fetchOneProduct = async (id) =>{
    const {data} = await $host.get('api/producttt/' + id)
    return data
}