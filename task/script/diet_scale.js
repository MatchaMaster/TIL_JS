
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const wInput = document.querySelector('#userWeight');
const hInput = document.querySelector('#userHeight');

btn.addEventListener("click", () => {
    const weight = Number(wInput.value); // 입력 몸무게 숫자로 변환
    const height = Number(hInput.value); // 입력 키 숫자로 변환

    const normal_w = (height - 100) * 0.9; // 적정체중 계산
    const over = weight - normal_w; // 초과 체중 계산

    if (over > 0) {
        result.textContent = `적정체중은 ${normal_w.toFixed(1)}kg이며 ${over}kg 초과되셨습니다.`;
    } else {
        result.textContent = `적정체중은 ${normal_w.toFixed(1)}kg이며 적정체중입니다.`;
    }
});

