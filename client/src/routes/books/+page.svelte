<script>
    import { page } from '$app/stores'

    export let data
    $: books = data.books.data.doc
    $: totalBooks = data.books.data.totalItems
    $: console.log(totalBooks)
</script>

<div class="categories">categories</div>


<form class="max-w-xs">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required>
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

<div class="header__hero--third font-Mulish">
    <div class="header__third-container--for--books font-Mulish">
        {#await books.status !== 'success' || data === undefined}
            Loading...
        {:then data}
            {#each books as book}
                <a
                    href="/book/{book.slug}"
                    class="header__card-third font-Mulish"
                >
                    <div class="book-atoms">
                        <div class="book__img-container">
                            <img
                                class="book-img"
                                src="/{book.coverImage}"
                                alt=""
                            />
                        </div>
                        <div class="book-details font-Mulish">
                            {#if book.title.length > 16}
                                <p
                                    class="book--title  font-bold break"
                                    style="text-align: left;"
                                >
                                    {book.title}
                                </p>
                            {:else}
                                <p
                                    class="book--title  font-bold"
                                    style="text-align: left;"
                                >
                                    {book.title}
                                </p>
                            {/if}
                            <p class="book--rating rating rating-half font-bold">{book.ratingAverage}</p>
                            <p class="book--price  font-bold">${book.price}</p>
                        </div>
                    </div>
                </a>
            {/each}
        {/await}
    </div>
</div>

<style>
    .book__img-container {
        height: 269px !important;
    }
    .book-details {
        max-width: 180px;
        display: flex;
        height: 80px;
        flex-direction: column;
        text-align: left;
        padding: 0;
        margin: 0;
    }
    .header__hero--third {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: auto;
        max-width: 1000px;
    }
    .book-atoms {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        align-items: flex-start;
    }
    .book-img {
        object-fit: cover;
        height: inherit;
        width: 180px;
        border: 1px solid gray;
        /* border: none; */
        border-radius: 10px;
    }
    .header__third-container--for--books {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;
        margin: auto;
        flex-wrap: wrap;
        /* margin-bottom: auto; */
    }

    .header__card-third {
        /* padding: 1rem; */
        /* box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.6); */
        display: flex;
        margin-top: 30px;
        margin-bottom: 60px;
    }
    .book--title {
        margin-bottom: 0;
        padding-bottom: 0px;
        font-size: 16px;
        color: black;
        padding: 0;
        padding-right: 0px;
        /* text-wrap: wrap; */
        width: 100%;
        margin: auto;
        margin-right: 0;
        margin-left: 0;
    }
    .break {
        width: auto;
    }
    a {
        text-decoration: none;
    }
    .book--price {
        text-align: left;
        padding: 0px;
        color: black;
        margin: 0;
    }
    .book--rating {
        padding: 0px;
        margin: 0;
        color: black;
        text-align: left;
    }
</style>
