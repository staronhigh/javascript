// 문제 1.
// 사용자에게 수를 입력받고 그 값이 100보다 큰지 작은지를 alert창으로 출력하세요.
var setNum = 100;
var userNum = prompt("아무 수나 입력하세요");
if (isNaN(userNum)) {
    alert("숫자가 아닙니다.");
} else {
    if (userNum < setNum ) {
        alert("당신의 숫자 " + userNum + "는 100보다 작습니다.");
    } else if (userNum > setNum) {
        alert("당신의 숫자 " + userNum + "는 100보다 큽니다.");
    } else {
        alert("당신의 숫자는 100입니다.");
    }
}

// 문제 2.
// 사용자에게 수를 입력받고 그 값이 짝수인지 홀수인지 비교해보세요.
var userNum2 = prompt("아무 수나 입력하세요");
if (isNaN(userNum2)) {
    alert("숫자가 아닙니다.");
} else {
    if ( userNum2%2 == 1 ) {
        alert("홀수입니다.")
    } else {
        alert("짝수입니다.")
    }
}

// 문제 3.
// 사용자에게 수를 2번 입력받아, 두 수중 어느 값이 큰지를 출력하세요. (입력받은 수가 숫자가 아닐시 "숫자를입력하세요"를 출력)

var compareNum = prompt("아무 수나 입력하세요");
var compareNum2 = prompt("아무 수나 입력하세요");
// typeof(compareNum)
// Number(compareNum);

if (isNaN(compareNum) || isNaN(compareNum2)) {
    alert("숫자가 아닙니다. 숫자를 입력하세요");
} else {
    if ( compareNum > compareNum2 ) {
        alert( compareNum + " 이 " compareNum2 + " 보다 높습니다.");
    } else if ( compareNum < compareNum2 ){
        alert( compareNum + " 이 " compareNum2 + " 보다 낮습니다.");
    } else {
        alert( compareNum + " 이 " compareNum2 + " 와 같습니다.");
    }
}

// 문제 4.
// 국어, 영어, 수학 점수를 사용자에게 입력받고 그 평균이 60점 미만이면 가, 70점 미만이면 양, 80점 미만이면 미, 90점 미만이면 우, 90점 이상이면 수를 출력하세요.

var grade1 = prompt("국어점수를 입력하세요");
var grade2 = prompt("영어점수를 입력하세요");
var grade3 = prompt("수학점수를 입력하세요");

var total = (grade1 + grade2 + grae3) / 3;

if(grade < 60){
    alert("등급은 가 입니다.")
} else if (grade < 70){
    alert("등급은 양 입니다.")
} else if (grade < 80){
    alert("등급은 미 입니다.")
} else if (grade < 90){
    alert("등급은 우 입니다.")
} else if (grade >= 90){
    alert("등급은 수 입니다.")
}
