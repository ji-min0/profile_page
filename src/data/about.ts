// About 페이지 데이터 (한/영)
export type TabItem = { label: string; value: string };
export type AboutLang = { paragraphs: string[]; tabs: { skills: TabItem[]; experience: TabItem[]; education: TabItem[] } };

export const about: { kr: AboutLang; en: AboutLang } = {
  "kr": {
    "paragraphs": [
      "기획부터 API 명세, AWS 인프라까지 직접 다뤄본, 개발을 아는 PM을 지향합니다. 구현에 앞서 요구사항을 면밀히 분석하고 흐름을 설계하는 과정을 가장 중요하게 생각합니다. 게임 추천 서비스 게추에서는 FE·BE가 동시에 출발할 수 있도록 API 명세 57건을 먼저 확정해 팀이 명세만 보고 병렬로 개발하게 했고, 영화관 직원 관리 시스템에서는 현장 근무 경험을 휴게시간·권한·결재 흐름 같은 정책과 데이터 구조로 옮겼습니다. 잘 잡힌 설계는 팀 전체의 판단 기준이 되어 불필요한 소모를 막는다고 믿습니다.",
      "문제가 생기면 기다리기보다 해결 가능한 단위로 나눠 먼저 움직입니다. 외부 게임 데이터 API가 막혔을 때는 키 재발급을 기다리지 않고 스키마 변경 없이 다른 API로 전환했고, 스트리밍 서비스에서는 서버가 방송 상태를 모르는 문제를 EventBridge 웹훅으로 풀었습니다. 코드 리뷰에서는 보안 취약점과 경쟁 조건을 먼저 찾아 짚었고, AI 리뷰 봇의 제안도 사실을 확인한 뒤에 수용하거나 반박했습니다.",
      "국어국문학을 전공하며 글로 생각을 정리하고, 학생홍보대사로 100명 이상 앞에서 발표해왔습니다. 이 경험을 바탕으로 개발 내용을 다른 직군이 이해할 수 있는 언어로 옮기는 사람이 되고자 합니다. 지금은 코디세이 AI 올인원 과정에서 LangGraph·RAG 같은 AI 기술을 익히며 배움의 공백을 계속 메우고 있습니다."
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
      "I aim to be a PM who understands development, having worked hands-on from planning and API specifications to AWS infrastructure. I prioritize analyzing requirements and designing the overall flow before implementation. On Gechu, a game recommendation service, I finalized 57 API specifications up front so frontend and backend could develop in parallel. On a cinema staff management system, I turned my own on-site work experience into policies and data structures for break times, permissions, and approval flows.",
      "When problems arise, I break them into solvable units and act rather than wait. When an external game data API failed, I switched to another API without changing the schema instead of waiting for a new key. On a streaming service, I solved the server's inability to track broadcast state with EventBridge webhooks. In code reviews I look for security flaws and race conditions first, and I verify AI review suggestions before accepting or rejecting them.",
      "Majoring in Korean Language and Literature taught me to organize ideas in writing, and as a student ambassador I presented to audiences of over 100 people. I want to translate technical work into language other roles can understand. I am currently studying AI technologies such as LangGraph and RAG in the Codyssey AI program."
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
