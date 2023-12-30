// @ts-ignore
import { fail, redirect, type Actions } from '@sveltejs/kit'
import axios from 'axios'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
    if (locals.user) {
        throw redirect(302, '/')
    }
}

export const actions: Actions = {
    login: async ({ cookies, request }) => {
        const { email, password } = Object.fromEntries(
            (await request.formData()) as {
                email: string
                password: string
            }
        )

        if (!email || !password) {
            return fail(400, {
                invalid: true,
                message: 'Email and password are required'
            })
        }
        try {
            const response = await axios.post(
                'http://127.0.0.1:3000/api/users/login',
                {
                    email,
                    password
                }
            )
            const status = response.data.status
            // on success user = response.data.user
            // on success status = response.data.status
            // on success status = response.data.user

            console.log(response.data.token, 'token')

            // console.log(response.data.data.user);

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
