class star {
  constructor() {
    this.datas = JSON.parse(localStorage.getItem("star")) ?? this.getData()
    this.render()
  }
  update(newData) {
    this.datas = newData
    localStorage.setItem("star", JSON.stringify(this.datas))
    this.render()
  }
  render() {
    container.innerHTML = ""

    this.datas.map(e => {
      const newDiv = newEl("div", {
        innerHTML: `<h1>${e.name}</h1><p>${e.desc}</p><div class="star">${e.isStar ? "★": "☆"}</div>`
      })
      newDiv.querySelector(".star").addEventListener("click",() => {
        e.isStar = !e.isStar
        this.update(this.datas)
      })
      container.append(newDiv)
    })
  }
  async getData() {
    const data = await fetch("./data.json").then(res => res.json())
    this.update(data)
  }
}

new star