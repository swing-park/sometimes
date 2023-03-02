# 익명 감성글 소통 공간 [ㄱr끔...⭐️]

### "ㄱr끔"은 그 시절 추억의 감성글을 익명으로 소통하는 공간입니다.

가끔 옛날 그 시절, 그 감성 느껴보고 싶으신 당신을 위해 !

---

## 📌 About Project

- Deploy 👉 [[__바로가기__]](http://sometimes.store)
- 와이어프레임 👉 [[__바로가기__]](https://www.figma.com/file/evGvkJUvOnSHYkChe8tOVX/%E3%84%B1r%EB%81%94?node-id=0%3A1&t=snNQx5yvuZw4CGMq-0)
- Notion 👉 [[__바로가기__]](https://joyous-node-f7f.notion.site/99-r-75a6c2df2f344d11a9ece43d4927dd5f)

---

## 📌 기능

### 회원가입

- 닉네임 중복 체크
- nickname : 2~10자 구성
- username : 4~10자 구성, 알파벳 소문자(a-z), 숫자(0-9)로 구성
- password : 8~24자 구성, 알파벳 대소문자(a-z,A-Z), 숫자(0-9)로 구성

### 로그인

- 회원 유무 확인

### 카드

- 감성글 확인,추가,수정,삭제
- 유저네임별 필터링
- 좋아요 추가 ↔️ 취소

---

<div align=center><h1>📚 STACKS</h1></div>

<div align=center> 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> 
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> 
<img src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=mui&logoColor=white">
<img src="https://img.shields.io/badge/framer-0055FF?
style=for-the-badge&logo=framer&logoColor=white">
<img src="https://img.shields.io/badge/reactQuery-FF4154?style=for-the-badge&logo=reactQuery&logoColor=white">
<img src="https://img.shields.io/badge/reactRouter-CA4245?style=for-the-badge&logo=reactRouter&logoColor=white">
<img src="https://img.shields.io/badge/styledComponents-DB7093?style=for-the-badge&logo=styledComponents&logoColor=white">
</div>

---

## 📌 Trouble Shooting

| 내용                                            | 해결 방법                                                                                                                                                         |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Netlify배포 시 "Treating warnings as errors..." | build command에 CI=false추가                                                                                                                                      |
| Netlify배포 후 page not found                   | public에 \_redirects파일 추가 후 /index.html 200 추가                                                                                                             |
| API요청 시 Mixed content에러                    | https에서 http로 요청보내서 보안 에러가 걸림. meta태그를 추가했으나, 해결안됨. 근본적으로 모든 통신을 https로 해야하지만 역부족. ec2로 프론트 http로 배포 후 해결 |
| ec2 ubuntu환경 build시 시간 오래 걸림           | ubuntu환경에서 빌드 시 메모리 부족으로 빌드가 잘 안됨. github에 빌드 파일 push후 clone으로 해결                                                                   |
| ec2 배포 후 접속 안됨                           | npm express module을 사용해서 8000포트로 열어줬었음. 인바운드 규칙에 8000포트 규칙 추가                                                                           |
| ec2 ubuntu에서 포트 redirect                    | 8000포트가 뒤에 붙는 게 싫어서, 80포트로 리다이렉트 명령어 실행 후 해결                                                                                           |

---

## 📌 개선을 위한 고려사항

- 에러 컨트롤 미흡 : 서버와 정해진 에러 처리는 특정 컴포넌트로 보여주고, 그 외에 비정상 네트워크 에러도 따로 처리 필요
- 깃헙 관리 : 브랜치,커밋,PR,이슈 템플릿을 지키며 관리가 필요
- 유저 정보 저장 : 현재는 로그인 시, Access-Token을 쿠키에 저장하고 유저 닉네임 정보는 세션스토리지에 저장 중. Refresh-Token으로 보안을 강화해야 하며, 유저 닉네임을 세션 스토리지가 아닌 useRef등을 통한 앱 내의 변수로 관리되면 좋겠음.
- API통신 : 배포 후 보니, 통신은 잘 이루어지지만 화면 리렌더링이 버벅거림이 있음. react-query의 동작에 대해서 깊이 탐색할 필요가 있음.
