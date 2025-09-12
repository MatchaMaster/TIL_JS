const inputTag = document.querySelectorAll('input')
const buttonTag = document.querySelectorAll('button')
console.log(inputTag, buttonTag)
console.log(inputTag[0],buttonTag[0])
console.log(inputTag[1],buttonTag[1])
console.log(inputTag.length,buttonTag.length)

const searchInput = document.querySelector('input[type=search]')
const searchBtn = document.querySelector('section:first-child button')
const searchNumInput = document.querySelector('input[type=text]')
const searchCartBtn = document.querySelector('#cart_btn')
/* const searchInput = document.querySelector('section:first-child input')
const searchInput = document.querySelector('#s')
const searchInput = document.querySelector('input[name*=s]') */
console.log(searchInput)//querayselctor.all 이 아니라서 [인덱스] 사용하면 안됨
console.log(searchBtn)
console.log(searchCartBtn)
console.log(searchNumInput)
/* 태그 속성, 함수 테스트 */
console.log(searchInput.type, searchInput.placeholder) //속성 읽기
console.log()//속성을 변경하려면 콘솔 안? 밖?
/* searchInput.placeholder () */ //함수일때 
searchInput.placeholder = "검색"//속성일때 인풋의 기존 플레이스호더 자리를 바꾸는 연산
//let checkValue = '' //빈값 초기화
searchInput.value = "인기검색어 : HTML" //밸류값 변경
let checkValue = searchInput.value; //속성 읽기(input의 값을 읽는다.) 변경값 변수 담기
console.log(checkValue) //출력확인

console.log(searchNumInput.type)
console.log(searchNumInput.name)
console.log(searchNumInput.value + 1) //문자 + 숫자 = 문자
console.log(typeof(searchNumInput)) //속성읽기

checkValue = Number(searchNumInput.value) + 1 //number 는 문자를 숫자로 바꿔준다.
console.log(checkValue)
//디자인
searchInput.style.backgroundColor = 'pink'
searchInput.style.border = '3px solid purple'
searchInput.style.textAlign = 'center'
searchInput.style.width = '240px'
searchNumInput.style.backgroundColor = 'skyblue' 
searchNumInput.style.textAlign = 'center' 
searchCartBtn.style.backgroundColor = 'yellow'
searchCartBtn.style.lineHeight = '25px'
searchCartBtn.style.width = '100px'
searchCartBtn.style.borderRadius = '15px'
searchBtn.style.backgroundColor = 'purple'
searchBtn.style.width = '200px'
searchBtn.style.padding = '10px 10px'
searchBtn.style.color = '#fff'
searchBtn.style.borderRadius = '20px'

//이벤트활용 콜백함수 호출
//이벤트 문법
const orderBtn = document.querySelector('#order')
console.log(orderBtn);

//객체.addEventListener('이벤트종류',콜백함수)
//주문버튼 클릭시 '상품을 선택하세요' 경고창 출력
/* orderBtn.addEventListener('click',function(){
    alert('상품을 선택하세요')
}) */
//이벤트 뒤 함수 작성방식 : 콜백함수호출(추천), 익명함수
//주문하기 클릭 시 '장바구니에 담으세요'
//장바구니 클릭 시 '상품을 담으세요'
//콜백함수 1개만 활용 각각 DOM 이벤트 클릭시 다른 메세지 출력하기
/* orderBtn.addEventListener('click',orderFunc_v2('상품')) */

function orderFunc(data){
    return alert(data+'담으세요')
}
function cartFunc_v2(data){
    return function(){/* 클로저함수 */
        //내부함수는 외부함수의 매개변수를 기억한다.
        alert(data+' 담으세요 ')
    }
}
const cartBtn = document.querySelector('#cart')
console.log(cartBtn);

cartBtn.addEventListener('click',()=>{
    cartFunc('상품을')
}) 

//아이디,비밀번호 중복확인 클릭 시
//아이디가 중복되었습니다.
//비밀번호가 중복되었습니다.
//1.제어 DOM 대상 변수 등록
const idOverlapBtn = document.querySelector('#id')
const pwOverlapBtn = document.querySelector('#pw')
console.log(idOverlapBtn, pwOverlapBtn)
//2. "클릭 시" 이벤트 콜백함수 제작
idOverlapBtn.addEventListener('click',()=>{OverlapFunc('아이디')})
pwOverlapBtn.addEventListener('click',OverlapFunc_v2('비밀번호'))
//3. 실행 메세지가 통일된 특징에 맞춰서 콜백함수 1개 제작
function OverlapFunc(msg){
    return alert(msg+'가 중복되었습니다.')
}
function OverlapFunc_v2(msg){
    return function(){
        alert(msg+'가 중복되었습니다.')
    }
}
//3-1. 콜백함수 내에 함수호출 시 다른 내용이 있으면 매개변수 제작
//4. 3번 콜백함수를 2번 이벤트에서 호출

//이벤트 콜백함수 연습
//01. textarea  값을 입력했을 때 콘솔창에 '50자 이상 입력하세요' 출력
//02. testarea를 활성화 했을때 테두리 빨강색
//02. testarea를 비활성화 했을때 테두리 회색
const reView = document.querySelector('#review')
console.log(review)
reView.addEventListener('keydown',textIn())
function textIn(){
    return console.log('50자이상 입력하세요.')}
reView.addEventListener('focus',()=>{textInv2('#f00')})
reView.addEventListener('blur',()=>{textInv2('#aaa')})
function textInv2(color){ return reView.style.border = `4px solid ${color}`}
textInv2('#aaa')
reView.style.outline = "none"//초기값
//배경버튼 마우스 올릴 시 부모 article 배경색 변경하기
const articleTag = document.querySelector('article')
const bgBtn = document.querySelectorAll('button[class*=bg]');
const bgP = articleTag.querySelector('p')
console.log(bgBtn,bgP)
//bgP.textContent = '현재 색상:#eee'
articleTag.style.width = '430px'
articleTag.style.height = '90vh'
articleTag.style.backgroundColor = '#eee'
bgBtn[0].addEventListener('mouseover',bgChangeFunc('pink'))
bgBtn[1].addEventListener('mouseover',bgChangeFunc('skyblue'))
bgBtn[2].addEventListener('mouseover',bgChangeFunc('wheat'))
function bgChangeFunc(color){
    return function(){
        articleTag.style.backgroundColor = color;
        bgP.textContent = `현재 배경색깔 : ${color}`
    }
}
articleTag.style.backgroundColor = "none"


