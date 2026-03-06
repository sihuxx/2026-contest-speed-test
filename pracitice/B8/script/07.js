function createNotice(value) {
  const newDiv = newEl("div", {
    className: value,
    textContent: value === "grn" ? "성공하였습니다" : "실패하였습니다"
  })
  logs.append(newDiv)
  setTimeout(() => {
    newDiv.remove()
  }, 5000)
  newDiv.onclick = () => {
    newDiv.remove()
  }
}