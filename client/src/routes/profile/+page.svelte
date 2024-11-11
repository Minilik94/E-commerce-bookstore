<script>
    import { applyAction, enhance } from '$app/forms'
    import { invalidateAll } from '$app/navigation'
    import { page } from '$app/stores'
    import Billings from '$lib/components/Billings.svelte'
    import Books from '$lib/components/MyBooks.svelte'
    import Reviews from '$lib/components/Reviews.svelte'
    import axios from 'axios'
    // @ts-ignore
    export let data

    export let form
    let selectedImage = '/default.jpg'
    $: ({ user } = $page.data)
    let selectedSection = 'settings'

    const headers = {
        Authorization: `Bearer ${data.session}`,
        'Content-Type': 'multipart/form-data'
    }

    const formData = new FormData()

    // @ts-ignore
    const changeView = (/** @type {string} */ section) => {
        selectedSection = section
    }

    /**
     * @param {{ target: any; }} event
     */
    function handleImageChange(event) {
        const fileInput = event.target
        // @ts-ignore
        let previewImage = document.getElementById('previewImage')

        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader()
            reader.onload = function (e) {
                // @ts-ignore
                selectedImage = e.target.result
            }
            reader.readAsDataURL(fileInput.files[0])
            formData.append('photo', fileInput.files[0])
        } else {
            selectedImage = 'default-Img.jpg'
            formData.delete('photo')
        }
    }

    $: name = ''
    $: email = ''
    let showAlert = null

    $: handleAccountChange = async () => {
        try {
            const response = await axios.patch(
                'http://127.0.0.1:3000/api/users/updateMe',
                formData,
                { headers }
            )
        } catch (error) {
            console.error('Error updating user:', error)
        }
    }

    let isSideBarOpen = false

    const toggleSideBar = () => {
        const sidebar = document.getElementById('default-sidebar')
        console.log(sidebar);
        if(!isSideBarOpen){
            // sidebar?.classList.add('sm:translate-x-50')
            sidebar?.classList.remove('-translate-x-full')
            isSideBarOpen = true
            document.getElementById('btn')?.classList.remove('hidden')
        }
        else{
            sidebar?.classList.add('-translate-x-full')
            isSideBarOpen = false
            document.getElementById('btn')?.classList.add('hidden')
        }

    }


</script>

{#if showAlert}
    <div class="max-w-lg mx-auto px-8">
        <div
            class="alert alert-success py-10 rounded-none mx-auto text-center block"
        >
            <p class=" mx-auto">Profile data updated successfully!</p>
        </div>
    </div>
{/if}

<section class="max-w-4xl mx-auto relative min-h-96 h-screen">
    <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        on:click={toggleSideBar}
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
    >
        <span class="sr-only">Open sidebar</span>
        <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
        </svg>
    </button>

    <aside
    id="default-sidebar"
    class="absolute top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
    >

        <div
            class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"
        >
            <ul class="space-y-2 font-medium">
                <button class="btn btn-error hidden absolute border-none -right-10 -top-0 py-0 " id="btn" on:click={toggleSideBar}>
                    X
                </button>
                <li>
                    <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        on:click={() => {
                            changeView('settings')
                        }}
                    >
                        <span class="ms-3">Settings</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        on:click={() => {
                            changeView('reviews')
                        }}
                    >
                        <span class="ms-3">My Reviews</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        on:click={() => {
                            changeView('billings')
                        }}
                    >
                        <span class="ms-3">Billings</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        on:click={() => {
                            changeView('books')
                        }}
                    >
                        <span class="ms-3">Books</span>
                    </a>
                </li>
            </ul>
        </div>
    </aside>

    <div class="p-4 sm:ml-64 border">
        {#if selectedSection === 'settings'}
            <div class="">
                <h3 class="card card-title">Your account settings</h3>
                <div class="">
                    <div class="">
                        {#if form?.correct}
                            <div
                                class="alert alert-success py-2 rounded-none mx-auto text-center block"
                            >
                                {form.message}
                            </div>
                        {/if}
                        {#if form?.incorrect}
                            <div
                                class="alert alert-error py-2 rounded-none mx-auto text-center block"
                            >
                                {form.message}
                            </div>
                        {/if}
                        <div class="">
                            <form
                                action="?/changeUserDetails"
                                method="POST"
                                use:enhance={() => {
                                    return async ({ result }) => {
                                        invalidateAll()
                                        await applyAction(result)
                                    }
                                }}
                            >
                                <label for="name">Name</label>
                                <input
                                    value={user.name}
                                    type="text"
                                    name="name"
                                    id="name"
                                />
                                <label for="email">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={user.email}
                                />
                                <br />

                                <button class="submit" type="submit"
                                    >Save changes</button
                                >
                            </form>
                        </div>
                        <div>
                            <hr />
                        </div>
                        <h3 class="card card-title">Change Profile Picture</h3>
                        <form
                            action="?/changePicture"
                            method="POST"
                            use:enhance={() => {
                                return async ({ result }) => {
                                    invalidateAll()
                                    await applyAction(result)
                                }
                            }}
                        >
                            <div class="profile__img--cover btn h-fit">
                                <label for="photo" class="relative">
                                    {#if user.photo}
                                        <img
                                            src="users/{user.photo}"
                                            class="profile-img relative"
                                            alt=""
                                            id="previewImage"
                                        />
                                    {:else}
                                        <img
                                            src={selectedImage}
                                            class="profile-img relative"
                                            alt=""
                                            id="previewImage"
                                        />
                                    {/if}
                                </label>
                                <input
                                    type="file"
                                    name="photo"
                                    id="photo"
                                    accept="image/*"
                                    on:change={handleImageChange}
                                />
                            </div>

                            <button class="submit" type="submit"
                                >Save changes</button
                            >
                        </form>
                        <div>
                            <hr />
                        </div>
                        <div class="">
                            <h3 class="card card-title pt-2">Password change</h3>
                            <form
                                action="?/changePassword"
                                method="POST"
                                use:enhance={() => {
                                    return async ({ result }) => {
                                        invalidateAll()
                                        await applyAction(result)
                                    }
                                }}
                            >
                                <label for="passwordCurrent"
                                    >Current password</label
                                >
                                <input
                                    type="password"
                                    name="passwordCurrent"
                                    id="passwordCurrent"
                                />
                                <label for="newPass">New password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                />
                                <label for="passwordConfirm"
                                    >Confirm password</label
                                >
                                <input
                                    type="password"
                                    name="passwordConfirm"
                                    id="passwordConfirm"
                                />

                                <button type="submit" class="submit"
                                    >Save Password</button
                                >
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        {:else if selectedSection === 'books'}
            <Books />
        {:else if selectedSection === 'reviews'}
            <Reviews />
        {:else if selectedSection === 'billings'}
            <Billings />
        {/if}
    </div>
</section>

<style>
    .profile__container {
        display: flex;
        width: 100%;
        max-width: 900px;
        margin: auto;
        border: solid rgb(82, 164, 162);
        border-left: none;
        border-top: none;
        border-bottom: none;
        height: 100vh;
        margin-top: 30px;
        /* padding: 0 20px; */
    }
    .left__container {
        background-color: #134f5c;
        width: 40%;
        box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.4);
        color: red;
        padding-bottom: 10px;
    }
    .left__container--lists {
        padding: 2rem 0 0 0;
    }
    .left__items {
        padding: 1rem 2rem;
        border-radius: 10px;
    }
    .profile-img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }
    label {
        margin-bottom: 4px;
        margin-top: 10px;
        color: #626060;
    }
    .right__container {
        border-left: none;
        padding: 6rem;
        width: 100%;
        padding-top: 2rem;
    }
    .right__items--container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .right__container--title {
        text-transform: uppercase;
        margin-top: 0px;
        color: #134f5c;
        font-weight: 900;
        padding: 0.6rem 2rem;
    }
    .form__item--first {
        margin-bottom: 20px;
    }
    form {
        display: flex;
        flex-direction: column;
    }
    input {
        padding: 10px;
        background-color: #ededed;
        outline: none;
        border: none;
        color: #000;
        padding: 6px;
    }
    .btn__input {
        border: none;
        background-color: transparent;
        cursor: pointer;
        color: #fff;
    }
    .submit {
        width: 30%;
        align-self: flex-end;
        margin-top: 10px;
        padding-top: 6px;
        padding-bottom: 6px;
        border-radius: 30px;
        background-color: #134f5c;
        cursor: pointer;
        border: none;
        color: #fff;
    }
</style>
