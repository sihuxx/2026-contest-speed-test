btn.addEventListener("click", () => {
  const li = newEl("li", {
    innerHTML: `<p>${input.value}</p><button class="des" onclick="parentElement.remove()">삭제</button>`
  })
  list.appendChild(li)
  input.value = ""
})