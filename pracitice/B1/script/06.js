const getPsw = pw => {
  const l = pw.length
  const n = /[0-9]/.test(pw)
  const a = /[A-Z]/.test(pw)
  const t = /[!@#$%^&*]/.test(pw)

  input.style.borderColor = !l ? "black" : (l >= 8 && n && a && t) ? "green" : (l >= 6 && (n || a)) ? "yellow" : "red"
}

input.addEventListener("input", () => {
  getPsw(input.value)
})