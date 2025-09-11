function naverLink(){
    return window.open('https://naver.com','_blank')
}
//naverLink()
const writeFunc = function(){
    return window.location,href('https://google.com');
}
//writeFunc();

//DOM
const btn = document.getElementsByTagName('button')
const div = document.getElementsByTagName('div')
console.log(btn,div);       
btn[2].style.color = 'red'; //인덱스제시는 정확하게
btn[0].style.backgroundColor = 'pink'; //인덱스제시는 정확하게
btn[1].style.border = '1px solid red'
//div[1].style.transform = 'rotate(-10deg)' //로테이트는 값,,,,,,,,,,,,,,,,,,,,,,,,,,,

// JS - HTML, CSS
//DOM.style.color; //읽기
//DOM.style.color = '값'; //수정
//객체.속성.속성 
//객체.함수() 

//클래스 선택하기
const slide = document.getElementsByClassName('slide')
const slidewrap = document.getElementsByClassName('slide_wrap')
console.log(slide, slidewrap);
slide[0].style.backgroundColor = '#ff0'
slide[1].style.backgroundColor = 'rgba(0,0,0,0.1)'
slidewrap[0].style.border = '5px solid purple'
/* 태그와 클래스 DOM은 반드시 인덱스 붙여서 사용하기 */

//아이디 DOM
const container = document.getElementById('slide_container')
console.log(container)
container.style.background='yellow'
container.style.margin='0 auto'
//아이디는 단 하나의 요소로 인덱스를 붙이지 않고 작성한다./아이디는 변수없이도 사용가능 근데 권장안함
slide_container.style.filter = 'invert(1)';

//ES6 querySelector
const tag_es6 = document.querySelectorAll('div')
const cls_es6 = document.querySelectorAll('.slide')
const id_es6 = document.querySelector('#slide_container')
console.log(tag_es6, cls_es6, id_es6)

//메뉴구조
const nav_main = document.querySelector('#main')
const nav_gnb = document.querySelector('.gnb')
const nav_li = document.querySelectorAll('.gnb > li')
const nav_liv2 = nav_gnb.querySelectorAll('li')
const navA = document.querySelectorAll('.gnb> li >a')
const navAv2 = nav_li[0].querySelectorAll('a')
console.log(nav_main,nav_gnb,nav_liv2,navA,navAv2)

main.style.backgroundColor = 'pink';

nav_gnb.style.display = 'flex'
nav_li[2].style.transition = 'transform 0.3s linear 2s'
navA[0].style.animation = 'rotate360 1s alternate infinite'
//DOM 변수 사용 시 ALL 키워드 유무에 따라 [인덱스] 사용 주의하기!

//로그인 알고리즘
//버튼 클릭 시 사용자가 입력한 아이디,이름,비밀번호 출력 확인 알고리즘
const loginBtn = document.querySelector('#loginFrm button')
const loginId = document.querySelector('#id') 
const loginName = document.querySelector('#name')
const loginPw = document.querySelector('#pw')
console.log(loginBtn, loginId, loginName, loginPw)
console.log(loginId.name);
console.log(loginId.type);
//객체.속성; //속성 읽기
//객체.속성.속성 = 대입값;
//이미지객체.src = '경로'
//loginId.type = 'password';
function userInfo(){
    //버튼 클리시 사용자가 입력한 아이디,이름,비밀번호 확인 알고리즘
    let data = loginId.value;
    data += loginPw.value;
    data += loginName.value; //사용자가 입력한 값을 가져올땐 value 쓴다
    return console.log(data);
}