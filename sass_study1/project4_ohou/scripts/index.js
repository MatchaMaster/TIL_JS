//작업 HTML 동적인 요소가 무엇이 있는지? 알고리즘 계획
//1. 변수 2. 초기값설정 3. 이벤트,함수 설정

//동적요소 계획하기
//1. 상품이미지에 마우스이벤트 시 큰상품 이미지 변경
//2.😁저장하기 버튼 클릭 시 로그인 유무에 따라 다른결과 실행
//3.리뷰 클릭시 스크롤 이동
//4.가격정보 클릭 시 정보 팝업 출력/숨기기
//5. 주문목록 초기 숨기기
//6.사이즈 셀렉트 초기 비활성화 (색상 선택시 활성화)
//7. 색상-> 사이즈 모두 선택 시 주문목록 출력(선택한 값이 출력 출력,주문금액 변경)
//8. 주문목록 'x' 클릭 주문목록 삭제, 주문금액 초기화
//9. 주문목록 + 클릭 시 재고수량까지 수량+금액 표시
//10. 주문목록 - 클릭 시 주문수량 + 주문금액 감소(1 이라면 경고창 출력)
//11. (상품 미선택 시 ) 장바구니, 바로구매 클릭 시 '상품선택하세요' 경고장 출력 
//11. 😁(상품 선택 시 ) 장바구니, 바로구매 클릭 시  로그인 유무에 따라 다른페이지로 이동
//-------------------------------------------
//1. 상품이미지에 마우스이벤트 시 큰상품 이미지 변경
// 변수 -> 초기값 -> 이벤트,함수

const thumnailAll=document.querySelectorAll('.thumnail a')
const thumnailOverView=document.querySelector('.overview img')
console.log(thumnailAll, thumnailOverView)//a2개, img

//초기값(첫번쨰 썸네일 a가 보이고 있단 뜻으로 테두리가 있음)
thumnailAll[0].style.border = '2px solid #0aa5ff'

//두번째 썸네일에 마우스 올리면 큰 이미지가 두번째 썸네일 이미지로 변경하기
//콘솔 테스트 권장 1) 두번째 썸네일 이미지 경로 출력하기
console.log(thumnailAll[1].children[0].src)
//2. 큰 이미지 경로 출력하기
console.log(thumnailOverView.src)
//이미지 자연스러운 scale 변경을 위한 transition 애니메이션 설정(초기값)

//초..?
thumnailAll[0].children[0].style.transition = 'transform 0.3s'
thumnailAll[1].children[0].style.transition = 'transform 0.3s'
//이벤트 함수시작
thumnailAll[0].addEventListener('mouseover',()=>{
    thumnailAll[1].style.border = '0'
    thumnailAll[0].style.border = '2px solid #0aa5ff'
    //이미지확대
    thumnailAll[1].children[0].style.transform= 'scale(1)'
    thumnailAll[0].children[0].style.transform= 'scale(1.2)'
    //이미지변경
    thumnailOverView.src = thumnailAll[0].children[0].src
})

//로그인 정보 저장
//true == 로그인
//false == 로그아웃
localStorage.setItem('isLogin','true');

//2.😁저장하기 버튼 클릭 시 로그인 유무에 따라 다른결과 실행
const bookMark = document.querySelector('.product_info .scrap')
let loginStatus = '';//상태가져오기 변수
console.log(bookMark);

//위 변수 이용한 조건 분기
bookMark.addEventListener('click',()=>{
    loginStatus = localStorage.getItem('isLogin')
    console.log(loginStatus)
    //로그인 시 wish.html로 이동
    if(loginStatus == 'true'){
        location.href = `./wish.html`
        //로그아웃 시 login.html
    }else{
        location.href = `./login.html`
    }
})
//3.리뷰 클릭시 스크롤 이동
const reviewBtn = document.querySelectorAll('.review_link')
const reviewWrap = document.querySelector('.review_wrap')
const productInfoBtn = document.querySelector('.product_link')
const productWrap = document.querySelector('main > .product_info')
console.log(productInfoBtn,reviewWrap,reviewBtn,productWrap)
//스크롤 이동 window 속성 scrollTo(x,y)
/* reviewBtn[0].addEventListener('click',(e)=>{
    e.preventDefault()
    window.scrollTo(0,reviewWrap.offsetTop) //off
}) */
/* reviewBtn[1].addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, reviewWrap.offsetTop);
}); */ /* 다른방법 */
reviewBtn[0].addEventListener('click',(e)=>{e.preventDefault();contentsPstFunc(reviewWrap)})
reviewBtn[1].addEventListener('click',(e)=>{e.preventDefault();contentsPstFunc(reviewWrap)})
productInfoBtn.addEventListener('click',(e)=>{e.preventDefault();contentsPstFunc(productWrap)})
function contentsPstFunc(target){
    return window.scrollTo(0,target.offsetTop)
}
/* function reviewBtnFunc(){
    return function(e){
        e.preventDefault();
        window.scrollTo(0,reviewWrap.offsetTop)
    }
} */
/* productInfoBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    reviewBtnFunc(productWrap) //off
}); */
//4.가격정보 클릭 시 정보 팝업 출력/숨기기
//초기 : 숨김 (false)
//클릭 : 보이기(true)->false->true....
let infoBoolean = false;//초기 : 숨김 (false)
const priceInfoBtn = document.querySelector('.price_info .info_icon')
const priceInfo = document.querySelector('.price_info .info')
console.log(priceInfo,priceInfoBtn)
//클릭시 팝업 출력
priceInfoBtn.addEventListener('click',()=>{
    //infoBoolean의 상태를 클릭할때마다 값(infoBoolean) 반전
    infoBoolean = !infoBoolean;
    console.log(!infoBoolean) 
    if(infoBoolean){
        priceInfo.style.display = 'block'
    }else{
        priceInfo.style.display = 'none'
    }
    //priceInfo.style.display = 'block'
})
//5. 주문목록 초기 숨기기
const orderList = document.querySelector('.order_list')
const sizeSelect = document.querySelector('#size_select')
const colorSelect = document.querySelector('#color_select')
const orderPrice = document.querySelector('.order_price em')
console.log(orderList,sizeSelect,colorSelect)
orderList.style.display = 'none';
sizeSelect.disabled = true;

//6-2; (색상 선택 시 활성화)(change 이벤트)
//7. 색상-> 사이즈 모두 선택 시 주문목록 출력(선택한 인덱스가 0이아닌것)-콘솔 선택완료

colorSelect.addEventListener('change',()=>{
    console.log(colorSelect.selectedIndex)
    console.log(colorSelect.options[0])
    if(colorSelect.selectedIndex != 0){//0이 아닌 다른 값 선택 시
        sizeSelect.disabled = false; //활성화
        //사이즈 이벤트 작성위치
        sizeSelect.addEventListener('change',()=>{
            //사이즈 옵션 인덱스0이 아닌 것 선택 시 콘솔 선택완료
            if(sizeSelect.selectedIndex != 0){//0이 아닌 다른 값 선택 시
                console.log('선택완료') //출력
                orderList.style.display = 'block';
                //선택한 옵션안에 글자 가져오는 속성
                console.log(orderList.children[0].children[0])
                console.log(orderList.children[0].children[1])
                //선택 옵션(color) 출력하기
                let orderColor = colorSelect.options[colorSelect.selectedIndex].text;
                let orderSize = sizeSelect.options[sizeSelect.selectedIndex].text;
                //let orderColorReplace = orderColor.replace(찾는값,변경값)
                //정규표현식 시작과 끝 표시 /검사내용/
                //괄호찾기\찾는문자\(.*\)
                //모든내용 . *
                let orderColorReplace = orderColor.replace(/\(.*\)/,'')
                let orderSizeReplace = orderSize.replace(/\(.*\)/,'')
                orderList.children[0].children[0].textContent =orderColorReplace;
                orderList.children[0].children[1].textContent =orderSizeReplace;
                orderPrice.textContent = (productOptDB[0].price).toLocaleString('ko-kr')//주문금액 표시
        }
    })
    }else{//0일때
        sizeSelect.disabled = true; //비활성화
    }
    //sizeSelect.disabled = false;
    //색상 select 에서 첫번째 value=none에 해당하는 색상을 제외한 나머지 옵션이 선택되었을때 사이즈select 활성화하기
})

//DB불러오기 테스트
console.log(productOptDB[0].name)//몽쉘 패딩 아네스 올인원
console.log(productOptDB[0].color[0])//블랙,라즈베리
console.log(productOptDB[0].color[1]+productOptDB[0].price)//라즈베리 39900
//DB ->HTML 적용
//1.JS에서 HTML함수로 생성 createElement() 
const colorOpt1 = document.createElement('option')
const colorOpt2 = document.createElement('option')
console.log(colorOpt1)
//2. 위에서 생성한 함수에 DB 데이터 대입 innerHTMl,textContent
colorOpt1.textContent = `${productOptDB[0].color[0]}(${productOptDB[0].price}원)`
colorOpt2.textContent = `${productOptDB[0].color[1]}(${productOptDB[0].price}원)`
//3. 위에서 만든 HTML을 실제 HTML의 마지막 자식 위치로 삽입
//생성한 태그가 li면 ul or ol의 마지막 자식 위치로 삽입
colorSelect.appendChild(colorOpt1)
colorSelect.appendChild(colorOpt2)
//생성한 태그가 option면 select의 마지막 자식 위치로 삽입
//8. 주문목록 'x' 클릭 주문목록 삭제, 주문금액 초기화->
const closeBtn = document.querySelector('#orderFrm .order_list .close');
/* closeBtn.addEventListener('click', ()=> {
   closeBtn.parentNode.display = 'none';
}) */
closeBtn.addEventListener('click',function(){
    this.parentNode.style.display = 'none';
    orderPrice.textContent = 0;
    colorSelect.selectedIndex = colorSelect.options[0]
    sizeSelect.selectedIndex = sizeSelect.options[0]
})

    //9. 주문목록 + 클릭 시 재고수량까지 수량+금액 표시
    //필요: +버튼 , 재고수량(productOptDM[0].stock), 주문수량, 주문금액(orderPrice),증가 숫자 데이터
    const plusBtn=document.querySelector('.num #plus_btn') //플러스버튼
    const minusBtn=document.querySelector('#minus_btn') //마이너스버튼
    const orderNum=document.querySelector('#order_num') //인풋저장//주문수량
    const orderListPrice=document.querySelector('.order_list .price') //주문금액
    //초기값: 주문수량칸에 값1 적용하기
    let num = 1; //변경되는 변수저장(let)//초기주문 수량
    orderNum.value = num; //input=value ,P=innerHtml
    //+버튼 클릭시 /주문수량이 1씩 증가하고/ 주문수량에따라 가격(productOptDB.price)증가하기
    plusBtn.addEventListener('click',()=>{
        if(num < productOptDB[0].stock){/* if(프로덕스데이타.재고가 <= 10개일때){ 위에 숫자 주문수량 가져오기*/
        num++;//숫자가 1씩증가한다.
        orderNum.value = num //수량 숫자증가
        let total = num * productOptDB[0].price //변수저장
        orderListPrice.textContent = total.toLocaleString('ko-kr')
        orderPrice. textContent = total.toLocaleString('ko-kr')
        }else{
            alert('최대 구매 수량입니다.')
        }
    }) 
    //마이너스 버튼
    //10. 주문목록 - 클릭 시 주문수량 + 주문금액 감소(1 이라면 경고창 출력)
    minusBtn.addEventListener('click',()=>{
        if( num > 1 ){ //숫자가 1보다 작아질때 최소구매수량 뜨게
        num--;//숫자가 1씩감소한다.
        minusPlusFunc() //함수호출
        }else{
            alert('최소 구매 수량입니다.')
        }
    })
function minusPlusFunc(){//함수생성
        let total = num * productOptDB[0].price //변수저장
        orderNum.value = num
        orderListPrice.textContent = total.toLocaleString('ko-kr')
        orderPrice. textContent = total.toLocaleString('ko-kr')
        return;
    }
//11. (상품 미선택 시 ) 장바구니, 바로구매 클릭 시 '상품선택하세요' 경고장 출력 
const cartBtn = document.querySelector('#cart_btn')
const buyBtn = document.querySelector('#buy_btn')
console.log(cartBtn, buyBtn)
cartBtn.addEventListener('click',()=>{
    buycartBtn('./cart.html')
})
buyBtn.addEventListener('click',()=>{
    buycartBtn('./buy.html')
})
function buycartBtn(url){
    if(colorSelect.selectedIndex == 0 || sizeSelect.selectedIndex == 0){
        alert('상품을 선택하세요.')//상품선택 안한걸 확인하는 조건문
    }else{
        loginStatus = localStorage.getItem('isLogin')
        if(loginStatus == 'true'){
            location.href = url//장바구니 페이지 이동(로그인유무에 따라) 무(로그인에 따라)
        }
        else{//근데 로그인이 안되어있다면~ 
            location.href = './login.html'}
    }
}
//12. 😁(상품 선택 시 ) 장바구니, 바로구매 클릭 시  로그인 유무에 따라 다른페이지로 이동