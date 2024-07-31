<script>
  export let data;
  const { products, company } = data; 
  const companyID = data.companyID;
  function navigateToAddProduct() {
    window.location.href = `/companies/${companyID}/agregar_producto`;
  }
</script>

<main>
  <h1>Admin Page for Company {company.companyName}</h1>
  <button on:click={navigateToAddProduct} class="add-product-btn">Agregar Producto</button>
  {#if products.length > 0}
    <div class="products-grid">
      {#each products as product}
        <div class="product-card">
          <div class="product-details">
            <h2 class="product-name">{product.name}</h2>
            <p class="product-price">${product.price.toFixed(2)}</p>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <p>No products found.</p>
  {/if}
</main>

<style>
  main {
    padding: 20px;
    font-family: Arial, sans-serif;
    max-width: 1200px;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2em;
  }

  .add-product-btn {
    display: block;
    margin: 0 auto 20px auto;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .add-product-btn:hover {
    background-color: #0056b3;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }

  .product-card {
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: box-shadow 0.3s ease;
    padding: 20px;
  }

  .product-card:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  .product-name {
    font-size: 1.5em;
    margin: 10px 0;
    text-align: center;
  }

  .product-price {
    font-size: 1.2em;
    color: #333;
    text-align: center;
    font-weight: bold;
  }
</style>
