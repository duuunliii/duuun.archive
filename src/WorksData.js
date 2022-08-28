const WorksData = [
  {
    id: 0,
    img: 'https://user-images.githubusercontent.com/77374852/178111288-05c07e3b-f1b8-4450-9c2b-1361d4394d5e.png',
    title: '커먼히어로즈',
    summary: '초등 저학년을 대상으로 한 장애 인식 개선 목적의 교육용 게임',
    year: '2019',
    genre: '인터랙티브 인스톨레이션',
    skill: 'Processing, Arduino',
    detail: [
      '초등 저학년을 대상으로 한 장애 인식 개선 목적의 교육용 게임이다. 우리 사회에서 자칫 동정의 대상으로 인식되는 장애인이 악당을 물리치는 히어로로서 활약하는 세계관을 구축해 하나의 스토리 라인을 만들었다. 장애는 그저 인간의 여러 형질 중 하나일 뿐이라는 점을 강조했다.',
      '감지미션-구출미션-탈출미션-보스전 총 4단계의 게임으로 이루어져 있으며, 각 단계별로 각기 다른 센서를 부착하여 다양한 인터랙션을 체험할 수 있다. 아동을 대상으로 한 작품인만큼 친숙한 일러스트와 직관적인 활동들로 구성되어 있다.',
      '플렉스 센서, 로터리 센서, 조도 센서 등을 사용해 하드웨어를 제작했고, 아두이노로부터 받아온 시리얼 값을 프로세싱으로 제어하며 전체적인 게임을 완성하는 작업을 진행했다.',
    ],
    detailImg: [
      'https://user-images.githubusercontent.com/77374852/178289393-0284c2aa-ad39-41c2-b156-81731e6ec1bb.png',
      'https://user-images.githubusercontent.com/77374852/178287480-4801906c-af93-433f-9bcf-a418008a3037.png',
      'https://user-images.githubusercontent.com/77374852/178287494-b1082f3a-1c77-4961-b781-e0dc34e6c242.png',
      'https://user-images.githubusercontent.com/77374852/178287549-fc83d950-2d84-4ac9-8067-5b5d063be916.png',
      'https://user-images.githubusercontent.com/77374852/178287556-7098de60-1b47-4135-94c5-ffc982244016.png',
    ],
  },
  {
    id: 1,
    img: 'https://user-images.githubusercontent.com/77374852/178111308-faacca1a-66e3-42af-b52c-874479d88b8c.png',
    title: 'CHUCKLE',
    summary:
      '웃음을 강요하는 사회를 웃는 모습만 업로드할 수 있는 SNS에 빗대어 표현한 작품',
    year: '2020',
    genre: '인터랙티브 인스톨레이션',
    skill: 'Unity, Arduino, Python AI',
    detail: [
      '사회의 구성원으로서 살아가는 인간은 타인에게 솔직한 자아를 숨기고 척을 해야 하는 경우가 많다. 척이 만연한 우리 사회에서 특히 웃는척은 예의의 의미를 갖는다. 불쾌한 상황에서도 웃음을 일종의 사교 기술로 사용해야 하는 우리 인간의 웃음이 과연 자발적이라고 할 수 있을까? 웃음은 좋은 것이라는 무조건적인 사회의 공식에 의문을 던지고 싶었다.',
      '웃는 모습만 업로드 할 수 있는 가상의 SNS 공간 CHUCKLE을 만들었다. 관객은 강제성이 부여된 기이한 SNS인 CHUCKLE의 회원가입부터 게시글 업로드까지 일련의 과정을 체험할 수 있다. 묘하게 우리 사회와 닮아있는 가상의 SNS를 체험함으로써 기시감을 느낄 수 있도록 유도했다.',
      '유니티, 파이썬, 아두이노가 지속적으로 통신을 주고 받아 원활하게 프로그램이 진행되도록 작업했다. 관객의 웃음을 감지하기 위해 감정 인식 인공지능 모델을, 촬영된 사진 후보정을 위해 Semantic Segmentation 모델을 사용하였고 해당 값을 지속적으로 유니티로 전달했다.',
    ],
    detailImg: [
      'https://user-images.githubusercontent.com/77374852/178289622-a5964236-e6ce-4ef5-b291-549d7fde4e58.png',
      'https://user-images.githubusercontent.com/77374852/178289628-f46d40ac-a70a-4581-a041-e4d8d4c9bab1.png',
      ,
      'https://user-images.githubusercontent.com/77374852/178289777-877497d3-7fae-4325-bb98-c33db66b3e1a.png',
      'https://user-images.githubusercontent.com/77374852/178289787-968a9b3d-2754-4fac-b95d-efb4c0089ae6.png',
    ],
    link: 'https://youtu.be/Xsc_gApiMT4',
  },
  {
    id: 2,
    img: 'https://user-images.githubusercontent.com/77374852/180024976-3663d8a5-b0bc-45cd-8f52-39adcf577d24.png',
    title: 'DUNMENTUM',
    summary:
      '날씨, 메모, 디데이, 투두리스트 등 간단한 기능을 갖춘 일정 관리 웹 앱',
    year: '2021',
    genre: '웹 애플리케이션',
    skill: 'HTML, CSS, JavaScript',
    detail: [
      '간단한 일정 관리 웹 애플리케이션이다. 크롬 확장 프로그램 Momentum을 사용하며 추가하고 싶었던 내용들을 토대로 작업했다. API로 날씨 정보를 받아오고, 간단한 메모, 디데이, 투두 리스트, 닉네임과 프로필 사진 설정 기능을 구현했으며, 스마트폰 홈화면 디자인을 뉴모피즘 컨셉으로 표현했다. 입력된 정보는 로컬 스토리지에 저장하여 정보가 유실되는 것을 방지했다.',
    ],
    detailImg: [
      'https://user-images.githubusercontent.com/77374852/178290031-e60994cd-629b-4648-8cdc-4899f1b569a7.png',
      'https://user-images.githubusercontent.com/77374852/178290035-736db170-ba79-4cce-b821-1878737721c2.png',
      'https://user-images.githubusercontent.com/77374852/178290423-68b19931-d41d-4e5a-99e0-2c1c53ab26d5.png',
    ],
    link: 'https://duuunliii.github.io/dunmentum/',
  },

  {
    id: 3,
    img: 'https://user-images.githubusercontent.com/77374852/178111313-10c1df8b-bde8-4a19-ac7b-0b40ac26075f.png',
    title: '파동',
    summary: '인간의 움직임에 영향을 받아 일렁이는 웹의 모습을 형상화한 작품',
    year: '2021',
    genre: '인터랙티브 웹',
    skill: 'JavaScript',
    detail: [
      '정보화 시대가 도래하고 인터넷과 인간이 뗄레야 뗄 수 없는 사이가 된 현대 사회에서 컴퓨터 및 각종 전자기기, 웹 서버 등이 더이상 수동적이고 정적이기만 한 존재라고는 생각되지 않았다. 그리고 그런 오브젝트에 생동성을 부여해주는 건 우리 인간이다. 인간이 웹에 주는 영향을 시각화하기 위해 웹캠을 통해 인간의 위치 좌표값을 읽어낸 후 인간의 이동에 맞게 파도가 출렁이는 모습을 표현했다. 위치값을 읽어내는 데에 tensorflow js의 bodypix 모델을 사용했다.',
      'HTML5의 Canvas API를 tensorflow js의 값으로 제어한다.',
    ],
    detailImg: [
      'https://user-images.githubusercontent.com/77374852/180021342-9e411700-6767-4cd7-84d7-4d298532825e.png',
    ],
    detailVideo:
      'https://user-images.githubusercontent.com/77374852/178294926-3db1a539-ef72-4e6f-8ec1-5103378a3fe1.mp4',
  },
  {
    id: 4,
    img: 'https://user-images.githubusercontent.com/77374852/180024568-190f2bf5-360a-4001-b97e-04d116c45efb.jpg',
    title: 'MD그룹최종면접',
    summary: '일과 삶의 균형을 강조하는 인터랙티브 인스톨레이션 게임',
    year: '2022',
    genre: '인터랙티브 인스톨레이션',
    skill: 'Unity, Arduino',
    detail: [
      '일과 삶의 균형을 강조하는 인터랙티브 인스톨레이션 게임. 현대인들에게 친숙한 면접이라는 소재를 통해 우리나라의 평범한 취업 준비생의 생애를 짧은 게임을 통해 압축해 보여주며 일과 생활의 균형, 즉 워라밸의 중요성을 강조하고, 휴식을 게임 클리어의 핵심 조건으로 설정함으로써 휴식에 대한 부정적 이미지를 탈피하고자 한다.',
      '작품은 부스 형태로 이루어져 있고, 부스는 면접장이라는 공간적 의미를 갖는다. 관객은 게임의 주인공이자 현대인을 대변하는 캐릭터인 무둔이의 HP를 적절히 조절해가며 목표 지점까지 도달해야한다.',
      'HP가 떨어지면 번아웃에 빠져 면접에 탈락하고, 과도한 휴식 상태를 유지하면 나태함에 빠져 면접에 탈락하게 된다.',
      '압력센서를 여러 개 사용해 하드웨어를 제작했고 해당 값을 유니티로 받아와 게임을 제어했다.',
    ],
    detailImg: [
      'https://user-images.githubusercontent.com/77374852/180019944-bc099238-6088-4302-9f32-2a1a9592c269.png',
      'https://user-images.githubusercontent.com/77374852/180019995-7239be0e-ab10-4f18-b6b2-1bd2f4fa6767.png',
      'https://user-images.githubusercontent.com/77374852/180020004-ab93377c-b286-4243-808e-16a1a9eda113.png',
    ],
  },
]

export default WorksData
