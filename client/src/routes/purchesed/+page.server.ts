import axios from 'axios'
import type { PageServerLoad } from './$types'

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async ({ cookies }) => {
    const session = cookies.get('session')

    const headers = {
        'Content-type': 'application/json',
        Authorization: `Bearer ${session}`
    }
    const base_URL = 'http://127.0.0.1:3000/api/ordering/my-orders'

    const data = await axios.get(base_URL, {
        headers
    })

    console.log(data, 'from  api');

    const books = await data.data.books

    console.log(books, 'books');

    return {
        books: books
    }
}
