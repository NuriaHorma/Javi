import { DOCUMENTATION } from "./constants.js";

const inputbuscar = document.querySelector(".menu-buscar");



const sellerlist = document.querySelector('.menu-content');

const getsellertemplate = (seller) => {
  return `<li class="seller-element">${seller}</li>`;
};

const setupsellerlist = () => {
  const sellers = DOCUMENTATION.filter((doc) => doc.seller);
  const sellersul = document.createElement("ul");

  sellers.forEach((seller) => {
    const sellerstemplate = getsellertemplate(seller.seller);
    sellersul.innerHTML += sellerstemplate;
  });

  sellerlist.appendChild(sellersul);
};

setupsellerlist();

const normalizeText = (text) => text.trim().tolowerCase()

const handleBuscar = (event) => {
  const { value } = event.target.value;
  const normalizeValue = normalizeText(value)

  DOCUMENTATION.filter(doc => {
    const normalizeseller = normalizeText(doc.seller)
    return normalizeseller.includes(normalizeValue)
  })

  const searchul = document.createElement("ul")
  filteredDocumentation.forEach(doc => { searchul.innerHTML(getsellertemplate) })

  searchBlockElement.append(searchul)
}


inputbuscar.addEventListener("input", handleBuscar);


const products = [
  {
    name: 'Flat White', price: 5.50,
    stars: 4,
    reviews: 250,
    seller: 'Starbucks',
    image: "https://www.starbucks.es/sites/starbucks-es/files/styles/c10_2_col_text_560x467/public/2021-11/Flat%20White.jpeg.webp?itok=NecBWl3s"
  },

  {
    name: 'Espresso', price: 5.50,
    stars: 3,
    reviews: 250,
    seller: 'Starbucks',
    image: "https://www.starbucks.es/sites/starbucks-es/files/styles/c10_2_col_text_560x467/public/2021-11/Espresso.jpeg.webp?itok=-kPKCTdy"
  },

  {
    name: 'Macchiato', price: 4.50,
    stars: 3,
    reviews: 150,
    seller: 'Starbucks',
    image: "https://www.starbucks.es/sites/starbucks-es/files/styles/c10_2_col_text_560x467/public/2021-11/Espresso%20Macchiato.jpeg.webp?itok=qGRtPlOs"
  },

  {
    name: 'Expresso Panna', price: 6.50,
    stars: 3,
    reviews: 150,
    seller: 'Starbucks',
    image: "https://www.starbucks.es/sites/starbucks-es/files/styles/c10_2_col_text_560x467/public/2021-11/Espresso%20Con%20Panna.jpeg.webp?itok=DerBhDNn"
  },


  {
    name: 'Latte', price: 6.50,
    stars: 4,
    reviews: 125,
    seller: 'Starbucks',
    image: "https://www.starbucks.es/sites/starbucks-es/files/styles/c10_2_col_text_560x467/public/2021-11/Caffe%CC%80%20Latte.jpeg.webp?itok=sGPkUyro"
  },


  {
    name: 'Latte Macchiato', price: 6.50,
    stars: 4,
    reviews: 125,
    seller: 'Starbucks',
    image: "https://www.starbucks.es/sites/starbucks-es/files/styles/c10_2_col_text_560x467/public/2021-11/Latte%20Macchiato.jpeg.webp?itok=NYZh9PaB"
  },


  {
    name: 'Cappuccino', price: 5.50,
    stars: 4,
    reviews: 140,
    seller: 'Starbucks',
    image: "https://www.starbucks.es/sites/starbucks-es/files/styles/c10_2_col_text_560x467/public/2022-03/SBX-UK-MOP-Cappuccino.jpg.webp?itok=zBw4SXIE"
  },

  {
    name: 'Cappuccino Freddo', price: 5.50,
    stars: 4,
    reviews: 140,
    seller: 'Starbucks',
    image: "https://www.starbucks.es/sites/starbucks-es/files/styles/c10_2_col_text_560x467/public/2022-03/cappuccino%20freddo.png.webp?itok=76PnuTBC"
  },


  {
    name: 'Americano', price: 4.50,
    stars: 4,
    reviews: 240,
    seller: 'Starbucks',
    image: "https://www.starbucks.es/sites/starbucks-es/files/styles/c10_2_col_text_560x467/public/2022-03/SBX-UK-MOP-Caffe%CC%80Americano.jpg.webp?itok=ag7Cnqe1"
  },


  {
    name: 'Cold Brew', price: 4.50,
    stars: 4,
    reviews: 340,
    seller: 'Starbucks',
    image: "https://www.starbucks.es/sites/starbucks-es/files/styles/c10_2_col_text_560x467/public/2021-11/Cold%20Brew%20Coffee%20.jpg.webp?itok=Z_XcGxql"
  },

]

const getproducttemplate = (name, seller, stars, reviews, image) => {
  return `<div class="products-info">
    <h2> ${name}</h2 >
    <h3>Distribuidor: ${seller}</h3>
    <h3>${stars}</h3>
    <h3>${reviews}</h3>
    <img src=${image} />
</div >`

}

const productlist = document.querySelector('#productlist')


for (let i = 0; i < products.length; i++) {
  const product = products[i]
  productlist.innerHTML += getproducttemplate(
    product.name,
    product.seller,
    product.stars,
    product.reviews,
    product.image
  )
}