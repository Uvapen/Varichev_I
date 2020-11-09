var counter = 1;
var ItemCount = document.getElementById('basket-count-items');

function updateCounter() {
    var text = "В вашей корзине " + counter + " товаров";
    document.querySelector(".button-counter").style. background = "orange";
    document.querySelector(".button-counter").innerText = counter;
    ItemCount.innerText = text; 
    counter++;
}

// const openModelButton = document.querySelectorAll('[data-model-target]');
// const closeModelButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

// openModelButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const model = document.querySelector(button.dataset.modelTarget);
//         const loader = document.getElementById('loader');
//         openLoader(loader);
//         setTimeout(closeLoader, 4000, loader);
//         openModel(model);
//         console.log(model);
//     })
// });

function openPopUp() {
    const basket = document.getElementById('basket');
    const loader = document.getElementById('loader');
    openLoader(loader);
    setTimeout(openBasket, 4000 , basket, loader); 
}

function closePopUp() {
    const basket = document.getElementById('basket');
    closeBasket(basket);
}

// closeModelButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const model = button.closest('.basket');
//         closeModel(model);
//     })
// });

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.basket.active');
    modals.forEach(modal => {
        closeModel(modal);
    })
});

function openBasket(basket, loader) {
    if (basket == null) return;
    closeLoader(loader);
    basket.classList.add('active');
    overlay.classList.add('active');
}

function openLoader(loader) {
    if (loader == null) return;
    loader.classList.add('active')
}

function closeLoader(loader) {
    if (loader == null) return;
    loader.classList.remove('active')
}

function closeBasket(basket) {
    if (basket == null) return;
    basket.classList.remove('active');
    overlay.classList.remove('active');
}

function findItems() {
    var addToCartButton = document.querySelectorAll('[data-cart-add-button]');
    addToCartButton.forEach(button => {
        button.addEventListener('click', () => {
        var shopItem = button.parentElement;
        var title = shopItem.querySelector('.title').innerText;
        var price = shopItem.querySelector('.price').innerText;
        var img = shopItem.querySelector('.item-img').src;
        addItemToCart (title, price, img);
        })
    }) 
}

function addItemToCart (title, price, img) {
    var cartRow = document.createElement('div');
    var cartItems = document.getElementsByClassName('cart-item')[0];
    var cartContent = ` <img class="cart-img" src="${img}">
                        <span class="cart-title">${title}</span>
                        <span class= "cart-price">${price}</span>  
                        `
    cartRow.innerHTML = cartContent;
    cartItems.append(cartRow);
}

// var add = document.querySelectorAll('[cart-add-button]')
// console.log(add);
findItems();
