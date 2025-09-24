//중첩 for
//ul*2>li*5
//<ul></ul><li></li> <- x
//<ul><li></li></ul> <- o
let ul = ''
let li = ''
for(let i=0; i<=1; i++){
    //ul = '<ul>'
    li = ''; //초기화
    for(let j=0; j<5; j++){
        li += `<li>menu${j+1}</li>`
    }
    ul += `<ul>${li}</ul>`
}
console.log(ul)

//고객 리뷰 초기 상태
// 상품문의 클릭 시 문의내용 보이기
// 고객리뷰 클릭 시 리뷰내용 보이기
const tabTitle = document.querySelectorAll('.title a')
const tabContent = document.querySelectorAll('.contents .con')
console.log(tabContent,tabTitle)

tabContent[1].style.display = 'none'

/* tabTitle[0].addEventListener('click',()=>{
    contentDisplayHide()
    tabContent[0].style.display = 'block'
    
})
tabTitle[1].addEventListener('click',()=>{
    contentDisplayHide()
    tabContent[1].style.display = 'block'
})*/

//객체 정보와 서로 다른 객체를 연결한 인덱스 정보
/* for(let i of tabTitle){
    i.addEventListener('click',()=>{
        contentDisplayHide()
        console.log(i)
        //tabContent[0].style.display = 'block'
    })
} */
//객체 정보와 서로 다른 객체를 연결한 인덱스 정보
//매개변수 순서대로 객체->인덱스->배열정보(이름 설정은 자유)
tabTitle.forEach(function(obj,ind,arr){
    console.log(obj,ind,arr.length)
    obj.addEventListener('click',()=>{
        contentDisplayHide()
        borderLine()
        console.log(ind)//클릭한 인덱스만 출력
        tabContent[ind].style.display = 'block';
        obj.style.backgroundColor = 'yellow'
    })
})

function contentDisplayHide(){
    for(let i of tabContent){
        i.style.display = 'none';
    } 
} 
function titleDesignReset(){ //스타일 바꿧으면 리셋펑션애서도 리셋값 적어주기
    for(let i of tabContent){
        i.style.backgroundColor = 'none';
        i.style.color = 'black';
    } 
} 
function borderLine(){
    for(let i of tabContent){
        i.style.color = 'red';
    }
}