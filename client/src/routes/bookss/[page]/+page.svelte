<script>
    import { page } from '$app/stores';
    export let data;
    let pageSize = 9
    $: totalItems = data.book.data.totalItems
    $: totalPages = Math.ceil(totalItems / pageSize)
    $: currentPage = Number($page.params.page) - 1
    $: console.log(currentPage);
</script>

<h1>Products</h1>

{#each data.book.data.doc as books}
    <p>{books.id} - {books.title}</p>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="/{books.coverImage}">
{/each}

<div class="pagination">
    {#each Array(totalPages) as _, idx}
        <a href="/bookss/{idx + 1}" class={currentPage === idx ? 'text-emerald-300' : ''}>{idx + 1}</a>
    {/each}
</div>



<style>
    /* Pagination Styles */
    img {
      height: 100px;
      width: 200px;
    }
    .pagination {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
  
    .pagination a {
      display: inline-block;
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      margin: 0 5px;
      border: 1px solid #ccc;
      border-radius: 50%;
      text-decoration: none;
      color: #555;
      transition: background-color 0.3s, color 0.8s;
    }
  
    .pagination a:hover {
      background-color: #eee;
      color: #333;
    }
  
    .pagination a:active,
    a:focus {
      background-color: #2FB468;
      color: #fff;
      font-weight: bold;
      animation: pulse 1s infinite;
    }
  
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  </style>
  