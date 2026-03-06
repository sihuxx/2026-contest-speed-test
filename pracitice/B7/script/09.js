const inputs = $$("input")

inputs.forEach((input, i) => {
  input.addEventListener("keydown", (e) => {
    if(e.key === "Backspace") {
      if(input.value === "" && i > 0) {
        inputs[i - 1].focus()
      }
    }
  })
  input.addEventListener("input", () => {
    input.value = input.value.replace(/[^0-9]/g, "")
    if(i < inputs.length - 1 && input.value.length === 1) {
      inputs[i + 1].focus()
    }
    $("button").style.display = inputs.every(input => input.value.length === 1) ? "flex" : "none"
  })
})