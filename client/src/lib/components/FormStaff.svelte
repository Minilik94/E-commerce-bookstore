<script lang="ts">
    import type { User } from "./type"

    export let user: User
    export let data

    let selectedImage = '/default.jpg'
    let selectedSection = 'settings'

    const headers = {
        Authorization: `Bearer ${data.session}`,
        'Content-Type': 'multipart/form-data'
    }

    const formData = new FormData()

    // @ts-ignore
    const changeView = (/** @type {string} */ section: string) => {
        selectedSection = section
    }

    /**
     * @param {{ target: any; }} event
     */
    function handleImageChange(event: { target: any }) {
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
</script>

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
                        action="?/changeUserDetails"
                        method="POST"
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
                        <div class="profile__img--cover btn h-fit">
                            <label for="profile" class="relative">
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
                            name="currentPassword"
                            id="currentPassword"
                        />
                        <label for="newPass">New password</label>
                        <input type="password" name="password" id="password" />
                        <label for="passwordConfirm">Confirm password</label>
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
