btn.addEventListener("click", () => {
  const li = newEl("li", {
    innerHTML: `${input.value} <button onclick="parentElement.remove()">삭제</button>`
  })
  list.append(li)
  input.value = ""
})