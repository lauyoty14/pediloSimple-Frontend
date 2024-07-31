<script>
    import { onMount } from 'svelte';
    export let data;
    const { companyID } = data;

    /**
	 * @type {any[]}
	 */
    let cart = [];
    let customerName = '';
    let customerEmail = '';
    let customerPhone = '';
    let totalAmount = 0;

    // Log para depuración
    console.log('companyId:', companyID);

    // Obtener el carrito de compras de la URL
    onMount(() => {
        const urlParams = new URLSearchParams(window.location.search);
        cart = JSON.parse(urlParams.get('cart') || '[]');
        console.log('carrito:', cart);
        calculateTotal();
    });

    // Función para calcular el total de la orden
    function calculateTotal() {
        totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    // Función para enviar la orden
    async function submitOrder() {
        try {
            //const carrito = {cart, companyID, customerName, customerEmail, customerPhone, totalAmount};
            //console.log('carrito:',carrito);
            const response = await fetch(`http://localhost:8081/v1/orders/${companyID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cart,
                    companyID,
                    customerName,
                    customerEmail,
                    customerPhone,
                    totalAmount
                })
            });

            if (response.ok) {
                alert('Pedido realizado con éxito');
                // Opcional: Redirigir después de una orden exitosa
                // window.location.href = `/companies`;
            } else {
                alert('Error al realizar el pedido');
            }
        } catch (error) {
            console.error('Error al enviar la orden:', error);
            alert('Error al realizar el pedido');
        }
    }
</script>

<main>
    <h1>Carrito de Compras</h1>
    {#if cart.length > 0}
        <ul>
            {#each cart as item}
                <li>{item.name} - ${item.price.toFixed(2)} x {item.quantity}</li>
            {/each}
        </ul>
        <p><strong>Total: ${totalAmount.toFixed(2)}</strong></p>

        <h2>Información del Cliente</h2>
        <form on:submit|preventDefault={submitOrder}>
            <div>
                <label for="name">Nombre:</label>
                <input id="name" bind:value={customerName} required />
            </div>
            <div>
                <label for="email">Correo Electrónico:</label>
                <input id="email" type="email" bind:value={customerEmail} required />
            </div>
            <div>
                <label for="phone">Teléfono:</label>
                <input id="phone" type="tel" bind:value={customerPhone} required />
            </div>
            <button type="submit">Realizar Pedido</button>
        </form>
    {:else}
        <p>No hay productos en el carrito.</p>
    {/if}
</main>

<style>
    main {
        padding: 20px;
        font-family: Arial, sans-serif;
        max-width: 800px;
        margin: 0 auto;
    }

    h1, h2 {
        text-align: center;
        margin-bottom: 20px;
        font-size: 2em;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 10px;
        font-size: 1.2em;
    }

    form {
        margin-top: 20px;
    }

    form div {
        margin-bottom: 10px;
    }

    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }

    input {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

    button {
        display: block;
        margin: 20px auto;
        padding: 10px 20px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>
