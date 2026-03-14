# 🚀 Portfolio Web

React와 TypeScript 기반의 데이터 중심 포트폴리오 웹사이트입니다. CSS Custom Properties와 Framer Motion을 활용하여 테마 전환 및 선언적 애니메이션을 구현했습니다.

---

## 🛠 핵심 구현 사항

### ⚡ Architecture & DX
- **Data-Driven Binding**: 모든 콘텐츠를 `src/data/portfolioData.ts` 내의 객체 구조로 관리하여 유지보수 효율성을 확보했습니다.
- **Component-Based UI**: 각 인터랙션 단위를 독립적인 컴포넌트로 분리하여 재사용성과 가용성을 높였습니다.
- **Vite Bundling**: 고속 HMR(Hot Module Replacement) 및 최적화된 빌드 파이프라인을 사용합니다.

### 🎨 Styling & Interaction
- **Dynamic Theme Management**: `prefers-color-scheme` 및 CSS 변수를 연동한 시스템 기반 다크 모드를 구현했습니다.
- **Glassmorphism UI**: CSS `backdrop-filter` 및 `background-color` 투명도 조절을 통한 인터페이스 설계가 적용되었습니다.
- **Declarative Animation with Remounting**: `Framer Motion`을 활용하여 선언적 애니메이션을 관리하며, 네비게이션 클릭 시 섹션 애니메이션이 재실행되도록 `key` 속성을 활용한 리마운트 로직을 적용했습니다.
- **Optimized UX Layout**: 메뉴의 우측 상단 배치와 다크모드 버튼의 플로팅 버튼(FAB) 형태 적용으로 모바일 및 데스크탑 접근성을 최적화했습니다.
- **Responsive Layout**: 미디어 쿼리를 통한 가변 그리드 시스템으로 다양한 해상도에 대응하며, 모바일 최적화 레이아웃이 적용되었습니다.

---

## 🧪 Tech Stack

### Core
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### Styling & Libraries
![Vanilla CSS](https://img.shields.io/badge/Vanilla_CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide_React-FFB900?style=for-the-badge&logo=lucide&logoColor=black)

---

## 📂 프로젝트 구조

```text
src/
├── components/         # 기능별 UI 컴포넌트 단위
│   ├── Hero.tsx        # 인트로 섹션
│   ├── FeaturedProject.tsx # 강조 프로젝트 항목
│   ├── PortfolioGrid.tsx   # 그리드 배치 로직
│   ├── ProjectImage.tsx    # 이미지 렌더링 최적화
│   └── ThemeToggle.tsx     # 테마 상태 스위처
├── data/               # 정적 메타데이터 관리
│   └── portfolioData.ts
├── App.tsx             # 루트 레이아웃 및 컴포넌트 어셈블리
├── index.css           # 디자인 토큰 및 글로벌 스타일
└── main.tsx            # 진입점 및 렌더링 로직
```

---

## 🚀 시작하기

### 1. 환경 설정
```bash
git clone https://github.com/hrxlou/PortfolioWeb.git
cd PortfolioWeb
npm install
```

### 2. 실행 및 빌드
```bash
# 로컬 개발 서버 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build
```

---

## 📬 Contact

- 📧 **Email**: [hwipink@kakao.com](mailto:hwipink@kakao.com)
- 🐙 **GitHub**: [@hrxlou](https://github.com/hrxlou)
- 📝 **Blog**: [Naver Blog](https://blog.naver.com/hrxlou)

---
© 2024 hrxlou. All rights reserved.
