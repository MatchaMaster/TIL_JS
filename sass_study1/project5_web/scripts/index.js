//슬라이딩 패널
//스크롤 버튼 눌렀을때 이미지가 옆으로 넘어가야함
document.body.style.backgroundColor = 'lightyellow'; // 페이지 열리자마자 배경색 변경->문제없음
console.log('JS 연결 확인 완료!'); //확인
const overViewBig = document.querySelector('.overview_big'); // 컨테이너
const images = overViewBig.querySelectorAll('img');          // 큰이미지
const backBtn = document.querySelector('.back_short_btn');   // 뒤 버튼
const nextBtn = document.querySelector('.forth_short_btn');  // 앞으로 버튼

//위시리스트누르면 하트색깔이 검정으로 바뀜
const wishList = document.querySelector('.wishlist')
const heartS = document.querySelector('.heart')
const wishAdd = document.querySelector('.add_wish')
console.log(wishList,heartS,wishAdd)
wishList.addEventListener('click', (e) => {
    e.preventDefault(); // 링크 기본 동작 막기
    
    // 현재 상태 확인 (하트 색)
    const isAdded = heartS.style.fill === 'black';
    
    if (isAdded) {
        // 원래 상태로 돌아가기
        heartS.style.fill = 'none';               // 하트 색
        wishAdd.textContent = 'Add to wishlist';  // 글자
    } else {
        // 클릭 후 상태
        heartS.style.fill = 'black';
        wishAdd.textContent = 'Added to wishlist';
    }
});
//주문수량 추가
const plusBtn = document.querySelector('#plus_btn')
const minusBtn = document.querySelector('#minus_btn')
const orderNum = document.querySelector('#order_num')
let num=1;
orderNum.value = num;
plusBtn.addEventListener('click',()=>{
    num++;//숫자가 1씩증가한다.
    orderNum.value = num //수량 숫자증가
})
minusBtn.addEventListener('click',()=>{
    num--;//숫자가 1씩감소한다.
    orderNum.value = num //수량 숫자감소
})
//나중에 음수표시 수정 필요함
