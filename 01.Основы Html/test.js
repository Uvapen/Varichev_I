var counter = 1;
var itemCounter = 0;

function updateCounter() {
    document.querySelector(".button-counter").style. background = "orange";
    document.querySelector(".button-counter").innerText = counter;
    counter++;
}

const openModelButtons = document.querySelectorAll('[data-model-target]');
const closeModelButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModelButtons.forEach(button => {
    button.addEventListener('click', () => {
        const model = document.querySelector(button.dataset.modelTarget);
        openModel(model);
    })
});

closeModelButtons.forEach(button => {
    button.addEventListener('click', () => {
        const model = button.closest('.basket');
        closeModel(model);
    })
});

overlay.addEventListener('click', () => {
    const models = document.querySelectorAll('.basket.active');
    models.forEach(model => {
        closeModel(model);
    })
});

function openModel(model) {
    if (model == null) return;
    model.classList.add('active');
    overlay.classList.add('active');
}

function closeModel(model) {
    if (model == null) return;
    model.classList.remove('active');
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
        console.log(title, price, img);
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
