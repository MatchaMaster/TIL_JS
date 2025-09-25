const resultFlower = document.querySelector('.result')
const resultBtn = document.querySelector('.chk_btn')
const flowerImg = document.querySelector('.flowerImg')
const year = document.querySelector('#ur_year')
const month = document.querySelector('#ur_month')
const date = document.querySelector('#ur_date')

//초기세팅: 결과 숨기기
resultFlower.style.display = 'none'

//'만나기' 버튼 클릭 시 입력한 년/월/일 중 '월' 인식해서 배경 값과 동일한 탄생화 배열 출력하기
resultBtn.addEventListener('click',()=>{
    const ymd = year.val() && month.val() && date.val()
    ymd ?flowerFunc():
    alert('생년월일을 모두 입력해주세요');
    function flowerFunc(){
        if(month.value > 0 && month.value < 13){
            const $userMonth = month.value;
            
        }else{
            alert('1월~12월 중 입력하세요.')
        }
    }
    

})