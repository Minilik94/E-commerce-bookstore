<script>
    import { page } from '$app/stores'
   
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

<header class="header">
    <div class="header-container">
        <a class="header__logo--img fa-bounce" href="/">
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
        <ul class="header__links">
            <li class="header__links--book">
                <a href="/books">
                    <abbr title="books">
                        <i class="fa-solid fa-book" />
                    </abbr>
                </a>
            </li>
            <li class="header__links--cart">
                <a href="cart">
                    <abbr title="cart">
                        <i class="fa-solid fa-cart-shopping" />
                    </abbr>
                </a>
            </li>
            <li class="header__links--profile">
                <a href="/profile">
                    <abbr title="Login">
                        <i class="fa-solid fa-user-plus" />
                    </abbr>
                </a>
            </li>
            <!-- <li class="header__links--login">
                <a href="/login">
                    <abbr title="logout">
                        <i class="fa-solid fa-right-to-bracket" />
                    </abbr>
                </a>
            </li> -->
        </ul>
    </div>
</header>

<slot />

<footer class="footer header">
    <div class="header-container">
        <div class="row">
            <div class="footer-col">
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
                <div class="social-links">
                    <a href="/"><i class="fab fa-facebook-f" /></a>
                    <a href="/"><i class="fab fa-twitter" /></a>
                    <a href="/"><i class="fab fa-instagram" /></a>
                    <a href="/"><i class="fab fa-linkedin-in" /></a>
                </div>
            </div>
        </div>
    </div>
</footer>

<style>
    * {
        margin: 0;
        padding: 0;
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
        /* box-shadow: 0 0 4px 2px rgba(9, 9, 99, 0.4); */
        max-width: 1000px;
        width: 100%;
        align-items: center;
        margin: auto;
        justify-content: space-between;
        padding: 1rem;
    }
    .header__logo--img {
        height: 60px;
        width: 80px;
        /* aspect-ratio: 4 / 1; */
        /* object-fit: contain; */
        border-radius: 20px;
    }
    .header__links {
        display: flex;
        justify-content: center;
    }
    .header__links li {
        list-style-type: none;
        margin: auto 12px;
        padding: 3px;
        margin-bottom: -5px;
        border-radius: 5px;
    }
    a {
        font-size: 24px;
        text-decoration: none;
    }
    .fa-solid {
        /* color: rgb(63, 63, 63); */
        color: rgb(19, 79, 92);
    }
    .fa-solid:hover {
        color: #000;
        text-decoration: none;
    }
    /* .fa-solid.fa-right-to-bracket:hover {
        color: #a32323;
    } */

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
        max-width: 1000px;
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
