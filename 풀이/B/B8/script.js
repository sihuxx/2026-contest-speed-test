const logs = $(".log")

function createNotice(value) {
  const newDiv = newEl("div", {
    textContent: value === "grn" ? "성공하였습니다" : "실패하였습니다",
    className: value
  })
  logs.append(newDiv)

  // 클릭 시 메시지 삭제
  newDiv.addEventListener("click", () => {
    newDiv.remove()
  })
  // 5초 후 메시지 삭제
  setTimeout(() => {
    newDiv.remove()
  }, 5000)
}