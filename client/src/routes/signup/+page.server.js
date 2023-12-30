// @ts-ignore
import { tokens } from '$lib/token.js'
import { users } from '$lib/user.js'
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
        const name = data.get('name')
        const email = data.get('email')
        const password = data.get('password')
        const passwordConfirm = data.get('passwordConfirm')
        console.log(data, 'from page.server.js')
        if (!email || !password) {
            return {
                error: { message: 'Email and password are required' }
            }
        }
        try {
            const response = await axios.post(
                'http://127.0.0.1:3000/api/users/signup',
                { name, email, password, passwordConfirm }
            )
            const user = response.data
            // console.log(user, 'from login')
            // console.log(response, 'response from login')
            users.set(user.data)
            locals.user = user.data
            // console.log(user.data, 'locals  from login')

            if (!user) {
                return fail(400, { user, incorrect: true })
            }
            tokens.set(user.token)
            cookies.set('token', user.token)
            // cookies.delete('undefined')
            return { user: locals.user }
        } catch (err) {
            // console.log(err.response.data, 'err')
            // console.log(err.response, 'err')
            locals.user = err.response.data
            return {
                error: { message: err.response.data.message }
            }
        }
    }
}
