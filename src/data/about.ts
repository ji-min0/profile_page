// About 페이지 데이터 (한/영)
export type TabItem = { label: string; value: string };
export type AboutLang = { paragraphs: string[]; tabs: { skills: TabItem[]; experience: TabItem[]; education: TabItem[] } };

export const about: { kr: AboutLang; en: AboutLang } = {
  "kr": {
    "paragraphs": [
      "기획부터 API 명세, AWS 인프라까지 직접 다뤄본, 개발을 아는 PM을 지향합니다. 저는 만들기 전에 기준부터 세웁니다. 기준이 없으면 같은 기능을 두고도 사람마다 다른 그림을 그리고, 그 차이는 결국 일정 지연과 재작업으로 돌아오기 때문입니다. 7명이 동시에 개발을 시작해야 했던 게임 추천 서비스에서 API 명세 57건을 먼저 확정해, FE와 BE가 서로를 기다리지 않고 병렬로 개발하게 한 것도 그래서였습니다.",
      "막히면 기다리기보다 먼저 움직입니다. 외부 게임 데이터 API가 멈췄을 때는 키 재발급을 기다리지 않고, 팀원들의 코드를 건드리지 않도록 스키마를 그대로 둔 채 다른 API로 바꿔 동기화를 되살렸습니다. 코드 리뷰에서도 \"동작하는가\"보다 \"운영에서 어떻게 깨질 수 있는가\"를 먼저 보고, AI가 내놓은 제안도 근거를 확인한 뒤에 받아들이거나 반박합니다.",
      "국어국문학을 전공하며 생각을 글로 정리하는 법을, 학생홍보대사로 100명 넘는 사람들 앞에서 설명하는 법을 익혔습니다. 개발자의 언어와 다른 직군의 언어 사이에서 내용을 정확하게 옮기는 일이 PM으로서 제가 가장 잘할 수 있는 일이라고 생각합니다. 지금은 코디세이 AI 올인원 과정에서 AI 기술을 익히며 다룰 수 있는 범위를 넓히고 있습니다."
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
      "I aim to be a PM who understands development, having worked hands-on from planning and API specifications to AWS infrastructure. I set the standard before anything is built. Without one, people picture the same feature differently, and that gap eventually comes back as delays and rework. That is why, on a game recommendation service where seven people had to start at once, I finalized 57 API specifications up front so frontend and backend could develop in parallel without waiting on each other.",
      "When something blocks progress, I move first instead of waiting. When our external game data API went down, I did not wait for a new key; I switched to another API while keeping the schema unchanged so teammates' code was untouched, and brought syncing back. In code reviews I ask how something could break in production before asking whether it works, and I accept or push back on AI suggestions only after checking the evidence.",
      "Studying Korean Language and Literature taught me to organize my thinking in writing, and serving as a student ambassador taught me to explain things to audiences of over 100 people. I believe carrying meaning accurately between developers and other roles is what I can do best as a PM. I am currently broadening what I can handle by studying AI in the Codyssey AI program."
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
