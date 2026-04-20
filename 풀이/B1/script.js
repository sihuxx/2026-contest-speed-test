const getPsw = pw => {
  const l = pw.length
  const u = /[A-Z]/.test(pw)
  const n = /[0-9]/.test(pw)
  const s = /[!@#$%^&*]/.test(pw)
  const inputStyle = 
    !l ? {c: "red", l: "약함"} :
    (l >= 8 && u && n && s) ? {c: "green", l: "강함"} :
    (l >= 6 && (u || n)) ? {c: "orange", l: "보통"} :
    {c: "red", l: "약함"}
  input.style.borderColor = inputStyle.c
  p.style.color = inputStyle.c
  p.textContent = inputStyle.l
}
input.addEventListener("input", (event) => {
  getPsw(input.value)
})
getPsw(input.value)