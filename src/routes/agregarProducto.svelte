<script context="module">
  export async function load({ params }) {
    return {
      props: {
        id: params.id
      }
    };
  }
</script>

<script>
  export let id;
  let name = '';
  let price = 0;

  function handleAddProduct(event) {
    event.preventDefault();
    // Lógica para enviar el nuevo producto al backend
    console.log('Producto agregado:', { name, price, companyId: id });
  }
</script>

<main>
  <h1>Agregar Producto para la Compañía {id}</h1>
  <form on:submit={handleAddProduct}>
    <div>
      <label for="name">Nombre del Producto:</label>
      <input type="text" id="name" bind:value={name} required>
    </div>
    <div>
      <label for="price">Precio:</label>
      <input type="number" id="price" bind:value={price} required>
    </div>
    <button type="submit">Agregar Producto</button>
  </form>
</main>
