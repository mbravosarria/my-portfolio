import ExperienceCard from '../../cards/experience/ExperienceCard';
import SkillCard from '../../cards/skill/SkillCard';

export interface ISkills {}

const skills = [
  {
    icon: '/react.png',
    name: 'React',
  },
  {
    icon: '/react.png',
    name: 'React',
  },
  {
    icon: '/react.png',
    name: 'React',
  },
  {
    icon: '/react.png',
    name: 'React',
  },
  {
    icon: '/react.png',
    name: 'React',
  },
  {
    icon: '/react.png',
    name: 'React',
  },
  {
    icon: '/react.png',
    name: 'React',
  },
  {
    icon: '/react.png',
    name: 'React',
  },
  {
    icon: '/react.png',
    name: 'React',
  },
  {
    icon: '/react.png',
    name: 'React',
  },
  {
    icon: '/react.png',
    name: 'React',
  },
  {
    icon: '/react.png',
    name: 'React',
  },
  {
    icon: '/react.png',
    name: 'React',
  },
  {
    icon: '/react.png',
    name: 'React',
  },
  {
    icon: '/react.png',
    name: 'React',
  },
  {
    icon: '/react.png',
    name: 'React',
  },
  {
    icon: '/react.png',
    name: 'React',
  },
  {
    icon: '/react.png',
    name: 'React',
  },
  {
    icon: '/react.png',
    name: 'React',
  },
  {
    icon: '/react.png',
    name: 'React',
  },
  {
    icon: '/react.png',
    name: 'React',
  },
  {
    icon: '/react.png',
    name: 'React',
  },
];

const experiences = [
  {
    date: 'Proident nostrud',
    role: 'Dolor aliqua non quis cillum irure enim veniam pariatur aliqua.',
    company:
      'Aliquip nisi ad do laboris in non velit sit proident ut voluptate.',
    description:
      'Non occaecat dolor nisi exercitation proident id mollit excepteur irure excepteur velit nisi. Minim esse et nisi dolore mollit quis. Quis pariatur dolor adipisicing fugiat eiusmod officia anim mollit do. Laborum sunt duis proident excepteur id sunt proident cillum qui.',
    tags: ['tailwindcss', 'eCommerce', 'nodejs', 'react', 'next js'],
  },
  {
    date: 'Proident nostrud',
    role: 'Dolor aliqua non quis cillum irure enim veniam pariatur aliqua.',
    company:
      'Aliquip nisi ad do laboris in non velit sit proident ut voluptate.',
    description:
      'Non occaecat dolor nisi exercitation proident id mollit excepteur irure excepteur velit nisi. Minim esse et nisi dolore mollit quis. Quis pariatur dolor adipisicing fugiat eiusmod officia anim mollit do. Laborum sunt duis proident excepteur id sunt proident cillum qui.',
    tags: ['tailwindcss', 'eCommerce', 'nodejs', 'react', 'next js'],
  },
  {
    date: 'Proident nostrud',
    role: 'Dolor aliqua non quis cillum irure enim veniam pariatur aliqua.',
    company:
      'Aliquip nisi ad do laboris in non velit sit proident ut voluptate.',
    description:
      'Non occaecat dolor nisi exercitation proident id mollit excepteur irure excepteur velit nisi. Minim esse et nisi dolore mollit quis. Quis pariatur dolor adipisicing fugiat eiusmod officia anim mollit do. Laborum sunt duis proident excepteur id sunt proident cillum qui.',
    tags: ['tailwindcss', 'eCommerce', 'nodejs', 'react', 'next js'],
  },
  {
    date: 'Proident nostrud',
    role: 'Dolor aliqua non quis cillum irure enim veniam pariatur aliqua.',
    company:
      'Aliquip nisi ad do laboris in non velit sit proident ut voluptate.',
    description:
      'Non occaecat dolor nisi exercitation proident id mollit excepteur irure excepteur velit nisi. Minim esse et nisi dolore mollit quis. Quis pariatur dolor adipisicing fugiat eiusmod officia anim mollit do. Laborum sunt duis proident excepteur id sunt proident cillum qui.',
    tags: ['tailwindcss', 'eCommerce', 'nodejs', 'react', 'next js'],
  },
];

const Skills: React.FC<ISkills> = () => {
  return (
    <section
      id="skills"
      className="flex flex-1 flex-col items-center justify-center bg-white-color pt-24"
    >
      <h2 className="text-xl font-bold text-black-color sm:text-4xl md:text-5xl">
        Skills & Experiences
      </h2>
      <div className="mt-12 flex w-4/5 flex-col md:flex-row">
        <div className="mr-0 flex flex-1 flex-wrap items-center justify-center md:mr-20 md:items-start md:justify-start">
          {skills.map((item, index) => (
            <SkillCard {...{ ...item }} key={index} />
          ))}
        </div>
        <div className="mt-8 flex flex-1 flex-col items-start justify-start space-y-4 md:mt-0">
          {experiences.map((item, index) => (
            <ExperienceCard {...{ ...item }} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
