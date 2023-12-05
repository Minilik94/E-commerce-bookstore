<script>
    import { goto } from '$app/navigation'
    import { page } from '$app/stores'

    export let data

    const { books, discountedBooks } = data
</script>

<div class="header-hero w-full font-Mulish">
    <div class="header__hero--start">
        <p class="header-hero__para">
            Welcome to ReBook - Your One-Stop Shop for Reading
        </p>
        <p>
            Whether you’re looking for bestsellers, classic literature, or niche
            titles, our bookstore has it all. With competitive prices and fast
            delivery, we make it easy to indulge in your love for reading.
        </p>
        <button
            class="btn btn-primary"
            on:click={() => {
                goto('/books')
            }}>Browse books</button
        >
        <img src="/stunning_book.jpg" alt="" />
    </div>
</div>
<div class="header__hero--second font-Mulish">
    <h2 class="header__title">Why Choose <span>ReBook</span></h2>
    <div class="header__hero--container">
        <div class="header__card">
            <i class="fas fa-bolt-lightning" />
            <div class="header__card--sub">
                <h4 class="header__h4">Easy and Quick</h4>
                <p class="header__para">
                    Get access to the book purchesed online instantly.
                </p>
            </div>
        </div>
        <div class="header__card">
            <i class="fas fa-book-open-reader" />
            <div class="header__card--sub">
                <h4 class="header__h4">10,000+ Books</h4>
                <p class="header__para">
                    Rebook has books in all of your favorite categories.
                </p>
            </div>
        </div>
        <div class="header__card">
            <i class="fas fa-money-check-dollar" />
            <div class="header__card--sub">
                <h4 class="header__h4">Affordable</h4>
                <p class="header__para">
                    Get your hands on popular books as low as $10.
                </p>
            </div>
        </div>
    </div>
</div>
<div class="header__hero--third font-Mulish">
    <h2 class="header__title">Featured Books</h2>
    <div class="header__third-container">
        {#each data.books.data.doc as book}
            <a href="/book/{book.slug}" class="header__card-third">
                <div class="book-atoms">
                    <div class="book__img-container">
                        <img class="book-img" src="/{book.coverImage}" alt="" />
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
<section class="header__hero--third font-Mulish">
    <h2 class="header__title">Discounted Books</h2>
    <div class="header__third-container">
        {#each data.discountedBooks.data.doc.slice(0, 4) as book}
            <a href="/book/{book.slug}" class="header__card-third">
                <div class="book-atoms">
                    <div class="book__img-container">
                        <img class="book-img" src="/{book.coverImage}" alt="" />
                    </div>
                    <div class="book-details">
                        {#if book.title.trim().length > 14}
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
</section>

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
        width: 180px;
        border: 1px solid gray;
        /* border: none; */
        border-radius: 10px;
    }
    .header__third-container {
        /* display: grid; */
        /* grid-template-columns: 1fr 1fr 1fr; */
        display: flex;
        color: #134f5c;
        /* align-items: center; */
        justify-content: space-around;
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
    .header-hero {
        width: 100%;
        margin: auto;
        max-width: 600px;
        font-family: 'Mulish', sans-serif;
        /* padding: 1rem; */
        margin-top: 3rem;
        text-align: center;
        margin-bottom: 3rem;
    }
    .header__hero--start {
        text-align: center;
    }
    .header-hero__para {
        text-align: center;
        color: #134f5c;
        font-weight: 900;
        font-size: 24px;
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
    button {
        border: none;
        padding: 1rem 2rem;
        background-color: #134f5c;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        border-radius: 3px;
        margin: 0 0 100px 50px;
        cursor: pointer;
    }
    .header__hero--second {
        margin-top: 50px;
        max-width: 1000px;
        color: #134f5c;
        margin: auto;
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .header__hero--container {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .header__title {
        margin-bottom: 80px;
    }
    .fas {
        border-radius: 3px;
        padding: 1.5rem;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.6);
        color: #134f5c;
        font-size: 18px;
    }
    .book__img-container {
        height: 269px !important;
    }
</style>
