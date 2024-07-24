<script>
    let email = '';
    let companyName = '';
    let password = '';
    let cuit = '';
    let telephone = '';
    let contact = '';
    let deliveryZone = '';
    let businessHours = '';
    let address = ''; 
    
    async function handleSubmit(company){
      company.preventDefault();
      const client = { email, companyName, password, cuit, telephone, contact, deliveryZone, businessHours, address};
      try {
        const response = await fetch('http://localhost:8081/v1/clients/register',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(client),
        });

        if (!response.ok) {
          throw new Error('Network response was wrong');
        }

        const result = await response.json();
        console.log('compania registrada :', result);

      } catch (error) {
        console.error('Error during fetch:', error);
      }
}
</script>
  
<form on:submit|preventDefault={handleSubmit}>
    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={email} required>
  
    <label for="companyName">Nombre de la compañía:</label>
    <input type="text" id="companyName" bind:value={companyName}>
  
    <label for="password">Contraseña:</label>
    <input type="password" id="password" bind:value={password} required>
  
    <label for="cuit">CUIT:</label>
    <input type="text" id="cuit" bind:value={cuit}>
  
    <label for="telephone">Número de teléfono:</label>
    <input type="tel" id="telephone" bind:value={telephone}>
  
    <label for="contact">Contacto:</label>
    <input type="text" id="contact" bind:value={contact}>
  
    <label for="deliveryZone">Zona de delivery:</label>
    <input type="text" id="deliveryZone" bind:value={deliveryZone}>
  
    <label for="businessHours">Horario:</label>
    <input type="text" id="businessHours" bind:value={businessHours}>
  
    <label for="address">Dirección:</label>
    <input type="text" id="address" bind:value={address}>
  
    <button type="submit">Registrarse</button>
</form>

<style>
    form {
      max-width: 400px;
      margin: 0 auto;
    }
  
    label {
      display: block;
      margin-top: 10px;
    }
  
    input {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
  
    button {
      background-color: #4CAF50;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
    }
  
    button:hover {
      background-color: #45a049;
    }
</style>