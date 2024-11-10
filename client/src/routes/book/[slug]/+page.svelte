<script>
    // @ts-nocheck

    export let data
    const { book, reviewData } = data
    // console.log(data, 'book detail')
    let showdata = true
    // setTimeout(() => {
    //     showdata = true
    // }, 1000)
</script>

{#if !showdata || data === undefined}
    Loading...
{:else}
    <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap px-2">
                <img
                    alt="ecommerce"
                    class="lg:w-2/6 w-1/ mx-auto object-cover object-center rounded border border-gray-200"
                    src="/books/{book.coverImage}"
                />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2
                        class="text-sm title-font text-gray-500 tracking-widest"
                    >
                        {book.author}
                    </h2>
                    <h1
                        class="text-gray-900 text-3xl title-font font-medium mb-1"
                    >
                        {book.title}

                        <div
                            class="btn h-fit border text-sx my-6 cursor-pointer active:animate-none"
                        >
                            <div
                                class="btn active:scale-0 animate-none cursor-pointer text-xs"
                            >
                                Category: {book.category}
                            </div>
                            <div
                                class="btn active:scale-0 animate-none cursor-pointer text-xs"
                            >
                                Downloads: {book.downloads}
                            </div>
                            <div
                                class="btn active:scale-0 animate-none cursor-pointer text-xs"
                            >
                                Recommendations: {book.recommendations}
                            </div>
                            <div
                                class="btn active:scale-0 animate-none cursor-pointer text-xs"
                            >
                                Social Media Mentions: {book.socialMediaMentions}
                            </div>
                            <div
                                class="btn active:scale-0 animate-none cursor-pointer text-xs"
                            >
                                Publisher: {book.publisher}
                            </div>
                        </div>
                    </h1>
                    <div class="flex mb-4">
                        <span class="flex items-center">
                            <p class="mr-2">
                                {book.ratingAverage}
                            </p>
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4 text-red-500"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                ></path>
                            </svg>
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4 text-red-500"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                ></path>
                            </svg>
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4 text-red-500"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                ></path>
                            </svg>
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4 text-red-500"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                ></path>
                            </svg>
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4 text-red-500"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                ></path>
                            </svg>
                            <span class="text-gray-600 ml-3"
                                >{book.ratingQuantity} Reviews</span
                            >
                        </span>
                        <span
                            class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200"
                        >
                            <!-- svelte-ignore a11y-missing-attribute -->
                            <a class="text-gray-500">
                                <svg
                                    fill="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                    ></path>
                                </svg>
                            </a>
                            <!-- svelte-ignore a11y-missing-attribute -->
                            <a class="ml-2 text-gray-500">
                                <svg
                                    fill="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                                    ></path>
                                </svg>
                            </a>
                            <!-- svelte-ignore a11y-missing-attribute -->
                            <a class="ml-2 text-gray-500">
                                <svg
                                    fill="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                                    ></path>
                                </svg>
                            </a>
                        </span>
                    </div>
                    <p class="leading-relaxed">
                        {book.description}
                    </p>
                    <div class="flex border-r-emerald-700 justify-between my-8">
                        <span
                            class="title-font font-medium text-2xl text-gray-900"
                            >${book.price}</span
                        >
                        <form
                            action="?/checkout"
                            method="POST"
                        >
                            <button
                                class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                                type="submit">Buy now</button
                            >
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <p class="text-center my-10">What did others say about {book.title}</p>

    <div
        class="relative md:order-2 md:mt-20 max-h-96 overflow-auto grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto"
    >
        {#each reviewData.data.doc as review}
            <div
                class="relative grid mx-auto max-w-lg w-2/3 md:w-11/12 grid-cols-1 border rounded-lg shadow-xl gap-6 md:max-w-screen-md"
            >
                <div
                    class="relative flex flex-col overflow-hidden rounded-lg bg-white px-2"
                >
                    <svg
                        class="text-slate-600 absolute right-5 bottom-6 text-7xl"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                        ><path
                            fill="currentColor"
                            d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z"
                        ></path></svg
                    >
                    <div
                        class="lg:py- flex flex-1 flex-col justify-between p-6 lg:px-7"
                    >
                        <div class="flex-1">
                            <blockquote class="mt-4 flex-1">
                                <p
                                    class="text-xl leading-snug text-black"
                                    data-svelte-h="svelte-1uk2ucm"
                                >
                                    {review.review}
                                </p>
                            </blockquote>
                        </div>

                        <div class="flex items-center">
                            <svg
                                class="w-4 h-4 text-yellow-300 me-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                />
                            </svg>
                            <svg
                                class="w-4 h-4 text-yellow-300 me-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                />
                            </svg>
                            <svg
                                class="w-4 h-4 text-yellow-300 me-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                />
                            </svg>
                            <svg
                                class="w-4 h-4 text-yellow-300 me-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                />
                            </svg>
                            <svg
                                class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                />
                            </svg>
                            <p
                                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400"
                            >
                                {review.rating}
                            </p>
                            <p
                                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400"
                            >
                                out of
                            </p>
                            <p
                                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400"
                            >
                                5
                            </p>
                        </div>

                        <div class="mt-2 flex items-center">
                            <img
                                class="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                                src="/users/{review.user.photo}"
                                alt=""
                            />
                            <div class="ml-4">
                                <p class="text-base font-bold text-blue-900">
                                    {review.user.name}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- </div> -->
        {/each}
    </div>
{/if}

<style>
    .overflow-auto::-webkit-scrollbar {
        display: none; /* Hide the scrollbar */
    }
</style>
