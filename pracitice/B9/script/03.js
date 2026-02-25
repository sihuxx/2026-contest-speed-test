class star {
  constructor() {
    this.datas = JSON.parse(localStorage.getItem("star")) ?? this.getData()
    this.render()
  }
  update() {
    render()
    localStorage.setItem("star", JSON.stringify(this.datas))
  }
  render() {
    container.innerHTML = ""
    this.datas.map(e => {
      const newDiv = newEl("div", {
        innerHTML: `<h1>${e.name}</h1><p>${e.desc}</p><div class="star">${e.isStar ? "채운별" : "빈별"}</div>`
      })
      newDiv.querySelector(".star").addEventListener("click", () => {
        e.isStar = !e.isStar
        this.update()
      })
      container.append(newDiv)
    })
  }
  async getData() {
    const data = await fetch("./data.json").then(res => res.json())
    this.update()
  }
}
new star