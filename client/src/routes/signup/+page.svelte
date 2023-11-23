<script>
    import axios from 'axios'
    import { onMount } from 'svelte'

    /** @type {import('./$types').PageData} */

    export let data
    let name = ''
    let email = ''
    let password = ''
    let passwordConfirm = ''
    const registerUser = async () => {
        const newUser = {
            name: name,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm
        }
        console.log('newuser',newUser)
        // try {
        //     const user = axios.post('http://127.0.0.1:3000/api/users/signup', newUser)
        // } catch (error) {
            
        // }
        console.log(name, email, password, passwordConfirm)
    }
</script>

<form
    class="card-body shadow-lg max-w-lg m-auto mt-16 gap-y-4 font-Mulish"
    on:submit|preventDefault={registerUser}
>
    <h1 class="uppercase card-title">Create an account</h1>
    <label for="email" class="label -mb-4 text-black font-bold">Name</label>
    <input
        type="text"
        class="input input-primary w-full max-w-2xl bg-slate-100"
        name="name"
        id="name"
        bind:value={name}
    />
    <label for="email" class="label -mb-4 text-black font-bold">Email</label>
    <input
        type="email"
        class="input input-primary w-full max-w-2xl bg-slate-100"
        name="email"
        id="email"
        bind:value={email}
    />
    <label for="password" class="label -mb-4 text-black font-bold"
        >Password</label
    >
    <input
        type="password"
        class="input input-primary w-full max-w-2xl bg-slate-100"
        name="password"
        id="password"
        bind:value={password}
    />
    <label for="passwordConfirm" class="label -mb-4 text-black font-bold"
        >Password Confirm</label
    >
    <input
        type="password"
        class="input input-primary w-full max-w-2xl bg-slate-100"
        name="password"
        id="passwordConfirm"
        bind:value={passwordConfirm}
    />
    <button type="submit" class="btn" on:click={() => console.log('Hello World')}>Sign up</button>
    <p class="self-end">
        Already have an account?
        <a href="/login" class="link link-hover link-accent">Login</a>
    </p>
</form>
