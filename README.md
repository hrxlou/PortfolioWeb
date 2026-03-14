# 🚀 Portfolio Web

사용자 경험과 심미성을 극대화한 현대적인 포트폴리오 웹사이트입니다. 다크 모드, 부드러운 애니메이션, 그리고 데이터 중심 아키텍처를 통해 유지보수와 확장이 용이하도록 설계되었습니다.

---

## ✨ 주요 기능 및 특징

### 🎨 Modern UI/UX & Design
- **System-Aware Dark Mode**: 사용자의 시스템 설정에 따라 테마가 자동으로 전환되며, 수동 전환 시에도 자연스러운 애니메이션을 제공합니다.
- **Glassmorphism Design**: 유리 질감의 세련된 배경 효과와 카드 디자인을 적용하여 프리미엄한 감각을 전달합니다.
- **Smooth Animations**: `Framer Motion`을 활용한 요소별 마이크로 인터랙션과 부드러운 페이지 전환을 구현했습니다.
- **Responsive Web**: 데스크톱, 테블릿, 모바일 등 모든 해상도에서 완벽하게 최적화된 레이아웃을 제공합니다.

### ⚙️ Developer Experience (DX)
- **Data-Driven Content**: 모든 프로젝트 데이터와 개인 정보는 `src/data/portfolioData.ts` 상의 JSON 구조로 관리되어, 코드 수정 없이 내용만 빠르게 변경할 수 있습니다.
- **Optimized Performance**: 이미지 최적화 레이아웃과 Vite의 빠른 번들링을 통해 최상의 로딩 속도를 보장합니다.
- **Maintainable Components**: React 컴포넌트를 기능별로 세밀하게 분리하여 재사용성과 가독성을 높였습니다.

---

## 🛠 Tech Stack

### Frontend & Core
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### Styling & Animation
![Vanilla CSS](https://img.shields.io/badge/Vanilla_CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide_React-FFB900?style=for-the-badge&logo=lucide&logoColor=black)

### Deployment
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 📂 프로젝트 구조

```text
src/
├── components/         # UI 구성 요소 (독립적인 단위로 분리)
│   ├── Hero.tsx        # 메인 인트로 섹션
│   ├── FeaturedProject.tsx # 강조 프로젝트 카드
│   ├── PortfolioGrid.tsx   # 전체 프로젝트 그리드
│   ├── ProjectImage.tsx    # 최적화된 프로젝트 이미지 컴포넌트
│   └── ThemeToggle.tsx     # 다크/라이트 테마 스위처
├── data/               # 포트폴리오 메타데이터 (JSON-based)
│   └── portfolioData.ts
├── App.tsx             # 앱 메인 엔트리 및 레이아웃 구성
├── index.css           # 글로벌 스타일, CSS 변수(Design Tokens)
└── main.tsx            # React DOM 렌더링
```

---

## 🚀 시작하기

이 프로젝트를 로컬 개발 환경에서 실행하려면 아래 단계를 따르세요.

### 1. 프로젝트 복제
```bash
git clone https://github.com/hrxlou/PortfolioWeb.git
cd PortfolioWeb
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```
기본적으로 브라우저에서 `http://localhost:5173` 접속 시 포트폴리오를 확인할 수 있습니다.

---

## 📬 Contact & Support

프로젝트에 대한 문의나 협업 제안은 아래 채널을 통해 환영합니다!

- 📧 **Email**: [hwipink@kakao.com](mailto:hwipink@kakao.com)
- 🐙 **GitHub**: [@hrxlou](https://github.com/hrxlou)
- 📝 **Blog**: [Naver Blog](https://blog.naver.com/hrxlou)

---
© 2024 hrxlou. All rights reserved.
