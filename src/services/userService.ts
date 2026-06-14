import api from './api';
import {User, Book, Favorite,ReadingHistory, UserRegister,UserLogin} from '../types';

export const userRegister = async (datos:UserRegister) => {
    const response = await api.post("/api/auth/register",datos);
    return response.data;
}
export const userLogin = async (datos:UserLogin)=> {
    const response = await api.post("/api/auth/login",datos);
    return response.data;
}
export const getBooks = async ():Promise<Book[]>=> {
    const response = await api.get<Book[]>("/api/books/list");
    return response.data;
}
// parametro para getFavorites
export const getFavorites = async (userId:number): Promise <Favorite[]>=>{
    const response = await api.get<Favorite[]>("api/user/favorites/{userId}")
    return response.data;
}
export const getHistory = async(userId:number): Promise<ReadingHistory[]>=> {
    const response = await api.get<ReadingHistory>("api/user/history/{userId}")
    return response.data;
}
export const deleteFavoriteById = async(id: number): Promise <Favorite[]>=> {
    const response = await api.delete
    return response.data;
}