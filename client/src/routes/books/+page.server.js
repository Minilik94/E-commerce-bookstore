export const load = async ({ params, fetch }) => {
    const res = await fetch(`http://127.0.0.1:3000/api/books`)
    const books = await res.json()
    return { books }
}
