# README

![메인](/readme_img/메인.png)

## 열말잘팀 ( B205 )

#### 팀장 : 황호연

#### 팀원 : 구진범, 김다윤, 박승범, 성진옥

[TOC]

## 1. 역할

**황호연** (**Team Leader** & **Developer**)

- 서버 개발
- UCC 제작
- QA

**구진범** (**Developer**)

- 서버 개발
- 블록 동작 코드
- QA

**김다윤** (**Tech Leader** & **Developer**)

- 팀 내 기술적인 방향을 정하는 역할
- 서버 개발
- 배포
- CI 구축
- QA

**박승범** (**Developer**)

- UI/UX 개발
- 디자인
- blockly

**성진옥** (**PM** & **Developer**)

- 서비스의 목적 및 방향을 설계
- Axios 통신 구축
- UI/UX 개발
- 디자인
- 이미지 제작



## 2. 주제

### 프로젝트명 : 블록마을

![sub_main_image](/readme_img/sub_main_image.png)

- 목적 : 주어진 문제를 해결하고, 공유하는 과정을 통해서 **사고력과 창의력을 증진**시킬 수 있게 도와주는 온라인 교육 플랫폼이다.
- 목표 : 우리는 사고력 증진 도구로서 블록코딩을 이용할 수 있는 에디터를 제공하며, 각자 제작한 게시물을 공유함으로써 **다양한 생각과 접근의 경험**을 제공한다.



### 기능

- 미니룸 ( 마이페이지 )

  ![my_page_basic](/readme_img/my_page_basic.png)

  - 3가지의 테마 제공
  - 내 정보 조회, 수정, 탈퇴
  - 내가 구입한 블록 목록, 내가 가진 아이템 목록, 보유한 마일리지
  - 내가 작성한 미션, 답안 목록 및 조회, 수정, 삭제
  - 내가 참여중이거나 참여완료한 챌린지 목록



- 블록 (미션, 답안)

  ![market2](/readme_img/market2.png)

  - 보상 : 마일리지 부여
  - 구입한 블록으로만 미션을 제작하거나 답안 제작이 가능



- 상점(블록)

  ![market](/readme_img/market.png)

  - 마일리지로 블록 구매
  - 구입한 블록은 사용 횟수에 제한이 없음



- 튜토리얼

  ![tutorial1](/readme_img/tutorial1.png)

  - 에디터 화면 소개 및 3단계의 튜토리얼 진행
  - 완료 시 기본 블록 및 마일리지 부여

  

- 미션 제작

  ![mission_create2](/readme_img/mission_create2.png)

  - playground 속 이미지 업로드
  - 블록을 사용하여 캐릭터의 움직임을 컨트롤
  - 미션 저장시 제목, 설명, 초기 난이도 값 설정

  

- 답안

  ![answer_list](/readme_img/answer_list.png)

  - 미션의 제목과 설명글을 보고 미션의 내용을 파악
  - 자신이 가진 블록을 가지고 캐릭터를 움직여 미션 답안 제출
  - 답안 저장시 답안에 대한 설명, 자신이 생각하는 난이도 값 설정

  

- 미션 목록

  ![mission_list](/readme_img/mission_list.png)

  - 유저 이름으로 해당 유저의 미션 검색
  - 작성순, 댓글순, 좋아요순, 조회수(답안), 참여순(미션)
  - 제목과 작성자 닉네임으로 특정 미션 검색

  

- 게시물 (미션)

  ![mission_list3](/readme_img/mission_list3.png)

  - 좋아요 기능
  - 참여하기 / 참여 후 다른 답안 목록 보러 가기 버튼 활성화

  

- 게시물 (답안)

  ![answer_detail](/readme_img/answer_detail.png)

  - 블록 코드 확인, 실행
  - 좋아요 기능 활성화
  - 댓글 목록 조회, 작성, 수정, 삭제(내 댓글만 삭제)
  - 수정시 기존의 작성했던 블록 코드 그대로 불러오기 가능

  

- 챌린지(기간제 미션)

  ![challenge_list](/readme_img/challenge_list.png)

  - 특정기간에는 하나의 챌린지만 진행됨
  - 보상으로 마일리지 제공
  - 유저가 만드는게 아니라 관리자가 만들어서 진행
  - 구입한 블록 + 챌린지용 특별 블록으로만 참여 가능
  - 여태 진행되었던 챌린지들의 목록(제목, 기간, 참여한 사람 수)

  

- 공지사항

![notice](/readme_img/notice.png)

- 서비스 소개

![intro](/readme_img/intro.png)



## 3. 기술 스택

### Backend

- Spring boot, Spring data JPA, MYSQL
- JWT
- Docker, jenkins, aws

### Frontend

- html5, postCss, JavaScript
- React.js
- Redux
- Redux-middleware (redux-actions, redux-pender)

### 협업 툴

- JIRA
- GitLab
- Swagger2



## 4. Code Style (Google Convention)

[Code Style (Google Convention)](https://lab.ssafy.com/s04-webmobile1-sub3/s04p13b205/blob/master/docs/Code%20Style%20(Google%20Convention).md)



## 5. 블록마을 서비스 소개 영상

https://youtu.be/Qh5PvmY4yfQ



## 6. 블록마을 서비스 시연 영상

https://youtu.be/hLIwbMk0OIE