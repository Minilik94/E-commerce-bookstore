import axios from 'axios'
import type { PageServerLoad } from './$types'

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async () => {
    const base_URL = 'https://rebook-by-minilik.onrender.com/api/ordering/'

    const data = await axios.get(base_URL)

    console.log(data);

    return {
        
    }
}
