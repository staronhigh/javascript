Javascript Class 1
=========================

# 1. 문법
## 1.1 기본사항 
* html내 head, body안에 들어갈수 있다. (body요소 가장아래가 좋은위치)
* 구문은 세미콜론(;)으로 끝나야 한다.
* 주석은 두가지 한줄주석(//) , 여러줄주석(/**/)

## 1.2 네이밍규칙
* 대소문자를 구분해야 한다.
* 키워드를 사용하면 안된다. (키워드 : http://poiemaweb.com/js-syntax-basics#9-키워드-keyword)
* 숫자로 시작하면 안된다.
* 특수문자는 _과 $만 허용한다.
* 공백문자를 포함할 수 없다.  


# 2. 변수 (Variable)
Javascript 에서 변수는 data를 저장, 참조하기 위해 사용된다.
<pre>
<code>
    var name; // 변수를 선언하고 초기화한다.
    name = "김혜진";  // 변수에 값을 할당한다.
</code>
</pre>


# 3. 자료형 (Data Type)
기본자료형과 / object(객체형,참조형) 이 있다. 아래는 기본자료형의 5가지이다. 
(ECMAScript 6에서 기본자료형 symbol이 추가됨)

## 3.1 String 
''작은따옴표 또는 ""큰따옴표를 사용하여 텍스트 데이터를 나타낸다.
<pre>
<code>
    var name = "김혜진"
    name = "이름은 \'김혜진\" 입니다";
    name = "이름은 \n 김혜진 입니다";
</code>
</pre>

## 3.2 Number
다른 프로그래밍 언어의 경우 보통 정수형과 실수형을 구분하지만, 자바스크립트는 하나의 숫자 자료형으로 표현한다.
<pre>
<code>
    var num = 0.1 + 0.2;
</code>
</pre>

## 3.3 Boolean
논리적 요소를 나타내며, ture, false 두가지 값을 가짐
false, 빈문자열(""), NaN, null, undefined, 0 은 false로 간주된다.
<pre>
<code>
    var foo = ture;
    var bar = false; 
</code>
</pre>

## 3.4 undefined
선언은 되었지만 할당된적이 없는 변수에 접근하거나 존재하지 않는 객체 프로퍼티에 접근할 경우 반환된다.
<pre>
<code>
    var foo;
    console.log(foo); // undefined
</code>
</pre>

## 3.5 null
값이 없음을 명시한다. null 타입은 딱한가지 값, null만 가질수 있다.
    
    
# 4. 연산자

## 4.1 산술연산자
<pre>
<code>
    +, -, *, /, %
</code>
</pre>

## 4.2 증감연산자
변수의 값을 하나씩 증가시키거나 감소시킴
<pre>
<code>
    var i = 5;
    
    i++;
    ++i;
    i--;
    --i;
</code>
</pre>

## 4.3 대입연산자
연산자 오른쪽에 있는 값을 연산자 왼쪽에 대입
<pre>
<code>
    =, +=, -=, *=, /=, %=
    
    var x;
    
    x = 10;   
    x += 5;
    x -= 5;
    x *= 5;
    x /= 5;
    x %= 5;
</code>
</pre>

## 4.4 비교연산자
<pre>
<code>
    ==, ===, !=, !==, &gt;, &lt;, &gt;=, &lt;=, ?(삼항연산자)     
       
    var x = 5

    x == 5 
    x == '5'
    x == 8  

    x === 5 
    x === '5'

    x != 8   
    x != 5   
    x != '5' 

    x !== 8  
    x !== 5  
    x !== '5'

    //삼항연산자(ternary operator)
    var now = new Date();
    var greeting = "Good" + ((now.getHours() > 17) ? " evening." : " day."); 
</code>
</pre>

## 4.5 논리연산자
불린값과 불린값을 연산할때 사용
<pre>
<code>
    var x = true;
    var y = false;
    
    x && y;  // && 논리곱(and)
    x || y;  // || 논리합(or)
    !x;      // !  논리부정
</code>
</pre>


# 5. 조건문 
조건식의 참, 거짓을 분별하여 참일 때와 거짓일 때의 실행문을 달리하는 제어문이다.

## 5.1 if문
주어진 조건식을 평가하여 참, 거짓을 구별한다.
 <pre>
<code>   
    if (조건식){
        조건식이 참일때 실행
    } else {
        조건식이 거짓일때 실행
    }
    
    // if else if문
    if (조건식){
        조건식이 참일때 실행
    } else if (조건식2){
        조건식2이 참일때 실행
    } else {
        조건식이 거짓일때 실행
    }
</code>
</pre>

## 5.2 switch문
switch변수의 값과 일치되는 case문으로 실행순서가 이동하고,
일치되는 case문이 없을 경우 실행순서는 default로 이동한다.

<pre>
<code>
    switch (비교할 값){
        case 값 : 
            문장
            break;
        case 값 : 
            문장
            break;
        defulat :
            문장
            break;
    }
</code>
</pre>

## 5.3 삼항연산자
연산자에 속하지만 조건에따라 프로그램진행을 변화시킬수 있다.
<pre>
<code>
    (조건문) ? 참일때 실행 : 거짓일때 실행
</code>
</pre>
