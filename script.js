const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}


const close = document.getElementById('close');
if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

const products = {
    1: {
        name: "Fashion Wear T-shirt",
        price: "$199",
        image: "img/products/f1.jpg"
    },
    2: {
        name: "Light Pink Shirt",
        price: "$68",
        image: "img/products/n1.jpg"
    }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

document.querySelector(".single-pro-details h4").innerText =
    products[id].name;

document.querySelector(".single-pro-details h2").innerText =
    products[id].price;

document.getElementById("MainImg").src =
    products[id].image;