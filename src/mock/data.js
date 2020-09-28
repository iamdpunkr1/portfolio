import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Dipankar | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Dipankar Prasad',
  subtitle: 'I am a Jr. Computer Engineer',
  cta: 'Hire me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Jr. Computer Engineer and Hard-working Full-stack web developer with a flair for creating elegant solutions in the least amount of time.',
  paragraphTwo: 'Developed College Attendence system PWA and Online Exam Form Fillup website',
  paragraphThree: 'Passionate about building world class web applications.',
  resume: 'CV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project1.png',
    title: 'College Attendence PWA',
    info: 'Technologies Used: HTML, CSS, Javascript & Firebase.',
    info2: 'Created a Attendence management system serving the faculty and students which improved work efficiency by 40%.',
    url: 'https://aei-pwa.web.app/',
    repo: 'https://github.com/iamdpunkr1/aei-pwa', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Online Exam Form Fillup',
    info: 'Technologies Used: HTML, CSS, Javascript & Firebase.',
    info2: '',
    url: 'https://aeiformfillup.web.app/',
    repo: 'https://github.com/iamdpunkr1/Exam-formfillup', // if no repo, the button will not show up
  },

];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'iamdpunkr@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [

    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/dipankar-prasad-ba7a67197/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/iamdpunkr1',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
