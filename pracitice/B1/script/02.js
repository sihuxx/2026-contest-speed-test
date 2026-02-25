const getPsw = pw => {
  const l = pw.length
  const a = /[A-Z]/.test(pw)
  const n = /[0-9]/.test(pw)
  const t = /[!@#$%^&*]/.test(pw)

  input.style.borderColor = 
  !l ? "black" : (l >= 8 && a && n && t) ? "green" : (l >= 6 && (a || n)) ? "yellow" : "red"
}

input.addEventListener("input", () => {
  getPsw(input.value)
})