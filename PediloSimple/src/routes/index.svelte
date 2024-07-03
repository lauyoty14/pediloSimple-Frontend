<script>
    let formData = { key: '' };

    async function handleSubmit() {
        const response = await fetch('/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        console.log(result);
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label for="key">Key:</label>
    <input id="key" type="text" bind:value={formData.key} />

    <button type="submit">Enviar</button>
</form>
