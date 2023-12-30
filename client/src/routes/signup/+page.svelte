<script>
    import axios from 'axios'
    import { onMount } from 'svelte'

    /** @type {import('./$types').PageData} */
    export let form

    export let data
    console.log(form, 'from signup')
    console.log(data, 'from singup')

    const { user, error } = form ?? {}
    console.log(user, 'users')

    let showAlert = false
    let redirectTo = null

    $: {
        if (user) {
            showAlert = true
            console.log(user.status)

            setTimeout(() => {
                // showAlert = false
                redirectTo = '/'
            }, 1000)
        }
    }

    $: {
        if (redirectTo) {
            location.href = redirectTo
        }
    }
</script>

<div class="max-w-sm mx-auto px-8">
    {#if showAlert}
        <div
            class="alert alert-success py-10 rounded-none mx-auto text-center block"
        >
            <p class="border mx-auto">Signup successful!</p>
        </div>
    {:else if error}<div
            class="alert alert-error py-10 rounded-none mx-auto text-center block"
        >
            {error.message}
        </div>{/if}
</div>

<form
    class="card-body shadow-lg max-w-lg m-auto mt-16 gap-y-4 font-Mulish"
    method="POST"
>
    <h1 class="uppercase card-title">Create an account</h1>
    <label for="name" class="label -mb-4 text-black font-bold">Name</label>
    <input
        type="text"
        class="input input-primary w-full max-w-2xl bg-slate-100"
        name="name"
        id="name"
    />
    <label for="email" class="label -mb-4 text-black font-bold">Email</label>
    <input
        type="email"
        class="input input-primary w-full max-w-2xl bg-slate-100"
        name="email"
        id="email"
    />
    <label for="password" class="label -mb-4 text-black font-bold"
        >Password</label
    >
    <input
        type="password"
        class="input input-primary w-full max-w-2xl bg-slate-100"
        name="password"
        id="password"
    />
    <label for="passwordConfirm" class="label -mb-4 text-black font-bold"
        >Password Confirm</label
    >
    <input
        type="password"
        class="input input-primary w-full max-w-2xl bg-slate-100"
        name="passwordConfirm"
        id="passwordConfirm"
    />
    <button
        type="submit"
        class="btn"
        on:click={() => console.log('Hello World')}>Sign up</button
    >
    <p class="self-end">
        Already have an account?
        <a href="/login" class="link link-hover link-accent">Login</a>
    </p>
</form>
