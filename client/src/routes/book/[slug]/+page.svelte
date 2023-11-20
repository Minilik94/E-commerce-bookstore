<script>
    export let data
    $: book = data.book
    
    let showdata = true
    // setTimeout(() => {
    //     showdata = true
    // }, 1000)
</script>

{#if !showdata || data === undefined}  
    Loading...
{:else}
  
            <div class="book-atoms">
                <!-- <img class="book-img" src="/lib/assets/{book.coverImage}" alt="" /> -->
                <div class="book-details">
                    {#if book.title.length > 16}
                        <p class="book--title break" style="text-align: left;">
                            {book.title}
                        </p>
                    {:else}
                        <p class="book--title" style="text-align: left;">
                            {book.title}
                        </p>
                    {/if}
                    <p class="book--rating">{book.ratingAverage}</p>
                    <p class="book--price">${book.price}</p>
                </div>
            </div>

{/if}
