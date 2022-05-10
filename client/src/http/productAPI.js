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

export const createProduct = async (productt) =>{
    const {data} = await $authHost.post('api/productt', productt)
    return data
} 

export const fetchProducts = async (typeId, generId, page, limit = 5) =>{
    const {data} = await $host.get('api/productt', {params: {
        typeId, generId, page, limit
    }})
    return data
}

export const fetchOneProduct = async (id) =>{
    const {data} = await $host.get('api/productt/' + id)
    return data
}