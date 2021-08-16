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
  subtitle: 'I am the Developer you need',
  cta: 'Hire me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Web Developer with a flair for creating elegant solutions in the least amount of time.',
  paragraphTwo: 'Developed College Attendence system PWA and Online Exam Form Fillup website',
  paragraphThree: 'Passionate about building world class web applications.',
  resume: 'CV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
    {
    id: uuidv1(),
    img: 'project2.png',
    title: 'Trippernity.io Web Design',
    info: 'Technologies Used: HTML, CSS, Javascript.',
    info2: 'Redesigned the trippernity.io website and added Metamask wallet option.',
    url: 'http://www.trippernity.io//',
   // if no repo, the button will not show up
  },
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
    info2: 'Online forms provide you with an easy to implement, secure solution to gather the data you need in a consistent automated manner.User-friendly, clear and instantly editable, web forms mean you can make the move to a paperless environment in a few easy steps.',
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
      url: 'https://codepen.io/iamdpunkr1',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/iamdpunkr',
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
