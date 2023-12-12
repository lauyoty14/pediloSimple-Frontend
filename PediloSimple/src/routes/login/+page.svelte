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

    function handleSubmit() {
        // Aca se mandan los datos al backend para verificarlos
        // Luego redirige a otra página
        console.log(email, password, companyName, cuit, phoneNumber, contact, deliveryZone, hours, address);
        window.location.href = '/agregar_producto';
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="email" bind:value={email} placeholder="Correo electrónico" required>
    <input type="password" bind:value={password} placeholder="Contraseña" required>
    <input type="text" bind:value={companyName} placeholder="Nombre de la compañía" required>
    <input type="text" bind:value={cuit} placeholder="Cuit" required>
    <input type="tel" bind:value={phoneNumber} placeholder="Número de teléfono" required>
    <input type="text" bind:value={contact} placeholder="Contacto" required>
    <input type="text" bind:value={deliveryZone} placeholder="Zona de delivery" required>
    <input type="text" bind:value={hours} placeholder="Horario" required>
    <input type="text" bind:value={address} placeholder="Dirección" required>
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