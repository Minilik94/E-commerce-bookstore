import { fail, type Actions } from '@sveltejs/kit'
import axios from 'axios'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
    const getBook = async () => {
        const { id } = params

        try {
            const response = await axios.get(
                `https://rebook-by-minilik.onrender.com/api/books/${id}`
            )

            return {
                book: response.data
            }
        } catch (error) {
            console.error(error.response.data, 'error')
            return fail(400, {
                incorrect: true,
                message: error.response.data.message
            })
        }
    }

    return {
        book: await getBook()
    }
}

export const actions: Actions = {
    updateBook: async ({ cookies, request, params }) => {
        const session = cookies.get('session')

        const id = params.id
        const headers = {
            Authorization: `Bearer ${session}`
        }

        const formData = await request.formData()
        const title = formData.get('title')
        const author = formData.get('author')
        const price = formData.get('price')
        const category = formData.get('category')
        const publisher = formData.get('publisher')
        const description = formData.get('description')

        try {
            const newBook = await axios.patch(
                `https://rebook-by-minilik.onrender.com/api/books/${id}`,
                {
                    title,
                    author,
                    price,
                    category,
                    publisher,
                    description
                },
                {
                    headers
                }
            )
        } catch (error) {
            console.error(error.response.data, 'error from the top')
            return fail(400, {
                incorrect: true,
                message: error.response.data.message
            })
        }
    },
    updateBookImage: async ({ cookies, request, params }) => {
        const formData = await request.formData()
        const id = params.id
        console.log(formData, 'book image')
        const coverImage = formData.get('photo')
        console.log(coverImage)
        const session = cookies.get('session')
        const headers = {
            'Authorization': `Bearer ${session}`,
        }
        try {
            const response = await axios.patch(
                `https://rebook-by-minilik.onrender.com/api/books/${id}`,
                formData,
                { headers }
            )
            return fail(200, {
                correct: true,
                message: 'Successfully Updated. ✅'
            })
        } catch (error) {
            console.error(error.response.data, 'error from id to change_book_image')
            return fail(400, {
                incorrect: true,
                message: error.response.data.message
            })
        }
    }
}
