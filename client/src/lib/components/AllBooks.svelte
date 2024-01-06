<script lang="ts">
    import type { Books } from "./type"


    export let books: Books

</script>

<div class="max-w-screen-lg mx-auto px-4 md:px-8">
    <div class="items-start justify-between md:flex">
        <div class="max-w-lg">
            <h3 class="text-gray-800 text-xl font-bold sm:text-2xl">Books</h3>
            <p class="text-gray-600 mt-2">
                All Currently Available Books at Rebook.
            </p>
        </div>
        <div class="mt-3 md:mt-0">
            <button on:click={() => document.getElementById('my_modal_2').showModal()} class="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm">
                Add New Book
            </button>
        </div>
    </div>
    <div class="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table class="w-full table-auto text-sm text-left">
            <thead class="bg-gray-50 text-gray-600 font-medium border-b">
                <tr>
                    <th class="py-3 px-6">Title</th>
                    <th class="py-3 px-6">Category</th>
                    <th class="py-3 px-6">Price</th>
                    <th class="py-3 px-6"></th>
                </tr>
            </thead>
            <tbody class="text-gray-600 divide-y">
                {#each books as item, idx}
                    <tr>
                        <td class="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap cursor-pointer" >
                            <!-- svelte-ignore a11y-img-redundant-alt -->
                            <img src={item.coverImage} alt="book image" class="w-20 h-20 rounded-sm" />
                            <div class="flex flex-col flex-wrap whitespace-break-spaces">
                                <p class=" text-gray-700 text-sm font-medium ">{item.title}</p>
                                <p class=" text-gray-700 text-xs">{item.author}</p>
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">{item.category}</td>
                        <td class="px-6 py-4 whitespace-nowrap">${item.price}</td>
                        <td class="text-right px-6 whitespace-nowrap">
                            <!-- <a href="#" class="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                Edit
                            </a> -->
                            <div class="flex items-center">
                            <a href="/{item.id}" class="btn py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 rounded-lg hover:bg-transparent border-none bg-transparent"
                                >Edit</a
                            >
                            

                            <form action="?/deleteBook" method="POST">
                            <button type="submit" class="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                Delete
                            </button>
                        </form>
                    </div>
                        </td>

                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>

<dialog id="my_modal_2" class="modal">
    <form
        class="border p-8 rounded-lg shadow-md max-w-screen-sm w-full relative bg-black text-white"
        method="POST"
        action="?/createBook"
    >
        <form
            method="dialog"
            class="modal-backdrop text-red-600 absolute left-1 -top-1 cursor-pointer z-50"
        >
            <button class="cursor-pointer text-lg font-bold p-4 hover:scale-105"><div class="h-3 w-3 bg-red-600 rounded-full"></div></button>
        </form>

        <div class="grid grid-cols-2 gap-4">

        <div class="mb-4">
            <label for="title" class="block text-left text-sm font-medium text-gray-600">Book Title</label>
            <input
                type="text"
                id="title"
                name="title"
                class="textarea textarea-primary mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
            />
            </div>
            <div class="mb-4">
            <label for="author" class="block text-left text-sm font-medium text-gray-600">Book Author</label>
            <input
                type="text"
                id="author"
                name="author"
                class="textarea textarea-primary mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
            />
        </div>
        <div class="mb-4">
            <label for="priice" class="block text-left text-sm font-medium text-gray-600">Price</label>
            <input
                type="text"
                id="price"
                name="price"
                class="textarea textarea-primary mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
            />
        </div>
        <div class="mb-4">
            <label for="title" class="block text-left text-sm font-medium text-gray-600">Category</label>
            <input
                type="text"
                id="title"
                name="title"
                class="textarea textarea-primary mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
            />
        </div>
        <div class="mb-4">
            <label for="publisher" class="block text-left text-sm font-medium text-gray-600">Publisher</label>
            <input
                type="text"
                id="publisher"
                name="publisher"
                class="textarea textarea-primary mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
            />
        </div>
    </div>

        <div class="mb-4">
            <label for="description" class="block text-left text-sm font-medium text-gray-600">Description</label>
            <textarea
                id="description"
                name="description"
                class="textarea textarea-primary mt-1 p-2 border rounded w-full h-32 resize-none focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
        </div>

        <button
            type="submit"
            class="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >Update Book</button
        >
    </form>
</dialog>