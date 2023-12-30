import { tokens } from '$lib/token.js'
import { users } from '$lib/user.js'

export const load = async ({ parent }) => {
    // const user = await parent()
    let user
    users.subscribe((val) => {
        user = val
    })
    let token
    tokens.subscribe((val) => {
        token = val
    })
    return {
        user,
        token
    }
}
