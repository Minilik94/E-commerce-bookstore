import axios from 'axios'
import type { PageData } from './$types'
import { fail } from '@sveltejs/kit'

export const load: PageData = async ({ params, fetch }) => {
    const page = Number(params.page)

    console.log(page, 'page')

    async function getBooks(page: Number) {
      try {
          const limit = 9
          const response = await axios.get(
              `https://rebook-by-minilik.onrender.com/api/books?page=${page}&limit=${limit}`
          )

          const responseAll = await axios.get(`https://rebook-by-minilik.onrender.com/api/books`)
          console.log(response.data)
        //   console.log(responseAll.data.result)
  
          return { books: response.data.data.doc, total: responseAll.data.result }
      } catch (error) {
        console.error(error)
        return fail(400, {
            invalid: true,
            message: 'Something Went wrong'
        })
      }
    }

    return { book: getBooks(page) }
}
