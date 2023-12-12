<script>
    let company = '';
    let productName = '';
  
    function handleSubmit() {
      // Aca se mandan los datos al back
      console.log('Compañía:', company);
      console.log('Nombre del producto:', productName);
    }
</script>
  
<h1>Agregar Producto</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="company">Compañía:</label>
    <input type="text" id="company" bind:value={company}>
  
    <label for="productName">Nombre del producto:</label>
    <input type="text" id="productName" bind:value={productName}>
  
    <button type="submit">Guardar</button>
</form>

<style>
    form {
      max-width: 300px;
      margin: 0 auto;
    }
  
    label {
      display: block;
      margin-bottom: 5px;
    }
  
    input {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      box-sizing: border-box;
    }
  
    button {
      background-color: #4CAF50;
      color: white;
      padding: 10px 15px;
      border: none;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #45a049;
    }
</style>