<script>
    import { fade } from 'svelte/transition'
    export let data
</script>

<div
    class="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-50 py-10"
>
    <!-- Header Section -->
    <div class="text-center mb-12">
        <h1 class="text-5xl font-extrabold text-gray-800 mb-4">
            {#if !data?.books || data?.books.length === 0}
                Your Library is Empty 📚
            {:else}
                Welcome to Your Library ✨
            {/if}
        </h1>
        <p class="text-lg text-gray-600">
            {#if !data?.books || data?.books.length === 0}
                Looks like you haven't purchased any books yet. Discover new
                favorites and grow your library.
            {:else}
                Explore your collection, revisit classics, or dive into new
                adventures!
            {/if}
        </p>
    </div>

    <!-- Content Section -->
    <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto"
    >
        {#if !data?.books || data?.books.length === 0}
            <!-- Empty State -->
            <div
                class="w-full flex flex-col items-center bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105"
            >
                <img
                    src="https://via.placeholder.com/150?text=No+Books"
                    alt="No books available"
                    class="mb-6 w-32 h-32 opacity-70"
                />
                <h2 class="text-2xl font-bold text-gray-800 mb-4">
                    No Purchased Books
                </h2>
                <p class="text-gray-600 text-center mb-6">
                    Start your reading journey by purchasing your first book.
                </p>
                <a
                    href="/shop"
                    class="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition"
                >
                    Explore Books
                </a>
            </div>
        {:else}
            <!-- Books Display -->
            {#each data?.books as book}
                <div
                    class="group bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                    in:fade
                >
                    <a href="/book/{book.slug}">
                        <div class="relative">
                            <img
                                class="w-full h-64 object-cover"
                                src="https://rebook.s3.eu-north-1.amazonaws.com/books/{book.coverImage}"
                                alt={book.title}
                            />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-70 transition duration-300"
                            ></div>
                            <div
                                class="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300"
                            >
                                <h3 class="text-xl font-bold">{book.title}</h3>
                                <p class="text-sm">
                                    {book.author || 'Unknown Author'}
                                </p>
                            </div>
                        </div>
                    </a>
                    <div class="p-4">
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-gray-700 font-bold text-lg">
                                {book.price ? `$${book.price}` : 'Free'}
                            </span>
                            <span
                                class="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded"
                            >
                                {book.ratingAverage || 'N/A'} ★
                            </span>
                        </div>
                        <p class="text-gray-600 text-sm line-clamp-2">
                            {book.description || 'No description available.'}
                        </p>
                        <a
                            href="/book/{book.slug}"
                            class="mt-4 block text-center text-blue-600 font-semibold hover:underline"
                        >
                            View Details
                        </a>
                    </div>
                </div>
            {/each}
        {/if}
    </div>
</div>
