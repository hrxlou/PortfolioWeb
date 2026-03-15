interface Personal {
  name: string;
  tagline: string;
  intro: string;
  description: string;
  email: string;
}

interface Social {
  name: string;
  url: string;
}

interface Project {
  id: string;
  title: string;
  label?: string;
  image: string;
  problem?: string;
  solution?: string;
  description?: string;
  techStack?: string[];
  tags?: string[];
  link: string;
  details?: {
    overview: string;
    challenges: string[];
    learnings: string[];
    screenshots?: string[];
  };
}

interface Skill {
  category: string;
  items: string[];
}

interface PortfolioData {
  personal: Personal;
  social: Social[];
  featuredProjects: Project[];
  projects: Project[];
  skills: Skill[];
  contact: {
    message: string;
    emailLabel: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "김현",
    tagline: "@hrxlou",
    intro: "안녕하세요, 저는 김현입니다.",
    description: "대학생 개발자 김현입니다. 현재 대학교 3학년으로, 새로운 기술을 익히고 프로젝트에 적용하며 문제 해결의 즐거움을 알아가고 있습니다. 빠르게 변화하는 세상에 적응하기 위해 매일 공부하고 있습니다.",
    email: "2271428@hansung.ac.kr",
  },
  social: [
    { name: "GitHub", url: "https://github.com/hrxlou" },
    { name: "Blog", url: "https://blog.naver.com/hrxlou" },
    { name: "Instagram", url: "https://instagram.com/hrxlou" },
  ],
  featuredProjects: [
    {
      id: "family",
      title: "가족 소통을 위한 웹",
      label: "Personal Project",
      image: "/featuredprojectmain.png",
      problem: "가족들이 단순한 채팅방 이상으로 서로의 일상과 계획, 미래에 대해 기록할 수 있는 웹 소통 공간을 만들고자 했습니다.",
      solution: "React와 Next.js 환경에서 실시간 게시판, 사진첩, 가족 캘린더 기능을 통합하여 가족만의 전용 플랫폼을 구축했습니다.",
      techStack: ["React", "TypeScript", "Next.js", "Firebase"],
      link: "https://github.com/hrxlou/familyWebsite",
      details: {
        overview: "단순한 SNS를 넘어 가족 구성원들이 소중한 순간을 기록하고 공유할 수 있는 프라이빗한 플랫폼입니다.",
        challenges: [
          "Firebase를 활용한 실시간 데이터 동기화 구현",
          "다양한 기기에서의 반응형 캘린더 드래그 앤 드롭 구현",
          "Next.js의 SSR을 활용한 SEO 및 초기 로딩 성능 최적화"
        ],
        learnings: [
          "상태 관리 라이브러리 없이 Context API만으로 복잡한 전역 상태를 다루는 방법",
          "NoSQL 데이터베이스 설계 및 보안 규칙 설정의 중요성",
          "사용자 경험을 고려한 점진적 웹 앱(PWA) 도입 과정"
        ]
      }
    }
  ],
  projects: [
    {
      id: "empty",
      title: "솔직히 아직 한게 없습니다",
      image: "/mywork1.png",
      description: "열심히 살게요 😅",
      tags: ["인생_어렵다"],
      link: "#",
      details: {
        overview: "현재는 비어있지만, 앞으로 채워나갈 미래의 프로젝트 공간입니다.",
        challenges: ["아직 시작하지 않은 것에 대한 두려움 극복"],
        learnings: ["지금 바로 시작하는 것이 가장 중요하다는 깨달음"]
      }
    },
    {
      id: "arsenal",
      title: "아스날 FC 화이팅",
      image: "/mywork1.png",
      description: "제발 우승하자",
      tags: ["요케레스 30골 기원 1일차"],
      link: "#",
      details: {
        overview: "축구 팬으로서의 열정을 데이터 시각화로 풀어낼 예정인 프로젝트입니다.",
        challenges: ["실시간 경기 데이터 API 연동", "복잡한 리그 순위 산출 로직 구현"],
        learnings: ["데이터 시각화 라이브러리(D3.js) 활용 능력", "API 레이트 리밋 해결 방안"]
      }
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: ["내가 뭘 할줄알지..."]
    },
    {
      category: "Backend",
      items: ["얘도 좀..."]
    },
    {
      category: "Learning",
      items: ["Algorithm", "General CS", "Mobile App Dev", "DataBase"]
    }
  ],
  contact: {
    message: "함께 하고 싶은 프로젝트가 있거나 궁금한 점이 있다면 언제든 연락주세요.",
    emailLabel: "Email me at",
  }
};
