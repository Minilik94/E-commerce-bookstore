<script lang="ts">
    import { page } from '$app/stores'

    import '../style.css'
    import AnimatedRoute from '$lib/components/AnimatedRoute.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import NavBar from '$lib/components/NavBar.svelte'

    $: ({ user } = $page.data)

</script>

<svelte:head>
    {#if $page.url.pathname === '/'}
        <title>Home</title>
    {:else if $page.url.pathname === '/books'}
        <title>Books</title>
    {:else if $page.url.pathname === '/cart'}
        <title>Cart</title>
    {:else if $page.url.pathname === '/profile'}
        <title>Profile</title>
    {/if}
</svelte:head>

<AnimatedRoute>
    <NavBar {user} />

    <slot />

    <Footer />
</AnimatedRoute>

<style>
    * {
        box-sizing: border-box;
    }
</style>
