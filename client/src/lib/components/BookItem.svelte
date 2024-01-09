<script lang="ts">
    import type { Books } from './type'

    export let books: Books
</script>

<div class="header__hero--third font-Mulish">
    <h2 class="header__title">Featured Books</h2>
    <div
        class="header__third-container grid grid-cols-1 w-full md:grid-cols-2 mx-auto lg:grid-cols-4"
    >
        {#each books.slice(0, 4) as book}
            <a href="/book/{book.slug}" class="header__card-third mx-auto mt-4">
                <div class="book-atoms">
                    <div
                        class="book__img-container h-[400px] lg:h-[269px] lg:w-[189px]"
                    >
                        <img class="book-img" src="books/{book.coverImage}" alt="" />
                    </div>
                    <div class="book-details">
                        {#if book.title.length > 16}
                            <p
                                class="book--title break font-bold"
                                style="text-align: left;"
                            >
                                {book.title}
                            </p>
                        {:else}
                            <p
                                class="book--title font-bold"
                                style="text-align: left;"
                            >
                                {book.title}
                            </p>
                        {/if}
                        <div
                            class="book--rating text-sm font-bold rating rating-half flex justify-between items-center border border-dashed"
                        >
                            {book.ratingAverage}

                            <div class=" flex">
                                <svg
                                    class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        class="text-yellow-400"
                                    ></path>
                                </svg>
                                <svg
                                    class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        class="text-yellow-400"
                                    ></path>
                                </svg>
                                <svg
                                    class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        class="text-yellow-400"
                                    ></path>
                                </svg>
                                <svg
                                    class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        class="text-yellow-400"
                                    ></path>
                                </svg>
                                <svg
                                    class="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        class=""
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <p class="book--price text-sm font-bold">
                            ${book.price}
                        </p>
                    </div>
                </div>
            </a>
        {/each}
    </div>
</div>

<style>
    * {
        color: #134f5c;
    }
    .book-details {
        max-width: 180px;
        display: flex;
        flex-direction: column;
        text-align: left;
        color: #134f5c;
        padding: 0;
        margin: 0;
    }
    .header__hero--third {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 60px auto 140px auto;
        color: #134f5c;
        max-width: 1200px;
    }
    .book-atoms {
        display: flex;
        flex-direction: column;
        color: #134f5c;
        padding: 1rem;
        align-items: flex-start;
    }
    .book-img {
        object-fit: cover;
        height: inherit;
        /* width: 180px; */
        /* max-width: 300px; */
        width: 300px;
        border: 1px solid gray;
        /* border: none; */
        border-radius: 10px;
    }
    .header__third-container {
        /* display: grid; */
        /* grid-template-columns: 1fr 1fr 1fr; */
        /* display: flex; */
        color: #134f5c;
        /* align-items: center; */
        /* justify-content: space-around; */
        /* margin: auto; */
    }

    .header__card-third {
        /* padding: 1rem; */
        /* box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.6); */
        display: flex;
    }
    .book--title {
        margin-bottom: 0;
        padding-bottom: 0px;
        color: #000;
        padding: 0;
        padding-right: 0px;
        /* text-wrap: wrap; */
        width: auto;
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
        font-weight: 700;
        padding: 0px;
        font-family: 'Muli', 'sans-serif';
        color: #000;
        margin: 0;
    }
    .book--rating {
        padding: 0px;
        margin: 0;
        text-align: left;
        color: #000;
        font-weight: 700;
    }

    p {
        margin: auto;
        color: #134f5c;
        text-align: center;
        padding: 0 30px 30px 30px;
    }
    img {
        height: 100%;
        width: 100%;
        border-radius: 30%;
        text-align: center;
    }

    .header__title {
        margin-bottom: 80px;
    }
</style>
