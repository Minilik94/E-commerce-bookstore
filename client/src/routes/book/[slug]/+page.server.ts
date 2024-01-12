import axios from 'axios'
import type { Actions } from './$types'
import { redirect } from '@sveltejs/kit'

export const load = async ({ params }) => {
    const currentSlug = params.slug
    const res = await fetch(`http://127.0.0.1:3000/api/books`)
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
        `http://127.0.0.1:3000/api/books/${book.id}/reviews`
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

        console.log(session);

        const currentSlug = params.slug
        const res = await fetch(`http://127.0.0.1:3000/api/books`)
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

        console.log(book);
        const response = await axios.get(
            `http://127.0.0.1:3000/api/ordering/checkout-session/${book.id}`,
            {
                headers
            }
        )
        console.log(response.data.session.url, 'res');

        throw redirect(303, `${response.data.session.url}`)

    }
}
