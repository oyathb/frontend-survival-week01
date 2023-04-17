# frontend-survival-week01

프론트엔드 생존코스 1주차 과제



# 들어가기에 앞서
본인 OS mac  
visual studio code가 없는 경우 설치한다
```
brew install visual-studio-code
```
# TypeScript + React + ESLint + Jest + Parcel
## 작업 폴더 준비
```
mkdir my-app
cd my-app
```

## npm 패키지 설치
설치하면 package.json 생김
```
npm init //기본 명령어. 세부 설정 해줘야 함
```
```
npm init -y //default값으로 바로 package.json 생성하겠다
// -y는 yes의 의미
```

## .gitingore 파일 생성하기
git에 업로드 되지 않아야 하는 파일입니다.
최소한 node_modules, dist 는 포함해야 합니다.  
`.gitignore` 파일을 생성합니다.
```
touch .gitignore
```
`.gitignore` 파일 


## TypeScript 설정하기
1. TypeScript를 설치합니다.
```
npm i -D typescript
```

2. `tsconfig.json` 파일을 생성합니다.
```
npx tsc --init
```

3. JSX를 사용하기 위해 `tsconfig.json` 파일을 수정합니다.  
⌘+F로 jsx를 찾아서 주석을 삭제합니다.
```
// "lib": [],
"jsx": "preserve",
// "experimentalDecorators": true,
```


## ESLint 설정하기
1. ESLint를 설치합니다.
```
npm i -D eslint
```

2. 세부 설정을 합니다.
```
npx eslint --init
```
```
```

3. `.eslintrc.js` 파일을 수정합니다.  
아직 Jest를 설치하지 않았지만, 미리 설정합니다.
```
browser: true,
es2021: true,
jest: true //추가
```
