<script lang="ts">
    import type { Books } from './type'

    export let books: Books

</script>

<div
    class="flex max-w-7xl mx-auto p-6 bg-white border w-fit border-gray-200 rounded-lg shadow pl-0 ">
    <div class="card card-side bg-slate-800 mr-2">
        <div class="flex flex-col gap-y-2">
            <button class="btn px-20">Users</button>
            <div class="btn w-full">Books</div>
        </div>
    </div>

    <div class="relative overflow-x-auto">
        <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
            <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
                <tr>
                    <th scope="col" class="px-6 py-3"> Product name </th>
                    <th scope="col" class="px-6 py-3"> Author </th>
                    <th scope="col" class="px-6 py-3"> Category </th>
                    <th scope="col" class="px-6 py-3"> Price </th>
                    <th scope="col" class="px-6 py-3"> Edit </th>
                    <th scope="col" class="px-6 py-3"> Delete </th>
                </tr>
            </thead>
            {#each books as book}
                <tbody>
                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {book.title}
                        </th>
                        <td class="px-6 py-4">
                            {book.author}
                        </td>
                        <td class="px-6 py-4">
                            {book.category}
                        </td>
                        <td class="px-6 py-4">
                            {book.price}
                        </td>
                        <td class="px-6 py-4"> ✒️ </td>
                        <td class="px-6 py-4"> 🗑️ </td>
                    </tr>
                </tbody>
            {/each}
        </table>
    </div>
</div>
