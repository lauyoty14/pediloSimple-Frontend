<script>
  // Add necessary script logic here
</script>

<style>
  /* Background and general styling */
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(to right, #00c6ff, #0072ff);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  main {
    text-align: center;
    padding: 40px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
  }

  h1 {
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 30px;
    font-weight: 700;
  }

  a {
    display: inline-block;
    margin: 15px;
    text-decoration: none;
    color: #fff;
    background-color: #0072ff;
    padding: 15px 30px;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    transition: background-color 0.3s, transform 0.3s;
  }

  a:hover {
    background-color: #005bb5;
    transform: scale(1.05);
  }

  /* Company description styling */
  .description {
    margin-top: 40px;
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
  }

  /* New Sections */
  .section {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin: 20px 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section h2 {
    color: #0072ff;
    font-size: 1.8rem;
    margin-bottom: 20px;
    font-weight: 600;
    text-align: center;
  }

  .section p {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 20px;
    max-width: 600px;
    text-align: center;
  }

  .section img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 600px; /* Limita el ancho máximo de la imagen */
    margin-top: 20px;
  }

  /* Media Query for Responsive Design */
  @media (max-width: 600px) {
    main {
      padding: 20px;
    }

    h1 {
      font-size: 2rem;
    }

    a {
      font-size: 1rem;
      padding: 10px 20px;
      margin: 10px 0;
    }

    .description, .section p {
      font-size: 0.9rem;
    }

    .section h2 {
      font-size: 1.5rem;
    }

    .section img {
      width: 90%; /* Ajusta la imagen al 90% del ancho de la pantalla */
      max-width: none; /* Elimina la restricción de ancho máximo */
    }
  }
</style>

<main>
  <h1>Bienvenido a PediloSimple</h1>
  <a href="/login">Iniciar sesión</a>
  <a href="/register">Registrarse</a>
  <a href="/users">Usuarios</a>

  <div class="description">
      Nuestra empresa ofrece un servicio completo para cualquier emprendimiento de comida. Registra tu negocio, gestiona tus productos, adminístralos eficientemente y permite que los clientes los vean y realicen pedidos directamente.
  </div>
</main>

<div class="section">
  <h2>Cómo las Compañías Crean y Administran Sus Productos</h2>
  <p>Las compañías pueden fácilmente registrar su emprendimiento en nuestra plataforma, crear y administrar un catálogo completo de productos. Pueden agregar, editar y eliminar productos según sea necesario, así como gestionar precios, descripciones y disponibilidad.</p>
  <img src="/images/CompanyAdmin.png" alt="Compañía gestionando productos">
</div>

<div class="section">
  <h2>Cómo los Clientes Ven y Piden Productos</h2>
  <p>Los clientes pueden explorar una lista de empresas de alimentos, ver sus productos y realizar pedidos directamente a través de nuestra plataforma. Cada empresa tiene su propio perfil donde los clientes pueden ver el menú, leer reseñas y elegir sus productos favoritos para pedirlos al instante.</p>
  <img src="/images/User.png" alt="Cliente ordenando productos">
</div>
