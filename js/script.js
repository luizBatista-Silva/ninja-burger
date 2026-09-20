// ============================================================
// CARROSSEL DO HERO (troca por clique e a cada 5 segundos)
// ============================================================

const thumbs = document.querySelectorAll(".thumb");
const heroImage = document.getElementById("hero-image");
let currentIndex = 0;
let carouselTimer;

function showSlide(index) {
  currentIndex = index;
  document.querySelector(".thumb.active")?.classList.remove("active");
  thumbs[index].classList.add("active");

  const img = thumbs[index].querySelector("img");
  heroImage.src = img.src;
  heroImage.alt = img.alt;

  // reinicia a animação de fade
  heroImage.style.animation = "none";
  void heroImage.offsetWidth;
  heroImage.style.animation = "";
}

function startAutoPlay() {
  carouselTimer = setInterval(() => {
    showSlide((currentIndex + 1) % thumbs.length);
  }, 5000);
}

thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    showSlide(index);
    clearInterval(carouselTimer);
    startAutoPlay();
  });
});

startAutoPlay();

// ============================================================
// CONFIGURAÇÃO
// ============================================================

// ⚠️ Troque pelo número do WhatsApp da loja (DDI + DDD + número, só dígitos)
const WHATSAPP_NUMBER = "5519999010438";

// Upgrade de combo: batata palito + refri lata ou suco de laranja 300ml
const COMBO_PRICE = 15;
const COMBO_DESC = "Batata Palito + Refrigerante lata ou Suco de Laranja 300ml";

// ============================================================
// DADOS DO CARDÁPIO
// ============================================================

const ADICIONAIS = [
  { name: "Alface", price: 3 },
  { name: "Rúcula", price: 3 },
  { name: "Tomate", price: 3 },
  { name: "Cebola Roxa", price: 3 },
  { name: "Cebola em Cubos", price: 3 },
  { name: "Picles", price: 3 },
  { name: "Bacon", price: 5 },
  { name: "Cebola Crisp", price: 5 },
  { name: "Cebola Caramelizada", price: 5 },
  { name: "Anéis de Cebola", price: 5 },
  { name: "Ovo", price: 5 },
  { name: "Queijo", price: 4 },
  { name: "Cheddar", price: 5 },
  { name: "Catupiry", price: 5 },
  { name: "Queijo Gorgonzola", price: 7 },
  { name: "Cheddar Empanado", price: 9 },
  { name: "Catupiry Empanado", price: 9 },
  { name: "Hambúrguer 150g", price: 9 },
];

const MENU = {
  burgers: {
    title: 'Nossos <span class="accent">Burgers</span>',
    items: [
      {
        name: "Kids",
        price: 23.99,
        desc: "Pão brioche, hambúrguer de 80g e queijo cheddar.",
        ingredients: ["Pão brioche", "Hambúrguer 80g", "Queijo cheddar"],
        img: "imagens/imagem2.webp",
      },
      {
        name: "Slider",
        price: 26.99,
        desc: "Pão brioche, dois hambúrgueres de 50g, queijo cheddar, alface, ketchup e mostarda.",
        ingredients: [
          "Pão brioche",
          "2x Hambúrguer 50g",
          "Queijo cheddar",
          "Alface",
          "Ketchup e mostarda",
        ],
        img: "imagens/imagem3.webp",
      },
      {
        name: "Salad Burger",
        price: 30.99,
        desc: "Pão brioche, hambúrguer de 150g, queijo cheddar, tomate, cebola roxa, alface e maionese da casa.",
        ingredients: [
          "Pão brioche",
          "Hambúrguer 150g",
          "Queijo cheddar",
          "Tomate",
          "Cebola roxa",
          "Alface",
          "Maionese da casa",
        ],
        img: "imagens/imagem4.webp",
      },
      {
        name: "Bacon Burger",
        price: 36.99,
        desc: "Pão brioche, hambúrguer de 150g, queijo cheddar, fatias de bacon e maionese verde da casa.",
        ingredients: [
          "Pão brioche",
          "Hambúrguer 150g",
          "Queijo cheddar",
          "Bacon",
          "Maionese verde da casa",
        ],
        img: "imagens/imagem5.webp",
      },
      {
        name: "Crisp Burger",
        price: 32.99,
        desc: "Pão brioche, hambúrguer de 150g, queijo cheddar, cebola crocante e maionese branca da casa.",
        ingredients: [
          "Pão brioche",
          "Hambúrguer 150g",
          "Queijo cheddar",
          "Cebola crocante",
          "Maionese branca da casa",
        ],
        img: "imagens/imagem2.webp",
      },
      {
        name: "Cheddar Burger",
        price: 34.99,
        desc: "Pão australiano, hambúrguer de 150g, queijo cheddar cremoso e cebola caramelizada.",
        ingredients: [
          "Pão australiano",
          "Hambúrguer 150g",
          "Cheddar cremoso",
          "Cebola caramelizada",
        ],
        img: "imagens/imagem3.webp",
      },
      {
        name: "Ninja Burger",
        price: 38.99,
        desc: "Pão brioche, hambúrguer de 150g, queijo cheddar, hambúrguer de catupiry empanado, alface e maionese branca da casa.",
        ingredients: [
          "Pão brioche",
          "Hambúrguer 150g",
          "Queijo cheddar",
          "Catupiry empanado",
          "Alface",
          "Maionese branca da casa",
        ],
        img: "imagens/imagem4.webp",
      },
      {
        name: "American Burger",
        price: 41.99,
        desc: "Pão brioche, dois hambúrgueres de 150g, queijo prato ovo, fatias de bacon e maionese branca da casa.",
        ingredients: [
          "Pão brioche",
          "2x Hambúrguer 150g",
          "Queijo prato",
          "Ovo",
          "Bacon",
          "Maionese branca da casa",
        ],
        img: "imagens/imagem5.webp",
      },
      {
        name: "Rezende BBQ",
        price: 38.99,
        desc: "Pão tradicional, hambúrguer de 150g, hambúrguer de queijo mussarela empanado, fatias de bacon e molho barbecue.",
        ingredients: [
          "Pão tradicional",
          "Hambúrguer 150g",
          "Mussarela empanada",
          "Bacon",
          "Molho barbecue",
        ],
        img: "imagens/imagem2.webp",
      },
      {
        name: "Chicken Bacon",
        price: 35.99,
        desc: "Pão brioche com gergelim, hambúrguer de frango empanado de 150g, queijo cheddar, alface, tomate e maionese especial de churrasco.",
        ingredients: [
          "Pão brioche com gergelim",
          "Frango empanado 150g",
          "Queijo cheddar",
          "Alface",
          "Tomate",
          "Maionese de churrasco",
        ],
        img: "imagens/imagem3.webp",
      },
      {
        name: "Especial de Cheddar",
        price: 38.99,
        desc: "Pão brioche com gergelim, hambúrguer de 150g, queijo cheddar empanado, alface, cebola crisp, tomate e maionese branca da casa.",
        ingredients: [
          "Pão brioche com gergelim",
          "Hambúrguer 150g",
          "Cheddar empanado",
          "Alface",
          "Cebola crisp",
          "Tomate",
          "Maionese branca da casa",
        ],
        img: "imagens/imagem4.webp",
      },
      {
        name: "Honey Burger",
        price: 39.99,
        desc: "Pão brioche, hambúrguer de 150g, queijo gorgonzola, bacon, cebola crisp, mel e maionese branca da casa.",
        ingredients: [
          "Pão brioche",
          "Hambúrguer 150g",
          "Queijo gorgonzola",
          "Bacon",
          "Cebola crisp",
          "Mel",
          "Maionese branca da casa",
        ],
        img: "imagens/imagem5.webp",
      },
      {
        name: "Choripan",
        price: 35.99,
        desc: "Pão de hambúrguer, linguiça toscana, muçarela, vinagrete, requeijão da casa e maionese da casa.",
        ingredients: [
          "Pão de hambúrguer",
          "Linguiça toscana",
          "Muçarela",
          "Vinagrete",
          "Requeijão da casa",
          "Maionese da casa",
        ],
        img: "imagens/imagem2.webp",
      },
      {
        name: "Ninja Fest",
        price: 31.99,
        desc: "Pão brioche, hambúrguer de 150g, maçã picada, queijo cheddar, alface, cebola roxa, tomate e maionese branca da casa.",
        ingredients: [
          "Pão brioche",
          "Hambúrguer 150g",
          "Maçã picada",
          "Queijo cheddar",
          "Alface",
          "Cebola roxa",
          "Tomate",
          "Maionese branca da casa",
        ],
        img: "imagens/imagem3.webp",
      },
    ],
  },
  bebidas: {
    title: 'Nossas <span class="accent">Bebidas</span>',
    items: [
      {
        name: "Água Mineral sem gás",
        price: 4,
        desc: "500ml",
        img: "imagens/bebida.png",
      },
      {
        name: "Água Mineral com gás",
        price: 5,
        desc: "500ml",
        img: "imagens/bebida.png",
      },
      {
        name: "Refrigerante lata",
        price: 6,
        desc: "350ml",
        img: "imagens/bebida.png",
      },
      {
        name: "Refrigerante 600ml",
        price: 9,
        desc: "",
        img: "imagens/bebida.png",
      },
      {
        name: "Gengibirra e Itubaina 2L",
        price: 11,
        desc: "",
        img: "imagens/bebida.png",
      },
      {
        name: "Guaraná Antártica 2L",
        price: 14,
        desc: "",
        img: "imagens/bebida.png",
      },
      {
        name: "Coca-Cola / Coca Zero 2L",
        price: 16,
        desc: "",
        img: "imagens/bebida.png",
      },
      {
        name: "Suco de Laranja natural 300ml",
        price: 8,
        desc: "",
        img: "imagens/bebida.png",
      },
      {
        name: "Suco de Laranja natural 500ml",
        price: 15,
        desc: "",
        img: "imagens/bebida.png",
      },
      {
        name: "Suco de Laranja com Açaí 500ml",
        price: 11,
        desc: "",
        img: "imagens/bebida.png",
      },
      {
        name: "Suco de polpa 500ml",
        price: 13,
        desc: "Consulte os sabores",
        img: "imagens/bebida.png",
      },
      {
        name: "Pink Lemonade",
        price: 13,
        desc: "Groselha e limão",
        img: "imagens/bebida.png",
      },
      {
        name: "Pink Lemonade com Sprite",
        price: 15,
        desc: "",
        img: "imagens/bebida.png",
      },
      {
        name: "Cerveja Budweiser 330ml",
        price: 9,
        desc: "",
        img: "imagens/bebida.png",
      },
      {
        name: "Cerveja Heineken 330ml",
        price: 10,
        desc: "",
        img: "imagens/bebida.png",
      },
      {
        name: "Cerveja Corona 330ml",
        price: 10,
        desc: "",
        img: "imagens/bebida.png",
      },
    ],
  },
  porcoes: {
    title: 'Nossas <span class="accent">Porções</span>',
    items: [
      {
        name: "Batata Palito",
        price: 26.99,
        desc: "Porção. Individual: R$ 13,99",
        img: "imagens/porcoes.png",
      },
      {
        name: "Batata Palito c/ Catupiry, Cheddar e Bacon",
        price: 35.99,
        desc: "Porção. Individual: R$ 22,99",
        img: "imagens/porcoes.png",
      },
      {
        name: "Batata Rústica",
        price: 30.99,
        desc: "Porção. Individual: R$ 18,99",
        img: "imagens/porcoes.png",
      },
      {
        name: "Anéis de Cebola",
        price: 31.99,
        desc: "Porção. Individual: R$ 19,99",
        img: "imagens/porcoes.png",
      },
      {
        name: "Dadinho de Tapioca",
        price: 25.99,
        desc: "",
        img: "imagens/porcoes.png",
      },
      {
        name: "Mini Salgados (12 unidades)",
        price: 29.99,
        desc: "Coxinha, bolinha de queijo e risoles de presunto e queijo",
        img: "imagens/porcoes.png",
      },
    ],
  },
  sobremesas: {
    title: 'Nossas <span class="accent">Sobremesas</span>',
    items: [
      {
        name: "Petit Gâteau",
        price: 18,
        desc: "Bolinho de chocolate com sorvete de creme",
        img: "imagens/sobremesa.png",
      },
      {
        name: "Brownie com Sorvete",
        price: 16,
        desc: "Brownie quentinho com sorvete de baunilha",
        img: "imagens/sobremesa.png",
      },
      {
        name: "Milk Shake 500ml",
        price: 14,
        desc: "Sabores: chocolate, morango ou Ovomaltine",
        img: "imagens/sobremesa.png",
      },
    ],
  },
  donuts: {
    title: 'Nossos <span class="accent">Donuts</span>',
    items: [
      { name: "Brigadeiro", price: 13, desc: "", img: "imagens/donuts.png" },
      {
        name: "Doce de Leite Crocante",
        price: 13,
        desc: "",
        img: "imagens/donuts.png",
      },
      {
        name: "Frutas Vermelhas",
        price: 13,
        desc: "",
        img: "imagens/donuts.png",
      },
      {
        name: "Creme com Chocolate",
        price: 14,
        desc: "",
        img: "imagens/donuts.png",
      },
      { name: "Leite Moça", price: 14, desc: "", img: "imagens/donuts.png" },
      { name: "Paçoquita", price: 14, desc: "", img: "imagens/donuts.png" },
      { name: "Ovomaltine", price: 18, desc: "", img: "imagens/donuts.png" },
      {
        name: "Nutella com Morango",
        price: 20,
        desc: "",
        img: "imagens/donuts.png",
      },
    ],
  },
  vegetariano: {
    title: 'Opções <span class="accent">Vegetarianas</span>',
    items: [
      {
        name: "Burger de Grão de Bico",
        price: 30.99,
        desc: "Hambúrguer de grão de bico, queijo cheddar, tomate, cebola roxa, alface e maionese da casa.",
        ingredients: [
          "Pão brioche",
          "Hambúrguer de grão de bico",
          "Queijo cheddar",
          "Tomate",
          "Cebola roxa",
          "Alface",
          "Maionese da casa",
        ],
        img: "imagens/vegetariano.png",
      },
      {
        name: "Burger de Espinafre",
        price: 30.99,
        desc: "Hambúrguer de espinafre, queijo cheddar, tomate, cebola roxa, alface e maionese da casa.",
        ingredients: [
          "Pão brioche",
          "Hambúrguer de espinafre",
          "Queijo cheddar",
          "Tomate",
          "Cebola roxa",
          "Alface",
          "Maionese da casa",
        ],
        img: "imagens/vegetariano.png",
      },
      {
        name: "Burger de Soja",
        price: 30.99,
        desc: "Hambúrguer de soja, queijo cheddar, tomate, cebola roxa, alface e maionese da casa.",
        ingredients: [
          "Pão brioche",
          "Hambúrguer de soja",
          "Queijo cheddar",
          "Tomate",
          "Cebola roxa",
          "Alface",
          "Maionese da casa",
        ],
        img: "imagens/vegetariano.png",
      },
    ],
  },
};

// ============================================================
// HELPERS
// ============================================================

const formatBRL = (value) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// Escapa HTML antes de injetar no DOM (previne XSS)
const escapeHTML = (str) =>
  String(str).replace(
    /[&<>"']/g,
    (ch) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[ch],
  );

// ============================================================
// RENDERIZAÇÃO DO CARDÁPIO
// ============================================================

const productsGrid = document.getElementById("products-grid");
const menuTitle = document.getElementById("menu-title");
let currentCategory = "burgers";

function renderCategory(categoryKey) {
  currentCategory = categoryKey;
  const category = MENU[categoryKey];
  menuTitle.innerHTML = category.title;

  productsGrid.innerHTML = category.items
    .map(
      (item, index) => `
      <article class="dish-card">
        <div class="dish-img">
          <img src="${escapeHTML(item.img)}" alt="${escapeHTML(item.name)}" loading="lazy" />
        </div>
        <h3>${escapeHTML(item.name)}</h3>
        ${item.desc ? `<p class="dish-desc">${escapeHTML(item.desc)}</p>` : ""}
        <div class="dish-footer">
          <span class="price">${formatBRL(item.price)}</span>
          <button class="add-btn" aria-label="Adicionar ${escapeHTML(item.name)}"
            data-cat="${categoryKey}" data-index="${index}">+</button>
        </div>
      </article>`,
    )
    .join("");
}

// Troca de categoria ativa + renderização
document.querySelectorAll(".category").forEach((cat) => {
  cat.addEventListener("click", () => {
    document.querySelector(".category.active")?.classList.remove("active");
    cat.classList.add("active");
    renderCategory(cat.dataset.cat);
  });
});

// ============================================================
// CARRINHO
// ============================================================

const cart = [];

const cartCountEl = document.getElementById("cart-count");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");

function addToCart(
  product,
  removed = [],
  extras = [],
  qty = 1,
  isCombo = false,
) {
  const unitPrice =
    product.price +
    extras.reduce((sum, e) => sum + e.price, 0) +
    (isCombo ? COMBO_PRICE : 0);

  cart.push({
    name: product.name,
    unitPrice,
    qty,
    removed,
    extras,
    isCombo,
  });

  updateCartUI();
}

function cartTotal() {
  return cart.reduce((sum, item) => sum + item.unitPrice * item.qty, 0);
}

function updateCartUI() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCountEl.textContent = totalQty;
  cartCountEl.classList.toggle("visible", totalQty > 0);

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<p class="cart-empty">Seu carrinho está vazio 🍔</p>`;
  } else {
    cartItemsEl.innerHTML = cart
      .map((item, index) => {
        const mods = [];
        if (item.isCombo) mods.push(`Combo: ${COMBO_DESC}`);
        if (item.removed.length)
          mods.push(`Sem: ${item.removed.map(escapeHTML).join(", ")}`);
        if (item.extras.length)
          mods.push(
            `Adicionais: ${item.extras
              .map((e) => `${escapeHTML(e.name)} (+${formatBRL(e.price)})`)
              .join(", ")}`,
          );

        return `
        <div class="cart-item">
          <div class="cart-item-top">
            <span class="cart-item-name">${escapeHTML(item.name)}</span>
            <button class="cart-item-remove" data-index="${index}"
              aria-label="Remover">✕</button>
          </div>
          ${mods.length ? `<p class="cart-item-mods">${mods.join("<br>")}</p>` : ""}
          <div class="cart-item-bottom">
            <div class="qty-control">
              <button type="button" data-action="minus" data-index="${index}">−</button>
              <span>${item.qty}</span>
              <button type="button" data-action="plus" data-index="${index}">+</button>
            </div>
            <span class="cart-item-price">${formatBRL(item.unitPrice * item.qty)}</span>
          </div>
        </div>`;
      })
      .join("");
  }

  cartTotalEl.textContent = formatBRL(cartTotal());
  checkoutBtn.disabled = cart.length === 0;
}

// Ações dentro do carrinho (delegação de eventos)
cartItemsEl.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  const index = Number(btn.dataset.index);

  if (btn.classList.contains("cart-item-remove")) {
    cart.splice(index, 1);
  } else if (btn.dataset.action === "plus") {
    cart[index].qty += 1;
  } else if (btn.dataset.action === "minus") {
    cart[index].qty -= 1;
    if (cart[index].qty <= 0) cart.splice(index, 1);
  } else {
    return;
  }

  updateCartUI();
});

// Abrir/fechar drawer do carrinho
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");

function openCart() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("open");
}

document.getElementById("cart-open-btn").addEventListener("click", openCart);

// Links "Pedidos" (navbar) e "Pedir Agora" (footer) abrem o carrinho
document.getElementById("nav-orders-link").addEventListener("click", (e) => {
  e.preventDefault();
  openCart();
});

document.getElementById("footer-order-btn").addEventListener("click", (e) => {
  e.preventDefault();
  openCart();
});

// Destaque do link ativo na navbar
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links a.active")?.classList.remove("active");
    link.classList.add("active");
  });
});

function closeCart() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("open");
}

document.getElementById("cart-close").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

// ============================================================
// MODAL DE PERSONALIZAÇÃO
// ============================================================

const modal = document.getElementById("product-modal");
const modalName = document.getElementById("modal-product-name");
const modalDesc = document.getElementById("modal-product-desc");
const modalRemoveSection = document.getElementById("modal-remove-section");
const modalRemoveList = document.getElementById("modal-remove-list");
const modalComboSection = document.getElementById("modal-combo-section");
const comboCheck = document.getElementById("combo-check");
const modalExtrasList = document.getElementById("modal-extras-list");
const modalAddBtn = document.getElementById("modal-add-btn");
const modalTotal = document.getElementById("modal-total");
const qtyValue = document.getElementById("qty-value");

let modalProduct = null;
let modalQty = 1;

function openProductModal(product) {
  modalProduct = product;
  modalQty = 1;
  qtyValue.textContent = "1";

  modalName.textContent = product.name;
  modalDesc.textContent = product.desc || "";

  // Combo disponível apenas para lanches (itens com ingredientes)
  const isSnack = Boolean(product.ingredients && product.ingredients.length);
  modalComboSection.style.display = isSnack ? "block" : "none";
  comboCheck.checked = false;
  comboCheck.closest(".option-item")?.classList.remove("checked");

  // Ingredientes removíveis (só para burgers/vegetariano)
  if (isSnack) {
    modalRemoveSection.style.display = "block";
    modalRemoveList.innerHTML = product.ingredients
      .map(
        (ing, i) => `
        <div class="option-item">
          <label>
            <input type="checkbox" class="remove-check" value="${escapeHTML(ing)}" id="rm-${i}" />
            Remover ${escapeHTML(ing)}
          </label>
        </div>`,
      )
      .join("");
  } else {
    modalRemoveSection.style.display = "none";
    modalRemoveList.innerHTML = "";
  }

  // Adicionais
  modalExtrasList.innerHTML = ADICIONAIS.map(
    (extra, i) => `
    <div class="option-item">
      <label>
        <input type="checkbox" class="extra-check" data-index="${i}" id="ex-${i}" />
        ${escapeHTML(extra.name)}
      </label>
      <span class="extra-price">+ ${formatBRL(extra.price)}</span>
    </div>`,
  ).join("");

  updateModalTotal();
  modal.classList.add("open");
}

function getModalExtras() {
  return [...document.querySelectorAll(".extra-check:checked")].map(
    (input) => ADICIONAIS[Number(input.dataset.index)],
  );
}

function getModalRemoved() {
  return [...document.querySelectorAll(".remove-check:checked")].map(
    (input) => input.value,
  );
}

function updateModalTotal() {
  const extras = getModalExtras();
  const unit =
    modalProduct.price +
    extras.reduce((s, e) => s + e.price, 0) +
    (comboCheck.checked ? COMBO_PRICE : 0);
  modalTotal.textContent = `— ${formatBRL(unit * modalQty)}`;
}

function closeModal() {
  modal.classList.remove("open");
}

// Eventos do modal
modal.addEventListener("change", (e) => {
  if (e.target.matches("input[type='checkbox']")) {
    e.target
      .closest(".option-item")
      .classList.toggle("checked", e.target.checked);
  }
  updateModalTotal();
});

document.getElementById("qty-plus").addEventListener("click", () => {
  modalQty += 1;
  qtyValue.textContent = modalQty;
  updateModalTotal();
});

document.getElementById("qty-minus").addEventListener("click", () => {
  if (modalQty > 1) modalQty -= 1;
  qtyValue.textContent = modalQty;
  updateModalTotal();
});

modalAddBtn.addEventListener("click", () => {
  addToCart(
    modalProduct,
    getModalRemoved(),
    getModalExtras(),
    modalQty,
    comboCheck.checked,
  );
  closeModal();
  // abre o carrinho para o cliente ver o item adicionado
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("open");
});

document.getElementById("modal-close").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Tecla ESC fecha modal e carrinho
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeCart();
  }
});

// Clique nos botões "+" do cardápio (item dinâmico do grid ou fixo com data-add)
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-btn");
  if (!btn) return;

  if (btn.dataset.cat) {
    const product = MENU[btn.dataset.cat].items[Number(btn.dataset.index)];
    openProductModal(product);
  } else if (btn.dataset.add) {
    addToCart({ name: btn.dataset.add, price: Number(btn.dataset.price) });
    cartDrawer.classList.add("open");
    cartOverlay.classList.add("open");
  }
});

// ============================================================
// CHECKOUT VIA WHATSAPP
// ============================================================

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) return;

  const lines = cart.map((item) => {
    let text = `• ${item.qty}x ${item.name} — ${formatBRL(item.unitPrice * item.qty)}`;
    if (item.isCombo)
      text += `\n   _Combo: ${COMBO_DESC} (+${formatBRL(COMBO_PRICE)})_`;
    if (item.removed.length) text += `\n   _Sem: ${item.removed.join(", ")}_`;
    if (item.extras.length)
      text += `\n   _Adicionais: ${item.extras.map((e) => e.name).join(", ")}_`;
    return text;
  });

  const message =
    `🍔 *NOVO PEDIDO — Ninja Burger*\n\n` +
    lines.join("\n\n") +
    `\n\n*Total: ${formatBRL(cartTotal())}*`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});

// Render inicial
renderCategory("burgers");
updateCartUI();
