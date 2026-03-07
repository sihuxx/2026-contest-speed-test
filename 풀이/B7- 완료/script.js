const inputs = $$("input")
inputs.forEach((input, i) => {
  input.addEventListener("keydown", (e) => {
    if(e.key === "Backspace") {
      if (input.value === "" && i > 0) {
        inputs[i - 1].focus();
      }
    }
  })
  input.addEventListener("input", () => {
    if (input.value.length === 1 && i < inputs.length - 1) {
      inputs[i + 1].focus();
    }
    if(inputs.every(input => input.value.length > 0)) {
      $("button").style.display = 'block'
    }
  })
})

/* 
 1. 백스페이스를 눌렀을 때
  현재 칸이 비어 있고, 첫 번째 칸이 아니라면
  이전(왼쪽) 입력창으로 포커스 이동

 2. 값이 입력되었을 때 
  한 글자가 입력되었고, 마지막 칸이 아니라면
  다음(오른쪽) 입력창으로 포커스 이동
 
 3. 전체 입력 상태 확인
  모든 input이 채워졌으면
  숨겨진 버튼을 화면에 표시
*/