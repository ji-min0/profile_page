export type Stat = { value: string; label: string };
export type ProjectLink = { label: string; url: string };
export type DetailImage = { src: string; caption: string };
export type Diagram = DetailImage & { title: string; points?: string[]; improvements?: string[] };

export type Highlight = { title: string; body: string };

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  image: string;
  imagePosition?: string;
  /** 상세 상단 대표 이미지 1장 + 하단 추가 화면 */
  detailImages: DetailImage[];
  /** 설계도·흐름도 */
  diagrams: Diagram[];
  period: string;
  team: string;
  role: string;
  scope?: string;
  stack: { label: string; value: string }[];
  stats: Stat[];
  highlights: Highlight[];
  extras: string[];
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
    diagrams: [
      {
        title: "전체 아키텍처",
        src: "/images/gechu-architecture.webp",
        caption: "게추 전체 아키텍처 — Vercel 프론트엔드, CloudFront, EC2 단일 인스턴스의 Docker Compose, 외부 서비스",
        points: [
          "Django 6 + DRF(Gunicorn) 하나에 Celery Beat·Worker를 붙여 추천 계산과 데이터 동기화를 요청 흐름에서 분리했습니다.",
          "Redis는 캐시·인증코드·최근 검색(db 1)과 Celery 브로커(db 2)로 나눠 씁니다.",
          "Beat 스케줄: 30초마다 추천 Job 스캔, 10분마다 한글명 백필, 새벽 유사도 Job, 탈퇴 유저 정리.",
          "외부 연동은 IGDB·Wikidata(게임 데이터), Kakao·Discord OAuth, BBaton 성인 인증, SMTP 메일입니다.",
          "PR마다 ruff·mypy·coverage를 돌리고, dev 푸시 시 GitHub Actions가 OIDC로 AWS Role을 받아 ECR에 이미지를 올린 뒤 EC2에 배포합니다.",
        ],
      },
    ],
    period: "2026.02.19 – 2026.03.26",
    team: "7인 (BE 4 · FE 3)",
    role: "러닝헬퍼(OZ 코딩스쿨 2개월 계약, 팀 멘토) — 서비스 기획·API 명세·DB 설계·초기 인프라 총괄, 코드 작성과 PR 리뷰",
    stack: [
      { label: "Framework", value: "Django 6, Django REST Framework, Gunicorn" },
      { label: "Database", value: "PostgreSQL 17, Redis 7" },
      { label: "Infra", value: "AWS EC2 · S3 · ECR · CloudFront, Docker Compose, GitHub Actions(OIDC)" },
      { label: "Libraries", value: "Celery, Celery Beat, IGDB API, Wikidata SPARQL" },
    ],
    stats: [
      { value: "57건", label: "API 명세 (7개 도메인)" },
      { value: "36건", label: "PR (34건 머지)" },
      { value: "118건", label: "커밋 (469건 중 2위)" },
      { value: "26건", label: "리뷰 코멘트 (봇 제외 1위)" },
    ],
    highlights: [
      {
        title: "행동 가중치·어뷰징 방지 정책 설계",
        body:
          "추천의 원재료인 행동 로그를 어떤 점수로 바꿀지 기획 단계에서 정책으로 정했습니다. 조회·검색·찜·좋아요·외부 스토어 클릭 등 8가지 행동에 기본 가중치(조회 0.2 ~ 온보딩 선호 설정 1.3, 찜 제거·싫어요 -1)를 두고, 행동이 일어난 위치에 따라 배율(목록 0.9 ~ 온보딩 1.5)을 곱하도록 했습니다. 같은 행동을 반복하면 0.9씩 감쇠시키고 2분 30초 안의 동일 행동은 무시해, 클릭을 반복해 추천을 조작하는 것을 막았습니다. 가중치는 기록 시점 값으로 스냅샷해 관리자가 규칙을 바꿔도 과거 기록이 흔들리지 않게 했고, 행동 로그는 수정·삭제 없는 append-only로 두어 추천 재계산과 디버깅의 원본으로 삼았습니다.",
      },
      {
        title: "기획·명세 선확정",
        body:
          "BE와 FE가 동시에 시작해 서로 기다리면 일정이 밀리는 구조였습니다. 개발보다 기준 문서를 먼저 확정하기로 하고, 기능 범위·화면 흐름·정책을 Notion에 정리한 뒤 ERD와 API 명세 57건(7개 도메인)에 요청·응답·상태코드·중요도·개발 여부·정책 메모까지 정의해 담당자를 배정했습니다. FE는 명세만 보고 화면을 병렬로 개발했고, PR 템플릿에 \"프론트는 Swagger만 보고 작업한다\"는 원칙과 문서화·에러 상수화 기준을 명문화했습니다. 이렇게 정한 기준을 따라 개발이 진행돼 실서비스 배포까지 이어졌습니다.",
      },
      {
        title: "외부 데이터 API 장애 대응",
        body:
          "게임 데이터 원천인 RAWG API가 무료 한도 초과로 401을 반환하며 동기화가 멈췄습니다. 키 재발급을 기다리지 않고 월 제한이 없는 IGDB(Twitch)로 교체하되, 다른 팀원 코드에 영향이 가지 않도록 기존 게임·장르·플랫폼 모델을 그대로 재사용해 스키마 변경 없이 전환했습니다. 페이지 크기를 40→500으로 늘리고, Celery Beat 매일 새벽 증분 동기화, 관리자용 수동 동기화 API, 팀원용 실행 가이드까지 정리했습니다.",
      },
      {
        title: "보안·장애 리뷰",
        body:
          "기능이 동작하는지보다 \"운영에서 어떻게 깨질 수 있는가\"를 기준으로 팀원 PR을 리뷰했습니다. 비밀번호 재설정에서 무차별 대입, 회원가입·재설정 코드 혼용, 변경 후 기존 토큰 유효, 이메일 존재 노출 등 취약점 4건과 대안을 제시했고, 행동 로그에서는 동시 요청 시 쿨다운이 무시되는 경쟁 조건, 설정 실수로 API 전체가 멈출 수 있는 조회 방식, 가중치가 0에 수렴하는 문제를 짚었습니다. 사람 리뷰어 중 코멘트 1위(봇 제외 73건 중 26건)입니다.",
      },
      {
        title: "AI 리뷰 판단",
        body:
          "팀 레포의 Gemini 리뷰 봇 제안을 그대로 받지 않고 실제 구조와 맞는지 확인해 수용·반박했습니다. HSTS 제안은 CloudFront가 이미 HTTPS 리다이렉트를 처리해 보류하고, 저장 방식 제안은 일괄 저장 시 갱신 필드를 명시하는 더 단순한 방법으로 대체했으며, 실제 오류를 짚은 제안은 바로 반영했습니다.",
      },
    ],
    extras: [
      "영어뿐인 해외 게임 데이터를 Wikidata와 연동해 한국어명으로 변환 — 캐시 → 원작명+에디션 추론 → 대체명 → 영어명 4단계 우선순위, 요청 중 외부 API 미호출(캐시 미스는 비동기 처리)",
      "한글 초성 검색 자동완성",
      "소셜 로그인 토큰을 URL에서 HttpOnly·Secure 쿠키로 이동, 쿠키 인증 시 CSRF 검사 강제, OAuth state에 provider 결합, Refresh Token 로테이션, 소셜 계정 중복 연동을 DB 제약으로 차단",
      "프로필 이미지를 presigned URL 방식에서 서버 리사이즈(최대 512px) 방식으로 전환, 선호도 API 3개를 1개로 통합",
      "Django 초기 세팅, Docker Compose, GitHub Actions CI, EC2·CloudFront 배포",
    ],
    links: [
      { label: "기획서", url: "https://app.notion.com/p/40d78eb684238092ad9aedf3c5042c04?source=copy_link" },
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
      "공연을 라이브로 판매·송출하는 콘서트 스트리밍 서비스입니다. AWS IVS로 영상을 송출·재생하고, EventBridge로 방송 상태를 동기화합니다. 실서비스로 배포했습니다.",
    image: "/images/work-2.png",
    detailImages: [
      { src: "/images/stream.png", caption: "시청 화면 — 라이브 재생과 실시간 채팅" },
    ],
    diagrams: [
      {
        title: "서비스 구성 요약",
        src: "/images/near0-overview.webp",
        caption: "Near0.5 서비스 구성 요약 — 시청 흐름 ①→④와 방송 상태 동기화",
        points: [
          "① 시청 권한 확인 → ② 재생 토큰 요청 → ③ 서버가 ES384 서명 토큰 발급 → ④ IVS가 토큰을 검증해야 재생됩니다.",
          "방송 시작·종료는 IVS → EventBridge → API 서버 웹훅으로 전달돼 상태가 갱신되고, Celery가 알림을 예약·발송합니다.",
          "API 서버는 IVS 채널을 직접 생성·관리하므로 운영자가 AWS 콘솔을 만질 필요가 없습니다.",
        ],
      },
      {
        title: "상세 아키텍처",
        src: "/images/near0-architecture.webp",
        caption: "실제 배포 환경 기준 AWS 구성 — VPC·보안그룹·Docker Compose·CloudFormation 프로비저닝 범위",
        points: [
          "EC2 한 대의 Docker Compose에 api-prod(FastAPI·WebSocket·FastAdmin), Redis(브로커·채팅 Pub/Sub), PostgreSQL, celery-beat, celery-worker를 올렸습니다.",
          "8000 포트는 CloudFront 관리형 프리픽스 리스트에서 오는 요청만 허용합니다.",
          "OIDC·코어 서비스·EventBridge 웹훅은 CloudFormation 스택 3개로 코드화했습니다.",
          "배포는 GitHub Actions가 OIDC로 IAM Role을 받아 ECR에 이미지를 올리고 EC2에서 pull합니다.",
        ],
        improvements: [
          "SSH(22)가 전체 IP에 열려 있습니다. 서비스 트래픽과 달리 관리자만 쓰는 포트이므로 SSM Session Manager로 대체하거나, 배포 중에만 GitHub Actions Runner IP를 허용하고 회수하는 방식으로 좁힐 수 있습니다.",
          "앱의 AWS 호출(IVS·S3)은 필요한 권한만 부여한 IAM 유저 액세스 키를 사용합니다. ECR 인증은 이미 EC2 역할로 바꿨고, 앱 호출도 역할로 옮기면 만료 없는 장기 키를 서버에 둘 필요가 없어집니다.",
        ],
      },
    ],
    period: "2026.01 – 2026.02.09",
    team: "8인 (BE 3 · FE 5)",
    role: "백엔드 — 스트리밍 도메인·AWS 인프라 담당, 발표자료 제작",
    stack: [
      { label: "Framework", value: "FastAPI, Uvicorn, WebSocket" },
      { label: "Database", value: "PostgreSQL 14 + Tortoise ORM + Aerich, Redis 7" },
      { label: "Infra", value: "AWS IVS · EventBridge · EC2 · ECR · S3 · CloudFront · Cognito · CloudFormation" },
      { label: "Libraries", value: "Celery, aioboto3, Pydantic, PyJWT, FastAdmin, Ruff, Mypy, pytest" },
    ],
    stats: [
      { value: "63건", label: "PR (123건 중 51%)" },
      { value: "283건", label: "커밋 (665건 중 1위)" },
      { value: "73/83", label: "스트리밍 도메인 커밋" },
    ],
    highlights: [
      {
        title: "방송 상태 동기화",
        body:
          "송출자가 방송을 켜고 끄는 시점을 서버가 알 수 없어 \"라이브 중\" 표시가 실제 방송과 어긋났습니다. 폴링 대신 AWS가 상태 변화를 알려주는 방식을 택해 IVS 이벤트 → EventBridge → FastAPI 웹훅으로 연결하고 API Key 헤더로 검증했습니다. 방송 시작·종료가 실시간으로 반영되고 알림도 비동기로 이어지며, 서버는 CloudFront 경유 접속만 허용하고 이벤트 규칙·권한은 CloudFormation으로 코드화했습니다.",
      },
      {
        title: "시청 권한",
        body:
          "영상 주소가 노출되면 누구나 시청할 수 있는 구조를 막기 위해 IVS 비공개 채널과 ES384 서명 토큰을 썼습니다. 공개 / 관리자 전용 / 티켓 필요 3단계 권한을 확인한 뒤에만 만료 시간이 있는 토큰을 발급하고, 재발급 로직으로 시청 중 끊김을 막았습니다. 세션을 만들면 채널이 자동 생성돼 운영자가 AWS 콘솔을 만질 필요가 없고, 티켓 구매 연동은 확장 지점으로 설계해 두었습니다.",
      },
      {
        title: "배포 보안",
        body:
          "비밀번호 기반 docker login 때문에 GitHub Actions에서 보안 경고가 나자, AWS 권장 방식대로 EC2에 부여된 IAM 역할로 ECR에 인증하도록 바꿔 배포 스크립트에서 비밀번호를 없앴습니다. 민감한 환경변수는 GitHub Secrets로 옮기고, CI 통과 후에만 테스트가 돌도록 파이프라인을 정비했습니다.",
      },
      {
        title: "FE 협업 환경",
        body:
          "스트리밍 기능은 실제 방송과 로그인 토큰이 있어야 테스트할 수 있어 FE 작업이 자주 막혔습니다. 테스트 유저·아티스트 시드, 토큰 발급 스크립트, 송출 모니터링 페이지를 먼저 만들어 FE가 Swagger에서 바로 인증 API를 호출하고 실제 방송 없이 연동을 테스트하게 했습니다. 알림 리뷰에서는 \"시간 변경·라이브 시작·취소·종료만 알린다\"는 범위를 제안해 과잉 알림을 줄였습니다.",
      },
    ],
    extras: [
      "비대해진 스트리밍 도메인에서 콘서트 도메인 분리 리팩토링 주도(테이블 변경 없이 구조만 정리)",
      "커서 기반 페이지네이션, S3 썸네일 업로드, 테스트 코드 작성",
      "Ruff·Mypy·pytest 통과를 PR 머지 기준으로 운영",
      "dev 브랜치 병합 시 자동 배포 제안",
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
      "수강생·강사·관리자가 수업·평가·학습을 한곳에서 관리하는 통합 교육 플랫폼입니다. 29명이 함께 만들어 실서비스로 운영했고, 그중 쪽지시험 백엔드 API를 맡았습니다.",
    image: "/images/work-3.jpg",
    detailImages: [{ src: "/images/work-3.jpg", caption: "쪽지시험 화면" }],
    diagrams: [
      {
        title: "쪽지시험 흐름 — 배포부터 결과 조회까지",
        src: "/images/lms-exam-flow.webp",
        caption: "담당 범위: 쪽지시험 흐름과 단계별로 막히는 경우의 응답 코드",
        points: [
          "관리자가 시험을 배포하면 그 시점의 문항을 스냅샷으로 고정해, 이후 문항을 수정해도 진행 중인 시험은 바뀌지 않습니다.",
          "수강생은 참가코드 입력 → 시험 상태 확인 → 문제 풀기 → 제출 순서로 응시하고, 제출 시 한 번 채점한 결과를 저장합니다.",
          "결과 조회와 관리자 응시 내역은 저장된 채점 결과만 읽습니다.",
          "단계마다 막히는 경우를 400 하나로 뭉치지 않고 409·410·423으로 나눠, FE가 안내 문구를 정확히 분기하게 했습니다.",
        ],
      },
      {
        title: "전체 아키텍처",
        src: "/images/lms-architecture.webp",
        caption: "LMS 전체 아키텍처 — ★ 표시가 담당한 쪽지시험 요청 경로",
        points: [
          "FE는 서비스별 서브도메인 4개로 나뉘고, 그중 수강생 화면과 어드민 화면의 쪽지시험 기능이 제 API(apps/exams)를 호출합니다.",
          "Nginx(Let's Encrypt TLS) 뒤의 Django + DRF가 PostgreSQL(시험·문항·배포·응시)과 Redis 캐시를 사용합니다.",
          "PR마다 isort·black·테스트를 돌리고, 머지 시 Docker Hub로 이미지를 올려 dev·prod EC2에 배포합니다.",
        ],
      },
    ],
    period: "2025.12.05 – 2026.01.05",
    team: "29인 (BE 15 · FE 14)",
    role: "쪽지시험 파트 리드(백엔드)",
    scope: "쪽지시험 API(apps/exams) — 화면은 FE 팀이 만들고 이 API를 호출",
    stack: [
      { label: "Framework", value: "Django, Django REST Framework, Gunicorn" },
      { label: "Database", value: "PostgreSQL + Django ORM, Redis" },
      { label: "Infra", value: "AWS EC2 · S3, Docker, Nginx, GitHub Actions, Docker Hub" },
      { label: "Libraries", value: "Celery, django-celery-beat, djangorestframework-simplejwt" },
    ],
    stats: [
      { value: "22건", label: "PR (16건 머지)" },
      { value: "159건", label: "커밋 (약 20명 중 3위)" },
      { value: "약 97건", label: "프로젝트 API 명세" },
    ],
    highlights: [
      {
        title: "명세 기준 재정비",
        body:
          "여러 명이 나눠 구현하면서 API마다 권한 처리·요청/응답 형식·예외 처리가 명세와 조금씩 달라져 있었습니다. 학생 권한 체계를 만드는 작업을 기회로 삼아 기존 API를 공통 권한 상속 구조로 한 번에 정리하고, 명세와 어긋난 형식과 누락된 409를 고쳐 409 예외를 전역으로 올렸습니다. 다른 팀원 PR에서 누락된 마이그레이션도 찾아 반영했습니다.",
      },
      {
        title: "채점 구조 재설계",
        body:
          "결과를 조회할 때마다 답안을 다시 채점하고, 답안 형식도 제각각이라 방어 코드가 계속 늘던 구조였습니다. 채점은 한 번이면 충분하다고 보고 제출 시 1회 채점해 저장하고 조회는 저장된 결과만 읽도록 책임을 나눴으며, 답안 형식을 하나로 정규화했습니다. 7개 파일에서 약 200줄이 줄고 관리자 응시 내역 API도 단순해졌습니다.",
      },
      {
        title: "상태코드·정책 설계",
        body:
          "시험은 아직 안 열림·진행 중·종료·잠김·중복 배포처럼 상태가 많아, 모두 400으로 돌려주면 FE가 어떤 안내를 띄울지 알 수 없었습니다. 409(중복 배포·상태 충돌), 410(종료된 시험), 423(시작 전·잠긴 시험)으로 나눈 커스텀 예외를 정의했고, 과거 시각 배포 금지, 최소 응시시간 30분, 제출 2회 제한, 시험-기수 관계 검증 같은 정책도 서버에서 검증합니다.",
      },
    ],
    extras: [
      "관리자: 시험 배포 생성·목록(페이지네이션·필터·검색·정렬)·상세·수정·삭제·상태 변경, 응시 내역 상세 조회",
      "수강생: 참가코드 검증 → 시험 상태 확인 → 응시, 배포 시점 문항 스냅샷으로 출제해 이후 문항 수정의 영향 차단",
      "동적 속성 주입(setattr)으로 타입 오류가 잦던 서비스-뷰 구조를 DTO 패턴으로 리팩토링",
      "페이지네이션 공통 유틸화",
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
      "메가박스 지점 직원의 스케줄, 급여 계산, 키오스크 출퇴근, 교대·휴무 신청, 커뮤니티를 한 플랫폼에서 관리하는 풀스택 서비스입니다. 다른 지점에서 직접 근무한 경험을 바탕으로 기획했습니다.",
    image: "/images/work-1.png",
    detailImages: [{ src: "/images/megabox_detail.png", caption: "서비스 화면" }],
    diagrams: [],
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
        body:
          "메가박스 다른 지점에서 직접 근무한 경험을 바탕으로 기획했습니다. 근로기준법 휴게시간(4시간 미만 없음, 4~8시간 30분, 8시간 60분)을 채우지 않으면 퇴근할 수 없게 하고, 출근·휴식·복귀·퇴근 4단계를 흐름도로 정의했습니다.",
      },
      {
        title: "현장 실수를 예상한 예외 처리",
        body:
          "휴식 버튼 없이 복귀만 누르면 휴식 30분을 자동 입력하고, 하루 두 번 출근을 막았습니다. 바이저 이상·일반 크루·출근용 계정으로 직급별 권한을 나눴습니다.",
      },
      {
        title: "기능 간 연동 설계",
        body:
          "승인된 휴무일은 스케줄 등록 시 자동으로 막히고, 교대·대타가 승인되면 스케줄에 자동 반영되며, 신청은 커뮤니티에 자동 게시됩니다. 신청에는 대기/승인/반려 상태와 승인자를 두어 결재 흐름을 만들었습니다.",
      },
      {
        title: "급여 계산 구조",
        body:
          "직원별 시급 이력, 연도별 최저시급, 시행일 기준 4대보험 요율, 법정 공휴일을 테이블로 분리하고, 주간·야간·주휴·연차·공휴일 수당과 공제·실지급액까지 담는 구조로 설계했습니다. 주민번호 암호화 권장안은 실제 구현에서 Fernet 암호화로 반영됐습니다.",
      },
    ],
    extras: [
      "커뮤니티 테이블 설계·생성, 교대·휴무 신청과 게시글의 관계를 FK에서 ORM 조인으로 변경",
      "커뮤니티 API와 직급별 권한 관리, 댓글 cascade, 게시글·댓글 페이지네이션, 댓글 좋아요, 카테고리별 게시글 수 API",
      "created_at·updated_at 공통 Mixin 분리, KST 타임스탬프 기본값 오류 수정",
      "수정 후 응답에 댓글·작성자 관계가 갱신되지 않던 문제를 joinedload와 세션 만료 처리로 해결해 프론트가 수정 내용을 즉시 확인하게 함",
      "Alembic 마이그레이션과 isort·black·flake8 도입, CI 의존성 캐싱",
      "ERD 13개 테이블 중 11개가 실제 구현으로 이어졌고, 서비스는 이후 35개 테이블 규모로 확장",
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
