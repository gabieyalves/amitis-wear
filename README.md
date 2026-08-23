# amitis-wear
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amisti Wear - Sua Loja de Roupas Online</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="logo">Amisti Wear</div>
            <nav class="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#produtos">Produtos</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
            <div class="cart-icon" onclick="toggleCart()">
                🛒 <span class="cart-count">0</span>
            </div>
        </div>
    </header>

    <!-- Banner Hero -->
    <section class="hero" id="home">
        <div class="hero-content">
            <h1>Bem-vindo à Amisti Wear</h1>
            <p>Encontre as melhores roupas para seu estilo</p>
            <button class="btn btn-primary" onclick="scrollToProducts()">Comprar Agora</button>
        </div>
    </section>

    <!-- Filtros -->
    <section class="filters" id="produtos">
        <div class="container">
            <h2>Nossos Produtos</h2>
            <div class="filter-buttons">
                <button class="filter-btn active" onclick="filterProducts('todos')">Todos</button>
                <button class="filter-btn" onclick="filterProducts('camisetas')">Camisetas</button>
                <button class="filter-btn" onclick="filterProducts('calças')">Calças</button>
                <button class="filter-btn" onclick="filterProducts('vestidos')">Vestidos</button>
                <button class="filter-btn" onclick="filterProducts('acessórios')">Acessórios</button>
            </div>
        </div>
    </section>

    <!-- Produtos -->
    <section class="produtos">
        <div class="container">
            <div class="grid-produtos" id="gridProdutos">
                <!-- Produtos carregados dinamicamente via JavaScript -->
            </div>
        </div>
    </section>

    <!-- Carrinho Lateral -->
    <div class="cart-sidebar" id="cartSidebar">
        <div class="cart-header">
            <h2>Carrinho de Compras</h2>
            <button class="close-btn" onclick="toggleCart()">✕</button>
        </div>
        <div class="cart-items" id="cartItems">
            <p class="empty-cart">Seu carrinho está vazio</p>
        </div>
        <div class="cart-footer">
            <div class="cart-total">
                <strong>Total:</strong>
                <span id="cartTotal">R$ 0,00</span>
            </div>
            <button class="btn btn-primary full-width">Finalizar Compra</button>
            <button class="btn btn-secondary full-width" onclick="toggleCart()">Continuar Comprando</button>
        </div>
    </div>

    <!-- Overlay do Carrinho -->
    <div class="cart-overlay" id="cartOverlay" onclick="toggleCart()"></div>

    <!-- Sobre -->
    <section class="sobre" id="sobre">
        <div class="container">
            <h2>Sobre Nós</h2>
            <p>A Amisti Wear é uma loja online dedicada a trazer as melhores roupas e acessórios de moda para você. Com qualidade premium e preços acessíveis, nos comprometemos em oferecer a melhor experiência de compra.</p>
        </div>
    </section>

    <!-- Contato -->
    <section class="contato" id="contato">
        <div class="container">
            <h2>Entre em Contato</h2>
            <form class="contact-form" onsubmit="enviarContato(event)">
                <input type="text" placeholder="Seu Nome" required>
                <input type="email" placeholder="Seu Email" required>
                <textarea placeholder="Sua Mensagem" rows="5" required></textarea>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Amisti Wear. Todos os direitos reservados.</p>
            <div class="social-links">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
