# 프로필 페이지

강지민 포트폴리오 — https://profile-page-snowy.vercel.app

## 구조

```
.
├── public/images/            # 프로젝트 이미지, user.gif, my-cv.pdf
└── src/
    ├── app/
    │   ├── layout.tsx        # 공통 헤더·푸터, 폰트
    │   ├── globals.css       # 테마 색(#f4f3f2 · #433e49 · #928490 · #dbc1ad)과 전체 스타일
    │   ├── page.tsx          # Home
    │   ├── about/            # About (한/영 전환, 탭)
    │   ├── projects/         # 프로젝트 목록
    │   │   └── [id]/         # 프로젝트 상세 (정적 생성)
    │   ├── contact/          # 연락 폼
    │   └── api/contact/      # 메일 전송 API (nodemailer)
    ├── components/           # Header, Footer, ProjectCard, AboutContent, ContactForm
    └── data/
        ├── projects.ts       # 프로젝트 내용 — 여기만 고치면 목록·상세 모두 반영
        └── about.ts          # About 내용 (한/영)
```

## 실행

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 배포 전 빌드 확인
```

## 환경변수

`.env.local`(로컬)과 Vercel 프로젝트 설정에 넣습니다.

| 키 | 값 |
| --- | --- |
| `EMAIL_PROVIDER` | `naver` / `gmail` / `icloud` |
| `EMAIL_USER` | 발신·수신 메일 주소 |
| `EMAIL_PASS` | 앱 비밀번호 |

## 메모

- Next.js 15(App Router) + TypeScript, 별도 UI 라이브러리 없이 CSS 하나로 관리
- 프로젝트 상세는 모달 대신 `/projects/[id]` 페이지로 분리해 링크로 바로 공유 가능
- 이전 FastAPI + Jinja2 버전은 git 히스토리에 남아 있음
