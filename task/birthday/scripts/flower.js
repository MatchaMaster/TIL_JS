
//내가 태어난 월을 넣고 
//버튼을 눌렀을때
//결과가 나온다.(내가 태어난 월에 따라서)
document.body.style.backgroundColor = 'pink'; // 페이지 열리자마자 배경색 변경->문제없음
console.log('JS 연결 확인 완료!'); //확인
const chkBtn = document.querySelector('.chk_btn')//채크버튼
const urMonth = document.querySelector('#ur_month')//월 입력
const resultSee = document.querySelector('.result')//결과
console.log(chkBtn,urMonth,resultSee)
const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
] 
chkBtn.addEventListener('click', () => {
    let birthMonth = urMonth.value // 입력값 가져오기
    birthMonth = Number(birthMonth) // 숫자로 변환

    if (birthMonth >= 1 && birthMonth <= 12) {
        const flowerInfo = birthday_flower[birthMonth - 1]
        resultSee.innerText = `${flowerInfo.month}월의 탄생화는 ${flowerInfo.flower} 🌸 (${flowerInfo.content})`
    } else {
        resultSee.innerText = "1~12 사이의 숫자를 입력해주세요!"
    }
}) 
