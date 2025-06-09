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
