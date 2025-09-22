//상하좌우 버튼 클릭 시 캐릭터 이동(10px)\
const moveBtn = document.querySelectorAll('#control .btn')
const character = document.querySelector('#map img')
console.log(moveBtn,character);
let num = 0 ;
//input 입력창에 영어로 이동명령어를 작성했을 때 캐릭터 10px이동
// 이동방향 ) left,right,top,bottom

//상
moveBtn[0].addEventListener('click',()=>{
    num += 10; //변수를 10씩 증가시킴
    console.log(num)
    character.style.transform = `rotate(90deg) translateX(-${num}px)`;
})
//하
//좌
//우
//input 입력창에 영어로 이동방향 작성하고 Enter 누르면 캐릭터 10px이동
const controlInput = document.querySelector('#control #txt');
console.log(controlInput)
/* if(left){}else if(right){}else if(top){}else if(bottom){}else{오답} */
//keyup 키를 땔떄 이벤트 발생
controlInput.addEventListener('keyup',(e)=>{
    /* console.log(e.key) */
    if(e.key == 'Enter'){
        const inputVal = controlInput.value;//엔터눌러서 나온 결과를 inputVal에다가 대입한다.
        if(inputVal == 'left' || inputVal =='right'||inputVal == 'top'||inputVal == 'bottom'){
            console.log(`${inputVal} 이동`)
            controlInput.value = '';//오답 일일이 안지워도되는 기능 추가
        }else{
            console.log('오답')
        }
    /*     if(controlInput.value === 'left'){console.log('왼쪽이동')}
        else if(controlInput.value === 'right'){console.log('오른쪽이동')}
        else if(controlInput.value === 'top'){console.log('위로이동')}
        else if(controlInput.value === 'bottom'){console.log('아래로이동')}
        else {console.log('오답')} */
/*         num += 10; //변수를 10씩 증가시킴
        console.log(num)
        character.style.transform = ` translateX(-${num}px)`; */
    }
    /* else{alert('오답')} */
})

//학점에 따라 A~F 등급 나오는 프로그래밍
//100~90 A
//89~80 B
//79~70 C
//69~60 D
//59이하 F
/* const score = prompt('학점을 입력하세요')
console.log(score) */
//논리연산 0~100 범위값 조건식
/* if (score >= 90 && score <= 100) {
    alert('A');
} else if (score >= 80) {
    alert('B');
} else if (score >= 70) {
    alert('C');
} else if (score >= 60) {
    alert('D');
} else {
    alert('F');
} */
/* if(score >= 0 && score <= 100){
    if(score >= 90){console.log('A')}
    else if(score >= 80){console.log('B')}
    else if(score >= 80){console.log('C')}
    else if(score >= 80){console.log('D')}
    else {console.log('F')}}
    else{
        console.log('0~100 값만 입력해주세요')
    } */
//switch ~ case 
//쇼핑몰 검색창에 사용자가 입력한 값 조건확인
//딸기 ->1000원
//사과 -> 2000원
//판매상품이 아닙니다.
/* const fruit = prompt('검색어를 입력하세요')
console.log = fruit;
switch(fruit){
    case '딸기':console.log('1000원'); break;//강제종료
    case'사과':console.log('2000원'); break;
    default : console.log('판매상품이 아닙니다.')
} */
//전화단축키
/* const phoneNum = prompt('단축키 입력');
console.log(phoneNum);

switch (phoneNum) {
    case '1':
        console.log('엄마');
        break;
    case '2':
        console.log('아빠');
        break;
    default:
        console.log('해당 단축키가 없습니다.');
} */
//1 누르면 엄마
//2 누르면 아빠
//다른숫자는 "해당 단축키가 없습니다."

//쇼핑몰 수량+ 가격 알고리즘
//-버튼 클릭 시 수량감소 + 가격감소(1일때 - 누르면 경고)
const minusBtn =document.querySelector('#minus')
const plusBtn =document.querySelector('#plus')
const numberInput =document.querySelector('#num')
const priceP =document.querySelector('.price')
console.log(minusBtn,plusBtn,numberInput,priceP)
let numVal = 5;
let originalPrice = 900
let stoke = 10;
numberInput.value = numVal;//초기값대입
priceP.textContent = `${numVal*900}원` //초기값(가격)

plusBtn.addEventListener('click',()=>{
    numVal < stoke ? numVal++ : console.log('최대 구매 수량')
     //numVal 값이 10과 크거나 같으면 오류,1이 아니면 감소
    numFun()
})

minusBtn.addEventListener('click',()=>{//클릭 시 실행함수는
    numVal == 1 ? console.log('최소 구매 수량'): numVal--;
    numFun()
})
function numFun(){
    numberInput.value = numVal;//초기값대입
    priceP.textContent = `${numVal*originalPrice900}원` //초기값(가격)
    
}
