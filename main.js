const galleryImages = [
  {
    src: "./assets/gallery/image1.jpg",
    alt: "Thumbnail Image 1",
  },
  {
    src: "./assets/gallery/image2.jpg",
    alt: "Thumbnail Image 2",
  },
  {
    src: "./assets/gallery/image3.jpg",
    alt: "Thumbnail Image 3",
  },
]

const products = [
  {
    title: "AstroFiction",
    author: "John Doe",
    price: 49.9,
    image: "./assets/products/img6.png",
  },
  {
    title: "Space Odissey",
    author: "Marie Anne",
    price: 35,
    image: "./assets/products/img1.png",
  },
  {
    title: "Doomed City",
    author: "Jason Cobert",
    price: 0,
    image: "./assets/products/img2.png",
  },
  {
    title: "Black Dog",
    author: "John Doe",
    price: 85.35,
    image: "./assets/products/img3.png",
  },
  {
    title: "My Little Robot",
    author: "Pedro Paulo",
    price: 0,
    image: "./assets/products/img5.png",
  },
  {
    title: "Garden Girl",
    author: "Ankit Patel",
    price: 45,
    image: "./assets/products/img4.png",
  },
]

// Menu section
function menuHandler() {
  document
    .querySelector("#open-nav-menu")
    .addEventListener("click", function () {
      document.querySelector("header nav .wrapper").classList.add("nav-open")
    })

  document
    .querySelector("#close-nav-menu")
    .addEventListener("click", function () {
      document.querySelector("header nav .wrapper").classList.remove("nav-open")
    })
}

function celsiusToFahr(temperature) {
  let fahr = (temperature * 9) / 5 + 32
  return fahr
}

// Greeting section
function greetingHandler() {
  let currentHour = new Date().getHours()

  let greetingText

  if (currentHour < 12) {
    greetingText = "Good morning!"
  } else if (currentHour < 19) {
    greetingText = "Good afternoon!"
  } else if (currentHour < 24) {
    greetingText = "Good evening!"
  } else {
    greetingText = "Welcome!"
  }

  const weatherCondition = "Sunny"
  const userLocation = "Rio de Janeiro"
  let temperature = 30

  let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(
    1
  )}°C outside.`
  let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(
    temperature
  ).toFixed(1)}°F outside.`

  document.querySelector("#greeting").innerHTML = greetingText
  document.querySelector("p#weather").innerHTML = celsiusText

  document
    .querySelector(".weather-group")
    .addEventListener("click", function (e) {
      // celsius
      // fahr
      if (e.target.id == "celsius") {
        document.querySelector("p#weather").innerHTML = celsiusText
      } else if (e.target.id == "fahr") {
        document.querySelector("p#weather").innerHTML = fahrText
      }
    })
}

// Fecha y hora
function clockHandler() {
  setInterval(function () {
    let localTime = new Date()

    document.querySelector("span[data-time=hours]").textContent = localTime
      .getHours()
      .toString()
      .padStart(2, "0")
    document.querySelector("span[data-time=minutes]").textContent = localTime
      .getMinutes()
      .toString()
      .padStart(2, "0")
    document.querySelector("span[data-time=seconds]").textContent = localTime
      .getSeconds()
      .toString()
      .padStart(2, "0")
  }, 1000)
}

// Gallery section

function galleryHandler() {
  let mainImage = document.querySelector("#gallery > img")
  let thumbnails = document.querySelector("#gallery .thumbnails")

  mainImage.src = galleryImages[0].src
  mainImage.alt = galleryImages[0].alt

  galleryImages.forEach(function (image, index) {
    let thumb = document.createElement("img")
    thumb.src = image.src
    thumb.alt = image.alt
    thumb.dataset.arrayIndex = index
    thumb.dataset.selected = index === 0 ? true : false

    thumb.addEventListener("click", function (e) {
      let selectedIndex = e.target.dataset.arrayIndex
      let selectedImage = galleryImages[selectedIndex]
      mainImage.src = selectedImage.src
      mainImage.alt = selectedImage.alt
      thumbnails.querySelectorAll("img").forEach(function (img) {
        img.dataset.selected = false
      })

      e.target.dataset.selected = true
    })

    thumbnails.appendChild(thumb)
  })
}

// Products section

function productsHandler() {
  let productsSection = document.querySelector(".products-area")
  let freeProducts = products.filter(function (item) {
    return !item.price || item.price <= 0
  })

  let paidProducts = products.filter(function (item) {
    return item.price > 0
  })

  console.log("free:", freeProducts)
  console.log("paid:", paidProducts)

  // Ejecutar un bucle a través de los productos y crear un elemento HTML (product-item) para cada uno de ellos
  products.forEach(function (product, index) {
    // Crear un elemnto HTML por cada producto individual
    let productElm = document.createElement("div")
    productElm.classList.add("product-item")

    // Crear la imagen del producto
    let productImage = document.createElement("img")
    productImage.src = product.image
    productImage.alt = "Image for " + product.title

    // Crear la sección detalles del producto
    let productDetails = document.createElement("div")
    productDetails.classList.add("product-details")

    // Crear el título del producto, autor, titulo precio y precio
    let productTitle = document.createElement("h3")
    productTitle.classList.add("product-title")
    productTitle.textContent = product.title

    let productAuthor = document.createElement("p")
    productAuthor.classList.add("product-author")
    productAuthor.textContent = product.author

    let priceTitle = document.createElement("p")
    priceTitle.classList.add("price-title")
    priceTitle.textContent = "Price"

    let productPrice = document.createElement("p")
    productPrice.classList.add("product-price")
    productPrice.textContent =
      product.price > 0 ? "$" + product.price.toFixed(2) : "Free"

    // Añadir detalles del producto
    productDetails.append(productTitle)
    productDetails.append(productAuthor)
    productDetails.append(priceTitle)
    productDetails.append(productPrice)

    // Todos los hijos HTML del producto
    productElm.append(productImage)
    productElm.append(productDetails)

    // Agregamos todos los productos individuales a la seccion de productos
    productsSection.append(productElm)
  })

  document.querySelector(
    ".products-filter label[for=all] span.product-amount"
  ).textContent = products.length
  document.querySelector(
    ".products-filter label[for=paid] span.product-amount"
  ).textContent = paidProducts.length
  document.querySelector(
    ".products-filter label[for=free] span.product-amount"
  ).textContent = freeProducts.length
}

// Page load
menuHandler()
greetingHandler()
clockHandler()
galleryHandler()
productsHandler()
