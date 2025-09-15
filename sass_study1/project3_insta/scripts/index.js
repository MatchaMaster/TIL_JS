/* const likeBtn = document.querySelector('.likes')
const nameBtn = document.querySelector('.name')
const commentBtn = document.querySelector('.comments')
console.log(likeBtn,nameBtn,commentBtn)
likeBtn.addEventListener('click',fullFunc)
function fullFunc(){
    return likeBtn.
} */
/* const instaMenu = document.querySelectorAll('.icons .interaction a'  )
console.log(instaMenu)
instaMenu[0].addEventListener('click',iconChange(0,'like'))
instaMenu[1].addEventListener('click',iconChange(1,'comment'))
instaMenu[2].addEventListener('click',iconChange(2,'paper'))
function iconChange(index,name){
    return function(e){
        e.preventDefault()
        instaMenu[index].children[0].src = `./images/${name}_on.png`
    }
} */


/* instaMenu[0].addEventListener('click',(e)=>{
    e.preventDefault()
    instaMenu[0].children[0].src ="./images/like_on.png"
})
 */

//사진 클릭 시 스피커 모양 보이기 (+애니메이션)
const instaPhoto = document.querySelector('.scenery img');
const volumeIcon = document.querySelector('#popup');
console.log(instaPhoto,volumeIcon)
volumeIcon.style.transition = 'opacity 0.2s'

instaPhoto.addEventListener('dblclick',()=>{
    volumeIcon.style.opacity = 1;
})
instaPhoto.addEventListener('mouseout',()=>{
    volumeIcon.style.opacity = 0;
})