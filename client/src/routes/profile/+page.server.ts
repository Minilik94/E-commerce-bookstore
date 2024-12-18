import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'
import axios from 'axios'

export const load: PageServerLoad = async ({ locals, cookies }) => {
    const session = cookies.get('session')

    const headers = {
        "Content-type": 'application/json',
        Authorization: `Bearer ${session}`
    }
    const myBooks = await fetch(
        `https://rebook-by-minilik.onrender.com/api/ordering/my-orders`,
        {
            headers
        }
    )

    const dataBook = myBooks.json()


    if (locals.user) {
        return {
            user: locals.user,
            session,
            myBooks: dataBook
        }
    }

    if (!locals.user) {
        throw redirect(303, '/login')
    }
}

export const actions: Actions = {
    changeUserDetails: async ({ request, cookies }) => {
        let name, email

        const formData = await request.formData()
        name = formData.get('name')
        email = formData.get('email')

        const photo = formData.get('profile')
        const session = cookies.get('session')

        const headers = {
            Authorization: `Bearer ${session}`
        }

        try {
            const response = await axios.patch(
                'https://rebook-by-minilik.onrender.com/api/users/updateMe',
                { name, email },
                { headers }
            )

            return fail(200, {
                correct: true,
                message: 'Successfully Updated. ✅'
            })
        } catch (error) {
            console.error(error.response.data, 'error')
            return fail(400, {
                incorrect: true,
                message: error.response.data.message
            })
        }
    },
    changePassword: async ({ request, cookies }) => {
        const session = cookies.get('session')
        const { passwordCurrent, password, passwordConfirm } =
            Object.fromEntries(
                (await request.formData()) as {
                    password: String
                    passwordConfirm: String
                    passwordCurrent: String
                }
            )
        const headers = {
            Authorization: `Bearer ${session}`
        }

        try {
            const response = await axios.patch(
                'https://rebook-by-minilik.onrender.com/api/users/updatePassword',
                { passwordCurrent, password, passwordConfirm },
                { headers }
            )

            return fail(200, {
                correct: true,
                message: 'Password Successfully Updated. ✅'
            })
        } catch (error) {
            console.error(error.response.data, 'error')
            return fail(400, {
                incorrect: true,
                message: error.response.data.message
            })
        }
    },
    changePicture: async ({ request, cookies }) => {
        const formData = await request.formData()

        console.log(formData)

        const session = cookies.get('session')
        const headers = {
            Authorization: `Bearer ${session}`
        }
        try {
            const response = await axios.patch(
                'https://rebook-by-minilik.onrender.com/api/users/updateMe',
                formData,
                { headers }
            )

            return fail(200, {
                correct: true,
                message: 'Successfully Updated. ✅'
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
