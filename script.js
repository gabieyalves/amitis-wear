// Base de dados de produtos
const produtos = [
    {
        id: 1,
        nome: "Camiseta Básica Preta",
        categoria: "camisetas",
        preco: 49.90,
        imagem: "https://via.placeholder.com/250x300?text=Camiseta+Preta",
        descricao: "Camiseta básica de algodão 100% confortável"
    },
    {
        id: 2,
        nome: "Camiseta Branca",
        categoria: "camisetas",
        preco: 49.90,
        imagem: "https://via.placeholder.com/250x300?text=Camiseta+Branca",
        descricao: "Camiseta branca clássica e versátil"
    },
    {
        id: 3,
        nome: "Calça Jeans Azul",
        categoria: "calças",
        preco: 129.90,
        imagem: "https://via.placeholder.com/250x300?text=Calça+Jeans",
        descricao: "Calça jeans confortável e durável"
    },
    {
        id: 4,
        nome: "Calça Preta",
        categoria: "calças",
        preco: 119.90,
        imagem: "https://via.placeholder.com/250x300?text=Calça+Preta",
        descricao: "Calça preta elegante para qualquer ocasião"
    },
    {
        id: 5,
        nome: "Vestido Floral",
        categoria: "vestidos",
        preco: 199.90,
        imagem: "https://via.placeholder.com/250x300?text=Vestido+Floral",
        descricao: "Vestido florido perfeito para o verão"
    },
    {
        id: 6,
        nome: "Vestido Preto Elegante",
        categoria: "vestidos",
        preco: 249.90,
        imagem: "https://via.placeholder.com/250x300?text=Vestido+Preto",
        descricao: "Vestido preto elegante para ocasiões especiais"
    },
    {
        id: 7,
        nome: "Bolsa de Couro",
        categoria: "acessórios",
        preco: 89.90,
        imagem: "https://via.placeholder.com/250x300?text=Bolsa+Couro",
        descricao: "Bolsa de couro genuíno de alta qualidade"
    },
    {
        id: 8,
        nome: "Chapéu de Palha",
        categoria: "acessórios",
        preco: 59.90,
        imagem: "https://via.placeholder.com/250x300?text=Chapéu+Palha",
        descricao: "Chapéu de palha perfeito para o verão"
    }
];

// Carrinho de compras
let carrinho = [];
let filtroAtual = 'todos';

// Inicializar a página
document.addEventListener('DOMContentLoaded', function() {
    carregarProdutos('todos');
});

// Carregar produtos no grid
function carregarProdutos(categoria) {
    filtroAtual = categoria;
    const gridProdutos = document.getElementById('gridProdutos');
    gridProdutos.innerHTML = '';

    const produtosFiltrados = categoria === 'todos' 
        ? produtos 
        : produtos.filter(p => p.categoria === categoria);

    produtosFiltrados.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'produto-card';
        card.innerHTML = `
            <div class="produto-imagem">
                <img src="${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="produto-info">
                <h3>${produto.nome}</h3>
                <p class="produto-descricao">${produto.descricao}</p>
                <div class="produto-footer">
                    <span class="produto-preco">R$ ${produto.preco.toFixed(2)}</span>
                    <button class="btn btn-sm" onclick="adicionarAoCarrinho(${produto.id})">Adicionar</button>
                </div>
            </div>
        `;
        gridProdutos.appendChild(card);
    });
}

// Filtrar produtos
function filterProducts(categoria) {
    // Atualizar botão ativo
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    carregarProdutos(categoria);
}

// Adicionar ao carrinho
function adicionarAoCarrinho(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    const itemCarrinho = carrinho.find(item => item.id === produtoId);

    if (itemCarrinho) {
        itemCarrinho.quantidade++;
    } else {
        carrinho.push({
            ...produto,
            quantidade: 1
        });
    }

    atualizarCarrinho();
    alert(`${produto.nome} adicionado ao carrinho!`);
}

// Remover do carrinho
function removerDoCarrinho(produtoId) {
    carrinho = carrinho.filter(item => item.id !== produtoId);
    atualizarCarrinho();
}

// Atualizar quantidade no carrinho
function atualizarQuantidade(produtoId, novaQuantidade) {
    const item = carrinho.find(item => item.id === produtoId);
    if (item) {
        if (novaQuantidade <= 0) {
            removerDoCarrinho(produtoId);
        } else {
            item.quantidade = novaQuantidade;
            atualizarCarrinho();
        }
    }
}

// Atualizar exibição do carrinho
function atualizarCarrinho() {
    const cartCount = document.querySelector('.cart-count');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    // Atualizar contagem
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
    cartCount.textContent = totalItens;

    // Atualizar items
    if (carrinho.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
    } else {
        cartItems.innerHTML = carrinho.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.nome}</h4>
                    <p>R$ ${item.preco.toFixed(2)}</p>
                </div>
                <div class="cart-item-controls">
                    <button onclick="atualizarQuantidade(${item.id}, ${item.quantidade - 1})">-</button>
                    <span>${item.quantidade}</span>
                    <button onclick="atualizarQuantidade(${item.id}, ${item.quantidade + 1})">+</button>
                </div>
                <button class="remove-btn" onclick="removerDoCarrinho(${item.id})">✕</button>
            </div>
        `).join('');
    }

    // Atualizar total
    const total = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    cartTotal.textContent = `R$ ${total.toFixed(2)}`;

    // Salvar carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Toggle carrinho
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
}

// Scroll para produtos
function scrollToProducts() {
    document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
}

// Enviar contato
function enviarContato(event) {
    event.preventDefault();
    
    const form = event.target;
    const nome = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const mensagem = form.querySelector('textarea').value;

    console.log('Contato enviado:', { nome, email, mensagem });
    alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
    
    form.reset();
}

// Carregar carrinho ao abrir página
window.addEventListener('load', function() {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
        carrinho = JSON.parse(carrinhoSalvo);
        atualizarCarrinho();
    }
});
