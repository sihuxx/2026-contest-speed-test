const input = $("input");
const addBtn = $(".addBtn");
const list = $("ul");
addBtn.addEventListener("click", () => {
  const li = newEl("li", {
    innerHTML: `<p>${input.value}</p><button class="des" onclick="parentElement.remove()">삭제</button>`
  })
  list.appendChild(li)
  input.value = ""
})

/* 
  * Object.assign

  const li = Object.assign(document.createElement("li"), {
    innerHTML: `<p>${input.value}</p><button class="des" onclick="parentElement.remove()">삭제</button>`
    classname: "todo"
  })
*/