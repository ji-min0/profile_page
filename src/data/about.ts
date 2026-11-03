// About 페이지 데이터 (한/영)
export type TabItem = { label: string; value: string };
export type AboutLang = { paragraphs: string[]; tabs: { skills: TabItem[]; experience: TabItem[]; education: TabItem[] } };

export const about: { kr: AboutLang; en: AboutLang } = {
  "kr": {
    "paragraphs": [
      "저는 일이 시작되기 전에 무엇을, 어떤 기준으로 만들지를 먼저 정하는 사람입니다. 기준이 없으면 같은 기능을 두고도 사람마다 다른 그림을 그리고, 그 차이는 결국 일정 지연과 재작업으로 돌아옵니다. 그래서 요구사항과 정책, 예외 상황을 문서로 먼저 맞추고, 그 문서가 팀이 판단할 때 기대는 기준이 되도록 만드는 데 시간을 씁니다.",
      "기획만 하는 사람이 되고 싶지는 않았습니다. 백엔드를 직접 개발하고 AWS로 서비스를 배포해 보면서, 기획서의 한 줄이 개발에서는 얼마나 큰 일이 되는지, 개발자가 어디서 막히는지를 알게 됐습니다. 그래서 진행이 막히면 기다리기보다 문제를 나눠 먼저 움직이고, 되는 것과 어려운 것을 개발자와 같은 언어로 이야기하려 합니다.",
      "국어국문학을 전공하며 생각을 글로 정리하는 법을 배웠고, 학생홍보대사로 100명 넘는 사람들 앞에서 설명해 왔습니다. 서로 다른 언어를 쓰는 사람들 사이에서 내용을 정확하게 옮기는 일이 제가 가장 잘할 수 있는 일이라고 생각합니다. 지금은 코디세이에서 AI를 공부하며, 새로운 도구를 실무에 맞게 쓰되 결과는 직접 확인하고 설명하는 습관을 기르고 있습니다."
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
      "I am someone who decides what to build, and by what standard, before the work begins. Without a shared standard, people picture the same feature differently, and that gap eventually comes back as delays and rework. So I spend time aligning requirements, policies, and edge cases in writing first, and making those documents the reference the team relies on when making decisions.",
      "I never wanted to be someone who only plans. By building backends myself and deploying services on AWS, I learned how much work a single line in a spec can become, and where developers get stuck. When progress stalls, I break the problem down and move first instead of waiting, and I try to talk about what is feasible and what is hard in the same language developers use.",
      "Studying Korean Language and Literature taught me to organize my thinking in writing, and as a student ambassador I explained things to audiences of over 100 people. I believe my greatest strength is carrying meaning accurately between people who speak different professional languages. I am currently studying AI at Codyssey, building the habit of using new tools practically while verifying and explaining their results myself."
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
