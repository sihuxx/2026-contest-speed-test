const inputs = $$("input")
inputs.forEach((input, i) => {
  input.addEventListener("keydown", (e) => {
    if(e.key === "Backspace") {
      if(input.value === "") {
        inputs[i - 1]?.focus()
      }
    }
  })
  input.addEventListener("input", () => {
    input.value = input.value.replace(/[^0-9]/g, "")
    if(input.value.length === 1) {
      inputs[i+1]?.focus()
    }
    btn.disabled = inputs.every(input => input.value.length === 1) ? false : true
  })
})