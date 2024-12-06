<script lang="ts">
    import { fade } from "svelte/transition";
    import type { Books } from "./type";
  
    export let book: Books;
  </script>
  
  <div class="container mx-auto px-6 py-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {#each book as book}
        <div
          class="relative group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          in:fade
        >
          <!-- Book Cover -->
          <a href="/book/{book.slug}" class="block">
            <img
              class="object-cover h-64 w-full group-hover:scale-110 transition-transform duration-300"
              src="https://rebook.s3.eu-north-1.amazonaws.com/books/{book.coverImage}"
              alt="{book.title}"
            />
          </a>
  
          <!-- Book Info -->
          <div class="p-4">
            <a href="/book/{book.slug}">
              <h3
                class="text-lg font-semibold text-gray-900 hover:text-blue-500 transition-colors"
              >
                {book.title}
              </h3>
            </a>
            <p class="text-gray-600 text-sm mt-1 line-clamp-2">
              {book.description || "No description available for this book."}
            </p>
            <div class="flex items-center justify-between mt-4">
              <!-- Rating -->
              <div class="flex items-center text-yellow-400">
                {#each Array(Math.floor(book.ratingAverage)) as _, i}
                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.43h3.624c.969 0 1.371 1.24.588 1.81l-2.935 2.115 1.12 3.431c.3.92-.755 1.688-1.54 1.119L10 12.347l-2.928 2.115c-.784.57-1.838-.199-1.539-1.119l1.119-3.43-2.935-2.116c-.783-.569-.38-1.81.588-1.81h3.624l1.12-3.43z" />
                  </svg>
                {/each}
                {#if book.ratingAverage % 1 !== 0}
                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.43h3.624c.969 0 1.371 1.24.588 1.81l-2.935 2.115 1.12 3.431c.3.92-.755 1.688-1.54 1.119L10 12.347l-2.928 2.115c-.784.57-1.838-.199-1.539-1.119l1.119-3.43-2.935-2.116c-.783-.569-.38-1.81.588-1.81h3.624l1.12-3.43z" />
                  </svg>
                {/if}
                <span class="ml-2 text-sm text-gray-500">
                  {book.ratingAverage.toFixed(1)} / 5
                </span>
              </div>
              <!-- Price -->
              <span class="text-lg font-bold text-gray-800">${book.price}</span>
            </div>
          </div>
  
          <!-- Hover Button -->
          <div
            class="absolute inset-0 bg-blue-600 bg-opacity-0 flex items-center justify-center group-hover:bg-opacity-70 transition-colors duration-300"
          >
            <a
              href="/book/{book.slug}"
              class="opacity-0 group-hover:opacity-100 bg-white text-blue-600 font-bold py-2 px-6 rounded-lg shadow-lg transition-opacity duration-300"
            >
              View Details
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    /* Utility classes */
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  </style>
  