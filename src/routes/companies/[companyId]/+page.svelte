<script>
  export let data;
  const { products } = data;
  const companyID = data.companyID;
  console.log('Products:', data);
  console.log('Company ID:', data.companyID);
  function navigateToAddProduct() {
        window.location.href = `/companies/${companyID}/agregar_producto`;
  }
</script>

<main>
  <h1>Admin Page for Company ${companyID}</h1>
  <button on:click={navigateToAddProduct}>Agregar Producto</button>
  {#if products.length > 0}
      <ul>
          {#each products as product}
              <li>{product.name}</li>
              <li>{product.price}</li>
          {/each}
      </ul>
  {:else}
      <p>No products found.</p>
  {/if}
</main>
