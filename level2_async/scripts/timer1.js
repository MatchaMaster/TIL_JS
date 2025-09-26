//timer1.js
// serInterval(콜백함수,시간)
/* let num1= 1;
const timer1 = setInterval(function(){
    if(num1 > 5)num1=1//num1이 오보다크면 다시1로만들어라
    console.log('timer test '+num1)
    num1++
},500) */
//0~6까지반복하는 타이머
//12345601234560123456~
/* let num2= 1;
const timer2 = setInterval(function(){
    if(num2>6) num2=0
    console.log('timer test' +num2)
    num2++
},500) */

//성공하면 3~0반복타이머
//3210 3210 3210
/* let num3 =3;
const timer3 =setInterval(function(){
    console.log('timer'+num3)
    num3--
    if(num3<0) num3=3
},500) */

//이미지 슬라이드 타이머활용
const gentleSlide=document.querySelectorAll('.gentle_slide_container1 .slide')
const gentleSlideCurrentNum =document.querySelector('.page_number .current')
const gentleSlideTotalNum = document.querySelector('.page_number .total')
console.log(gentleSlide.gentleSlideCurrentNum,gentleSlideTotalNum)
const gentleSlide2=document.querySelectorAll('.gentle_slide_container2 .slide')

//슬라이드 총 번호 표시
let gentlenum= 0;
gentleSlideTotalNum.textContent = gentleSlide.length;
gentleSlideCurrentNum.textContent = gentlenum+1
//사용할ㅅ 있는 변수 =gentimer 
//gentimer가 바뀔때마다 젠틀커렌트넘버 도 바뀐다.


//012345현존슬라이드인덱스
//12345 012345 012345
//gentleSilde모든슬라이드에 속성 변경시 애니메이션 기능 적용 transition
for(let i of gentleSlide)
    i.style.transition = 'opacity 0.5s'
let gentimer = setInterval(function(){
    gentlenum++
    if(gentlenum>= gentleSlide.length) gentlenum=0
    //console.log(gentlenum)
    for(let i of gentleSlide)
    {i.style.visibility = 'hidden'
    i.style.opacity = '0';}
    gentleSlide[gentlenum].style.visibility = 'visible';
    gentleSlide[gentlenum].style.opacity = '1';
    gentleSlideCurrentNum.textContent = gentlenum+1

},3000)
//43210 543210 ~
let gentlenum2 = gentleSlide2.length -1;
const gentimer2 = setInterval(function(){
    gentlenum2--
    if(gentlenum2<0) gentlenum2=gentleSlide2.length -1
    console.log(gentlenum2)
    for(let i of gentleSlide2)i.style.display = 'none'
    gentleSlide2[gentlenum2].style.display = 'block';

},5000)

