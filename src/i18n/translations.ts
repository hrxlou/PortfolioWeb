export type Language = 'ko' | 'en';

export const translations = {
  ko: {
    nav: {
      home: 'Home',
      featured: 'Featured',
      skills: 'Skills',
      portfolio: 'Works',
      contact: 'Contact',
    },
    personal: {
      name: '김현'
    },
    common: {
      name: 'Hyun Kim',
    },
    hero: {
      title: '김현 | Portfolio',
      subtitle: '새로운 도전을 즐기는 대학생 개발자 김현의 포트폴리오입니다.',
      greeting: '안녕하세요,',
      iam: '저는 ',
      suffix: '입니다.',
      tagline: '@hrxlou',
      description: '대학생 개발자 김현입니다. 현재 대학교 3학년으로, 새로운 기술을 익히고 프로젝트에 적용하며 문제 해결의 즐거움을 알아가고 있습니다. 빠르게 변화하는 세상에 적응하기 위해 매일 공부하고 있습니다.',
    },
    projects: {
      featuredTitle: 'Featured',
      featuredSpan: 'Projects',
      worksTitle: 'My',
      worksSpan: 'Works',
      idea: '아이디어 (구현 의도)',
      solution: '구현 방법',
      code: 'Code',
      overview: 'Overview',
      challenges: 'Technical Challenges',
      learnings: 'Key Learnings',
      items: {
        family: {
          title: '가족 소통을 위한 웹',
          label: 'Personal Project',
          problem: '가족들이 단순한 채팅방 이상으로 서로의 일상과 계획, 미래에 대해 기록할 수 있는 웹 소통 공간을 만들고자 했습니다.',
          solution: 'React와 Next.js 환경에서 실시간 게시판, 사진첩, 가족 캘린더 기능을 통합하여 가족만의 전용 플랫폼을 구축했습니다.',
          overview: '단순한 SNS를 넘어 가족 구성원들이 소중한 순간을 기록하고 공유할 수 있는 프라이빗한 플랫폼입니다.',
          challenges: [
            'Firebase를 활용한 실시간 데이터 동기화 구현',
            '다양한 기기에서의 반응형 캘린더 드래그 앤 드롭 구현',
            'Next.js의 SSR을 활용한 SEO 및 초기 로딩 성능 최적화'
          ],
          learnings: [
            '상태 관리 라이브러리 없이 Context API만으로 복잡한 전역 상태를 다루는 방법',
            'NoSQL 데이터베이스 설계 및 보안 규칙 설정의 중요성',
            '사용자 경험을 고려한 점진적 웹 앱(PWA) 도입 과정'
          ]
        },
        empty: {
          title: '솔직히 아직 한게 없습니다',
          description: '열심히 살게요 😅',
          overview: '현재는 비어있지만, 앞으로 채워나갈 미래의 프로젝트 공간입니다.',
          challenges: ['아직 시작하지 않은 것에 대한 두려움 극복'],
          learnings: ['지금 바로 시작하는 것이 가장 중요하다는 깨달음']
        },
        arsenal: {
          title: '아스날 FC 화이팅',
          description: '제발 우승하자',
          overview: '축구 팬으로서의 열정을 데이터 시각화로 풀어낼 예정인 프로젝트입니다.',
          challenges: ['실시간 경기 데이터 API 연동', '복잡한 리그 순위 산출 로직 구현'],
          learnings: ['데이터 시각화 라이브러리(D3.js) 활용 능력', 'API 레이트 리밋 해결 방안']
        }
      }
    },
    skills: {
      title: 'My',
      span: 'Skills',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        learning: 'Learning'
      },
      items: {
        frontend: ['내가 뭘 할줄알지...'],
        backend: ['얘도 좀...'],
        learning: ['Algorithm', 'General CS', 'Mobile App Dev', 'DataBase']
      }
    },
    contact: {
      title: 'Contact',
      span: 'Me',
      message: '함께 하고 싶은 프로젝트가 있거나 궁금한 점이 있다면 언제든 연락주세요.',
      emailLabel: 'Email me at',
      submit: 'Send Message',
      placeholderName: 'Your Name',
      placeholderMessage: 'Your Message',
    }
  },
  en: {
    nav: {
      home: 'Home',
      featured: 'Featured',
      skills: 'Skills',
      portfolio: 'Works',
      contact: 'Contact',
    },
    personal: {
      name: 'Hyun Kim'
    },
    common: {
      name: 'Hyun Kim',
    },
    hero: {
      title: 'Hyun Kim | Portfolio',
      subtitle: 'Portfolio of Hyun Kim, a student developer who enjoys new challenges.',
      greeting: 'Hello,',
      iam: 'I am ',
      suffix: '.',
      tagline: '@hrxlou',
      description: 'I am Hyun Kim, a student developer. I am currently a junior in university, enjoying the pleasure of solving problems while learning and applying new technologies. I study every day to adapt to the fast-changing world.',
    },
    projects: {
      featuredTitle: 'Featured',
      featuredSpan: 'Projects',
      worksTitle: 'My',
      worksSpan: 'Works',
      idea: 'Goal (Intention)',
      solution: 'Implementation',
      code: 'Code',
      overview: 'Overview',
      challenges: 'Technical Challenges',
      learnings: 'Key Learnings',
      items: {
        family: {
          title: 'Web for Family Communication',
          label: 'Personal Project',
          problem: 'I wanted to create a web communication space where family members could record their daily lives, plans, and futures beyond a simple chat room.',
          solution: 'Built a dedicated platform for families integrating real-time boards, photo albums, and family calendars in a React and Next.js environment.',
          overview: 'More than just SNS, it is a private platform where family members can record and share precious moments.',
          challenges: [
            'Implementation of real-time data synchronization using Firebase',
            'Responsive calendar with drag-and-drop support across devices',
            'SEO and initial loading optimization using Next.js SSR'
          ],
          learnings: [
            'Managing complex global state using only Context API without extra libraries',
            'Importance of NoSQL database design and security rules',
            'Progressive Web App (PWA) adoption process for enhanced UX'
          ]
        },
        empty: {
          title: 'To be honest, I haven\'t done much yet',
          description: 'I\'ll work hard 😅',
          overview: 'Currently empty, but it is a space for future projects to be filled.',
          challenges: ['Overcoming the fear of things not yet started'],
          learnings: ['Realizing that starting right now is the most important thing']
        },
        arsenal: {
          title: 'Come on Arsenal FC!',
          description: 'Please win the title',
          overview: 'A project that will express passion as a football fan through data visualization.',
          challenges: ['Integration with real-time match data APIs', 'Implementation of complex league table calculation logic'],
          learnings: ['Ability to utilize data visualization libraries (D3.js)', 'Handling API rate limits']
        }
      }
    },
    skills: {
      title: 'My',
      span: 'Skills',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        learning: 'Learning'
      },
      items: {
        frontend: ['What can I do...'],
        backend: ['This too...'],
        learning: ['Algorithm', 'General CS', 'Mobile App Dev', 'DataBase']
      }
    },
    contact: {
      title: 'Contact',
      span: 'Me',
      message: 'If you have a project you\'d like to work on together or have any questions, feel free to contact me.',
      emailLabel: 'Email me at',
      submit: 'Send Message',
      placeholderName: 'Your Name',
      placeholderMessage: 'Your Message',
    }
  }
};
export const getTranslation = (lang: Language, path: string): any => {
  const keys = path.split('.');
  let result: any = translations[lang];
  
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      return path;
    }
  }
  
  return result !== undefined ? result : path;
};
