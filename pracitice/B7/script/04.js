const inputs = $$("input")
inputs.forEach((input, i) => {
  input.addEventListener("keydown", (e) => {
    if(e.key === "Backspace") {
      if(i > 0 && input.value === "") {
        inputs[i - 1].focus()
      }
    }
  })
  input.addEventListener("input", () => {
    input.value = input.value.replace(/[^0-9]/g, "")
    if(i < inputs.length - 1) {
      inputs[i + 1].focus()
    }
    if(inputs.every(input => input.value.length > 0)) {
      $("button").style.display = 'block'
    }
  })
})