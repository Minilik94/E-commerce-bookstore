<script>
    import { invalidateAll } from '$app/navigation'
    import Spinner from '$lib/Spinner.svelte'
    import { tokens } from '$lib/token.js'
    import { users } from '$lib/user.js'
    import axios from 'axios'
    // @ts-ignore
    export let data
    let selectedImage = '/default.jpg'
    const { user } = data
    let selectedSection = 'settings'

    const headers = {
        Authorization: `Bearer ${data.token}`,
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
        formData.append('name', name)
        formData.append('email', email)

        try {
            const response = await axios.patch(
                'http://127.0.0.1:3000/api/users/updateMe',
                formData,
                { headers }
            )

            if (response.status === 200) {
                users.set(response.data.user)
                setTimeout(() => {
                    // showAlert = false
                    showAlert = true
                    user.user.name = response.data.user.name
                    user.user.email = response.data.user.email
            }, 1400)
            }

            user.user.email = email
        } catch (error) {
            console.error('Error updating user:', error)
        }
    }
</script>

{#if showAlert}
    <div class="max-w-lg mx-auto px-8">
        <div
            class="alert alert-success py-10 rounded-none mx-auto text-center block"
        >
            <p class=" mx-auto">Profile data updated successfully!
        </p>
        </div>
    </div>
{/if}

{#if user && user.user !== undefined}
    <section class="profile__container">
        <div class="left__container">
            <div class="left__container--lists">
                <div class="left__items">
                    <button
                        class="btn__input"
                        on:click={() => {
                            changeView('settings')
                        }}
                    >
                        <i class="fas fa-gear" />
                        Settings
                    </button>
                </div>
                <div class="left__items">
                    <button
                        class="btn__input"
                        on:click={() => {
                            changeView('books')
                        }}
                    >
                        <i class="fas fa-bag-shopping" />
                        My Books
                    </button>
                </div>
                <div class="left__items">
                    <button
                        class="btn__input"
                        on:click={() => {
                            changeView('reviews')
                        }}
                    >
                        <i class="fa-regular fa-star" />
                        My Reviews
                    </button>
                </div>
                <div class="left__items">
                    <button
                        class="btn__input"
                        on:click={() => {
                            changeView('billings')
                        }}
                    >
                        <i class="fa-regular fa-credit-card" />
                        Billings
                    </button>
                </div>
            </div>
        </div>
        <div class="right__container">
            <h3 class="right__container--title">Your account settings</h3>
            <div class="right__items">
                <div class="right__items--container">
                    <div class="form__item--first">
                        <form
                            enctype="multipart/form-data"
                            on:submit|preventDefault={handleAccountChange}
                        >
                            <label for="name">Name</label>
                            <input
                                bind:value={name}
                                type="text"
                                name="name"
                                id="name"
                                placeholder={user.user.name}
                            />
                            <label for="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder={user.user.email}
                                bind:value={email}
                            />
                            <br />
                            <div class="profile__img--cover btn h-fit">
                                <label for="profile" class="relative">
                                    {#if user.user.photo}
                                        <img
                                            src="users/{user.user.photo}"
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
                                    name="profile"
                                    id="profile"
                                    accept="image/*"
                                    on:change={handleImageChange}
                                />
                            </div>
                            <button class="submit" type="submit"
                                >Save changes</button
                            >
                        </form>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div class="form__item--second">
                        <h3 class="right__container--title">Password change</h3>
                        <form>
                            <label for="currentPass">Current password</label>
                            <input
                                type="password"
                                name="currentPass"
                                id="currentPass"
                            />
                            <label for="newPass">New password</label>
                            <input
                                type="password"
                                name="newPass"
                                id="newPass"
                            />
                            <label for="confirmPass">Confirm password</label>
                            <input
                                type="password"
                                name="confirmPass"
                                id="confirmPass"
                            />

                            <button type="submit" class="submit"
                                >Save Password</button
                            >
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
{:else}
    <div class="alert alert-error max-w-md mx-auto animate-pulse">
        Access Denied
    </div>
    <br /><a href="/login" class="btn btn-link mx-auto w-full"
        >Login to view this page</a
    >
{/if}

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
