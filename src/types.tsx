export interface User {
    id: number,
    name: string,
    email: string, 
    password: string
}
export interface Book {
    id: number,
    title: string,
    author: string,
    genre: string,
    imageUrl: string,
    description: string
}
export interface Favorite {
    id: number,
    user: User,
    book: Book
}
export interface ReadingHistory {
    id: number,
    user: User,
    book: Book,
    status: string
}