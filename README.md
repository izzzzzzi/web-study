# web-example

## week03

### 1. package.json

- Node.js 패키지, 프로젝트 정보를 가지고 있는 설정파일
- 노드로 생성한 프로젝트 정보

1. name : 프로젝트 이름
2. version : 프로젝트 버전
3. description : 프로젝트 설명 npm search
4. main : 해당 패키지 진입점인 모듈
5. script : npm 이용해 명령을 단순화함
6. dependencies : 일반적 배포환경에서 필요한 의존성 모듈
7. devDependencies : 개발환경에서 필요 (주로 테스팅 모듈)

### 2. NPM

```
$ npm init
```

- 개발자로부터 애플리케이션의 정보를 입력받아 패키지 관리를 위한 package.json 파일 생성

```
$ npm install {패키지명}
$ npm install {패키지명} -g
```

- 패키지명 가진 모듈 설치

```
$ npm {script명}
```

- package.json 내에 있는 스크립트를 실행

### 3. Express

- 웹 애플리케이션 개발할 때 사용하는 외부 모듈
- http 모듈에 비해 많은 기능
- 뷰 템플릿(pug, ejs) 지원
  - 동적 웹 페이지 파일

```
$ npm install express --save
```

#### HTTP 메소드

- Express 내장 객체

  - get : GET 방식 요청 콜백 등록
  - post : POST 방식 요청 콜백 등록
  - put : PUT 방식 요청 콜백 등록
  - delete : DELETE 방식 요청 콜백 등록
  - all : 모든 요청 방식을 처리하는 콜백 등록

- 기본 라우팅

```js
app.METHOD(PATH, HANDLER);
```

- 응답 객체
  - send() : 전송된 데이터에 따라 알맞은 형식으로 바꾸어 전송
  - download() : 해당 파일을 다운로드
  - redirect() : 해당 경로로 강제 이동
  - json() : JSON 형태로 데이터를 응답
  - render() : 뷰 템플릿 엔진을 HTML로 렌더링
  - status() : 상태 코드를 바꿔줄 때 사용

### 4. postman

- API 테스팅 도구

### Express Router

- 라우팅이란? 사용자 요청에 따라 응답 결과를 다르게 전달하는 것
  - js 파일 만들어 작성하고
  - 파일을 분리해서 관리함
    -> 읽기 쉽고, 유지 보수 쉽게 관리함

```js
const express = require('express');
const router = express.Router();
```

```js
app.get('/', (req, res) => {
	//
});
```

```js
app.get('/user', (req, res) => {
	//
});
```

- 라우팅 설정에 따라 등록된 콜백함수를 실햄
- 요청 메소드와 주소별로 분기 처리함
  -> 코드가 복잡함
  -> 라우터를 분리함 (Express 사용 이유)

```
$ express {file name}
```

- express generator
