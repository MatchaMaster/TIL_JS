//dom2.js
//1.변수 section*2.a*2,btn*2(동적대상 체크 후 변수생성)
const sectionTag = document.querySelectorAll('section')
const linkCls = document.querySelectorAll('section .link')
const btnTag = document.querySelectorAll('section .btn')
console.log(btnTag,btnTag[0],linkCls,linkCls[1],sectionTag, sectionTag[0], sectionTag.length)
//2. 이벤트와 함수, 속성
//초기값(즉시실행)
sectionTag[0].style.backgroundColor = '#ff0'
sectionTag[1].style.backgroundColor = '#0cf'
//이벤트, 콜백함수 추가 생성
//a2 클릭시 section[1] 배경색변경
//a 태그에 클릭,터치 이벤트 적용시 herf 속성때문에 스크롤이 위로 올라가는 문제 발생 -> d해제하기위해서 preventDefault() 사용
/* linkCls[1].addEventListener('click',bgFunc)
function bgFunc(e){
    console.log(e);
    e.preventDefault();
    return sectionTag[1].style.backgroundColor = '#f5f5f5'
} */
/* linkCls[1].addEventListener('click',function(e){
    console.log(e)
    e.preventDefault();
    sectionTag[1].style.backgroundColor = '#f5f5f5'
}) */
linkCls[1].addEventListener('click',(e)=>{
    e.preventDefault();
    sectionTag[1].style.backgroundColor = '#f5f5f5'
})
/* linkCls[0].addEventListener('click',FunCbg)
    function FunCbg(e){
        console.log(e)
        e.preventDefault();
        return sectionTag[0].style.backgroundColor = '#f5f5f5'
    } */
linkCls[0].addEventListener('click',(e)=>{
    e.preventDefault();
    sectionTag[0].style.backgroundColor = '#f5f5f5'
})
//button 이용 JS 진행 시 특정 페이지 이동이 필요할때 location.href 를 사용한다 (예)로그인 성공 시 메인페이지로 이동
//JS상대경로 작성은 html 위치 기준으로 작성한다.
/* btnTag[0].addEventListener('click',()=>{
    window.location.href = './dom1.html' //윈도우 주소는
})
btnTag[1].addEventListener('click',()=>{
    window.location.href = ' ../sass_stydy1/project2/index.html'
}) */
btnTag[0].addEventListener('click',sassProjectFunc('project1'))
btnTag[1].addEventListener('click',sassProjectFunc('project2'))
function sassProjectFunc(src){
    return function(){
        location.href = `../sass_study1/${src}/index.html`
    }
}

//쇼핑몰 수량 변수
const inputNum = document.querySelector('#num')
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
const priceCls = document.querySelector('.price')
let count = 1;//초기값 변수
let price = 12900;
console.log(inputNum,plusBtn,minusBtn,priceCls)
//수량이 1로 시작해서 + 클릭하면 증가, - 클릭하면 수량 감소
//개당 가격이 12,900원
//초기값
inputNum.value = count;
priceCls.textContent = price.toLocaleString('ko-kr'); 
//이벤트 함수
// + 클릭하면 수량증가
plusBtn.addEventListener('click',plusFunc)
function plusFunc(){
    /* return inputNum.value =  count+= 1; */
    /* return inputNum.value =   */
    inputNum.value =  ++count 
    let = totalPrice = price * count
    return  priceCls.textContent = totalPrice.toLocaleString('ko-kr')
}
minusBtn.addEventListener('click',minusFunc)
function minusFunc(){
    inputNum.value =  --count
    let = totalPrice = price * count
    return priceCls.textContent = totalPrice.toLocaleString('ko-kr')
}

