// About 페이지 데이터 (한/영)
export type TabItem = { label: string; value: string };
export type AboutLang = { paragraphs: string[]; tabs: { skills: TabItem[]; experience: TabItem[]; education: TabItem[] } };

export const about: { kr: AboutLang; en: AboutLang } = {
  "kr": {
    "paragraphs": [
      "기획부터 API 명세, 백엔드 개발, AWS 인프라까지 직접 다뤄본, 개발을 아는 PM을 지향합니다. 요구사항 정의와 API 명세, 권한·상태 흐름 설계, 이벤트 기반 AWS 구성과 배포 보안까지 서비스가 만들어지는 과정을 직접 경험했고, 개발팀 멘토(러닝헬퍼)로 기획과 코드 리뷰를 맡았습니다. 지금은 코디세이 AI 올인원 과정에서 AI 기술을 익히며 다룰 수 있는 범위를 넓히고 있습니다.",
      "제가 가장 중요하게 여기는 건 팀이 같은 기준으로 움직이는 것입니다. 개발이 시작되기 전에 확정된 명세, 상황마다 의미가 다른 응답 코드, 현장의 실수까지 예상한 예외 정책, 그리고 \"동작하는가\"보다 \"운영에서 어떻게 깨질 수 있는가\"를 먼저 보는 리뷰가 그 기준을 만든다고 생각합니다. 진행이 막히면 기다리기보다 문제를 나눠 먼저 움직이고, AI가 내놓은 결과도 근거를 확인한 뒤에 씁니다.",
      "국어국문학을 전공하며 생각을 글로 정리하는 법을, 학생홍보대사로 100명 넘는 사람들 앞에서 설명하는 법을 익혔습니다. 개발자의 언어와 다른 직군의 언어 사이에서 내용을 정확하게 옮기고, 합의한 것을 누구나 읽을 수 있는 문서로 남기는 일이 PM으로서 제가 가장 잘할 수 있는 일입니다."
    ],
    "tabs": {
      "skills": [
        {
          "label": "기획·문서화",
          "value": "요구사항 정의, API 명세 작성, 기술 문서화, 일정·이슈 관리, 코드 리뷰"
        },
        {
          "label": "협업 도구",
          "value": "Notion, Jira, Swagger UI, draw.io, dbdiagram, Excel, Google Sheets"
        },
        {
          "label": "언어 / 프레임워크",
          "value": "Python, Django, Django REST Framework, FastAPI, Flask"
        },
        {
          "label": "데이터베이스",
          "value": "PostgreSQL, MySQL, Redis"
        },
        {
          "label": "클라우드 / 인프라",
          "value": "AWS(EC2, S3, IVS, EventBridge, CloudFormation), Docker, Nginx, GitHub Actions, Celery"
        },
        {
          "label": "AI",
          "value": "LangGraph, LangChain, RAG"
        },
        {
          "label": "버전 관리",
          "value": "Git, GitHub"
        }
      ],
      "experience": [
        {
          "label": "2026.02 - 2026.03",
          "value": "OZ 코딩스쿨 러닝헬퍼(2개월 계약) — 게추 기획·API 명세 총괄"
        },
        {
          "label": "2025.11.",
          "value": "AWS JAM — 챌린지 6개 중 4개 해결"
        },
        {
          "label": "2023.01 - 2024.03",
          "value": "경북대학교 학생홍보대사 — 캠퍼스 투어·입시 설명, 100명 이상 규모 발표"
        },
        {
          "label": "2021.11.",
          "value": "AI 기반 앱 개발 교육과정"
        }
      ],
      "education": [
        {
          "label": "2026.07 - 재학 중",
          "value": "코디세이 AI 올인원 과정 2기"
        },
        {
          "label": "2026.06 - 2026.07",
          "value": "42 경산 라피신 — C 언어 학습"
        },
        {
          "label": "2025.08 - 2026.02",
          "value": "OZ 코딩스쿨 KDT 백엔드 과정 수료"
        },
        {
          "label": "2021.03 - 2026.02",
          "value": "경북대학교 국어국문학과 졸업"
        }
      ]
    }
  },
  "en": {
    "paragraphs": [
      "I aim to be a PM who understands development, having worked hands-on across planning, API specifications, backend development, and AWS infrastructure. I have handled requirements definition, API specs, permission and state-flow design, event-driven AWS setups, and deployment security, and I have served as a development team mentor (Learning Helper) responsible for planning and code review. I am currently broadening that range by studying AI in the Codyssey AI program.",
      "What I care about most is a team moving by the same standard. I believe that standard comes from specs finalized before development starts, response codes that mean something different in each situation, exception policies that anticipate real-world mistakes, and reviews that ask how something could break in production before asking whether it works. When progress stalls, I break the problem down and move first rather than wait, and I use AI output only after checking the evidence behind it.",
      "Studying Korean Language and Literature taught me to organize my thinking in writing, and serving as a student ambassador taught me to explain things to audiences of over 100 people. Carrying meaning accurately between developers and other roles, and turning what was agreed into documents anyone can read, is what I can do best as a PM."
    ],
    "tabs": {
      "skills": [
        {
          "label": "Planning / Documentation",
          "value": "Requirements definition, API specification, technical writing, schedule and issue management, code review"
        },
        {
          "label": "Collaboration Tools",
          "value": "Notion, Jira, Swagger UI, draw.io, dbdiagram, Excel, Google Sheets"
        },
        {
          "label": "Language / Frameworks",
          "value": "Python, Django, Django REST Framework, FastAPI, Flask"
        },
        {
          "label": "Database",
          "value": "PostgreSQL, MySQL, Redis"
        },
        {
          "label": "Cloud / Infrastructure",
          "value": "AWS (EC2, S3, IVS, EventBridge, CloudFormation), Docker, Nginx, GitHub Actions, Celery"
        },
        {
          "label": "AI",
          "value": "LangGraph, LangChain, RAG"
        },
        {
          "label": "Version Control",
          "value": "Git, GitHub"
        }
      ],
      "experience": [
        {
          "label": "2026.02 - 2026.03",
          "value": "OZ Coding School Learning Helper (2-month contract) — led planning and API specs for Gechu"
        },
        {
          "label": "2025.11.",
          "value": "AWS JAM — solved 4 of 6 challenges"
        },
        {
          "label": "2023.01 - 2024.03",
          "value": "Kyungpook National University Student Ambassador — campus tours, presentations to 100+ people"
        },
        {
          "label": "2021.11.",
          "value": "AI-Based Application Development Program"
        }
      ],
      "education": [
        {
          "label": "2026.07 - Present",
          "value": "Codyssey AI All-in-One Program (2nd cohort)"
        },
        {
          "label": "2026.06 - 2026.07",
          "value": "42 Gyeongsan Piscine — C programming"
        },
        {
          "label": "2025.08 - 2026.02",
          "value": "OZ Coding School KDT Backend Course"
        },
        {
          "label": "2021.03 - 2026.02",
          "value": "Kyungpook National University, B.A. Korean Language and Literature"
        }
      ]
    }
  }
};
