//todo.js
//1.input 할일입력 후 '추가하기' 버튼 클릭하면 ul의 마지막 자식위치li 할일 추가하기
const listInput = document.querySelector('#list')
const listAddBtn = document.querySelector('#list_add')
const listWrapUI = document.querySelector('#list_wrap')
console.log(listAddBtn,listInput,listWrapUI)

//버튼 변수만들기 
listAddBtn.addEventListener('click',()=>{
    //입력안하면 '할일을 입력하고 추가하게요'메세지 출력(삼항조건)\
    listInput.value ==''?alert('할일을 입력하세요'): toDoFunc();

})
listInput.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){listInput.value == '' ? alert('할일을 입력하세요') : toDoFunc();}
})
function toDoFunc(){
    listWrapUI.innerHTML += `<li><span>${listInput.value}</span><button type="button" class="close">X</button></li>`
/*     console.log(listInput.value)//값 확인
    console.log(listWrapUI)//대입할 대상확인 */
    listInput.value = '';
    const toDoclose = document.querySelectorAll('li .close');
    console.log(toDoclose)
    //부모 parentNode
    //삭제내장함수 remove()
    for(let i of toDoclose){
        i.addEventListener('click',()=>{
            i.parentNode.remove();
        })
    }
    return console.log('할일 출력 테스트');
}
