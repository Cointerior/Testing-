colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
btn = document.querySelector("#btn")
span = document.querySelector("span")
body = document.body
btn.addEventListener("click", (event) => {
  count = "#"
  for(let i = 0; i < 6; i++) {
   let num = Math.floor(Math.random() * colors.length)
    be = colors[num]
    count = count + be
  }
  span.textContent = count
  body.style.backgroundColor = count
})