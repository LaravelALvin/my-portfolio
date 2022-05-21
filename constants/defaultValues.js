export const appBaseUrl = process.env.NEXT_PUBLIC_APP_URL;
export const fileBaseUrl = process.env.NEXT_PUBLIC_API_URL;
export const logoPath = '/assets/logos/logo.png';
export const logoButtonPath = '/assets/logos/logo-button.png';
export const siteTitle = 'ALvin Fernando - Fullstack, Web and Mobile Developer';
export const siteMetaDescription =
  "Hello, I am ALvin. I'm a fullstack Web and Mobile Developer";
export const devName = 'ALvin Fernando';
export const devNick = 'Alvin';
export const socialLinks = {
  buymeacoffee: 'https://www.buymeacoffee.com/alvinf',
  github: 'https://github.com/LaravelALvin',
  twitter: 'https://twitter.com/DddyAlvin',
  linkedin: 'https://www.linkedin.com/',
  instagram: 'https://instagram.com/alvinthoughts',
  facebook: 'https://facebook.com/TheOfficialALvin',
  mail: 'alvinfernando404@gmail.com',
};
export const showResume = true;
export const resumeLink = '#';
export const callToAction =
  'I’m a Driven student leveraging studies in Information Technology seeking real-world experience as a Computer Programmer. Offers strong interpersonal and task prioritization skills.';
export const copyrightText = '© 2021 ALvin. All Rights Reserved';
export const copyrightUrl = 'https://alvinf.vercel.app/';
export const aboutExcerpt =
  'I design and develop one-of-a-kind, award-winning websites and mobile applications! I can also handle your brand\'s promotion on social media and through search engines. I have worked for both startups and established businesses. Learn more about who I am and how I transform concepts into reality.';
export const portfolioDescription =
'I design and develop one-of-a-kind, award-winning websites and mobile applications! I can also handle your brand\'s promotion on social media and through search engines. I have worked for both startups and established businesses. Learn more about who I am and how I transform concepts into reality.';
export const blogDescription =
  'Articles brimming with actionable advice and insights on how smart design may benefit your business.';

export const portfolioType = {
  design: 'UI/UX Design',
  webDesign: 'Website Design',
  webDevelopment: 'Web Development',
  androidDevelopement: 'Android Development',
};

export const portfolioFilters = [
  {
    label: 'All',
    type: 'all',
  },
  {
    label: 'UI/UX Design',
    type: 'design',
  },
  {
    label: 'Website Design',
    type: 'webDesign',
  },
  {
    label: 'Web Development',
    type: 'webDevelopment',
  },
];

export const portfolioGridData = [
  {
    title: 'Afoods - Food Delivery System',
    uri: 'Afoods',
    featured: true,
    type: 'androidDevelopement',
    tools: {
      list: ['Android', 'Firebase', 'Firestore', 'Flutter'],
    },
    viewOrder: 16,
    thumb: {
      url: '/assets/img/portfolio-1.jpg',
    },
  },
  {
    title: 'Some Heroes Wear Lab Coats',
    uri: 'demo-project',
    featured: true,
    type: 'webDesign',
    tools: {
      list: ['HTML5/CSS3', 'JavaScript', 'WordPress CMS', 'PHP'],
    },
    viewOrder: 15,
    thumb: {
      url: '/assets/img/portfolio-2.jpg',
    },
  },
  {
    title: 'Feedback Positive Mind UI',
    uri: 'demo-project',
    featured: true,
    type: 'design',
    tools: {
      list: ['Adobe Creative Suite', 'Corel Draw'],
    },
    viewOrder: 14,
    thumb: {
      url: '/assets/img/portfolio-3.jpg',
    },
  },
  {
    title: 'Grow Your Business With Us',
    uri: 'demo-project',
    featured: true,
    type: 'webDevelopment',
    tools: {
      list: ['HTML5/CSS3', 'ReactJS', 'NodeJS', 'PHP'],
    },
    viewOrder: 13,
    thumb: {
      url: '/assets/img/portfolio-4.jpg',
    },
  },
  {
    title: 'UI/UX Design Landing Page',
    uri: 'demo-project',
    featured: false,
    type: 'design',
    tools: {
      list: ['Adobe Creative Suite', 'Corel Draw'],
    },
    viewOrder: 12,
    thumb: {
      url: '/assets/img/portfolio-1.jpg',
    },
  },
  {
    title: 'Some Heroes Wear Lab Coats',
    uri: 'demo-project',
    featured: false,
    type: 'webDesign',
    tools: {
      list: ['HTML5/CSS3', 'JavaScript', 'WordPress CMS', 'PHP'],
    },
    viewOrder: 11,
    thumb: {
      url: '/assets/img/portfolio-2.jpg',
    },
  },
  {
    title: 'Feedback Positive Mind UI',
    uri: 'demo-project',
    featured: false,
    type: 'design',
    tools: {
      list: ['Adobe Creative Suite', 'Corel Draw'],
    },
    viewOrder: 10,
    thumb: {
      url: '/assets/img/portfolio-3.jpg',
    },
  },
  {
    title: 'Grow Your Business With Us',
    uri: 'demo-project',
    featured: false,
    type: 'webDevelopment',
    tools: {
      list: ['HTML5/CSS3', 'ReactJS', 'NodeJS', 'PHP'],
    },
    viewOrder: 9,
    thumb: {
      url: '/assets/img/portfolio-4.jpg',
    },
  },
  {
    title: 'UI/UX Design Landing Page',
    uri: 'demo-project',
    featured: false,
    type: 'design',
    tools: {
      list: ['Adobe Creative Suite', 'Corel Draw'],
    },
    viewOrder: 8,
    thumb: {
      url: '/assets/img/portfolio-1.jpg',
    },
  },
  {
    title: 'Some Heroes Wear Lab Coats',
    uri: 'demo-project',
    featured: false,
    type: 'webDesign',
    tools: {
      list: ['HTML5/CSS3', 'JavaScript', 'WordPress CMS', 'PHP'],
    },
    viewOrder: 7,
    thumb: {
      url: '/assets/img/portfolio-2.jpg',
    },
  },
  {
    title: 'Feedback Positive Mind UI',
    uri: 'demo-project',
    featured: false,
    type: 'design',
    tools: {
      list: ['Adobe Creative Suite', 'Corel Draw'],
    },
    viewOrder: 6,
    thumb: {
      url: '/assets/img/portfolio-3.jpg',
    },
  },
  {
    title: 'Grow Your Business With Us',
    uri: 'demo-project',
    featured: false,
    type: 'webDevelopment',
    tools: {
      list: ['HTML5/CSS3', 'ReactJS', 'NodeJS', 'PHP'],
    },
    viewOrder: 5,
    thumb: {
      url: '/assets/img/portfolio-4.jpg',
    },
  },
  {
    title: 'UI/UX Design Landing Page',
    uri: 'demo-project',
    featured: false,
    type: 'design',
    tools: {
      list: ['Adobe Creative Suite', 'Corel Draw'],
    },
    viewOrder: 4,
    thumb: {
      url: '/assets/img/portfolio-1.jpg',
    },
  },
  {
    title: 'Some Heroes Wear Lab Coats',
    uri: 'demo-project',
    featured: false,
    type: 'webDesign',
    tools: {
      list: ['HTML5/CSS3', 'JavaScript', 'WordPress CMS', 'PHP'],
    },
    viewOrder: 3,
    thumb: {
      url: '/assets/img/portfolio-2.jpg',
    },
  },
  {
    title: 'Feedback Positive Mind UI',
    uri: 'demo-project',
    featured: false,
    type: 'design',
    tools: {
      list: ['Adobe Creative Suite', 'Corel Draw'],
    },
    viewOrder: 2,
    thumb: {
      url: '/assets/img/portfolio-3.jpg',
    },
  },
  {
    title: 'Grow Your Business With Us',
    uri: 'demo-project',
    featured: false,
    type: 'webDevelopment',
    tools: {
      list: ['HTML5/CSS3', 'ReactJS', 'NodeJS', 'PHP'],
    },
    viewOrder: 1,
    thumb: {
      url: '/assets/img/portfolio-4.jpg',
    },
  },
];

export const portfolioSingle = {
  title: 'Afoods',
  uri: 'afoods',
  featured: true,
  type: 'androidDevelopement',
  viewOrder: 14,
  thumb: {
    url: '/assets/img/portfolio-1.jpg',
  },
  parallax: {
    url: '/assets/img/portfolio-1.jpg',
  },
  tools: {
    list: ['Flutter', 'Dart', 'Firebase', 'Firestore'],
  },
  roles: {
    list: ['Create Meal Plans','Browse Tasty Foods', 'Schedule Delivery', 'Pin Google Map Location'],
  },
  shortDescrip:
    'Afoods is a social platform for food SME\'s to onboard their tasty and nutritious food in a low prices where users around the globe can view online.',
  content:
    "Afoods is a startup in the Philippines aiming to help small and mid-size enterprise (SME) to recovery from the impact of covid-19. The application will become a flatform for SME\'s to showcase their tasty and affordable foods. SME\'s are worriless regarding with thier customers since they make an access to the market and can operate at the comfort of their home.\n \nThe goal of this research is to develop a subscription-based food delivery system by offering its users their chosen meals of the day, the system is capable of providing a long-term service to its subscribers. Users may create meal plans based on thier food preferences and subscribe on it. ",
  previewUrl: 'facebook.com/theofficialalvin',
  githubUrl: '#',
  gallery: [
    {
      url: '/assets/img/portfolio-1.jpg',
    },
    {
      url: '/assets/img/portfolio-2.jpg',
    },
    {
      url: '/assets/img/portfolio-3.jpg',
    },
  ],
};

export const blogList = [
  {
    uri: 'demo-article',
    title: 'Somewhere in America',
    publishDateTime: '2021-10-11T20:26:46.005Z',
    shortDescrip:
      'The challenge was to portray the age of Julius Caesar in a way that was true to the history and yet an utterly joyous recalibration of it. Brutality had to be portrayed as knockabout; a world of mud and gore and fire repainted in primary colours. Uderzo, who was colour blind, much preferred the clear line to any hint of shade.',
  },
  {
    uri: 'demo-article',
    title: 'Alvin is still Typing',
    publishDateTime: '2021-10-11T20:26:46.005Z',
    shortDescrip:
      'The challenge was to portray the age of Julius Caesar in a way that was true to the history and yet an utterly joyous recalibration of it. Brutality had to be portrayed as knockabout; a world of mud and gore and fire repainted in primary colours. Uderzo, who was colour blind, much preferred the clear line to any hint of shade.',
  },
];

export const blogSingle = {
  uri: 'demo-article',
  title: 'Somewhere in America, ALvin is still Typing',
  publishDateTime: '2021-10-11T20:26:46.005Z',
  shortDescrip:
    'The challenge was to portray the age of Julius Caesar in a way that was true to the history and yet an utterly joyous recalibration of it. Brutality had to be portrayed as knockabout; a world of mud and gore and fire repainted in primary colours. Uderzo, who was colour blind, much preferred the clear line to any hint of shade.',
  content:
    'This is where the blog Article goes. The text below is just “filler content”.\n\nThe same evolution took place with Amazon Web Services, the company’s cloud computing subsidiary. It launched in 2006 as a "data storage service," but it has since become indispensable to modern tech companies — as necessary as paper clips once were but a damn sight more profitable.\n\nSo many companies rely on Amazon’s services that when the industry grows, AWS does, too. Last year, AWS alone made more money than McDonald’s. AWS is quite possibly the future of Amazon, which explains why it was everywhere at re:MARS.',
  thumb: {
    url: '/assets/img/blog.jpg',
  },
};

export const skillList = [
  'Figma',
  'Procreate',
  'Sketch',
  'InVision Studio',
  'Adobe XD',
  'Adobe Illustrator',
  'Craft',
  'Axure',
  'Proto.io',
  'Zeplin',
  'Corel Draw',
  'Axure RP',
  'Framer',
  'HTML',
  'CSS',
  'BootStrap',
  'Emotion',
  'Material UI',
  'SASS',
  'WordPress',
  'WooCommerce',
  'UI Design',
  'Prototyping',
  'Whiteboarding',
  'Design Systems',
  'Studio',
  'MockFlow',
  'Gravit Designer',
];

export const aboutMe = `I design & create unique award-winning, tailor-made websites and user interfaces! I can also take care of promotion for your brand, in social media channels and search engines. I have worked in startups as well as well-established companies. And this is where meaningful content ends. The rest of this is just random content to serve as placeholder. Edit this for your own personal need.\n\nWhen the latest instalment in Microsoft’s decades-old Flight Simulator series was first shown at the E3 video game event last year, it drew gasps from the audience. Using two petabytes of geographic data culled from Bing Maps, together with cutting-edge, machine learning algorithms running on the company’s Azure cloud computing network, the game presents a near-photorealistic depiction of the entire planet.\n\nStudents from Boston University to UCLA, from South Louisiana Community College to Northwestern University, in Facebook meme groups, and on Reddit threads. The boom of college Minecraft servers has begun. These servers have the express purpose of bringing students together and building, oftentimes focused on recreating their college campuses. Searches for Minecraft server hosting have peaked to unprecedented levels in the last few weeks, and thousands of students are discussing college servers, most notably on the Facebook group "Zoom Memes for Self Quaranteens."`;
