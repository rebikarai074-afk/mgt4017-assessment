const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
let basket = [];

$("#year").textContent = new Date().getFullYear();

// Mobile navigation
$("#menuToggle").addEventListener("click", () => {
  const open = $("#mainNav").classList.toggle("open");
  $("#menuToggle").setAttribute("aria-expanded", String(open));
});
$$(".main-nav a").forEach(link => link.addEventListener("click", () => {
  $("#mainNav").classList.remove("open");
  $("#menuToggle").setAttribute("aria-expanded", "false");
}));

// Product category filters
$$(".filter").forEach(button => button.addEventListener("click", () => {
  $$(".filter").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  const category = button.dataset.filter;
  $$(".product-card").forEach(card => {
    card.hidden = category !== "all" && card.dataset.category !== category;
  });
}));

// Demo basket. It is intentionally not connected to payment processing.
function renderBasket() {
  $("#cartCount").textContent = basket.reduce((sum, item) => sum + item.quantity, 0);
  $("#cartItems").innerHTML = basket.length ? basket.map((item, index) =>
    `<div class="cart-line"><span>${item.name}<br>Qty: ${item.quantity}</span><span>£${(item.price * item.quantity).toFixed(2)}<br><button data-remove="${index}">Remove</button></span></div>`
  ).join("") : '<p class="empty-cart">Your basket is empty.</p>';
  $("#cartTotal").textContent = "£" + basket.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  $$("[data-remove]").forEach(button => button.addEventListener("click", () => {
    basket.splice(Number(button.dataset.remove), 1);
    renderBasket();
  }));
}
$$(".add-button").forEach(button => button.addEventListener("click", () => {
  const name = button.dataset.name;
  const price = Number(button.dataset.price);
  const existing = basket.find(item => item.name === name);
  if (existing) existing.quantity += 1;
  else basket.push({name, price, quantity: 1});
  renderBasket();
  button.innerHTML = "Added to basket <span>✓</span>";
  setTimeout(() => button.innerHTML = 'Add to basket <span>+</span>', 1000);
}));

function toggleBasket(open) {
  $("#cartPanel").classList.toggle("open", open);
  $("#overlay").classList.toggle("show", open);
  $("#cartPanel").setAttribute("aria-hidden", String(!open));
}
$("#cartButton").addEventListener("click", () => toggleBasket(true));
$("#closeCart").addEventListener("click", () => toggleBasket(false));
$("#overlay").addEventListener("click", () => toggleBasket(false));

// The contact form prepares an email in the visitor's default email application.
// Replace the email address below with the real business contact before publishing.
$("#contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Aroma Brew enquiry: ${data.get("topic")}`);
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nTopic: ${data.get("topic")}\n\n${data.get("message")}`
  );
  window.location.href = `mailto:hello@aromabrew.example?subject=${subject}&body=${body}`;
  $("#formNote").textContent = "Your email app should open with the message ready. Replace hello@aromabrew.example with your real email address before launch.";
});
renderBasket();
