var word = "월드타워"
while (true) {
    var answer = prompt(word)
    if (word[word.length - 1] === answer[0]) {
        alert('딩동댕')
        word = answer
    } else {
        alert('땡')
    }
}

//위에 예스를 for문으로 변경했을때 
for (var word = '월드타워'; true; ) {
    var answer = prompt(word)
    if (word[word.length - 1] === answer[0]) {
        //맞았을때
        alert('딩동댕')
        word = answer;
    } else {
        //틀렸을때
        alert('땡')
    }
}

//1,2,3,4,5
for (var star = 1; star <= 5; star += 1) {
    console.log('*'.repeat(star))
}

//5,4,3,2,1
for (var star = 5; star >= 1; star -= 1) {
    console.log('*'.repeat(star))
}

//10,8,6,4,2
for (var star = 10; star >= 2; star -= 2) {
    console.log('*'.repeat(star))
}

//1,2,4,8,16
for (var star = 1; star <= 16; star *= 2) { // star *= 2 -> star = star * 2
    console.log('*'.repeat(star))
}

//5,4,3,2,1 공백이 앞에
for (var star = 5; star >= 1; star -= 1) {
    console.log(' '.repeat(5 - star) + '*'.repeat(star))
}

//9,7,5,3,1 역피라미드
for (var star = 9; star >= 1; star -=2) {
    console.log(' '.repeat((9 - star) / 2) + '*'.repeat(star))
}

//구구단 
while (true) {
    var 숫자1 = Math.floor(Math.random() * 9) + 1
    var 숫자2 = Math.floor(Math.random() * 9) + 1
    var 결과 = 숫자1 * 숫자2
    var 조건 = true;
    while (조건) {
        var 답 = prompt(String(숫자1) + '곱하기' + String(숫자2) + '는?')
        if (결과 === Number(답)) {
            alert('딩동댕');
            조건 = false;
        } else {
            alert('땡')
        }
    }
}