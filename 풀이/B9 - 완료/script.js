const container = $(".container")

/* 
  * 아래에서의 this
  - new star()로 만든 객체 나 자신을 의미
  - this.render() 등으로 나 자신의 메소드를 가져오거나 값을 가져옴
*/

class star {
  constructor() {
    this.datas = JSON.parse(localStorage.getItem("star")) ?? this.getData();
    this.render()
    // this.datas: constructor()에서 만든 초기 세팅 변수
  }
  update() {
    this.render()
    localStorage.setItem("star", JSON.stringify(this.datas))
  }
  render() {
    container.innerHTML = ""

    this.datas.map(e => {
      const newDiv = newEl("div", {
        innerHTML: `<div><h1>${e.name}</h1><p>${e.desc}</p><div class='star'>${e.isStar ? "★" : "☆"}</div></div>`
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