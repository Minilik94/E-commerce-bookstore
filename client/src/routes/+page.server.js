import { onDestroy } from 'svelte'
import { users } from '../lib/user.js'

 
export const load = async ({ fetch, locals }) => {

    let user

    // Subscribe to the users store and update the 'user' variable
    $: {
        const unsubscribe = users.subscribe((u) => {
            user = u
        })
    }

    locals.user = user // Optionally update locals.user whenever the user changes

    const books = await fetch(
        'http://127.0.0.1:3000/api/books?ratingAverage[gte]=4.8'
        // @ts-ignore
    ).then((res) => res.json())
    const discountedBooks = await fetch(
        'http://127.0.0.1:3000/api/books?sort=price'
        // @ts-ignore
    ).then((res) => res.json())

    // locals.user = user

    return {
        books,
        discountedBooks,
        user
        // user: locals
    }
}

export const csr = true
