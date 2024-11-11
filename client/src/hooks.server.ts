import { invalidateAll } from '$app/navigation'
import type { Handle } from '@sveltejs/kit'
import axios from 'axios'

export const handle: Handle = async ({ event, resolve }) => {
    const session = event.cookies.get('session')

    try {
        // Add proper Authorization header syntax
        const response = await axios.get(
            'http://127.0.0.1:3000/api/users/bysession',
            {
                headers: {
                    Authorization: `Bearer ${session}`
                }
            }
        )

        const user = await response.data
        // console.log(user, 'from hooks')
        if (user) {
            event.locals.user = {
                photo: user.user.photo,
                role: user.user.role,
                _id: user.user._id,
                name: user.user.name,
                email: user.user.email,
                id: user.user.id
            }
        }
    } catch (error) {
        console.error('Error fetching user data:', error)
    }
    return await resolve(event)
}
