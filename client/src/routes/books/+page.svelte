<script>
    import {
        elasticInOut,
        elasticOut,
        linear,
        quadIn,
        quintOut
    } from 'svelte/easing'
    import { scale, slide } from 'svelte/transition'
    import { page } from '$app/stores'

    export let data
    $: books = data.books.data.doc
    $: totalBooks = data.books.data.totalItems
    $: console.log(totalBooks);
</script>

<div class="categories">categories</div>

<div class="header__hero--third">
    <div
        class="header__third-container--for--books"
        transition:slide={{ duration: 300, easing: quadIn }}
    >
        {#await books.status !== 'success' || data === undefined}
            Loading...
        {:then data}
            {#each books as book}
                <a href="/book/{book.slug}" class="header__card-third">
                    <div class="book-atoms">
                        <div class="book__img-container">
                        <img class="book-img" src="/{book.coverImage}" alt="" />
                    </div>
                        <div class="book-details">
                            {#if book.title.length > 16}
                                <p
                                    class="book--title break"
                                    style="text-align: left;"
                                >
                                    {book.title}
                                </p>
                            {:else}
                                <p
                                    class="book--title"
                                    style="text-align: left;"
                                >
                                    {book.title}
                                </p>
                            {/if}
                            <p class="book--rating">{book.ratingAverage}</p>
                            <p class="book--price">${book.price}</p>
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

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
    .book-details {
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
        height: 300px;
        display: flex;
        margin-top: 30px;
        margin-bottom: 60px;
    }
    .book--title {
        margin-bottom: 0;
        padding-bottom: 0px;
        font-size: 16px;
        font-weight: 900;
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
        width: 140px;
    }
    a {
        text-decoration: none;
    }
    .book--price {
        text-align: left;
        padding: 0px;
        font-family: 'Muli', 'sans-serif';
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
