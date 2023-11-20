export const load = async () => {
    const res = await fetch(`http://127.0.0.1:3000/api/users`)
    const data = await res.json()
    return {
        books: data.data.doc,
       totalBooks: data.result
    }
}