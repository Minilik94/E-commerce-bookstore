<script lang="ts">
    import Book from './AllBooks.svelte'
    import type { Books } from './type'
    export let books: Books


</script>

<Book books={books}/>
