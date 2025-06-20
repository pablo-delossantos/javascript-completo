// Menu section

document.querySelector("#open-nav-menu").addEventListener("click", function () {
  document.querySelector("header nav .wrapper").classList.add("nav-open")
})

document
  .querySelector("#close-nav-menu")
  .addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.remove("nav-open")
  })

// Greeting section

const greetingText = "Good afternoon!"
const weatherCondition = "Sunny"
const userLocation = "Rio de Janeiro"
let temperature = 35.78
let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`

document.querySelector("#greeting").innerHTML = greetingText
document.querySelector("p#weather").innerHTML = weatherText