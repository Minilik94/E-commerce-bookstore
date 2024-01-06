<script>
    import AdminPortal from '$lib/components/AdminPortal.svelte'
    export let data
    //
    $: alBooks = data.data.doc
</script>

<AdminPortal books={alBooks} />
