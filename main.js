// Eventos: menú
// Promer arcgumento, lo que queremos escuchar. Segundo argumento, lo que queremos ejecutar.
document.querySelector("#open-nav-menu").addEventListener("click", function () {
  document.querySelector("header nav .wrapper").classList.add("nav-open")
})

document
  .querySelector("#close-nav-menu")
  .addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.remove("nav-open")
  })

// Tipo de dato string
const customer = "Sara"
let balance = 2000

let accountNumber = "I456545"
accountNumber.length // 7 - Se puede usar como validación

accountNumber[0] // N - Validar 

accountNumber.slice(0,2) // Dos primeros caracteres

accountNumber = "PT_456545"

accountNumber.replace = ("_","") // PT456545 - Reemplaza

accountNumber = accountNumber.replace = ("_","") // Actualiza con el replace

// Tipo de dato número

let price = 17.55
typeof price // 'number'

let discount = 2

let finalPrice = price - discount

finalPrice //15.55

Math.round(price) // 18 - redondea hacia arriba o abajo según el decima
Math.floor(price) // 17 - redondea hacia abajo
Math.ceil(price) // 18 - furza redondeo hacia arriba
price.toFixed(2) // redondea decimal