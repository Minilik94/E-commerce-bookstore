<script>
    /** @type {import('./$types').PageData} */
    export let data
</script>

<form
    class="card-body shadow-lg max-w-lg m-auto mt-16 gap-y-8 font-Mulish"
    method="POST"
>
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
