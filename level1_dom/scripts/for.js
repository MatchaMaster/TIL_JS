//반복문 for.js
//for(초기변수선언; 조건식; 증감식){조건이 참일때 반복실행문}
//let const var
//for문의 초기변수로 자주 사용하는 변수명 : i,j,k,m,n

//1~5 반복문
for(let i=1; i<6; i++){console.log('반복')}
// 5~10 반복문 5678910
for(let i=5; i<=10; i++){console.log(i)}
console.log('--------------------')
//5~1 반복문 543210
for(let i=5;  i>=0; i--){console.log(i)}
//초기값 0 시작
//출력형태 ) JS 1일차 ,2일차 ,3일차
for(let i=0; i<3; i++){console.log(`JS ${i+1}일차`)}//변수에 i불러오고 더하기 =1일차 부터 시작 <-강추!
console.log('--------------------')
for(let i=0; i<3; i++){console.log(`JS ${i++}일차`)} //결과=JS 0일차,JS 2일차 
console.log('--------------------')
for(let i=0; i<3; i++){console.log(`JS ${i+=1}일차`)} //결과=JS 1일차,JS 3일차
console.log('--------------------')
//2단 구구단 2*1 ~ 2*9
const dan2 = document.querySelector('.dan2')
dan2.innerHTML/* 태그추가 */ = '<li>2*1=2</li>'

for(let i=1; i<10; i++){
    dan2.innerHTML +=`<li>2*${i}=${2*i}</li>`
    /* 콘솔에는 1~9까지 찍히는데 html에는 2*9=18밖에 안나와있음= 대입연산자 때문임 -> +=이거로 중첩해주면 됨*/
} 
//querySelectorAll 함수로 선택한 DOM 변수 for문
//배열 인덱스 for문
const array = ['photoshop','illustrator','figma','html','css']
//위 배열 이용 반복문으로 콘솔에 array 값 모두 출력하기
//consol.log(array[0]) <-힌트
for(let i=0; i<array.length; i++){
    console.log(array[i])
}
console.log('--------------------')
//css~photo 역순으로 콘솔 출력
for(let i=array.length-1; i>=0; i--){console.log(array[i])}
console.log('--------------------')
const flower = [{
    name:'장미',
    month:1,
},{
    name:'개나리',
    month:2,
},{
    name:'수선화',
    month:3,
}]
//출력예)1월 탄생화 장미, 2월탄생화 개나리,3월 탄생화 수선화
//console.log(`${flower[0].month}월 탄생화 ${flower[0].name}`)
//반복문 설정하기
for(let i=0; i< flower.length; i++){
    console.log(`${flower[i].month}월 탄생화 ${flower[i].name}`)
}
console.log('반복문과 조건문--------------------')
//1~10 반복출력(홀수)
//변수%2 == 1
for(let i=1; i<11; i++){
    if(i%2==1){console.log(i)}
}
console.log('반복문과 조건문--------------------')
//5~20까지 짝수만 출력
for(let i=5; i<=20;i++){
    if(i%2==0){console.log(i)}
}
console.log('반복문과 조건문--------------------')
//0~10까지 역순으로 홀수만 출력
for(let i=10;i>=0;i--){
    if(i%2){console.log(i)}
}
console.log('------------------------------------')
const dan2Li =dan2.querySelectorAll('li')
console.log(dan2Li);
//홀수 li핑크 배경,짝수 li 파랑배경
/* dan2Li[0].style.background ='skyblue'
dan2Li[1].style.background ='pink' */
/* for(let i=0;i<dan2Li.length; i++){
    if(i%2){dan2Li[i].style.background = 'pink'}
    else{dan2Li[i].style.background ='skyblue'}
    
    } */
//홀수 li w50 h20 bg노랑 color 파랑,
//짝수 li w50 h20 bg파랑 color 노랑
//객체.classList.add(클래스명)
//객체.classList.remove(클래스명)
//css or sass 클래스를 미리 준비하고js동적결과에 따라 적용
for(let i=0; i<dan2Li.length; i++){
    dan2Li[i].classList.add('size')
    if(i%2==0){
        dan2Li[i].classList.add('color_even')
    }else{
        dan2Li[i].classList.add('color_odd')
    }
}
console.log('------------------------------------')
//while문 (반복횟수가 정해지지 않고 특정조건이 참인 동안 반복실행)
//활용 예) 사용자로부터 올바른 입력값을 받을때까지 반복
//활용 예) 웹서비스 및 게임 등에서 계속 실행되어야 하는 프로그램
//while (조건){조건이 참일때 반복실행}
//let htmlQ=prompt('a 태그는 가로,세로 크기를 가질 수 없다. ox중 하나를 입력하세요')
//정답을 맞출때 까지 무한질문 정답은 엑스
/* while(htmlQ != 'x'){
    htmlQ = prompt('a 태그는 가로,세로 크기를 가질 수 없다. ox중 하나를 입력하세요')
}
alert('정답입니다.') */
/* 정답이 아닐때 계속반복 */
/* let cssQ = prompt('ox퀴즈 : ::hover는 마우스를 클릭했을때 효과를 줄수있다.')
while(cssQ != 'x' ){
    cssQ = prompt('ox퀴즈 : ::hover는 마우스를 클릭했을때 효과를 줄수있다.')
}
alert('정답입니다.')
 */
/* while(true){
    const qa = prompt('자바스크립트 동적언어이다(O/X)')
    if(qa !== 'o' && qa !== 'x'){ //잘못된 답안 조건문
        alert('잘못된 입력입니다. 다시 입력해주세요')
        continue;//다음구문을 생략하고 반복문의 처음부터 다시 시작한다.
    } 
    //정답 ,오답 세트
    if(qa === 'o'){
        alert('정답입니다');
        break;
    }else{
        alert('오답입니다.')
    }
} */
/* alert('퀴즈가 종료되었습니다.') */

for(let i=1; i<=10; i++){
    continue;
    console.log(i)
}
//2단~9단까지 구구단 만들기
const dan99 = document.querySelector('.dan99')
let li99 = ''//반복문에서 문자열 계속 만들기 공책줄바꿈같이
for(let i=2; i<10; i++){//1단 for 시작
    for(let j=1;j<10; j++){//2단 for시작
        li99 += `<li>${i}x${j}=${i*j}</li>`
    }//2단 for종료(2단 for가 모두 반복 후 1단 다시 시작)
    dan99.innerHTML = li99;
}//1단 for종료
console.log('-------------------')
//for ~in (ES6)
const cat = {
    color:['흰색','검은색','노란색'],
    age:2,
    name:'삼색이',
}
/* console.log(cat.color)
console.log(cat.age)
console.log(cat.name) */
for(let i in cat){
    console.log(i,cat[i])
}
const menuA = document.querySelectorAll('.menu a')
for(let i in menuA){
    console.log(i)
}
for(let i of menuA){
    console.log(i)
    i.addEventListener('click',()=>{
        console.log(i)
    })
}