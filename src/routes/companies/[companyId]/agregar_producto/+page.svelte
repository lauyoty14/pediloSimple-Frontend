<script>
  export let data;
  const companyID = data.companyID;
  let productName = '';
  let price = '';
  async function handleAddProduct(event){
    event.preventDefault();

        const response = await fetch(`http://localhost:8081/v1/products/${companyID}/admin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: productName,
                price: parseFloat(price)
            })
        });

        if (response.ok) {
            const newProduct = await response.json();
            console.log('Product added:', newProduct);
            // Redirigir o mostrar un mensaje de éxito según sea necesario
        } else {
            const error = await response.json();
            console.error('Error adding product:', error);
            // Manejar el error según sea necesario
        }
  }
</script>

<main>
  <h1>Agregar Producto</h1>
  <p>Company ID: {companyID}</p>

  <!-- Formulario para agregar producto -->
  <form on:submit={handleAddProduct}>
    <label>
        Nombre del producto:
        <input type="text" bind:value={productName} required>
    </label>
    <label>
        Precio:
        <input type="number" bind:value={price} required>
    </label>
    <button type="submit">Agregar</button>
</form>
</main>
