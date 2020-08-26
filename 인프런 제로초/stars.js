// 1 2 3 4 5 별찍기
for (var star = 1; star <= 5; star += 1) {
    document.write('*'.repeat(star),"<br>");
}

// 5 4 3 2 1 별찍기
for (var star = 5; star >= 1; star -= 1) {
    document.write('*'.repeat(star), "<br>");
}

// 2 4 6 8 10 별찍기
for (var star = 2; star <= 10; star += 2) {
    document.write('*'.repeat(star), "<br>");
}

// 10 8 6 4 2 별찍기
for (var star = 10; star >= 2; star -= 2) {
    document.write('*'.repeat(star), "<br>");
}

// 2배로 별찍기
for (var star = 1; star <= 16; star *= 2) {
    document.write('*'.repeat(star), "<br>");
}

// 5 4 3 2 1 앞 띄어쓰기 포함 별찍기  ?? 이거는 왜 document.write에서는 안되는데 console.log에서는 띄어쓰기가 보이는가?
for (var star = 5; star >= 1; star -= 1) {
    document.write('&nbsp'.repeat(5 - star) + '*'.repeat(star), "<br>");
}

//역피라미드 별찍기
for (var star = 9; star >= 1; star -= 2) {
    document.write('&nbsp'.repeat((9 - star) / 2) + '*'.repeat(star), "<br>")
}

