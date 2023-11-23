export async function load({params, fetch}) {
    const page = Number(params.page)

    async function getProducts(page) {
        const limit = 9
        const res = await fetch(`http://127.0.0.1:3000/api/books?limit=${limit}&page=${page}`)
        const data = await res.json()
        console.log(data, 'doiewon');
        return data
    }

    return {
        book: getProducts(page)
    }
}
