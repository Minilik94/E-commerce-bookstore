export interface User {
    photo: String
    role: String
    _id: String
    name: String
    email: String
    id: String
}

export type Books =   Book[]
export type Users =   User

export interface Book {
    language: String
    ratingAverage: Number
    ratingQuantity: Number
    downloads: Number
    recommendations: Number
    socialMediaMentions: Number
    sales: Number
    _id: String
    title: String
    author: String
    price: Number
    category: String
    description: String
    publishedDate: String
    publisher: String
    coverImage: String
    slug: String
    yearsSincePublication: Number
    id: String
}
