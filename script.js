const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

const products = {
    1: {
        name: "Fashion Wear T-shirt",
        price: "$199",
        image: "img/products/f1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae ligula nec magna varius tincidunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    2: {
        name: "Astronaut T-Shirt",
        price: "$68",
        image: "img/products/f2.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae ligula nec magna varius tincidunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    3: {
        name: "White Full Sleeve Shirt",
        price: "$74",
        image: "img/products/f3.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae ligula nec magna varius tincidunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    4: {
        name: "Black Full Sleeve Shirt",
        price: "$79",
        image: "img/products/f4.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae ligula nec magna varius tincidunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    5: {
        name: "Red Printed T-Shirt",
        price: "$49",
        image: "img/products/f5.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae ligula nec magna varius tincidunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    6: {
        name: "Blue Printed T-Shirt",
        price: "$49",
        image: "img/products/f6.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae ligula nec magna varius tincidunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    7: {
        name: "Green Printed T-Shirt",
        price: "$49",
        image: "img/products/f7.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae ligula nec magna varius tincidunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    8: {
        name: "Yellow Printed T-Shirt",
        price: "$49",
        image: "img/products/f8.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae ligula nec magna varius tincidunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    }
};

//
// ===== PRODUCT PAGE LOGIC =====
// (Runs only if we are on sproduct.html)
//

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const title = document.querySelector(".single-pro-details h4");
const price = document.querySelector(".single-pro-details h2");
const desc = document.querySelector(".single-pro-details span");
const mainImg = document.getElementById("MainImg");

if (title && price && mainImg && products[id]) {
    title.innerText = products[id].name;
    price.innerText = products[id].price;
    desc.innerText = products[id].description;
    mainImg.src = products[id].image;
}