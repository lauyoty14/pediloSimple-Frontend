<script>
    // @ts-nocheck
    // @ts-ignore
    export let data;
    const { products } = data;
    const companyID = data.companyID;
    // @ts-ignore
    let cart = [];
    console.log('data :', data);
    
    // Función para encontrar un producto en el carrito
    function findProductInCart(productID) {
        return cart.findIndex(item => item._id === productID);
    }
    
    // Función para agregar productos al carrito con una cantidad seleccionada
    // @ts-ignore
    function addToCart(product, quantity) {
        quantity = parseInt(quantity, 10); // Convertir a número entero
        if (quantity > 0) {
            // Verificar si el producto ya está en el carrito
            const existingProductIndex = findProductInCart(product._id);
            if (existingProductIndex !== -1) {
                // Si el producto ya está en el carrito, actualizar la cantidad
                cart[existingProductIndex].quantity += quantity;
            } else {
                // Si el producto no está en el carrito, añadirlo
                cart = [...cart, { ...product, quantity }];
            }
        }
        console.log('carro :', cart);
    }
    
    function goToCheckout() {
        // Redirigir a la página de orden con el carrito como parámetro en la URL
        window.location.href = `/companies/${companyID}/order?cart=${JSON.stringify(cart)}`;
    }
    </script>
    
    <main>
        <h1>Productos Disponibles</h1>
        {#if products.length > 0}
            <div class="products-grid">
                {#each products as product}
                    <div class="product-card">
                        <div class="product-details">
                            <h2>{product.name}</h2>
                            <p>${product.price.toFixed(2)}</p>
                            <label for="quantity-{product._id}">Cantidad:</label>
                            <input type="number" id="quantity-{product._id}" min="1" value="1" bind:this={product.quantityRef} />
                            <button on:click={() => {
                                addToCart(product, product.quantityRef.value);
                            }}>Agregar al Carrito</button>
                        </div>
                    </div>
                {/each}
            </div>
            <button on:click={goToCheckout}>Proceder a la Orden</button>
        {:else}
            <p>No hay productos disponibles.</p>
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
    
        .product-details {
            text-align: center;
        }
    
        h2 {
            margin: 0;
        }
    
        p {
            font-size: 1.2em;
            margin: 10px 0;
        }
    
        input[type="number"] {
            width: 50px;
            margin: 10px 0;
        }
    
        button {
            display: block;
            margin: 10px auto;
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
    