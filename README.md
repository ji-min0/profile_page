# 프로필 페이지

### 1. 프로젝트 구조
```
.
├── .github/                 # github Action용 ci 파일 생성
│   └── workflows
│      └── ci.yml
│
├── app/
│   ├── __init__.py
│   ├── core/
│   │   ├── __init__.py
│   │   └── config.py
│   │
│   ├── main.py
│   │
│   ├── routers/
│   │   ├── __init__.py
│   │   ├── about.py
│   │   ├── contact.py
│   │   ├── home.py
│   │   └── projects.py
│   │
│   ├── static/
│   │   ├── css/
│   │   │   ├── style.css
│   │   │   └── style_all.css   # 개발용(전체 css)
│   │   └── images/
│   │       ├── my-cv.pdf       # 이력서
│   │       ├── user.gif
│   │       ├── work-1.jpg
│   │       ├── work-2.jpg
│   │       └── work-3.png
│   │    
│   └── templates/
│       ├── about.html
│       ├── base.html          # html 상속을 위한 base 파일
│       ├── contact.html
│       ├── home.html
│       ├── projects.html
│       └── index.html          # 개발용(전체 html)
│
├── poetry.lock                 # poetry로 의존성 관리
├── pyproject.toml
├── projects.json               # 프로젝트 목록 json으로 관리 -> html을 동적으로
├── about.json                  # 한/영 내용 json으로 관리 -> html을 동적으로
├── run.sh                      # 개발용(로컬에서 확인)
├── test/
│   ├── temp.py
│   ├── test.sh                 # black, ruff, mypy, coverage 확인
│   └── test_temp.py
│
└── vercel.json
```
* .env에 EMAIL_PROVIDER, EMAIL_USER, EMAIL_PASS를 적고 .ignore함

<hr>

### 간단 설명

* Github Action 사용
* shell script 사용
  1) run.sh: 개발용 (로컬에서 페이지 확인)
  2) test/test.sh: 개발용 (black, ruff, mypy, coverage 확인으로 개발 용이)
* poetry로 의존성 관리
  * 이때, 기존 사용하던 1.8.5에서 2.2.1로 버전 변경함
* python 3.12 사용
* orjson을 사용해 json보다 속도 향상
  * import json -> import orjson
  * json.load(f) -> orjson.loads(f.read())
  * r -> rb
  * binary mode로 열기 때문에 encoding=UTF-8 사용하지 않음
* FastAPI 사용
* Vercel로 배포한 프로젝트
* html의 경우 한 파일에 작성 후 구조 분리 함
* 작은 화면에 대응하는 css 추가

<hr>

### ! 추가할 것
- 메일 회신 바로 보낸 사람으로 가도록 바꾸기
