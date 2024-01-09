<script lang="ts">
    import type { PageData } from './$types'

    export let data: PageData
    export let form: PageData

    

    $: ({ book } = data.book)
    console.log(form, 'fom')
    $: book_ToBe_Edited = book.data.doc
</script>

<form action="?/updateBookImage" method="POST" class="max-w-3xl mx-auto" enctype="multipart/form-data">
    <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->
    <label
        for="coverImage"
        class="block rounded-lg bg-white w-fit shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] my-4"
    >
        <a href="#!">
            <img
                class="rounded-t-lg h-1/6 w-96"
                src=/books/{book_ToBe_Edited.coverImage}
                alt=""
            />
        </a>
    </label>
    <input
        type="file"
        accept="image/*"
        name="coverImage"
        id="coverImage"
        class="file-input file-input-bordered file-input-info w-full max-w-xs"
    />
    <button type="submit" class="btn">Change Cover image</button>
</form>

<form
    class="border p-8 rounded-lg shadow-md max-w-6xl mx-auto w-full relative"
    method="POST"
    action="?/updateBook"
>
    <form
        method="dialog"
        class="modal-backdrop text-red-600 absolute left-1 -top-1 cursor-pointer z-50"
    >
        <a
            href="/admin"
            class="cursor-pointer text-lg font-bold p-4 hover:scale-105"
            ><div class="h-3 w-3 bg-yellow-600 rounded-full"></div></a
        >
    </form>

    <div class="grid grid-cols-2 gap-4">
        <div class="mb-4">
            <label
                for="title"
                class="block text-left text-sm font-medium text-gray-600"
                >Book Title</label
            >
            <input
                type="text"
                id="title"
                name="title"
                value={book_ToBe_Edited.title}
                class="textarea textarea-ghost mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
            />
        </div>
        <div class="mb-4">
            <label
                for="author"
                class="block text-left text-sm font-medium text-gray-600"
                >Book Author</label
            >
            <input
                type="text"
                id="author"
                name="author"
                value={book_ToBe_Edited.author}
                class="textarea textarea-ghost mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
            />
        </div>
        <div class="mb-4">
            <label
                for="priice"
                class="block text-left text-sm font-medium text-gray-600"
                >Price</label
            >
            <input
                type="text"
                id="price"
                name="price"
                value={book_ToBe_Edited.price}
                class="textarea textarea-ghost mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
            />
        </div>
        <div class="mb-4">
            <label
                for="title"
                class="block text-left text-sm font-medium text-gray-600"
                >Category</label
            >
            <input
                type="text"
                id="category"
                name="category"
                value={book_ToBe_Edited.category}
                class="textarea textarea-ghost mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
            />
        </div>
        <div class="mb-4">
            <label
                for="publisher"
                class="block text-left text-sm font-medium text-gray-600"
                >Publisher</label
            >
            <input
                type="text"
                id="publisher"
                name="publisher"
                value={book_ToBe_Edited.publisher}
                class="textarea textarea-ghost mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
            />
        </div>
    </div>

    <div class="mb-4">
        <label
            for="description"
            class="block text-left text-sm font-medium text-gray-600"
            >Description</label
        >
        <textarea
            id="description"
            value={book_ToBe_Edited.description}
            name="description"
            class="textarea textarea-ghost mt-1 p-2 border rounded w-full h-32 resize-none focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>
    </div>

    <button
        type="submit"
        class="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >Update Book</button
    >
</form>
