export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Christelle Marie Salundaguit',
    position: 'Secretary of Aeon Tower by CMC',
    img: 'assets/tine.png',
    review:
      'Famerich and his team provided a comprehensive solution for our business, combining full business marketing strategies with cutting-edge web development. The results have been exceptional, and our online presence has never been stronger. Highly recommended!',
},
{
    id: 2,
    name: 'Earl Denuna Ares',
    position: 'Teacher',
    img: 'assets/ares.png',
    review:
      'Famerich agency developed a highly functional and user-friendly assessment app tailored to our specific needs. It has streamlined our processes and improved the way we evaluate student performance. Excellent work and dedication!',
},

  {
    id: 3,
    name: 'Dan Miguel Gentica',
    position: 'Owner of Panlasang Pinoy ',
    img: 'assets/dan.png',
    review:
      'I can’t say enough good things about The Famerich agency. He was able to take our complex project requirements and turn them into a seamless, functional website. Their problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'John Dakultor',
    position: 'Owner of a Local Gold Company',
    img: 'assets/john.png',
    review:
      'Famerich agency was a pleasure to work with. They understood our requirements perfectly and delivered a website that exceeded our expectations. Their skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Grab-bridge - Gold payment portal',
    desc: 'Gold Bridge is a safe and reliable payment portal for gold traders and their investors.',
    subdesc:
      'Built as a unique payment portal web app with React.js, MatetialUI, Javascript, Node.js, Grab-bridge is designed for reliable and safe transactions.',
    href: 'https://grabbridge.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/goldblue-logo.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'MaterialUI',
        path: 'assets/mui.png',
      },
      {
        id: 3,
        name: 'javascript',
        path: '/assets/js.png',
      },
    ],
  },
  {
    title: 'SERA- Assessment app for students',
    desc: 'sera is an assessment app for student that is on kiosk mode when they take their tests.',
    subdesc:
      'With SERA, students can experience the focus type of assessment, where teachers can create assessments through their fingertips.',
    href: 'https://youtube.com/shorts/dncSel9G6xA',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/SERA.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      
    ],
  },
  
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Web Development',
    pos: 'React.js-Node.js',
    // duration: '2022 - Present',
    title: "Currently utilizing React.js and Node.js to develop dynamic and responsive web applications, focusing on seamless user experiences.",
    icon: '/assets/web.png',
    animation: 'victory',
},
{
    id: 2,
    name: 'Mobile Developer',
    pos: 'React Native',
    // duration: '2020 - 2022',
    title: "Building cross-platform mobile applications using React Native, delivering high-performance solutions for Android and iOS platforms.",
    icon: '/assets/mobile1.png',
    animation: 'clapping',
},
{
    id: 3,
    name: 'Digital Marketing',
    pos: 'Marketing',
    // duration: '2019 - 2020',
    title: "Implementing cutting-edge digital marketing strategies and tools to enhance brand presence and drive online engagement.",
    icon: '/assets/digitalM.png',
    animation: 'salute',
},

];
