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

function celsiusToFahr(temperature) {
  let fahr = (temperature * 9/5 ) + 32
  return fahr
}

celsiusToFahr(25)
celsiusToFahr(30)

const greetingText = "Good afternoon!"
const weatherCondition = "Sunny"
const userLocation = "Rio de Janeiro"
let temperature = 25

alert("The temperature outside is " + celsiusToFahr(temperature) + "°F")
let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)}°F outside.`

document.querySelector("#greeting").innerHTML = greetingText
document.querySelector("p#weather").innerHTML = weatherText

