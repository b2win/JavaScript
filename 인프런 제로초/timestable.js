while(true) {
    var num1 = Math.floor(Math.random() * 9) + 1
    var num2 = Math.floor(Math.random() * 9) + 1
    var result = num1 * num2
    var value = true;
    while (value) {
        var answer = prompt(String(num1) + '곱하기' + String(num2) + '는?')
            if (result === Number(answer)) {
                alert('딩동댕');
                value = false;
            } else {
                alert('땡')
            }
        }
    }
