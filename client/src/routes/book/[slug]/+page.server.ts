import axios from 'axios'
import type { Actions } from './$types'
import { redirect } from '@sveltejs/kit'

export const load = async ({ params, locals }) => {
    if (!locals.user) {
        throw redirect(307, '/login')
    }

    const currentSlug = params.slug
    const res = await fetch(`https://rebook-by-minilik.onrender.com/api/books`)
    const data = await res.json()
    let cb
    let book
    // console.log(data.data.doc, 'data');
    let books = data.data.doc
    books.forEach((bk) => {
        cb = bk.slug
        if (currentSlug === cb) {
            book = bk
        }
    })
    const resReview = await fetch(
        `https://rebook-by-minilik.onrender.com/api/books/${book.id}/reviews`
    )
    const reviewData = await resReview.json()
    return {
        book,
        reviewData
    }
}

export const actions: Actions = {
    checkout: async ({ cookies, params }) => {
        const session = cookies.get('session')

        const headers = {
            Authorization: `Bearer ${session}`
        }

        const currentSlug = params.slug
        const res = await fetch(
            `https://rebook-by-minilik.onrender.com/api/books`
        )
        const data = await res.json()
        let cb
        let book
        // console.log(data.data.doc, 'data');
        let books = data.data.doc
        books.forEach((bk) => {
            cb = bk.slug
            if (currentSlug === cb) {
                book = bk
            }
        })

        const response = await axios.get(
            `https://rebook-by-minilik.onrender.com/api/ordering/checkout-session/${book.id}`,
            {
                headers
            }
        )

        throw redirect(303, `${response.data.session.url}`)
    }
}
