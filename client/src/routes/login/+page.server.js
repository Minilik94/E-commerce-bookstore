// @ts-ignore
import { fail, redirect } from '@sveltejs/kit'
import axios from 'axios'

// @ts-ignore
export const load = async (event) => {
    // event.locals.user
    console.log(event.locals.user, 'local user')
    return {
        users: event.locals.user
    }
}

export const actions = {
    // @ts-ignore
    default: async ({ cookies, request, locals }) => {
        const data = await request.formData()
        const email = data.get('email')
        const password = data.get('password')
        if (!email || !password) {
            return {
                error: { message: 'Email and password are required' }
            }
        }
        try {
            const response = await axios.post(
                'http://127.0.0.1:3000/api/users/login',
                { email, password }
            )
            const user = response.data
            locals.user = user

            if (!user) {
                return fail(400, { user, incorrect: true })
            }

            return { user: locals.user }
        } catch (error) {
            // @ts-ignore
            console.log(error.response.data, 'error')
            // @ts-ignore
            console.log(error.response, 'error')
            // @ts-ignore
            locals.user = error.response.data
            // @ts-ignore
            return fail(error.response.status, error.response.data)
        }
    }
}

// // @ts-ignore
// import axios from 'axios'

// import { users } from '../../lib/user.js'

// export const actions = {
//     // @ts-ignore
//     default: async ({ request, cookies, locals }) => {
//         const formData = await request.formData()
//         const email = formData.get('email')
//         const password = formData.get('password')

//         if (!email || !password) {
//             return {
//                 error: { message: 'Email and password are required' }
//             }
//         }

//         try {
//             const response = await axios.post(
//                 'http://127.0.0.1:3000/api/users/login',
//                 {
//                     email,
//                     password
//                 }
//             )
//             console.log(response, 'res')

//             const user = response.data

//             if (user.status === 'success') {
//                 cookies.set('jwt', user.token)
//                 users.set(user)
//                 return {
//                     user
//                 }
//             } else {
//                 users.set(user)
//                 return user
//             }
//         } catch (error) {
//             console.error('Login failed:', error)
//             // @ts-ignore
//             if (error.response) {
//                 // Error came from response

//                 // @ts-ignore
//                 const { status, data } = error.response
//                 users.update()

//                 switch (status) {
//                     case 401:
//                         return {
//                             error: { status, data }
//                         }
//                     case 422:
//                         return {
//                             error: 'Validation error'
//                         }
//                     default:
//                         return {
//                             error: 'Unknown API error'
//                         }
//                 }
//                 // @ts-ignore
//             } else if (error.request) {
//                 // Error making the request

//                 return {
//                     error: 'Network error'
//                 }
//             } else {
//                 // Unknown error

//                 return {
//                     error: 'Unknown error'
//                 }
//             }
//         }
//     }
// }
