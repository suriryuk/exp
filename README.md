# Derives - Team Main Webpage

**Svelte**로 구축된 우리 팀의 메인 웹 페이지입니다.

## ✨ 특징

- 🎬 **동적 애니메이션**: "develop" + "derive" → "derives"로 변하는 멋진 애니메이션
- 🌐 **다국어 지원**: 한국어/영어 실시간 전환
- 🎨 **파티클 효과**: Canvas 기반의 인터랙티브 배경 애니메이션
- 📱 **완전한 반응형**: 모바일, 태블릿, 데스크톱 완벽 지원
- 🔗 **소셜 미디어 통합**: Discord, Twitter, Email 링크 (아이콘 포함)
- ⚙️ **모듈화된 설정**: JSON 파일로 쉽게 관리
- 🚀 **Svelte의 강력한 성능**: 빠르고 효율적인 렌더링

## 📂 프로젝트 구조

```
/
├── public/
│   └── config/
│       └── settings.json   # 설정 파일 (소셜 링크, 다국어)
├── src/
│   ├── lib/
│   │   ├── ParticleBackground.svelte  # 파티클 배경 애니메이션
│   │   ├── WordAnimation.svelte       # 메인 단어 애니메이션
│   │   ├── LanguageToggle.svelte      # 언어 토글 버튼
│   │   └── SocialLinks.svelte         # 소셜 미디어 링크
│   ├── stores/
│   │   └── language.js     # 언어 및 설정 상태 관리
│   ├── App.svelte          # 메인 앱 컴포넌트
│   ├── app.css             # 글로벌 스타일
│   └── main.js             # 앱 진입점
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

### 프로덕션 빌드

```bash
npm run build
```

### 빌드 결과물 미리보기

```bash
npm run preview
```

## ⚙️ 설정 방법

### 소셜 미디어 링크 변경

`public/config/settings.json` 파일에서 소셜 미디어 링크를 수정할 수 있습니다:

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

## 🎨 커스터마이징

### 색상 변경

`src/App.svelte` 파일의 배경 그라디언트를 수정:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### 파티클 효과 조절

`src/lib/ParticleBackground.svelte` 파일에서 파티클 수, 크기, 속도 등을 조절할 수 있습니다.

### 애니메이션 타이밍 조절

`src/lib/WordAnimation.svelte` 파일의 `delay` 값을 조정하여 애니메이션 타이밍을 변경할 수 있습니다.

## 🛠 기술 스택

- **Svelte** - 반응형 UI 프레임워크
- **Vite** - 빠른 개발 서버 및 빌드 도구
- **Canvas API** - 파티클 애니메이션
- **Svelte Stores** - 상태 관리
- **Svelte Transitions** - 부드러운 애니메이션

## 📋 주요 기능

### 1. 단어 애니메이션
- develop과 derive가 화면에 나타남
- 합쳐지면서 derives로 변환
- 클릭하면 애니메이션 재생 가능

### 2. 파티클 배경
- Canvas 기반의 실시간 파티클 애니메이션
- 파티클 간 연결선 표시
- 화면 크기에 따라 자동 조절

### 3. 언어 전환
- 우측 상단의 언어 버튼으로 전환
- 실시간으로 페이지 텍스트 변경
- 애니메이션과 함께 부드럽게 표시

### 4. 소셜 미디어 링크
- Discord, Twitter, Email 링크
- SVG 아이콘 사용
- 호버 시 브랜드 컬러 및 애니메이션 효과

## 📦 배포

빌드 후 `dist/` 폴더의 내용을 정적 호스팅 서비스에 배포:

- **Vercel**: `vercel deploy`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: `gh-pages -d dist`

## 🤝 기여

이슈 제출 및 풀 리퀘스트를 환영합니다!

## 📄 라이선스

MIT
