btn = document.querySelector("#btn") 
span = document.querySelector("span")
body = document.body
const colors = ["green", "blue", "yellow", "red"]
btn.addEventListener("click", (event) => {
  let num = Math.floor(Math.random() * colors.length)
  span.textContent = colors[num]
  body.style.backgroundColor = colors[num]
})