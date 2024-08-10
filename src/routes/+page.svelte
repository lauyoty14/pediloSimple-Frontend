<script>
  // Add necessary script logic here
</script>

<style>
  /* Background and general styling */
  :global(body) {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(to right, #00c6ff, #0072ff);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  main {
    text-align: center;
    padding: 40px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    max-width: 900px;
    width: 100%;
    margin: 20px 0;
  }

  h1 {
  color: #333;
  font-size: 3.5rem;
  margin-bottom: 30px;
  font-weight: 700;
  background: linear-gradient(to right, #0072ff, #00c6ff);
  
  /* Vendor prefixes for background-clip */
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;

  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
}


  a {
    display: inline-block;
    margin: 15px;
    text-decoration: none;
    color: #fff;
    background-color: #0072ff;
    padding: 15px 30px;
    border-radius: 50px;
    font-size: 1.2rem;
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
    font-size: 1.2rem;
    color: #444;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto;
  }

  /* New Sections */
  .section {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    padding: 20px;
    margin: 30px 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 900px;
    width: 100%;
  }

  .section h2 {
    color: #0072ff;
    font-size: 2rem;
    margin-bottom: 20px;
    font-weight: 600;
    text-align: center;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  }

  .section p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.8;
    margin-bottom: 20px;
    max-width: 700px;
    text-align: center;
  }

  .section img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin-top: 20px;
  }

  /* New Section for Advantages */
  .advantages {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 40px;
    width: 100%;
  }

  .advantage {
    background-color: #0072ff;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    color: white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .advantage h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  .advantage p {
    font-size: 1rem;
    line-height: 1.6;
    color: #fff;
  }

  .advantage i {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }

  /* Media Query for Responsive Design */
  @media (max-width: 900px) {
    h1 {
      font-size: 3rem;
    }

    .description,
    .section p {
      font-size: 1.1rem;
    }

    .section h2 {
      font-size: 1.8rem;
    }

    .section img {
      width: 90%;
      max-width: none;
    }

    .advantages {
      grid-template-columns: 1fr;
    }

    .advantage h3 {
      font-size: 1.3rem;
    }

    .advantage p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 600px) {
    main {
      padding: 20px;
    }

    h1 {
      font-size: 2.5rem;
    }

    a {
      font-size: 1rem;
      padding: 10px 20px;
      margin: 10px 0;
    }

    .description,
    .section p {
      font-size: 1rem;
    }

    .section h2 {
      font-size: 1.5rem;
    }

    .section img {
      width: 90%;
      max-width: none;
    }

    .advantages {
      grid-template-columns: 1fr;
    }

    .advantage h3 {
      font-size: 1.3rem;
    }

    .advantage p {
      font-size: 0.9rem;
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

<div class="section">
  <h2>Ventajas de Contratar Nuestro Servicio</h2>
  <div class="advantages">
    <div class="advantage">
      <i class="fas fa-cogs"></i>
      <h3>Administrar Productos</h3>
      <p>Administra tus productos con detalles específicos, mantén tus catálogos siempre actualizados y organizados.</p>
    </div>
    <div class="advantage">
      <i class="fas fa-eye"></i>
      <h3>Accesibilidad</h3>
      <p>Mantén tus productos accesibles para que cualquier cliente los vea y haga sus pedidos.</p>
    </div>
    <div class="advantage">
      <i class="fas fa-clipboard-list"></i>
      <h3>Registro de Órdenes</h3>
      <p>Lleva un registro detallado de todas las órdenes para un mejor control y análisis de tu negocio.</p>
    </div>
    <div class="advantage">
      <i class="fab fa-whatsapp"></i>
      <h3>Pedidos a tu WhatsApp</h3>
      <p>Recibe pedidos directamente en tu WhatsApp, haciendo la comunicación con tus clientes más rápida y efectiva.</p>
    </div>
  </div>
</div>
