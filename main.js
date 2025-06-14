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


const customer = "Sara"
let balance = 2000
console.log("Hola, " + customer + ". Your balance is USD " + balance)

balance = balance + 200
console.log("Hola, " + customer + ". Your new balance is USD " + balance)