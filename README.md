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
