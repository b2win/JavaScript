'use strict';

var i = 20;
while(i >= 10){
    if(i % 2 == 0){
        document.write("<p class='blue'>" + i + "</p>");
    } else {
        document.write("<p class='red'>" + i + "</p>");
    }
    i--;
    if(i == 14) break;
}


for(var i = 20; i >= 10; i--){
    if(i == 14) continue;
    if(i % 2 == 0){
        document.write("<p class='blue'>" + i + "</p>");
    } else {
        document.write("<p class='red'>" + i + "</p>");
    }
}
