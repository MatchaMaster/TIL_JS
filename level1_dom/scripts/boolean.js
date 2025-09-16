//boolean.js
//거짓으로 평가되는 값
// false, null, undefined, naN,0 ""
//위 제외 모든 값 참으로 평가됨 [], {} 포함
let a = ""
console.log(Boolean(a))
a = []
console.log(Boolean(a))
//비교연산자
//==일치연산, ===데이터타입까지 일치
let b = 10;
let c ="10";
let result = b == c;
console.log(result) //값만 비교 => true
result = b === c;
console.log(result) //값,데이터타입 비교 =>false(같으면 거짓)
b += 5;
result = b != c;
console.log(result)//값,데이터타입 비교 =>false(같으면 거짓)
result = b !== c;
console.log(result) //값만 비교 => true
c = 2;//b 15,c 2
result = b < c;
console.log(result)//false
result = b > c;
console.log(result)//true
result = b >= c;
console.log(result)//true
result = b <= c;
console.log(result)//false
console.log('----------------------')
//논리연산자 &&, ||, !
console.log("A" && null) //null
console.log("A" && "B") //B
console.log(0 && "B") //0
console.log(0 || "B") //B
console.log("A" || "B") //A
console.log("" || {}) //{}
console.log(! "A") //F
let d; //아무것도 대입안함 ->F
result = !d;
console.log(result);
let e = []
result = !e;
e+=['사과']//상관없음
console.log(result) //F
//
console.log('조건문-------')
//if (조건식){조건식이 참일때 실행문}
let x = [] //빈배열은 참
let y = 0
if(x){console.log('x는 참이다');}
if(y){console.log('y는 참이다');}
if(x != true){console.log('x는 참이다2');}
if(x && y){console.log('x,y는 참이다');}
if(x || y){console.log('x만 참이다');}
x = 7;
y = 2;
if(x>y && x==y){} //거짓
if(!y && x){console.log('참일까?');} //거짓
if(!y || x){console.log('참일까?');} //참 x만 참이니까 가능

//에버랜드 탑승조건 확인 JS
//나이입력 후 버튼 클릭시 10살 이하면 탑승불가 메세지 출력
const ageInput = document.querySelector("#age")
const ageBtn =document.querySelector("#age_btn")
const ageResult =document.querySelector(".result")
console.log(ageBtn,ageInput,ageResult)

//console.log(ageInput.value)
//이벤트함수 밖에 작성하는건 초기값 확인용
///나이 입력후 버튼 클릭 시 콘솔에 입력한 나이값 표시
ageBtn.addEventListener('click',()=>{
    console.log(ageInput.value) 
    //ageInput변수의 value 값이 숫자 10 이하면(조건문)
    //ageReult 변수에 '탑승불가' 문자데이터 출력(조건문 참일때)
    if(ageInput.value <= 10){
        ageResult.textContent='탑승불가';
        ageInputReset()}
        //10살보다 크면 '탑승가능'메세지 출력
    if(ageInput.value >10){
        ageResult.textContent='탑승가능'
        ageInputReset()
    }
        //값 입력안하고 클릭 시 '값을 입력하세요'메세지 출력
    if(ageInput.value == ''){ageResult.textContent='값을 입력하세요'}
    }
) 
function ageInputReset(){
    return ageInput.value = '';
}

//인쇄 알고리즘
//인쇄하기 버튼 클릭 시 '인쇄 하시겠습니까?' 물어보고 확인 누르면 인쇄창 실행
//'인쇄 하시겠습니까?' 물어보고 (BOM 내장함수 활용)
const printBtn = document.querySelector('#print_btn')
console.log(printBtn)
printBtn.addEventListener('click',printFunc)
    function printFunc(){
        let confirmResult=confirm('인쇄 하시겠습니까?')
        console.log(confirmResult)
        if(confirmResult){print()}
        return //함수종료위치
    }
//참과 거짓에 따른 결과출력 조건문
//if(조건식){참일때실행}else{거짓일때실행}
// 관리자로그인 
//관리자 (admin) 로그인사용자 아이디 admin 일 경우 '관리자님 어서오세요' 아니면 '관리자페이지 접근 불가'
/* const userId = prompt('아이디')
if(userId !='admin'){
    alert('관리자페이지 접근불가')
}else{
    alert('관리자님 어서오세요')
} */
//로그인 조건문
//아이디 (미입력) 비밀번호(입력) 로그인클릭 시 - 아이디입력경고 메세지 출력
//아이디 (입력) 비밀번호(미입력) 로그인클릭 시 - 비번입력경고 메세지 출력
//아이디 (입력) 비밀번호(입력) 로그인클릭 시 - 맞는정보기준 ->index.html이동
//아이디 (입력) 비밀번호(입력) 로그인클릭 시 - 틀린정보기준 ->정보오류 메세지 출력
const userId = document.querySelector('#user_id')
const userPw = document.querySelector('#user_pw')
const loginBtn = document.querySelector('#login_btn')
const loginErrorMsg = document.querySelector('.error')
console.log(userId, userPw,loginBtn,loginErrorMsg)
//정보저장 DB
//관리자 이름 : 봄, 나이:30
//일반회원 이름 :여름,나이:20
const userDB = [{//userDB[배열].객체속성
    name:'봄',
    age:30,
    pst:'관리자',
    id:'admin',
    pw:'admin1234'
},{
    name:'여름',
    age:20,
    pst:'일반회원',
    id:'summer',
    pw:'summer1234'
},]
    
//const userDB = {}
//로그인 클릭 이벤트
loginBtn.addEventListener('click',()=>{ 
    //아이디 미입력 기준 에러 메세지 출력
    if (userId.value == ''){loginErrorMsg.textContent='아이디를 입력하세요.'}
        else if(userPw.value == ''){loginErrorMsg.textContent='비밀번호를 입력하세요.'
            //if의 조건이 거짓이고 else if 조건이 참일때 실행(비번 미입력)
            loginErrorMsg.innerHTML ='비밀번호를<br>입력하세요'
        }else if(userId.value == userDB[0].id && userPw.value == userDB[0].pw){//입력한 id,pw이 관리자의 저장된 id,pw 동일 시 index이동
           /*  location.href='../index.html'; */
            
            //isLogin = true;
            //console.log('로그인 성공',isLogin)
            //#로컬 환경에서 확인가능한 브라우저 데이터 저장법
            localStorage.setItem('isLogin2','true') //->저장한걸 불러올때
            //localStorage.getItem('속성', '값')
            //localStorage.getItem('가져오는 속성')
            //비번상관없이 아이디가 입력됐을 때
        }else{loginErrorMsg.textContent='아이디 또는 비밀번호가 잘못되었습니다. 다시 한번 확인해주세요.'}
            //모든 조건이 거짓일 때 (id,pw가 저장된 정보와 다를때)
        }
)
    
//boolean_common 변수 확인
console.log(isLogin)
