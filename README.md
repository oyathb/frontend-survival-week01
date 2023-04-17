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

## .gitingore 파일 생성
git에 업로드 되지 않아야 하는 파일  
최소 node_modules, dist 는 있어야 됨
```
touch .gitignore
```
