function createNotice(value) {
  const newDiv = newEl("div", {
    textContent: value === "grn" ? "성공하였습니다" : "실패하였습니다",
    className: value
  })
  logs.append(newDiv)

  newDiv.addEventListener("click", () => {
    newDiv.remove()
  })
  setTimeout(() => {
    newDiv.remove()
  }, 5000)
}