<script>
    import { goto } from '$app/navigation'
    import { page } from '$app/stores'
    import AdminPortal from '$lib/components/AdminPortal.svelte'
    import BookItem from '$lib/components/BookItem.svelte'
    import DiscountedBooks from '$lib/components/DiscountedBooks.svelte'
    import Hero from '$lib/components/Hero.svelte'

    export let data
    $: ({ books } = data)
    $: ({ Allbooks } = data)
    $: ({ user } = data)
    $: ({ discountedBooks } = data)
    $: feturedBooks = books.data.doc
    $: alBooks = Allbooks.data.doc
    $: discountBooks = discountedBooks.data.doc
</script>

{#if user && user.role !== 'admin'}
    <Hero />
    <BookItem books={feturedBooks} />
    <DiscountedBooks books={discountBooks} />
{/if}
{#if user && user.role === 'admin'}
    <AdminPortal books={alBooks} />
{/if}
