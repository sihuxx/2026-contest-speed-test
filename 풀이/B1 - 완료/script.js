const input = $("input")
const getPsw = pw => {
  const l = pw.length
  const u = /[A-Z]/.test(pw)
  const n = /[0-9]/.test(pw)
  const s = /[!@#$%^&*]/.test(pw)

  input.style.borderColor = 
    !l ? "black" :
    (l >= 8 && u && n && s) ? "green" :
    (l >= 6 && (u || n)) ? "yellow" :
    "red"
}
input.addEventListener("input", (event) => {
  getPsw(input.value)
})