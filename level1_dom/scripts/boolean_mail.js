//boolean_mail.js
//console.log(isLogin)
window.addEventListener('load',()=>{
    let localStatus = localStorage.getItem('isLogin2')//true
    console.log(localStatus == 'true')
    //console.log(typeof(localStatus))
    //DOM 변수
    const mailLogin = document.querySelector('#login')
    const mailLogout = document.querySelector('#logout')

    if(localStatus == 'true'){
        console.log('로그인 화면');
        mailLogin.style.display = 'block';//상황에 따라 flex or grid
        mailLogout.style.display = 'none';
    }else{
        console.log('로그아웃 화면')
        mailLogin.style.display = 'none';
        mailLogout.style.display = 'block';
    }
})
