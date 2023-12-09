import { error } from '@sveltejs/kit'

export const load = async ({ cookies, locals }) => {
    console.log(locals, 'main')
    const user = locals.user
    return {
        user
    }
}
