import { onDestroy } from 'svelte'
import { users } from '../lib/user.js'

export const load = ({ locals }) => {
    let user

    // Subscribe to the users store and update the 'user' variable
    $: {
        const unsubscribe = users.subscribe((u) => {
            user = u
        })
    }

    locals.user = user // Optionally update locals.user whenever the user changes

    // Return the current value of the 'user' variable
    return {
        user
    }
}
