# Derives - Team Main Webpage

우리 팀의 메인 웹 페이지입니다.

## 특징

- **애니메이션**: "develop" + "derive" → "derives"로 변하는 동적 애니메이션
- **다국어 지원**: 한국어/영어 지원
- **소셜 미디어**: Discord, Twitter, Email 아이콘 링크
- **원페이지**: 심플한 원페이지 디자인
- **반응형**: 모바일, 태블릿, 데스크톱 지원
- **모듈화**: 설정 파일(JSON)로 쉽게 관리

## 프로젝트 구조

```
/
├── index.html           # 메인 HTML 파일
├── css/
│   └── style.css       # 스타일 및 애니메이션
├── js/
│   └── main.js         # JavaScript 로직
├── config/
│   └── settings.json   # 설정 파일 (소셜 링크, 다국어)
└── README.md
```

## 설정 방법

### 소셜 미디어 링크 변경

`config/settings.json` 파일에서 소셜 미디어 링크를 수정할 수 있습니다:

```json
{
  "social": {
    "discord": "https://discord.gg/your-invite",
    "twitter": "https://twitter.com/yourteam",
    "email": "contact@yourteam.com"
  }
}
```

### 다국어 텍스트 수정

같은 파일에서 한국어/영어 텍스트를 수정할 수 있습니다:

```json
{
  "translations": {
    "ko": {
      "slogan": "develop. derive. delight.",
      "description": "우리는 혁신적인 솔루션을 개발합니다",
      "contact": "연락처"
    },
    "en": {
      "slogan": "develop. derive. delight.",
      "description": "We develop innovative solutions",
      "contact": "Contact"
    }
  }
}
```

## 실행 방법

1. 로컬 웹 서버로 실행:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (npx 사용)
npx http-server
```

2. 브라우저에서 `http://localhost:8000` 접속

## 기술 스택

- HTML5
- CSS3 (Animations, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Font Awesome (아이콘)

## 기능

### 애니메이션
- 페이지 로드 시 자동으로 애니메이션 실행
- 애니메이션 영역 클릭 시 다시 재생 가능

### 언어 전환
- 우측 상단의 언어 버튼으로 한국어/영어 전환
- 실시간으로 페이지 텍스트 변경

### 소셜 미디어
- Discord, Twitter, Email 링크
- 호버 효과 및 브랜드 컬러 적용

## 커스터마이징

### 색상 변경
`css/style.css` 파일의 `body` 배경 그라디언트를 수정:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### 폰트 변경
`css/style.css` 파일의 `font-family` 수정

### 애니메이션 속도 조절
`js/main.js` 파일의 `setTimeout` 값을 조절

## 라이선스

MIT
