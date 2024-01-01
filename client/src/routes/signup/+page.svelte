<script>
    import { applyAction, enhance } from '$app/forms'
    import { invalidateAll } from '$app/navigation'

    export let form
</script>

<form
    class="card-body shadow-lg max-w-lg m-auto mt-16 gap-y-4 font-Mulish"
    action="?/signup"
    method="POST"
    use:enhance={() => {
        return async ({ result }) => {
            invalidateAll()
            await applyAction(result)
        }
    }}
>
    <h1 class="uppercase card-title">Create an account</h1>

    {#if form?.invalid}
        <div
            class="alert alert-error py-2 rounded-none mx-auto text-center block"
        >
            {form.message}
        </div>
    {/if}
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
    <button type="submit" class="btn">Sign up</button>
    <p class="self-end">
        Already have an account?
        <a href="/login" class="link link-hover link-accent">Login</a>
    </p>
</form>
