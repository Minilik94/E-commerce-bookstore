<script lang="ts">
    import { applyAction, enhance } from '$app/forms'
    import { invalidateAll } from '$app/navigation'
    //     import { page } from '$app/stores'
    //     import { users } from '$lib/user.js'
    //     import { writable } from 'svelte/store'
    import type { ActionData } from './$types'

    export let form: ActionData


</script>



<form
    class="card-body shadow-lg max-w-lg m-auto mt-16 gap-y-8 font-Mulish"
    action="?/login"
    method="POST"
    use:enhance={() => {
        return async ({ result }) => {
            invalidateAll()
            await applyAction(result)
        }
    }}
>
    {#if form?.invalid }
        <div
            class="alert alert-error py-10 rounded-none mx-auto text-center block"
        >
            {form?.message}
        </div>
    {/if}
    {#if form?.incorrect}
        <div
            class="alert alert-error py-10 rounded-none mx-auto text-center block"
        >
            {form?.message}
        </div>
    {/if}
    {#if form?.valid}

        <div
            class="alert alert-success py-10 rounded-none mx-auto text-center block"
        >
            Login successful
        </div>
    {/if}
    <h1 class="uppercase card-title">Log into your account</h1>
    <label for="email" class="label -mb-6 text-black font-bold">Email</label>
    <input
        type="email"
        class="input input-ghost w-full max-w-2xl bg-slate-100"
        name="email"
        id="email"
    />
    <label for="password" class="label -mb-6 text-black font-bold"
        >Password</label
    >
    <input
        type="password"
        class="input input-ghost w-full max-w-2xl bg-slate-100"
        name="password"
        id="password"
    />

    <p class="self-end -mb-1 -mt-6">
        <a href="/reset" class="link link-hover link-accent">forgot password?</a
        >
    </p>
    <button type="submit" class="btn">Login</button>
    <p class="self-end">
        Didn't have an account
        <a href="/signup" class="link link-hover link-secondary">Register</a>
    </p>
</form>
