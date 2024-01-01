import axios from 'axios'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params, fetch }) => {
    const page = Number(params.page)

    async function getBooks(page) {
        const limit = 9
        const response = await axios.get(
            `http://127.0.0.1:3000/api/books?limit=${limit}$page=${page}`
        )
        console.log(response.data)

        return response.data
    }

    return { book: getBooks(page) }
}
