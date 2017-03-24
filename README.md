# Javascript Study
## 1. 자바스크립트
### 1.1 자바스크립트란? 
Javascript는 HTML, CSS와 함께 웹을 구성하는 요소중 하나로 웹브라우저에서 동작하는 유일한 언어로 1995년 Brendan Eich(Nescape)이 Navigator 2를 위하여 웹페이지에 포함되는 스크립트 언어로서 개발되었다.
JavaScript는 멀티-패러다임 언어로 명령형 (imperative), 함수형 (functional), 프로토타입 기반 (prototype-based) 객체지향형 언어다. 비록 다른 객체지향적인 언어들과의 차이점에 대한 논쟁들이 있긴 하지만, JavaScript는 강력한 객체지향 프로그래밍 능력들을 지니고 있다. 간혹 클래스가 없어서 객체지향이 아니라고 생각하는 사람들도 있으나 프로토타입 객체지향 방식의 객체지향 언어이다.
Javascript는 C-family languag로 C, Java에서 많은 문법을 차용했으며 Awk, Perl, Python으로부터도 영향을 받았고, Interpreter language이기 때문에 compile이 필요없어 HTML파일 안에 직접 기술이 가능하다.
Javascript는 웹은 물론 모바일 하이브리드 앱(PhoneGap, Sencha Touch, jQuery Mobile, Appcelerator), 서버 사이드(NodeJS or Wakanda), Desk-top(Electron, NW.js, AppJS), 로봇 제어(NodeBots or noduino) 언어로서 세계에서 가장 인기있는 언어이다. (가장 많은 오해를 받는 언어이기도 하다)
초창기 Javascript는 웹페이지 제작에 있어서 보조적인 기능을 수행하기 위해 한정적인 용도로 주로 사용되었다. 이 시기에 대부분 로직은 주로 웹서버에서 실행되었고 브라우저(클라이언트)는 서버로 부터 전달받은 HTML과 CSS를 렌더링하는 수준이었다. 하지만 웹이 더욱 발전하면서 과거 웹서버에서 수행되던 많은 역할들이 클라이언트로 이동하였는데 이것은 자바스크립트의 발전 덕분이다. 특히 jQuery의 등장으로 다소 번거롭고 논란이 있던 DOM(Document Object Model)를 보다 쉽게 제어할 수 있게 되었다. 이는 정적인 웹페이지에 역동성을 부여하기 위한 목적으로 Javascript의 위상을 더욱 높이는 계기가 되었다.
구글의 V8 Javascript Engine을 기초로 한 Node.js를 통해 이제는 웹 브라우저를 벗어난 환경에서도 개발이 가능해졌고 이로 인해 다양한 프레임워크 및 도구들까지 생겨나면서 그간 웹 브라우저에서만 동작하는 반쪽짜리 언어 취급을 받던 자바스크립트가 이제는 완벽한 Full stack 개발 언어로 생태계를 구축해나가고 있음은 물론 크로스 플랫폼을 위한 모바일 웹/앱 개발 분야에서도 주목받고 있다.
최근에는 SPA(Single Page Application) 웹 앱이 대중화되면서 Angular, Backbone.js, Ember.js 등 다양한 SPA Framework와 안정적 성능과 뛰어난 편의성을 가진 jQuery와 같은 라이브러리 또한 많은 사용층을 확보하고 있다.
Front-end 영역은 이미 jQuery, Angula, React, Backbone과 같은 Javascript Framework가 강세를 나타내고 있으며 Back-end 영역 역시 Node.js, express, SocketIO 등의 Javascript Framework가 두각을 나타내고 있고 Front-end와 Back-end를 아우르는 웹 프로그래밍 언어의 표준으로 자리잡고 있다.
<hr/>
### 1.2 ECMAScript
 JavaScript는 1995년 Brendan Eich(Nescape)이 Navigator 2를 위하여 웹페이지에 포함되는 스크립트 언어로서 개발되었으며 LiveScript로 명명되었다. 이후 Microsoft는 IE 3.0에서 동작하는 JScript를 만들었고 Nescape는 Ecma International에 JavaScript의 표준화를 요청하였다.

1997년 7월 ECMA-262라 불리는 명세가 완성되었고 상표권의 문제로 JavaScript는 ECMAScript로 명명되었다. 이후 1999년 ECMAScript 3(ES3)이 공개되었고 10년만인 2009년 출시된 ECMAScript 5(ES5)는 HTML5와 함께 출현한 표준안이다.

2015년 ECMAScript 6(ES6)가 공개되었고 let keyword, module system, Arrow Function, class 등이 추가되었다. ES5에서 ES6로의 버전업은 기능 상의 큰 변화가 있었고 이후의 버전업은 작은 기능의 추가 레벨로 매년 공개할 것으로 예고되었다.
  <hr/>
 ### 1.3 네이밍규칙
 - 대소문자를 구분합니다.
 - 키워드를 사용하면 안됩니다.
 - 숫자로 시작하면 안됩니다.
 - 특수문자는 _과 $만 허용합니다.
 - 공백문자를 포함할 수 없습니다.
 