console.log(Math);
console.log(Math.PI);
//Math.floor, round,random
let num1 = Math.floor(3.7)
console.log (num1)
num1=Math.floor(3.2) //소수점 버리고 정수 출력
console.log(num1)
let num2 = Math.round(3.7)
console.log(num2) //4
num2 = Math.round(3.2) //소수점 자리수에 따라 반올림
console.log(num2)//3
console.log('---------------')
let num3 = Math.random()
console.log(num3)
num3 = Math.random()*5;
console.log(num3)
num3 = Math.floor(Math.random()* 10) +1; //1부터 나오게 하기
console.log(num3)
console.log('---------------')
//10%~50% 랜덤출력
const couponDB = ['10%','20%','30%','40%','50%']
const couponBtn = document.querySelector('#coupon')

//버튼 클릭 시 쿠폰 5개중 1개가 랜덤하게 alert() 출력메세지 실행
couponBtn.addEventListener('click',()=>{
    let randomNum = Math.floor(Math.random() * 5)
    alert(couponDB[randomNum])
})

//화면에 접속했을 때 광고 2개가 랜덤표시
const adDB = [{
    name:'아이스크림',//alt
    src:'https://i.pinimg.com/736x/45/d3/d4/45d3d42c86a86b6c480fc6e7cf1780e8.jpg',
    link:'https://naver.com',
},{
    name:'맛차 광고',
    src:'https://i.pinimg.com/736x/ff/53/c8/ff53c8083a6a45e5d4c48f0962402ab4.jpg',
    link:'https://google.com',
}]
const adSec = document.querySelector('.ad'); // 섹션 요소
const adImg = document.querySelector('.ad img'); // 섹션 안 이미지
console.log(adSec, adImg);

window.addEventListener('load', () => {
    const adSec = document.querySelector('.ad'); // 섹션 요소
    const adRandom = Math.floor(Math.random() * 2)
    adSec.children[0].href =adDB[adRandom].link
    adSec.children[0].children[0].src =adDB[adRandom].src
    adSec.children[0].children[0].alt =adDB[adRandom].alt
});

//더치페이 계산기
//계산하기 클릭 시
//총 금액과 인원수에따라 결과 출력하기
//금액이 소수점일 경우 소수점 값에 따라 반올림하기
const calcBtn =document.querySelector('#total_btn')
const calcResult =document.querySelector('.result')
const totalPrice =document.querySelector('#price')
const totalPerson =document.querySelector('#person')

calcBtn.addEventListener('click',()=>{
    const price = Math.round(totalPrice.value / totalPerson.value);
    calcResult.children[0].textContent= price.toLocaleString('ko-kr')
})
//DB    
const shopDB = [{
    shop:'쿠팡',
    id: '하루견과',
    price: 1000,
},{
    shop:'네이버 스마트스토어',
    id: '하루견과',
    price: 2000,
},{
    shop:'마켓컬리',
    id: '하루견과',
    price: 3000,
}]

//변수
const minBtn= document.querySelector('#min_price_btn')
const resultP= document.querySelector('.min_price')
const shopListUI2 = document.querySelector('#shop_list2')
const pp = [100,200,300,400] //test
//클릭이벤트
minBtn.addEventListener('click',()=>{
    //쇼핑몰, 상품명,가격을 가지고 있는 배열에서 가격만 추출하기
    const priceMap = shopDB.map(i => i.price)
    console.log(priceMap)
    console.log('최저가 : ',Math.min(...priceMap))
    //for문,map문
    //
    //추출한 가격에서 최저가 찾기
    //스프레드연산자 (...배열명)여러 배열값을 한번에 처리하는 배열처리법
    console.log(Math.min(...pp))//최저가
    console.log(Math.max(...pp))//최고가
    const minPrice = Math.min(...priceMap)
    resultP.textContent = `최저가: ${minPrice}원입니다` //텍스트 추가할때는 벡텍기호쓰깅
    const sort2 = [...shopDB].sort((a,b)=> b.price - a.price)
    console.log(sort2)
    for(let i of sort2){
        const li = document.createElement('li') //createElement로 생성한 JS태그는 appenchild 함수로대입한다
        console.log(li,i.shop)
        //li.textContent = i.shop
        li.innerHTML = `<a href="#">${i.shop}</a>`
/*         li.innerHTML += `<span>${i.id}</span>`
        li.innerHTML += `<em>배송비 :${i.price}원</em>` */
        shopListUI2.appendChild(li)}
})

console.log('--------------------')
const shopDB2 = [{
    shop:'쿠팡',
    name:'고구마',
    price:5000,
    delivery:2500
},{
    shop:'이마트몰',
    name:'고구마',
    price:2900,
    delivery:0,
},{
    shop:'네이버',
    name:'고구마',
    price:4000,
    delivery:1000
}]
const priceBtn = document.querySelector('#price_btn')
const deliveryBtn = document.querySelector('#delivery_btn')
const result1 = document.querySelector('.result1')
const result2 = document.querySelector('.result2')
const shopListUI = document.querySelector('#shop_list')

//최저가 찾기 버튼 클릭 시 최저가 표시
/* priceBtn.addEventListener('click',()=>{
    const priceMap2 = shopDB2.map(i => i.price)
    const  minPrice = Math.min(...priceMap2)
    result1.textContent = `최저가는 ${minPrice}입니다.`
    
}) */
//선생님 풀이1
priceBtn.addEventListener('click',()=>{
    //최저가 JS
    const min = shopDB2.map(i => i.price)
    result1.textContent = '최저가' + Math.min(...min) +'원.'
    //최저가 -> 최고가 오름차순 정렬하기JS
    //매개변수 순서를 이용한 오름차순(계산속성 기준) a.price-b.price
    //매개변수 순서를 이용한 내림차순(계산속성 기준) b.price - a.price
    const sort = [...shopDB2].sort((a,b)=> a.price - b.price)
    console.log(sort)

    //반복문 for이용 위 sort li 생성 후 ul에 최종 삽입하기
    //for~in, for~of, forEach
    for(let i of sort){
        const li = document.createElement('li') //createElement로 생성한 JS태그는 appenchild 함수로대입한다
        console.log(li,i.shop)
        //li.textContent = i.shop
        li.innerHTML = `<a href="#">${i.shop}</a>`
        li.innerHTML += `<span>${i.price}</span>`
        li.innerHTML += `<em>배송비 :${i.delivery}원</em>`
        shopListUI.appendChild(li)
    }

})
//선생님 풀이2
/* priceBtn.addEventListener('click',()=>{
    const delivery = shopDB2.map(i => i.delievery)
    result2.textContent = '최저가' + Math.min(...delivery) +'원.'
    
}) */
//배송비무료 버튼클릭 시 배송비가격 표시
deliveryBtn.addEventListener('click',()=>{
    const priceMap3 = shopDB2.map(i => i.delivery)
    const  minDel = Math.min(...priceMap3)
    result2.textContent = `배송비는 ${minDel}원입니다.`
    
})