const inputs = $$("input")

inputs.forEach((input, i) => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "" && i > 0) { // 입력창이 비어있고 현재 input이 첫번째가 아닐 때
        inputs[i - 1].focus() // 저번 입력창
      }
    }
  })
  input.addEventListener("input", () => {
    input.value = input.value.replace(/[^0-9]/g, '');
    if (i < inputs.length - 1) { // 현재 input이 마지막이 아닐 때
      inputs[i + 1].focus() // 다음 입력창
    }
    if (inputs.every(input => input.value.length > 0)) {
      $("button").style.display = 'block'
    }
  })
})