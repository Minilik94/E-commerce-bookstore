import { redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
    if (!locals.user || locals.user.role !== 'admin') {
        throw redirect(303, '/')
    }
    const base_URL = 'http://127.0.0.1:3000/api/books'

    const Allbooks = await fetch(base_URL).then((res) => res.json())
    return Allbooks
}



export const actions: Actions = {
    createBook: async({cookies, request}) => {
        const formData = await request.formData()
        console.log(formData);
    }
};