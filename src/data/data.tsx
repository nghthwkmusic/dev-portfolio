import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';


import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
/*
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
*/
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Matt Hagan\'s Dev Portfolio',
  description: "Matt Hagan's Developer Portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Matt Hagan.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Austin Texas based <strong className="text-stone-100">Cyber Security Engineer</strong>, currently working
        at <strong className="text-stone-100">Rapid7</strong> helping clients become secure through penetration testing security audits.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch DJing and producing music as <strong className="text-stone-100">NGHTHWK</strong>,
        mountaineering in <strong className="text-stone-100">Colorado</strong> or the <strong className="text-stone-100">Pacific Northwest</strong>, or working on cool new projects (like this {' '}
        <strong className="text-stone-100">website</strong>).
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm Matt Hagan, a Software Security Engineer and Penetration Tester from Colorado. I studied at Worcester Polytechnic Institute, where I got my Bachelor of Science in electrical engineering, computer engineering, and computer science with a concentration in cyber security. As a security consultant, I conduct internal network, external network, web application, wireless, phishing, and vishing based penetration testing for top Fortune 500 companies.`,
  aboutItems: [
    {label: 'Location', text: 'Austin, Texas', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Irish / German / Czech', Icon: FlagIcon},
    {label: 'Interests', text: 'Music Production/DJing, Mountaineering, Skiiing', Icon: SparklesIcon},
    {label: 'Study', text: 'Worcester Polytechnic Institute', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Rapid7', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Penetration Testing',
    skills: [
      {
        name: 'Internal Networks',
        level: 9,
      },
      {
        name: 'External Networks',
        level: 10,
      },
      {
        name: 'Web Application',
        level: 7,
      },
      {
        name: 'Wireless Networks',
        level: 6,
      },
      {
        name: 'Electronic Social Engineering',
        level: 5,
      },
    ],
  },
  {
    name: 'Systems Engineering',
    skills: [
      {
        name: 'Terraform',
        level: 9,
      },
      {
        name: 'Kubernetes',
        level: 7,
      },
      {
        name: 'Jenkins CI/CD',
        level: 6,
      },
      {
        name: 'AWS',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Spring',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
      {
        name: 'Rust',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'React',
        level: 5,
      },
      {
        name: 'TypeScript',
        level: 4,
      },
      {
        name: 'GraphQL',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Soteria: IDS/IPS for IoT Devices',
    description: 'Securing IoT Networks Through Specification and Encryption',
    url: 'https://web.wpi.edu/Pubs/E-project/Available/E-project-051720-222250/unrestricted/Soteria_Report.pdf',
    image: porfolioImage1,
  },
  /*
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
  */
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2020',
    location: 'Worcester Polytechnic Institute',
    title: 'Bachelor of Science',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2022 - Present',
    location: 'Rapid7',
    title: 'Penetration Tester',
    content: (
      <ul>
        <li>• Consulted to top Fortune 500 companies to conduct internal, external, phishing, vishing, wireless and web app based penetration testing.</li>
        <li>• Interacted directly with client senior leadership to scope engagements, document vulnerability findings and present those findings directly to over 50 client senior leadership teams.</li>
        <li>• Worked cross functionally to expand Rapid7’s internal penetration testing team tooling.</li>
     </ul>
    ),
  },
  {
    date: 'August 2020 - December 2021',
    location: 'Rapid7',
    title: 'Software Security Engineer',
    content: (
      <ul>
        <li>• Pioneered a weekly penetration testing lab series aimed at increasing security knowledge for developers. This resulted in 11 different teams gaining first hand knowledge of an attacker’s mindset over 15 months.</li>
        <li>• Re-engineered company-wide Jenkins CI/CD pipeline utilizing VCenter and Chef configuration-as-code. This resulted in saving over 400 man hours per month across hundreds of developers.</li>
        <li>• Migrated Metasploit Pro from Ruby on Rails 4 to 5 while adhering to test-driven development standards. This resulted in the removal of 27 distinct customer-facing bugs.</li>
        <li>• Utilized Java, Spring and Terraform to implement a new feature into Insight Vulnerability Management platform that allows end-users to have custom scoped policies tailored to their network needs.</li>
     </ul>
    ),
  },
  {
    date: 'May 2019 - AUgust 2019',
    location: 'Fidelity Investments',
    title: 'Full Stack Security Developer',
    content: (
      <ul>
        <li>• Discovered a critical vulnerability within the baseboard management controllers upon penetration testing
new Intel and AMD enterprise infrastructure servers.</li>
        <li>• Upon discovery, an extensive security report was designed and delivered on the vulnerability where I
directly presented the findings to the Senior Vice President of Fidelity Investments.</li>
        <li>•  Utilized DevOps development practices in Docker, Go, Python, Bash, and AngularJS to increase
performance of cloud-based compute platforms.</li>
     </ul>
    ),
  },
  {
    date: 'August 2020 - December 2021',
    location: 'Silicon Labs',
    title: 'Applications/Core IoT Developer',
    content: (
      <ul>
        <li>• Designed and implemented a system-on-chip over-the-air update server in C for ZigBee IoT devices
resulting in a headless deployment option for EFR32 Chipsets over UART Xmodem.</li>
        <li>• Reported findings in published app note titled, “AN728: Over-the-Air Bootload Server and Client Setup”</li>
     </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    
    {
      name: 'Pearce Berry (Ex-Rapid7 Manager, Metasploit Team)',
      text: 'Matt\'s natural inclination to set goals and achieve them meshes well with Rapid7\'s focus on posative customer outcomes. He as helped to make an impact, constintly fixing bugs and adding value to Metasploit Pro and Metasploit Framework.',
      image: 'https://media.licdn.com/dms/image/C5603AQEfsEz8qy5SeA/profile-displayphoto-shrink_800_800/0/1639842284245?e=1681948800&v=beta&t=woElIQ2sL3VLAxfBq9uCnE9dnz-s8L-b4irYHO5jD2g',
    },
    
    {
      name: 'Chris Doughty (Rapid7 Manager, Dev Ops Security / FEDRAMP)',
      text: 'Matt has a strong drive for accomplishing work and a bold personality when it comes to being forthcoming and asking questions. Matt has been a strong voice in the realm of improving processes, and is fearless when grabbing new tickets. These are only a couple of the many great qualities that Matt possesses that will grow his impact and knowledge as his career progresses.',
      image: 'https://media.licdn.com/dms/image/C5603AQEZSeheSECGxQ/profile-displayphoto-shrink_800_800/0/1632836607372?e=1681948800&v=beta&t=vzhmKew93DK6CbcnlNdy1VtpfWKjP-_iB14ruJNlMOk',
    },
    {
      name: 'Evan Blair (Owner and CEO, E. Blair & Associates)',
      text: 'Matt has a strong drive not only to deliver work consistently, but is also an ace in the hole when it comes to learning quickly and developing out of the box solutions for our customers. As a systems technician, he was able help me and my team come up with custom solutions that helped remedy our customer problems and retain them as happy returning customers.',
      //image: '',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here are some other places you can find me if you ant to reach out!',
  items: [
    {
      type: ContactType.Email,
      text: 'matt@doublediamond.io',
      href: 'mailto:matt@doublediamond.io',
    },
    {
      type: ContactType.Location,
      text: 'Austin, Texas',
      href: 'https://www.google.com/maps/place/Austin/@30.2672791,-97.7397479,17z',
    },
    {
      type: ContactType.Instagram,
      text: '@themrhagan',
      href: 'https://www.instagram.com/themrhagan/',
    },
    {
      type: ContactType.Github,
      text: 'nghthwkmusic',
      href: 'https://github.com/nghthwkmusic',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/nghthwkmusic'},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/mrhagan/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/themrhagan/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/themrhagan'},
];
