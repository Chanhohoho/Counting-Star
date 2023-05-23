# 🎇Counting-Star🎇
별보러가자! 스타체이서를 위한 별 관측점수 및 명소정보 제공 서비스!
   
## 👀 Overview

![counting_star](/uploads/448acfc8421fc8bb97ac6f294061d1f9/counting_star.png)

### 서비스 소개 
날씨, 대기 질, 빛 공해등의 데이터를 바탕으로 별 보기 좋은 위치 정보와 현재 관측 가능 여부를 점수로 제공하는 서비스
   
### 기획 배경
바쁜 일상 속에서 틈을 내어 별을 보러가고자 하는 현대인을 위해, 별을 가장 잘 볼 수 있는 날짜와 명소 정보를 점수로 제공하여 사용자가 효율적으로 별을 관측할 수 있게 하기 위해 이 서비스를 기획하였다.
   
### 타겟
별 관측 계획이 있거나 계획을 세우려고 준비중인 별 관측자
   

## 📌 서비스 화면 및 주요 기능
1. 시간별로 우리나라 전역의 별 관측 가능 정보 제공
  - 아이콘을 통해 명시적으로 현재 별을 얼마나 관측할 수 있는지 확인할 수 있다.
  - 지역을 누르면 지역의 별 관측 상세정보를 확인할 수 있다.


2. 현재 가장 별 관측하기 좋은 장소 추천
  - 현재 시간 기준, 별을 관찰하기 좋은 장소를 추천한다.

3. 이번 주말의 별자리 명소 추천
  - 토요일과 일요일에 각각 별자리를 관측하기 좋은 장소를 추천한다.

4. 1월부터 12월까지 볼 수 있는 별자리 정보를 제공한다.

5. 지역별, 시간별 별 관측 가능 여부 검색기능을 제공한다.
  - 검색을 통해 지역별/시간별 별자리 관측 정보를 별점을 통해 확인할 수 있다.

6. 지역을 기준으로 별자리 관측에 영향을 주는 요소들의 정보를 확인할 수 있다.
  - 시간에 따라 달라지는 요소들과 그 요소에 영향을 받는 별점을 확인할 수 있다.
   

## 데이터 가공 및 처리
수집 가공 회귀 의 과정을 거쳐 시간별 스팟별 별 관측점수를 도출하였다.

### 데이터 수집
1. 천체 정보 : 천체의 적경, 적위, 겉보기등급, 획득
2. 별자리 정보 : 88개의 별자리와, 별자리에 속하는 별
3. 광공해 정보
4. 대기 환경 정보 : 기상청 지상자료개방포털  종관기상관측

### 데이터 가공
1. 천문처리 : 위성데이터(위성촬영사진)을 가공해서 Radiance(휘도)값을 사용
2. 기상데이터 : 시정(km), 일조량(rd)값을 가져와서 사용
3. 천문 데이터 : 가시 가능한 천체리스트(YBSC) 데이터를 가져와 사용
==> 3가지를 잘 계산해서 특정 시간, 스팟(위도,경도) 에서 특정 별의 가시여부와, 가시정도를 측정하였다.

### 분산 처리 의의
- 데이터 처리 시간
  Full Scanning 처리시 20시간 이상 => 10분 이내로 단축 (I/O를 제외했을때 처리된 데이터가 약 100만건)   
- 성능 비례 설계
  분산 데이터베이스를 도입함으로써 데이터 분산시 분산수준에 따라 성능이 비례하도록 설계
- 기존 서비스와의 차이
  Stellarium과 같은 서비스는 별의 지리적, 물리적 위치만을 고려하였지만 Counting-Star는 대기상태 및 광공해, 태양의 위치등을 고려하여 좀 더 서비스 이용자의 실제 관측상황을 고려하도록 반영하였다.

   
      
## 📌 기획 및 개발 일정
### Figma
![캡처](/uploads/12c37671bfe61c95e2a512c3a01a9c64/캡처.PNG)

### 개발 일정
![Untitled](/uploads/1259c3017274759cf03b7b29ca77b223/Untitled.png)  
![캡처](/uploads/30c753b706e576b97cc44a11369d45ba/캡처.PNG) 
   
## 📌 기술 스택 및 개발 환경
- IDE

```
✔ Backend: IntelliJ IDEA 2022.1.3
✔ Frontend: Visual Studio Code 1.78.1
```

- Server

```
  ✔ nginx v1.18.0
  ✔ java v11.0.18
  ✔ npm v8.19.3
  ✔ mysql v8.0.32-0
```

- Data

```
  ✔ Cassandra
  ✔ Spark
```

- Backend

```
  ✔ JVM 11
  ✔ Spring boot v2.7.7
  ✔ gradle 7.6.1
  ✔ Spring Data JPA
  ✔ Spring Web
  ✔ QueryDSL
  ✔ Swagger v3.0
  ✔ Lombok
  ✔ MySQL
```

- Frontend

```
  ✔ Visual Studio Code IDE
  ✔ node v16.18.14 (LTS)
  ✔ React v^18.0.28 (LTS)
	✔ TypeScript v^4.9.5
  ✔ axios v1.3.4
  ✔ redux v8.0.5
  ✔ redux-toolkit v1.9.3
  ✔ typescript v4.9.5
  ✔ tailwindcss v3.2.7
	✔ npm v^8.19.3
```

- 협업툴

```
  ✔ GitLab
  ✔ Jira
  ✔ Notion
```
![그림1](/uploads/aa72e7eb7d1adb8472239e3ebcdf0303/그림1.png)   
   
## 📌 팀원 구성
![역할](/uploads/42210904bccaf8f638b1280cfbfc9ec1/역할.PNG)



