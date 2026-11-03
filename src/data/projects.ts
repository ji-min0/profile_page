export type Stat = { value: string; label: string };
export type Highlight = { title: string; body: string };
export type ProjectLink = { label: string; url: string };
export type DetailImage = { src: string; caption: string };

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  image: string;
  imagePosition?: string;
  detailImages: DetailImage[];
  period: string;
  team: string;
  role: string;
  stack: { label: string; value: string }[];
  stats: Stat[];
  highlights: Highlight[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "gechu",
    title: "게추",
    subtitle: "개인화 게임 추천 서비스",
    summary:
      "조회·검색·저장·스토어 클릭 행동 로그와 선호 장르·플랫폼·태그를 결합해 게임을 추천하는 서비스입니다. 실서비스로 배포했습니다.",
    image: "/images/gechu.png",
    imagePosition: "center top",
    detailImages: [{ src: "/images/gechu.png", caption: "추천 게임 화면 — 취향 기반 추천" }],
    period: "2026.02.19 – 2026.03.26",
    team: "7인 (BE 4 · FE 3)",
    role: "러닝헬퍼(OZ 코딩스쿨 2개월 계약) — 기획 전체 정리, API 명세 작성, DB 설계, 초기 인프라, 코드 작성과 PR 리뷰",
    stack: [
      { label: "Framework", value: "Django 6, Django REST Framework" },
      { label: "Database", value: "PostgreSQL, Redis" },
      { label: "Infra", value: "AWS EC2 · S3 · ECR · CloudFront, Docker Compose, GitHub Actions" },
      { label: "Libraries", value: "Celery, Celery Beat, IGDB API, Wikidata" },
    ],
    stats: [
      { value: "57건", label: "API 명세 (7개 도메인)" },
      { value: "36건", label: "PR (34건 머지)" },
      { value: "118건", label: "커밋 (469건 중 2위)" },
      { value: "26건", label: "리뷰 코멘트 (봇 제외 1위)" },
    ],
    highlights: [
      {
        title: "기획·명세 선확정",
        body: "BE 4인과 FE 3인이 동시에 시작해 서로 기다리면 일정이 밀리는 상황이었습니다. 개발보다 기준 문서를 먼저 확정하기로 하고 명세 57건에 중요도·개발 여부·담당자·정책 메모까지 정의해, 프론트엔드가 명세만 보고 병렬로 개발하게 했습니다. PR 템플릿에 \"프론트는 Swagger만 보고 작업한다\"는 원칙도 명문화했습니다.",
      },
      {
        title: "외부 데이터 API 장애 대응",
        body: "RAWG API가 무료 한도 초과로 401을 반환하자 키 재발급을 기다리지 않고 월 제한이 없는 IGDB로 교체했습니다. 기존 모델을 재사용해 스키마 변경 없이 전환했고, 페이지 크기 40→500, Celery Beat 매일 새벽 증분 동기화, 관리자 동기화 API, 팀원용 실행 가이드까지 정리했습니다.",
      },
      {
        title: "보안·장애 리뷰",
        body: "비밀번호 재설정 PR에서 무차별 대입, 회원가입·재설정 코드 혼용, 변경 후 토큰 유효, 이메일 존재 노출 등 4건을 찾았고, 행동 로그 PR에서는 동시 요청 경쟁 조건과 예외로 인한 API 마비 위험을 지적했습니다.",
      },
      {
        title: "인증 보안 개선",
        body: "토큰을 URL에서 HttpOnly·Secure 쿠키로 옮기고 쿠키 인증 시 CSRF를 강제했습니다. OAuth state에 provider를 묶고 Refresh Token 로테이션, 소셜 계정 중복 연동 DB 제약, 외부 호출 재시도·타임아웃을 추가했습니다(13개 파일, +742줄).",
      },
      {
        title: "AI 리뷰 판단",
        body: "Gemini 리뷰 봇 제안을 그대로 받지 않고 검토해 수용·반박했습니다. HSTS 제안은 CloudFront가 이미 HTTPS 리다이렉트를 처리해 보류하고, 실제 오류만 반영했습니다.",
      },
      {
        title: "한국어 게임명",
        body: "Wikidata를 연동해 캐시 → 원작명+에디션 접미사 → IGDB 대체명 → 영어명 4단계로 한국어 이름을 찾고, 요청 중에는 외부 API를 호출하지 않도록 했습니다. 한글 초성 검색 자동완성도 구현했습니다.",
      },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/GechuProject/gechu-backend" },
      { label: "API 명세서", url: "https://docs.google.com/spreadsheets/d/1KBn3Z7lQNqW6yL6VtGvdBrlzL_bGNrJ3/edit?gid=826222313#gid=826222313" },
      { label: "ERD", url: "https://dbdiagram.io/d/game_reco_v2-69a31200a3f0aa31e164f1e1" },
    ],
  },
  {
    id: "near0",
    title: "Near0.5",
    subtitle: "실시간 콘서트 스트리밍",
    summary:
      "공연을 라이브로 송출하는 콘서트 스트리밍 서비스입니다. AWS IVS로 영상을 송출·재생하고, EventBridge로 방송 상태를 동기화합니다.",
    image: "/images/work-2.png",
    detailImages: [
      { src: "/images/stream.png", caption: "시청 화면 — 라이브 재생과 실시간 채팅" },
      { src: "/images/monitor.png", caption: "송출 모니터링 페이지 — FE 테스트용으로 제작" },
    ],
    period: "2026.01 – 2026.02.09",
    team: "8인 (BE 3 · FE 5)",
    role: "백엔드 — 스트리밍 도메인·AWS 인프라 담당, 발표자료 제작",
    stack: [
      { label: "Framework", value: "FastAPI" },
      { label: "Database", value: "PostgreSQL(asyncpg) + Tortoise ORM + Aerich, Redis" },
      { label: "Infra", value: "AWS IVS · EventBridge · EC2 · ECR · S3 · CloudFront · Cognito · CloudFormation" },
      { label: "Libraries", value: "Celery, aioboto3, Pydantic, PyJWT, bcrypt, httpx, FastAdmin" },
    ],
    stats: [
      { value: "63건", label: "PR (전체의 51%)" },
      { value: "283건", label: "커밋 (665건 중 1위)" },
      { value: "73/83", label: "스트리밍 도메인 커밋" },
    ],
    highlights: [
      {
        title: "방송 상태 동기화",
        body: "송출자가 방송을 켜고 끄는 시점을 서버가 알 수 없는 문제가 있었습니다. 폴링 대신 AWS가 알려주는 방식을 택해 IVS 이벤트 → EventBridge → FastAPI 웹훅으로 연결하고 API Key로 검증했습니다. 상태가 실시간으로 반영되고 알림도 비동기로 이어지며, 보안그룹은 CloudFront 경유만 허용하고 CloudFormation으로 코드화했습니다.",
      },
      {
        title: "시청 권한",
        body: "IVS 비공개 채널과 ES384 서명 토큰을 사용하고, 세션 생성 시 채널을 자동 생성했습니다. 공개 / 관리자 전용 / 티켓 필요 3단계 권한을 확인한 뒤에만 재생 토큰을 발급합니다.",
      },
      {
        title: "배포 보안",
        body: "ECR 인증을 비밀번호 docker login에서 EC2 IAM Role + credential helper로 전환해 GitHub Actions 보안 경고를 해결했고, 환경변수를 분리해 GitHub Secrets로 옮겼습니다.",
      },
      {
        title: "FE 협업 환경",
        body: "테스트 유저·아티스트 시드, 토큰 발급 스크립트, 송출 모니터링 페이지를 만들어 프론트엔드가 백엔드를 기다리지 않고 테스트하게 했습니다. 알림 범위(시간 변경·라이브 시작·취소·종료)와 dev 브랜치 자동 배포도 제안했습니다.",
      },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/Near-0-5/backend/tree/develop" },
      { label: "ERD", url: "https://dbdiagram.io/d/Copy-of-Untitled-Diagram-6971c92ebd82f5fce23ec02d" },
      { label: "요구사항 정의서", url: "https://docs.google.com/spreadsheets/d/1Y07EfEfA7vvZu01o8cDpFd_HZBZDjZpZFykCiF2wXfs/edit?gid=0#gid=0" },
    ],
  },
  {
    id: "lms",
    title: "OZ 통합 교육 플랫폼",
    subtitle: "LMS · 쪽지시험 배포와 자동 채점",
    summary:
      "수강생 학습 점검과 어드민의 시험 생성·배포·관리를 위한 통합 교육 플랫폼입니다. 쪽지시험 배포와 자동 채점 API를 맡았습니다.",
    image: "/images/work-3.jpg",
    detailImages: [{ src: "/images/work-3.jpg", caption: "쪽지시험 화면" }],
    period: "2025.12.05 – 2026.01.05",
    team: "29인 (BE 15 · FE 14)",
    role: "쪽지시험 파트 리드(백엔드) — 쪽지시험 API(apps/exams) 담당",
    stack: [
      { label: "Framework", value: "Django, Django REST Framework" },
      { label: "Database", value: "PostgreSQL + Django ORM, Redis" },
      { label: "Infra", value: "AWS EC2 · S3, Docker, Nginx, GitHub Actions" },
      { label: "Libraries", value: "Celery, django-celery-beat, djangorestframework-simplejwt, Gunicorn" },
    ],
    stats: [
      { value: "22건", label: "PR (16건 머지)" },
      { value: "159건", label: "커밋 (약 20명 중 3위)" },
      { value: "약 97건", label: "프로젝트 API 명세" },
    ],
    highlights: [
      {
        title: "명세 기준 재정비",
        body: "학생 권한 체계를 만들며 팀원들의 기존 API를 공통 권한 상속 구조로 정비했습니다. 명세와 어긋난 요청·응답과 누락된 409를 고치고 409를 전역 예외로 만들었으며, 팀원 PR의 누락 마이그레이션도 발견했습니다.",
      },
      {
        title: "채점 구조 재설계",
        body: "조회할 때마다 재채점하던 구조를 제출 시 1회 채점 후 저장하도록 바꿨습니다(7개 파일, 약 200줄 순감소). 답안 형식을 dict로 정규화하고 불필요한 재채점 로직을 제거했습니다.",
      },
      {
        title: "상태코드·정책 설계",
        body: "409(중복 배포·상태 충돌), 410(종료된 시험 조회), 423(시작 전·참가코드 단계 시간 경과)을 구분했습니다. 과거 시각 배포 금지, 최소 응시시간 30분, 제출 2회 제한, 종료 시 강제 제출 신호, 배포 시점 문항 스냅샷을 정책으로 정했습니다.",
      },
      {
        title: "구조 개선",
        body: "setattr() 동적 속성으로 생기던 mypy 오류와 불명확한 계약을 DTO 패턴으로 정리하고, 페이지네이션을 공통 유틸로 분리했습니다.",
      },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/OZ-Coding-School/oz_externship_be_05" },
      { label: "요구사항 정의서", url: "https://docs.google.com/spreadsheets/d/1xh37kqLOCXluecUXcNhFOMQnIhjjHsVNhvJnOx3gZEQ/edit?gid=0#gid=0" },
      { label: "API 명세서", url: "https://docs.google.com/spreadsheets/d/1JdQcyU0pfKxXxRBBy0xXr_kDt9bC29LJun_gNQLP-DQ/edit?gid=0#gid=0" },
      { label: "테이블 명세서", url: "https://docs.google.com/spreadsheets/d/17r_O8EUqZDt9MoFmFTKgpXHLAKRh2Bsvx4cvIXjWmpM/edit?gid=684962824#gid=684962824" },
    ],
  },
  {
    id: "megabox",
    title: "영화관 직원 관리 시스템",
    subtitle: "스케줄 · 급여 · 출퇴근 · 커뮤니티",
    summary:
      "메가박스 지점 직원의 스케줄, 급여 계산, 키오스크 출퇴근, 교대·휴무 신청, 커뮤니티를 한 플랫폼에서 관리하는 풀스택 서비스입니다.",
    image: "/images/work-1.png",
    detailImages: [{ src: "/images/megabox_detail.png", caption: "서비스 화면" }],
    period: "2025.10 – 2026.02 (원본 백엔드 레포 기준)",
    team: "7인 (BE 4 · FE 3)",
    role: "서비스 기획(페이지별 기능·URL·권한 명세), DB 설계(ERD), 커뮤니티 게시판 개발",
    stack: [
      { label: "Framework", value: "FastAPI (팀 프론트엔드: React 19)" },
      { label: "Database", value: "MySQL + SQLAlchemy + Alembic, Redis" },
      { label: "Infra", value: "Docker, Nginx, Cloudflare Tunnel" },
      { label: "Libraries", value: "Pydantic, PyJWT, isort, black, flake8" },
    ],
    stats: [
      { value: "11/13", label: "ERD 테이블 실제 구현 반영" },
      { value: "17/27", label: "커뮤니티 모듈 커밋 (최다)" },
      { value: "35개", label: "이후 확장된 테이블 규모" },
    ],
    highlights: [
      {
        title: "현장 경험을 정책으로",
        body: "메가박스 다른 지점에서 직접 근무한 경험을 바탕으로 기획했습니다. 근로기준법 휴게시간(4시간 미만 없음, 4~8시간 30분, 8시간 60분)을 채우지 않으면 퇴근할 수 없게 하고, 출근·휴식·복귀·퇴근 4단계를 흐름도로 정의했습니다.",
      },
      {
        title: "현장 실수를 예상한 예외 처리",
        body: "휴식 버튼 없이 복귀만 누르면 휴식 30분을 자동 입력하고, 하루 두 번 출근을 막았습니다. 바이저 이상·일반 크루·출근용 계정으로 직급별 권한을 나눴습니다.",
      },
      {
        title: "기능 간 연동 설계",
        body: "승인된 휴무일은 스케줄 등록 시 자동으로 막히고, 교대·대타가 승인되면 스케줄에 자동 반영되며, 신청은 커뮤니티에 자동 게시됩니다. 신청에는 대기/승인/반려 상태와 승인자를 두어 결재 흐름을 만들었습니다.",
      },
      {
        title: "급여 계산 구조",
        body: "직원별 시급 이력, 연도별 최저시급, 시행일 기준 4대보험 요율, 법정 공휴일을 테이블로 분리하고, 주간·야간·주휴·연차·공휴일 수당과 공제·실지급액까지 담는 구조로 설계했습니다. 주민번호 암호화 권장안은 실제 구현에서 Fernet 암호화로 반영됐습니다.",
      },
      {
        title: "커뮤니티 게시판 개발",
        body: "커뮤니티 API와 직급별 권한, 댓글 cascade, 페이지네이션, 댓글 좋아요, 카테고리별 게시글 수 API를 구현했습니다. 수정 후 응답에 댓글·작성자가 갱신되지 않던 문제를 joinedload와 세션 만료 처리로 해결했고, Alembic과 코드 품질 도구를 도입했습니다.",
      },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/mbcwsystem/backend" },
      { label: "기획서", url: "https://app.notion.com/p/40d78eb6842380aa87a6ec4ec9efae30?source=copy_link" },
    ],
  },
];

export function getProject(id: string) {
  return projects.find((p) => p.id === id);
}
