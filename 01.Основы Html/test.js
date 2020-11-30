var counter = 1;
var ItemCount = document.querySelector('.basket-header__count-items');
const overlay = document.querySelector('.overlay');
const basket = document.querySelector('.basket');
const loader = document.querySelector('.loader');
const menu = document.querySelector('.header-left__menu-nav');
const overlayMenu = document.querySelector('.header-left__overlay');
// const openModelButton = document.querySelectorAll('[data-model-target]');
// const closeModelButtons = document.querySelectorAll('[data-close-button]');

// function updateCounter() {
//     let text = "В вашей корзине " + counter + " товаров";
//     document.querySelector(".button-counter").style. background = "orange";
//     document.querySelector(".button-counter").innerText = counter;
//     ItemCount.innerText = text; 
//     counter++;
// }

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
    openLoader();
    setTimeout(openBasket, 4000); 
}

function closePopUp() {
    closeBasket();
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

function openBasket() {
    basket.classList.add('active');
    overlay.classList.add('active');
    closeLoader();
}

function openLoader() {
    loader.classList.add('active')
}

function closeLoader() {
    loader.classList.remove('active')
}

function closeBasket() {
    basket.classList.remove('active');
    overlay.classList.remove('active');
}

function findItems() {
    var addToCartButton = document.querySelectorAll('.cart-item__buy-button');
    addToCartButton.forEach(button => {
        button.addEventListener('click', () => {
        var shopItem = button.parentElement;
        var title = shopItem.querySelector('.cart-item__title').innerText;
        var price = shopItem.querySelector('.cart-item__price').innerText;
        var img = shopItem.querySelector('.cart-item__img').src;
        addItemToCart (title, price, img);
        })
    }) 
}

function addItemToCart (title, price, img) {
    let cartRow = document.createElement('div.');
    const cartItems = document.getElementsByClassName('basket__cart-items')[0];
    let text = "В вашей корзине " + counter + " товаров";
    cartRow.classList.add('basket__cart-item');
    document.querySelector(".header-right__button-counter").style.visibility = "visible"; 
    document.querySelector(".header-right__button-counter").innerText = counter;
    ItemCount.innerText = text; 
    counter++;
    const cartContent = `<img class="basket__cart-img" src="${img}">
                        <span class="basket__cart-title">${title}</span>
                        <span class= "basket__cart-price">${price}</span>
                        <button class="remove-button">Удалить</button>`  
    cartRow.innerHTML = cartContent;
    cartItems.append(cartRow);
}


function openMenu() {
    menu.classList.add('active');
    overlayMenu.classList.add('active');
}

overlayMenu.addEventListener('click', () => {
    menu.classList.remove('active')
    overlayMenu.classList.remove('active');
})
// var add = document.querySelectorAll('[cart-add-button]')
// console.log(add);
findItems();
console.log(document.querySelectorAll('.cart-item__buy-button'));