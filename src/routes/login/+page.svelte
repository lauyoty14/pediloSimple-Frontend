<script> 
  let email = '';
  let password = '';
  let companyName = '';
  let cuit = '';
  let phoneNumber = '';
  let contact = '';
  let deliveryZone = '';
  let hours = '';
  let address = '';

  // Función para manejar el envío del formulario
  async function handleSubmit(event) {
    event.preventDefault();

    // Aquí puedes hacer la lógica de autenticación, por ejemplo, enviando los datos a tu servidor
    try {
      const response = await fetch('http://localhost:8081/v1/clients/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Inicio de sesión exitoso', data);
        const { companyId } = data;

        if (companyId) {
          // Redirigir a la página de la compañía
          window.location.href = `/companies/${companyId}`;
          ;
        } else {
          console.error('Company ID not found in response');
        }
      } else {
        console.error('Error en el inicio de sesión', data.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="email" bind:value={email} placeholder="Correo electrónico" required>
    <input type="password" bind:value={password} placeholder="Contraseña" required>
    <button type="submit">Iniciar sesión</button>
</form>

<style>
    form {
        max-width: 300px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    input {
        display: block;
        width: 100%;
        margin: 10px 0;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    button {
        width: 100%;
        padding: 10px;
        font-size: 16px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover {
        background-color: #45a049;
    }
</style>