<script>
  export let data;
  const { products } = data;
  const companyID = data.companyID;
  console.log('Products:', data);
  console.log('Company ID:', data.companyID);
</script>

<main>
  <h1>Admin Page for Company ${companyID}</h1>
  {#if products.length > 0}
      <ul>
          {#each products as product}
              <li>{product.name}</li>
          {/each}
      </ul>
  {:else}
      <p>No products found.</p>
  {/if}
</main>
