export const load = async ({ params }) => {
    const currentSlug = params.slug
    const res = await fetch(`http://127.0.0.1:3000/api/books`)
    const data = await res.json()
    let cb
    let book
    // console.log(data.data.doc, 'data');
    let books = data.data.doc
    books.forEach((bk) => {
        cb =  bk.slug
        if (currentSlug === cb) {
            book = bk
        }
    })
    return {
        book
    }
}

