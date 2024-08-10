<script lang="ts">
  let email = '';
  let companyName = '';
  let password = '';
  let cuit = '';
  let telephone = '';
  let contact = '';
  let deliveryZone = '';
  let businessHours = '';
  let address = '';

  // Definir el tipo de errors
  let errors: { [key: string]: string | undefined } = {};

  function validateForm() {
      errors = {};

      if (!email.includes('@')) {
          errors.email = 'Por favor, ingresa un email válido.';
      }

      if (companyName.trim().length === 0) {
          errors.companyName = 'El nombre de la compañía es obligatorio.';
      }

      if (password.trim().length < 6) {
          errors.password = 'La contraseña debe tener al menos 6 caracteres.';
      }

      if (cuit.trim().length === 0) {
          errors.cuit = 'El CUIT es obligatorio.';
      }

      if (telephone.trim().length === 0) {
          errors.telephone = 'El número de teléfono es obligatorio.';
      }

      if (contact.trim().length === 0) {
          errors.contact = 'El nombre de contacto es obligatorio.';
      }

      if (deliveryZone.trim().length === 0) {
          errors.deliveryZone = 'La zona de delivery es obligatoria.';
      }

      if (businessHours.trim().length === 0) {
          errors.businessHours = 'El horario de atención es obligatorio.';
      }

      if (address.trim().length === 0) {
          errors.address = 'La dirección es obligatoria.';
      }

      return Object.keys(errors).length === 0;
  }

  async function handleSubmit(event: Event) {
      event.preventDefault();

      if (!validateForm()) {
          return;
      }

      const client = {
          email,
          companyName,
          password,
          cuit,
          telephone,
          contact,
          deliveryZone,
          businessHours,
          address
      };

      try {
          const response = await fetch('http://localhost:8081/v1/clients/register', {
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
          console.log('compania registrada:', result);
          const { companyId } = result;
          window.location.href = `/login`;

      } catch (error) {
          console.error('Error during fetch:', error);
      }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="email">Email:</label>
  <input type="email" id="email" bind:value={email} required>
  {#if errors.email}
      <p class="error-message">{errors.email}</p>
  {/if}

  <label for="companyName">Nombre de la compañía:</label>
  <input type="text" id="companyName" bind:value={companyName} required>
  {#if errors.companyName}
      <p class="error-message">{errors.companyName}</p>
  {/if}

  <label for="password">Contraseña:</label>
  <input type="password" id="password" bind:value={password} required>
  {#if errors.password}
      <p class="error-message">{errors.password}</p>
  {/if}

  <label for="cuit">CUIT:</label>
  <input type="text" id="cuit" bind:value={cuit} required>
  {#if errors.cuit}
      <p class="error-message">{errors.cuit}</p>
  {/if}

  <label for="telephone">Número de teléfono:</label>
  <input type="tel" id="telephone" bind:value={telephone} required>
  {#if errors.telephone}
      <p class="error-message">{errors.telephone}</p>
  {/if}

  <label for="contact">Contacto:</label>
  <input type="text" id="contact" bind:value={contact} required>
  {#if errors.contact}
      <p class="error-message">{errors.contact}</p>
  {/if}

  <label for="deliveryZone">Zona de delivery:</label>
  <input type="text" id="deliveryZone" bind:value={deliveryZone} required>
  {#if errors.deliveryZone}
      <p class="error-message">{errors.deliveryZone}</p>
  {/if}

  <label for="businessHours">Horario:</label>
  <input type="text" id="businessHours" bind:value={businessHours} required>
  {#if errors.businessHours}
      <p class="error-message">{errors.businessHours}</p>
  {/if}

  <label for="address">Dirección:</label>
  <input type="text" id="address" bind:value={address} required>
  {#if errors.address}
      <p class="error-message">{errors.address}</p>
  {/if}

  <button type="submit">Registrarse</button>
</form>

<style>
:global(body){
  background-color: #005bb5;
}
form {
  background-color: #f0f8ff; /* Fondo azul suave */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 450px;
  margin: 40px auto;
  font-family: 'Arial', sans-serif;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
  font-size: 1rem;
}

input {
  width: 100%;
  padding: 12px;
  margin-bottom: 5px; /* Ajustado para espacio con el mensaje de error */
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 1rem;
  background-color: #f9f9f9;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #0072ff;
  outline: none;
}

.error-message {
  color: #ff0000;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

button {
  background-color: #0072ff;
  color: white;
  padding: 14px;
  margin-top: 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #005bb5;
  transform: scale(1.02);
}

button:active {
  transform: scale(1);
}
</style>
