<script lang="ts">
    export let totalPages: Number
    export let currentPage: Number
</script>

<nav aria-label="Page navigation example " class="self-center">
    <ul class="flex items-center -space-x-px h-8 text-sm">
        {#each Array(totalPages) as _, idx}
            <li>
                <a
                    href="/books/{idx + 1}"
                    class={currentPage === idx
                        ? 'flex items-center justify-center px-3 h-8 leading-tight text-blue-50 bg-black  border border-gray-300  hover:text-gray-700 cursor-not-allowed'
                        : 'flex items-center justify-center px-3 h-8 leading-tight text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'}
                    >{idx + 1}</a
                >
            </li>
        {/each}
    </ul>
</nav>
