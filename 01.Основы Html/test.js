let counter = 1;
let Map_article = 1;
let ItemCount = document.querySelector('.basket-header__count-items');
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
    let addToCartButton = document.querySelectorAll('.cart-item__buy-button');
    addToCartButton.forEach(button => {
        button.addEventListener('click', () => {
        let shopItem = button.parentElement;
        let title = shopItem.querySelector('.cart-item__title').innerText;
        let price = shopItem.querySelector('.cart-item__price').innerText;
        let img = shopItem.querySelector('.cart-item__img').src;
        addItemToCart (title, price, img);
        const Item_obj = {
            Name:`${title}`,
            Count:1,
            Price:`${price}`,
        }
        for(let item of Item_map.values()){
            if(item.Name==title)
            {
                item.Count++;
                break
            }
        } 
        Item_map.set(Map_article,Item_obj)
        Map_article++; 
        console.log(Item_map);
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
// console.log(document.querySelectorAll('.cart-item__buy-button'));

let Item_map = new Map ([
    [1,2]
])
// const qwr = {
//     user: 123,
//     tte:234,
// };
// let map1 = new Map ([
//     [qwr,234]
// ])

// for(let obj of map1.keys()){
//     console.log(obj)
// }