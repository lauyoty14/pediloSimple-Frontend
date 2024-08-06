<script>
    // @ts-nocheck
    // @ts-ignore
    export let data;
    const { companies } = data;

    // Función para redirigir a la página de productos de la compañía
    function goToCompanyProducts(companyID) {
        window.location.href = `/companies/${companyID}/products`;
    }
</script>

<main>
        <h1>Lista de Compañías</h1>
        {#if companies.length > 0}
            <ul class="companies-list">
                {#each companies as company}
                    <div class="company-item">
                        <h2>{company.companyName}</h2>
                        <button on:click={() => {goToCompanyProducts(company.uuid)}}>Ir a ver la compania</button>
                    </div>
                {/each}
            </ul>
        {:else}
            <p>No hay compañías disponibles.</p>
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
    
        .companies-list {
            list-style-type: none;
            padding: 0;
        }
    
        .company-item {
            padding: 10px;
            margin: 5px 0;
            background-color: #f0f0f0;
            border: 1px solid #ddd;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
    
        .company-item:hover {
            background-color: #e0e0e0;
        }
</style>
    