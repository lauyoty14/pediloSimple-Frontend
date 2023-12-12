<script>
  import { onMount } from 'svelte';
  import { readable, writable } from 'svelte/store';

  // Create a writable store to hold the list of products
  const products = writable([]);

  // Fetch the list of products using a GET request
  onMount(async () => {
    const response = await fetch('https://api.example.com/products');
    const data = await response.json();
    products.set(data);
  });
</script>

<h1>Administrar Productos</h1>

<ul>
  {#each $products as product}
    <li>{product.name} - {product.price}</li>
  {/each}
</ul>