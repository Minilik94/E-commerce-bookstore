<script>
    import { page } from '$app/stores'
    import BookItems from '$lib/components/BookItems.svelte'
    import Pagination from '$lib/components/Pagination.svelte'
    import SearchBar from '$lib/components/SearchBar.svelte'

    export let data
    $: ({ book } = data)
    $: ({ books } = book)
    let pageSize = 9

    $: totalItems = data.book.total
    $: totalPages = Math.ceil(totalItems / pageSize)
    $: currentPage = Number($page.params.page) - 1
</script>

<div class="max-w-7xl mx-auto flex flex-col">
    <SearchBar />
    <BookItems book={book.books}  />
    <Pagination {totalPages} {currentPage}/>
</div>
