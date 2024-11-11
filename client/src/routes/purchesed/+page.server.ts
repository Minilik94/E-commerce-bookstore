import axios from 'axios'
import type { PageServerLoad } from './$types'

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async () => {
    const base_URL = 'http://127.0.0.1:3000/api/ordering/'

    const data = await axios.get(base_URL)

    console.log(data);

    return {
        
    }
}
