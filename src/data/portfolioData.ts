interface Personal {
  name: string;
  tagline: string;
  description: string;
  email: string;
}

interface Social {
  name: string;
  url: string;
}

interface Project {
  title: string;
  label?: string;
  image: string;
  problem?: string;
  solution?: string;
  description?: string;
  techStack?: string[];
  tags?: string[];
  link: string;
}

interface PortfolioData {
  personal: Personal;
  social: Social[];
  featuredProjects: Project[];
  projects: Project[];
  contact: {
    message: string;
    emailLabel: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "김현",
    tagline: "@hrxlou",
    description: "대학생 개발자 김현입니다. 현재 대학교 3학년으로, 새로운 기술을 익히고 프로젝트에 적용하며 문제 해결의 즐거움을 알아가고 있습니다. 빠르게 변화하는 세상에 적응하기 위해 매일 공부하고 있습니다.",
    email: "hwipink@kakao.com",
  },
  social: [
    { name: "GitHub", url: "https://github.com/hrxlou" },
    { name: "Blog", url: "https://blog.naver.com/hrxlou" },
    { name: "Instagram", url: "https://instagram.com/hrxlou" },
  ],
  featuredProjects: [
    {
      title: "가족 소통을 위한 웹",
      label: "Personal Project",
      image: "public/featuredprojectmain.png",
      problem: "가족들이 단순한 채팅방 이상으로 서로의 일상과 계획, 미래에 대해 기록할 수 있는 웹 소통 공간을 만들고자 했습니다.",
      solution: "React와 Next.js 환경에서 실시간 게시판, 사진첩, 가족 캘린더 기능을 통합하여 가족만의 전용 플랫폼을 구축했습니다.",
      techStack: ["React", "TypeScript", "Next.js", "Firebase"],
      link: "https://github.com/hrxlou/familyWebsite", // 예시 링크
    }
  ],
  projects: [
    {
      title: "솔직히 아직 한게 없습니다",
      image: "public/mywork1.png",
      description: "열심히 살게요 😅",
      tags: ["인생_어렵다"],
      link: "#", // 예시 링크
    },
  ],

  contact: {
    message: "함께 일하고 싶은 프로젝트가 있거나 궁금한 점이 있다면 언제든 연락주세요.",
    emailLabel: "Email me at",
  }
};
