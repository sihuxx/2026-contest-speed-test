class star {
  constructor() {
    this.datas = JSON.parse(localStorage.getItem("star")) ?? this.getData()
    this.render()
    // 로컬스토리지에서 데이터 가져오고, 렌더링
  }
  update() {
    this.render()
    localStorage.setItem("star", JSON.stringify(this.datas))
    // 렌더하고, 로컬스토리지에 데이터 저장
  }
  render() {
    container.innerHTML = ""

    this.datas.map(e => {
      const newdiv = newEl("div", {
        innerHTML: `<div><h1>${e.name}</h1><p>${e.desc}</p><div class="star">${e.isStar ? "★" : "☆"}</div></div>`
      })
      newdiv.querySelector(".star").addEventListener("click", () => {
        e.isStar = !e.isStar
        this.update()
      })
      container.append(newdiv)
    })
    // 데이터에 map 돌려서 html 형태로 변환 후 각 요소의 .star에 이벤트 리스너 달아서 클릭 할 때마다 업데이트하고 콘테이너에 어펜드
  }
  async getData() {
    const data = await fetch("./asset/data.json").then(res => res.json())
    this.update()
    // fetch로 json 불러오고 업데이트
  }
}
new star