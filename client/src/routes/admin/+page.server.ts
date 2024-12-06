import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'
import axios from 'axios'

export const load: PageServerLoad = async ({ locals }) => {
    if (!locals.user || locals.user.role !== 'admin') {
        throw redirect(303, '/')
    }
    const base_URL = 'http://127.0.0.1:3000/api/books'

    const Allbooks = await fetch(base_URL).then((res) => res.json())
    return Allbooks
}

export const actions: Actions = {
    createBook: async ({ cookies, request }) => {
        const session = cookies.get('session')

        const headers = {
            Authorization: `Bearer ${session}`
        }

        const formData = await request.formData()
        const title = formData.get('title')
        const author = formData.get('author')
        const price = formData.get('price')
        const category = formData.get('category')
        const publisher = formData.get('publisher')
        const publishedDate = formData.get('publishedDate')
        const description = formData.get('description')

        try {
            const newBook = await axios.post(
                'http://127.0.0.1:3000/api/books/',
                {
                    title,
                    author,
                    price,
                    category,
                    publisher,
                    publishedDate,
                    description
                },
                {
                    headers
                }
            )
        } catch (error) {
            console.error(error.response.data, 'error')
            return fail(400, {
                incorrect: true,
                message: error.response.data.message
            })
        }
    },
    deleteBook: async ({ cookies, url }) => {
        const id = url.searchParams.get('id')

        const session = cookies.get('session')

        console.log(session)
        const headers = {
            Authorization: `Bearer ${session}`
        }

        console.log(url.searchParams)
        console.log(id)

        try {
            const newBook = await axios.delete(
                `http://127.0.0.1:3000/api/books/${id}`,

                {
                    headers
                }
            )

            console.log(newBook.data)
        } catch (error) {
            console.error(error.response.data, 'error')
            return fail(400, {
                incorrect: true,
                message: error.response.data.message
            })
        }
    }
}
