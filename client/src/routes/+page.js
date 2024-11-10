const base_URL = 'https://rebook-by-minilik.onrender.com/api/books'

export const load = async ({ fetch }) => {

    const books = await fetch(base_URL + '?ratingAverage[gte]=4.8').then(
        (res) => res.json()
    )
    const discountedBooks = await fetch(base_URL + '?sort=price').then((res) =>
        res.json()
    )
    const Allbooks = await fetch(base_URL).then((res) =>
    res.json()
)
    return {
        books,
        discountedBooks,
        Allbooks
    }
}
