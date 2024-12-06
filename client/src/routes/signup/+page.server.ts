// @ts-ignore
import axios from 'axios'
import { fail, redirect, type Actions } from '@sveltejs/kit'
import type { PageServerLoad } from './$types.js'

export const load: PageServerLoad = async ({ locals }) => {
    if (locals.user) {
        throw redirect(302, '/')
    }
}

export const actions: Actions = {
    signup: async ({ cookies, request }) => {
        const { name, email, password, passwordConfirm } = Object.fromEntries(
            (await request.formData()) as {
                name: String
                email: String
                password: String
                passwordConfirm: String
            }
        )
        if (!name || !email || !password || !passwordConfirm) {
            return fail(400, {
                invalid: true,
                message: 'Please Fill all fields !!'
            })
        }
        try {
            const response = await axios.post(
                'http://127.0.0.1:3000/api/users/signup',
                { name, email, password, passwordConfirm }
            )

            cookies.set('session', response.data.token, {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 30
            })
        } catch (error) {
            console.error(error.response.data, 'error')
            return fail(400, {
                incorrect: true,
                message: error.response.data.message
            })
        }
    }
}
