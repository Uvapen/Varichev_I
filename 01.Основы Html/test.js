var counter = 1;
var ItemCount = document.getElementById('basket-count-items');
const overlay = document.getElementById('overlay');
const basket = document.getElementById('basket');
const loader = document.getElementById('loader');
// const openModelButton = document.querySelectorAll('[data-model-target]');
// const closeModelButtons = document.querySelectorAll('[data-close-button]');

function updateCounter() {
    var text = "В вашей корзине " + counter + " товаров";
    document.querySelector(".button-counter").style. background = "orange";
    document.querySelector(".button-counter").innerText = counter;
    ItemCount.innerText = text; 
    counter++;
}

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
    openLoader(loader);
    setTimeout(openBasket, 4000 , basket); 
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
    modals.forEach(modals => {
        closeBasket(modals);
    })
});

function openBasket(basket) {
    basket.classList.add('active');
    overlay.classList.add('active');
    closeLoader(loader);
}

function openLoader(loader) {
    loader.classList.add('active')
}

function closeLoader(loader) {
    loader.classList.remove('active')
}

function closeBasket(basket) {
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
