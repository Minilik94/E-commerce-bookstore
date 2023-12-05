<script>
    import { page } from '$app/stores'
    // @ts-ignore
    import FaShoppingCart from 'svelte-icons/fa/FaShoppingCart.svelte'
    import FaUserAlt from 'svelte-icons/fa/FaUserAlt.svelte'
    import FaSignOutAlt from 'svelte-icons/fa/FaSignOutAlt.svelte'
    import '../style.css'
    import { redirect } from '@sveltejs/kit'
    import { goto } from '$app/navigation'

    $: console.log($page, 'page')

    export let data
    let { user } = data
    console.log(user.data.user.photo, 'parent layout')
    console.log(data, 'data parent layout')

    const logout = () => {
        // Perform any additional logout logic if needed
        // For example, you might want to clear tokens, etc.

        // Set user to null
        user = null
        console.log(user, 'from logout')
        // $page.data.user = store.set('null')

        // Navigate to the login page or any other desired page
        redirect(307, '/login')
    }
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

<div class="navbar max-w-7xl mx-auto">
    <div class="flex-1">
        <!-- svelte-ignore a11y-missing-attribute -->
        <a
            href="/"
            class="btn border-none bg-transparent hover:bg-transparent text-xl"
            ><svg
                data-v-6805eed4=""
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="100%"
                height="100%"
                viewBox="0 0 340.000000 250.000000"
                preserveAspectRatio="xMidYMid meet"
                color-interpolation-filters="sRGB"
                style="margin: auto;"
            >
                <rect
                    data-v-6805eed4=""
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="#ffffff"
                    fill-opacity="1"
                    class="background"
                />
                <rect
                    data-v-6805eed4=""
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="url(#watermark)"
                    fill-opacity="1"
                    class="watermarklayer"
                />
                <g
                    data-v-6805eed4=""
                    fill="#134f5c"
                    class="icon-text-wrapper icon-svg-group iconsvg"
                    transform="translate(65.19999694824219,72.67766189575195)"
                    ><g
                        class="iconsvg-imagesvg"
                        transform="translate(74.80000305175781,0)"
                        ><g
                            ><rect
                                fill="#134f5c"
                                fill-opacity="0"
                                stroke-width="2"
                                x="0"
                                y="0"
                                width="60"
                                height="61.64468006411047"
                                class="image-rect"
                            />
                            <svg
                                filter="url(#colors8676116219)"
                                x="0"
                                y="0"
                                width="60"
                                height="61.64468006411047"
                                filtersec="colorsf506225514"
                                class="image-svg-svg primary"
                                style="overflow: visible;"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    x="0px"
                                    y="0px"
                                    viewBox="3 1.711355447769165 94.00005340576172 96.57657623291016"
                                    enable-background="new 0 0 100 100"
                                    xml:space="preserve"
                                    ><path
                                        d="M65.454,3.129c-0.026-0.735-0.647-1.442-1.385-1.417L50.721,2.185c-0.738,0.026-1.307,0.858-1.281,1.597l0.321,9.046  l16.017-0.569L65.454,3.129z"
                                    /><rect
                                        x="51.172"
                                        y="17.86"
                                        transform="matrix(0.9994 -0.0353 0.0353 0.9994 -1.82 2.1228)"
                                        width="16.026"
                                        height="69.45"
                                    /><path
                                        d="M52.745,97.213c0.026,0.73,0.636,1.096,1.375,1.074l13.348-0.475c0.738-0.026,1.317-0.517,1.292-1.252l-0.149-4.216  l-16.016,0.563L52.745,97.213z"
                                    /><path
                                        d="M3,96.743c0,0.735,0.597,1.336,1.335,1.336h13.355c0.738,0,1.336-0.601,1.336-1.336V39.314H3V96.743z"
                                    /><path
                                        d="M19.027,13.938c0-0.738-0.598-1.335-1.336-1.335H4.336C3.598,12.603,3,13.201,3,13.938v9.349h16.027V13.938z"
                                    /><path
                                        d="M45.738,24.753c0-0.738-0.597-1.335-1.335-1.335H25.705c-0.738,0-1.335,0.597-1.335,1.335v9.219h21.369V24.753z"
                                    /><path
                                        d="M24.37,44.657v52.086c0,0.735,0.597,1.336,1.335,1.336h18.698c0.738,0,1.335-0.601,1.335-1.336V44.657H24.37z"
                                    /><path
                                        d="M81.102,96.926c0.104,0.735,0.777,1.241,1.513,1.138l13.22-1.879c0.73-0.104,1.252-0.673,1.153-1.408l-8.833-62.25  l-15.87,2.254L81.102,96.926z"
                                    /><path
                                        d="M86.09,17.979c-0.104-0.73-0.777-1.237-1.508-1.132l-13.225,1.875c-0.73,0.102-1.252,0.673-1.148,1.403l1.325,9.362  l15.87-2.251L86.09,17.979z"
                                    /></svg
                                ></svg
                            >
                            <defs
                                ><filter id="colors8676116219"
                                    ><feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0.07421875  0 0 0 0 0.30859375  0 0 0 0 0.359375  0 0 0 1 0"
                                        class="icon-fecolormatrix"
                                    /></filter
                                >
                                <filter id="colorsf506225514"
                                    ><feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0.99609375  0 0 0 0 0.99609375  0 0 0 0 0.99609375  0 0 0 1 0"
                                        class="icon-fecolormatrix"
                                    /></filter
                                >
                                <filter id="colorsb9316803498"
                                    ><feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
                                        class="icon-fecolormatrix"
                                    /></filter
                                ></defs
                            ></g
                        ></g
                    >
                    <g transform="translate(0,68.6446762084961)"
                        ><g
                            data-gra="path-name"
                            fill-rule=""
                            class="tp-name iconsvg-namesvg"
                            ><g transform="scale(1)"
                                ><g
                                    ><path
                                        d="M3.4 0L10.15 0 10.15-12.35 18-12.35 24.55 0 32.15 0 24-13.5C28.25-15.6 30.15-20.2 30.15-23.95 30.15-31 25.75-35 17.85-35L3.4-35ZM10.15-17.95L10.15-29.1 17.1-29.1C21.6-29.1 23.8-27.25 23.8-23.8 23.8-20.1 21.2-17.95 17.15-17.95ZM67.7 0L82.1 0C92.85 0 95.85-4.2 95.85-9.75 95.85-14.85 91.1-17.7 85.4-17.95L85.4-18.2C89.75-18.7 92.75-21.35 92.75-26.05 92.75-30.95 90.5-35 80.75-35L67.7-35 67.7-29.35 80-29.35C84.45-29.35 86.35-28.35 86.35-25.3 86.35-21.7 83.55-20.95 79.75-20.95L35.4-20.95 35.4-14.85 80.4-14.85C85.35-14.85 88.7-13.6 88.7-10.1 88.7-6.6 86.15-5.7 80.5-5.7L67.7-5.7ZM61.3-28.45L61.3-35 35.4-35 35.4-28.45ZM35.4 0L61.3 0 61.3-6.6 35.4-6.6ZM116.55-35.5L116.55-29.1C123.15-29.1 128.15-25.3 128.15-17.5 128.15-9.7 123.15-5.85 116.55-5.85 110.15-5.85 105.2-9.7 105.2-17.5 105.2-17.5 98.4-17.5 98.4-17.5 98.4-5.95 106.45 0.5 116.55 0.5 126.9 0.5 134.9-5.45 134.9-17.5 134.9-29 126.9-35.5 116.55-35.5ZM156.7-35.5L156.7-29.1C163.3-29.1 168.3-25.3 168.3-17.5 168.3-9.7 163.3-5.85 156.7-5.85 150.3-5.85 145.35-9.7 145.35-17.5 145.35-17.5 138.55-17.5 138.55-17.5 138.55-5.95 146.6 0.5 156.7 0.5 167.05 0.5 175.05-5.45 175.05-17.5 175.05-29 167.05-35.5 156.7-35.5ZM187.05-35L180.3-35 180.3 0 187.05 0ZM191.9-14.65L204.15 0 213 0 196.65-19.4 212.25-35 203.4-35 191.95-22.75Z"
                                        transform="translate(-3.4000000953674316, 35.5)"
                                    /></g
                                >
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!----></g
                            ></g
                        >
                        <!----></g
                    ></g
                ><defs v-gra="od" /></svg
            ></a
        >
    </div>
    <div class="flex-none">
        <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                <div class="indicator">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        /></svg
                    >
                    <span class="badge badge-sm indicator-item">8</span>
                </div>
            </div>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <div
                tabindex="0"
                class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
                <div class="card-body">
                    <span class="font-bold text-lg">8 Items</span>
                    <span class="text-info">Subtotal: $999</span>
                    <div class="card-actions">
                        <button
                            class="btn btn-primary btn-block"
                            on:click={() => {
                                goto('/cart')
                            }}>View cart</button
                        >
                    </div>
                </div>
            </div>
        </div>
        {#if user !== null && user !== undefined}
            <div class="dropdown dropdown-end">
                <div
                    tabindex="0"
                    role="button"
                    class="btn btn-ghost btn-circle avatar"
                >
                    <div class="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="/users/{user.data.user.photo}"
                        />
                    </div>
                </div>
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li></li>
                    <li><a href="/profile">Settings</a></li>
                    <li><a href="/login">Logout</a></li>
                </ul>
            </div>
        {:else}
            <li class="list-none">
                <a
                    href="/login"
                    class="no-underline text-sm border-none btn h-6 min-h-0 px-6 btn-ghost"
                >
                    Login
                </a>
            </li>
        {/if}
    </div>
</div>

<slot />


<footer class="px-4 divide-y ">
    <div
        class="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0"
    >
        <div class="lg:w-1/3">
            <a class="footer__logo--img fa-bounce" href="/">
                <svg
                    data-v-6805eed4=""
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="100%"
                    height="100%"
                    viewBox="0 0 340.000000 250.000000"
                    preserveAspectRatio="xMidYMid meet"
                    color-interpolation-filters="sRGB"
                    style="margin: auto;"
                >
                    <rect
                        data-v-6805eed4=""
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="#ffffff"
                        fill-opacity="1"
                        class="background"
                    />
                    <rect
                        data-v-6805eed4=""
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="url(#watermark)"
                        fill-opacity="1"
                        class="watermarklayer"
                    />
                    <g
                        data-v-6805eed4=""
                        fill="#134f5c"
                        class="icon-text-wrapper icon-svg-group iconsvg"
                        transform="translate(65.19999694824219,72.67766189575195)"
                        ><g
                            class="iconsvg-imagesvg"
                            transform="translate(74.80000305175781,0)"
                            ><g
                                ><rect
                                    fill="#134f5c"
                                    fill-opacity="0"
                                    stroke-width="2"
                                    x="0"
                                    y="0"
                                    width="60"
                                    height="61.64468006411047"
                                    class="image-rect"
                                />
                                <svg
                                    filter="url(#colors8676116219)"
                                    x="0"
                                    y="0"
                                    width="60"
                                    height="61.64468006411047"
                                    filtersec="colorsf506225514"
                                    class="image-svg-svg primary"
                                    style="overflow: visible;"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        x="0px"
                                        y="0px"
                                        viewBox="3 1.711355447769165 94.00005340576172 96.57657623291016"
                                        enable-background="new 0 0 100 100"
                                        xml:space="preserve"
                                        ><path
                                            d="M65.454,3.129c-0.026-0.735-0.647-1.442-1.385-1.417L50.721,2.185c-0.738,0.026-1.307,0.858-1.281,1.597l0.321,9.046  l16.017-0.569L65.454,3.129z"
                                        /><rect
                                            x="51.172"
                                            y="17.86"
                                            transform="matrix(0.9994 -0.0353 0.0353 0.9994 -1.82 2.1228)"
                                            width="16.026"
                                            height="69.45"
                                        /><path
                                            d="M52.745,97.213c0.026,0.73,0.636,1.096,1.375,1.074l13.348-0.475c0.738-0.026,1.317-0.517,1.292-1.252l-0.149-4.216  l-16.016,0.563L52.745,97.213z"
                                        /><path
                                            d="M3,96.743c0,0.735,0.597,1.336,1.335,1.336h13.355c0.738,0,1.336-0.601,1.336-1.336V39.314H3V96.743z"
                                        /><path
                                            d="M19.027,13.938c0-0.738-0.598-1.335-1.336-1.335H4.336C3.598,12.603,3,13.201,3,13.938v9.349h16.027V13.938z"
                                        /><path
                                            d="M45.738,24.753c0-0.738-0.597-1.335-1.335-1.335H25.705c-0.738,0-1.335,0.597-1.335,1.335v9.219h21.369V24.753z"
                                        /><path
                                            d="M24.37,44.657v52.086c0,0.735,0.597,1.336,1.335,1.336h18.698c0.738,0,1.335-0.601,1.335-1.336V44.657H24.37z"
                                        /><path
                                            d="M81.102,96.926c0.104,0.735,0.777,1.241,1.513,1.138l13.22-1.879c0.73-0.104,1.252-0.673,1.153-1.408l-8.833-62.25  l-15.87,2.254L81.102,96.926z"
                                        /><path
                                            d="M86.09,17.979c-0.104-0.73-0.777-1.237-1.508-1.132l-13.225,1.875c-0.73,0.102-1.252,0.673-1.148,1.403l1.325,9.362  l15.87-2.251L86.09,17.979z"
                                        /></svg
                                    ></svg
                                >
                                <defs
                                    ><filter id="colors8676116219"
                                        ><feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0.07421875  0 0 0 0 0.30859375  0 0 0 0 0.359375  0 0 0 1 0"
                                            class="icon-fecolormatrix"
                                        /></filter
                                    >
                                    <filter id="colorsf506225514"
                                        ><feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0.99609375  0 0 0 0 0.99609375  0 0 0 0 0.99609375  0 0 0 1 0"
                                            class="icon-fecolormatrix"
                                        /></filter
                                    >
                                    <filter id="colorsb9316803498"
                                        ><feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
                                            class="icon-fecolormatrix"
                                        /></filter
                                    ></defs
                                ></g
                            ></g
                        >
                        <g transform="translate(0,68.6446762084961)"
                            ><g
                                data-gra="path-name"
                                fill-rule=""
                                class="tp-name iconsvg-namesvg"
                                ><g transform="scale(1)"
                                    ><g
                                        ><path
                                            d="M3.4 0L10.15 0 10.15-12.35 18-12.35 24.55 0 32.15 0 24-13.5C28.25-15.6 30.15-20.2 30.15-23.95 30.15-31 25.75-35 17.85-35L3.4-35ZM10.15-17.95L10.15-29.1 17.1-29.1C21.6-29.1 23.8-27.25 23.8-23.8 23.8-20.1 21.2-17.95 17.15-17.95ZM67.7 0L82.1 0C92.85 0 95.85-4.2 95.85-9.75 95.85-14.85 91.1-17.7 85.4-17.95L85.4-18.2C89.75-18.7 92.75-21.35 92.75-26.05 92.75-30.95 90.5-35 80.75-35L67.7-35 67.7-29.35 80-29.35C84.45-29.35 86.35-28.35 86.35-25.3 86.35-21.7 83.55-20.95 79.75-20.95L35.4-20.95 35.4-14.85 80.4-14.85C85.35-14.85 88.7-13.6 88.7-10.1 88.7-6.6 86.15-5.7 80.5-5.7L67.7-5.7ZM61.3-28.45L61.3-35 35.4-35 35.4-28.45ZM35.4 0L61.3 0 61.3-6.6 35.4-6.6ZM116.55-35.5L116.55-29.1C123.15-29.1 128.15-25.3 128.15-17.5 128.15-9.7 123.15-5.85 116.55-5.85 110.15-5.85 105.2-9.7 105.2-17.5 105.2-17.5 98.4-17.5 98.4-17.5 98.4-5.95 106.45 0.5 116.55 0.5 126.9 0.5 134.9-5.45 134.9-17.5 134.9-29 126.9-35.5 116.55-35.5ZM156.7-35.5L156.7-29.1C163.3-29.1 168.3-25.3 168.3-17.5 168.3-9.7 163.3-5.85 156.7-5.85 150.3-5.85 145.35-9.7 145.35-17.5 145.35-17.5 138.55-17.5 138.55-17.5 138.55-5.95 146.6 0.5 156.7 0.5 167.05 0.5 175.05-5.45 175.05-17.5 175.05-29 167.05-35.5 156.7-35.5ZM187.05-35L180.3-35 180.3 0 187.05 0ZM191.9-14.65L204.15 0 213 0 196.65-19.4 212.25-35 203.4-35 191.95-22.75Z"
                                            transform="translate(-3.4000000953674316, 35.5)"
                                        /></g
                                    >
                                    <!---->
                                    <!---->
                                    <!---->
                                    <!---->
                                    <!---->
                                    <!---->
                                    <!----></g
                                ></g
                            >
                            <!----></g
                        ></g
                    ><defs v-gra="od" /></svg
                >
            </a>
        </div>
        <div
            class="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4"
        >
            <div class="space-y-3">
                <h3 class="tracki uppercase dark:text-gray-50">Product</h3>
                <ul class="space-y-1">
                    <li>
                        <a rel="noopener noreferrer" href="#">Features</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#">Integrations</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#">Pricing</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#">FAQ</a>
                    </li>
                </ul>
            </div>
            <div class="space-y-3">
                <h3 class="tracki uppercase dark:text-gray-50">Company</h3>
                <ul class="space-y-1">
                    <li>
                        <a rel="noopener noreferrer" href="#">Privacy</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#"
                            >Terms of Service</a
                        >
                    </li>
                </ul>
            </div>
            <div class="space-y-3">
                <h3 class="uppercase dark:text-gray-50">Developers</h3>
                <ul class="space-y-1">
                    <li>
                        <a rel="noopener noreferrer" href="#">Public API</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#">Documentation</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#">Guides</a>
                    </li>
                </ul>
            </div>
            <div class="space-y-3">
                <div class="uppercase dark:text-gray-50">Social media</div>
                <div class="flex justify-start space-x-3">
                    <a
                        rel="noopener noreferrer"
                        href="#"
                        title="Facebook"
                        class="flex items-center p-1"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            class="w-5 h-5 fill-current"
                        >
                            <path
                                d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"
                            ></path>
                        </svg>
                    </a>
                    <a
                        rel="noopener noreferrer"
                        href="#"
                        title="Twitter"
                        class="flex items-center p-1"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 fill-current"
                        >
                            <path
                                d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"
                            ></path>
                        </svg>
                    </a>
                    <a
                        rel="noopener noreferrer"
                        href="#"
                        title="Instagram"
                        class="flex items-center p-1"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            fill="currentColor"
                            class="w-5 h-5 fill-current"
                        >
                            <path
                                d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="py-6 text-sm text-center dark:text-gray-400">
        © {new Date().getFullYear()} Company Co. All rights reserved.
    </div>
</footer>

<style>
    * {
        box-sizing: border-box;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 100vw;
        width: 100%;
        margin: auto;
        box-shadow: 0 0 4px 2px rgba(9, 9, 99, 0.4);
    }
    .header-container {
        display: flex;
        max-width: 1400px;
        width: 100%;
        align-items: center;
        margin: auto;
        justify-content: space-between;
        padding: 1rem;
    }
    .header__logo--img {
        height: 60px;
        width: 80px;
        border-radius: 20px;
    }
    .header__links {
        display: flex;
        justify-content: center;
        gap: 20px;
        align-items: center;
    }
    a.header__logo--img {
        font-size: 24px;
        text-decoration: none;
    }

    .footer {
        box-shadow: 0 0 4px 2px rgba(9, 9, 99, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        margin-top: 80px;
    }
    .row {
        display: flex;
        max-width: 1400px;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    .social-links a {
        display: inline-block;
        height: 40px;
        width: 40px;
        background-color: rgb(19, 79, 92);
        text-align: center;
        line-height: 40px;
        border-radius: 50%;
        color: #ffffff;
        transition: background-color 0.3s ease;
    }
    .social-links a:hover {
        background-color: #ffffff;
        color: #242424;
    }
    .footer__logo--img svg {
        height: 80px;
    }
</style>
