export const load = async ({ fetch }) => {
    const books = await  fetch(
        'http://127.0.0.1:3000/api/books?ratingAverage[gte]=4.8'
    ).then((res) => res.json())
    const discountedBooks = await fetch(
        'http://127.0.0.1:3000/api/books?sort=price'
    ).then((res) => res.json())


    return {
        
            books,
            discountedBooks
        
    }
}

export const csr = true
