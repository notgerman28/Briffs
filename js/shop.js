//Funcion del menu
$(document).ready(function () {
    $("#menu1").click(function () {

        $("#menu").toggle(
        );

    })

});

//funcion para cambiar entre secciones
$(document).ready(function () {
    $("#nba").click(function () {
        $(".nbashop").show();
        $(".mlbshop").hide();
        $(".nflshop").hide();
        $(".ft1").show();
        $(".ft2").hide();
        $(".ft3").hide();
        $(".mlb2").hide();
        $(".mlb3").show();
        $(".nfl3").hide();
        $(".nfl2").show();
        $(".nba2").show();
        $(".nba3").hide();
    });
});

$(document).ready(function () {
    $("#mlb").click(function () {
        $(".nbashop").hide();
        $(".mlbshop").show();
        $(".nflshop").hide();
        $(".ft1").hide();
        $(".ft2").show();
        $(".ft3").hide();
        $(".mlb2").show();
        $(".mlb3").hide();
        $(".nfl3").hide();
        $(".nfl2").show();
        $(".nba2").hide();
        $(".nba3").show();
    });
});

$(document).ready(function () {
    $("#mlb1").click(function () {
        $(".nbashop").hide();
        $(".mlbshop").show();
        $(".nflshop").hide();
        $(".ft1").hide();
        $(".ft2").show();
        $(".ft3").hide();
        $(".mlb2").show();
        $(".mlb3").hide();
        $(".nfl3").hide();
        $(".nfl2").show();
        $(".nba2").hide();
        $(".nba3").show();
    });
});


$(document).ready(function () {
    $("#nfl").click(function () {
        $(".nbashop").hide();
        $(".mlbshop").hide();
        $(".nflshop").show();
        $(".ft1").hide();
        $(".ft2").hide();
        $(".ft3").show();
        $(".mlb2").hide();
        $(".mlb3").show();
        $(".nfl2").hide();
        $(".nfl3").show();
        $(".nba3").show();
        $(".nba2").hide();
    });
});

$(document).ready(function () {
    $("#nba1").click(function () {
        $(".nbashop").show();
        $(".mlbshop").hide();
        $(".nflshop").hide();
        $(".ft1").show();
        $(".ft2").hide();
        $(".ft3").hide();
        $(".mlb2").hide();
        $(".mlb3").show();
        $(".nfl3").hide();
        $(".nfl2").show();
        $(".nba2").show();
        $(".nba3").hide();
    });
});

//funcion del carrito
let allContainerCart = document.querySelector('.contp'); 
let containerBuyCart = document.querySelector('.card-items'); 
let priceTotal = document.querySelector('.price-total'); 
let amountProduct = document.querySelector('#contador-productos'); 

const addToCartButtons = document.querySelectorAll('.btn-add-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', addProduct);
});

let buyThings = [];
let totalCard = 0;
let countProduct = 0;

loadEventListeners();
function loadEventListeners() {
    containerBuyCart.addEventListener('click', deleteProduct);
}

function addProduct(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement;
        readTheContent(selectProduct);
    }
}

function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard = totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
            }
        });
        buyThings = buyThings.filter(product => product.id !== deleteId);

        countProduct--;
    }
    if (buyThings.length === 0) {
        priceTotal.innerHTML = 0;
        amountProduct.innerHTML = 0;
    }
    loadHtml();
}

function readTheContent(product) {
    const infoProduct = {
        image: product.querySelector('img').src,
        title: product.querySelector('.ne').textContent,
        price: product.querySelector('.ne3').textContent.replace('$', ''),
        id: product.querySelector('a.btn-add-cart').getAttribute('data-id'),
        amount: 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct]
        countProduct++;
    }
    loadHtml();
}

function loadHtml() {
    clearHtml();
    buyThings.forEach(product => {
        const { image, title, price, amount, id } = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">${price}</h5>
                <h6>Cantidad: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;
        containerBuyCart.appendChild(row);
        priceTotal.innerHTML = `${totalCard}`;
        amountProduct.innerHTML = countProduct;
    });
}
function clearHtml() {
    containerBuyCart.innerHTML = '';
}

$(".container-cart-icon").click(function () {
    $("#products-id").toggle();
})