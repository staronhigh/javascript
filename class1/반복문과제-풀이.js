// 문제 1.
// 1부터 10까지의 수를 모두 더해서 출력하세요.
var i = 0;
var num = 0;
while(i < 10){
    i++;
    num += i;
}
alert(num);


// 문제 2.
// 사용자에게 구구단 중 하나의 단을 입력받고, 해당 단의 구구단을 출력하세요. ("1 x 1 = 1"의 형태로 출력)

var gugu = 0;
var txt = "";
gugu = Number(prompt("몇단을 불러올까요?"));
for( var i = 1; i <= 9; i++){
    txt += (gugu + " * " + i + " = " + gugu*i + "\n" );
}
alert(txt);

// 문제 3.
// 역삼각형 형태의 * 피라미드를 출력하세요.
var triangle = "";
for(var i=0; i<5; i++){
    for(var j=i; j<5; j++){
        triangle += "*";
    }
    triangle += "\n";
}
alert(triangle);

// 문제 4.
// 0부터 10까지의 짝수 합을 구하세요.
var result = 0;
for (var i=0; i<=10; i++){
    if(i%2 == 0){
        result += i;
    }
}
alert(result);


// 문제 5.
// 사용자에게 수를 입력받고, 그 수의 길이와 같은 '수박수박수...' 과 같은 패턴을 유지하는 문자열을 출력하세요.
// 예를 들어 입력받은 값이 4라면 '수박수박', 5라면 '수박수박수'를 출력하세요.
var num = prompt("몇번이나 반복할까요? 숫자로 입력해주세요");
var txt = "";
for (var i = 0; i < num ; i++){
    if (i % 2 === 1){
        txt += '수';
    } else {
        txt += '박';
    }
}
alert(txt);
