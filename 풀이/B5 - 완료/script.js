const input = $("input")
const btn = $("button")

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = input.value
})