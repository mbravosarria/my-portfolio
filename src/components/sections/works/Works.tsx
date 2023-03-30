import { motion } from 'framer-motion';
import WorkCard from '../../../components/cards/work/WorkCard';

export interface IWorks {}

const works = [
  {
    image: '/about-test.png',
    title: 'Occaecat in voluptate',
    description:
      'Eu fugiat reprehenderit nisi officia ea deserunt magna aliquip aliquip. Nisi ipsum ea commodo aliquip excepteur velit ad pariatur. Excepteur mollit ea dolor pariatur ut.',
    projectLink: 'https://www.google.com',
    codeLink: 'https://www.google.com',
    tags: ['React', 'Next js', 'Sanity'],
  },
  {
    image: '/about-test.png',
    title: 'Occaecat in voluptate',
    description:
      'Eu fugiat reprehenderit nisi officia ea deserunt magna aliquip aliquip. Nisi ipsum ea commodo aliquip excepteur velit ad pariatur. Excepteur mollit ea dolor pariatur ut.',
    projectLink: 'https://www.google.com',
    codeLink: 'https://www.google.com',
    tags: ['React', 'Next js', 'Sanity'],
  },
  {
    image: '/about-test.png',
    title: 'Occaecat in voluptate',
    description:
      'Eu fugiat reprehenderit nisi officia ea deserunt magna aliquip aliquip. Nisi ipsum ea commodo aliquip excepteur velit ad pariatur. Excepteur mollit ea dolor pariatur ut.',
    projectLink: 'https://www.google.com',
    codeLink: 'https://www.google.com',
    tags: ['React', 'Next js', 'Sanity'],
  },
  {
    image: '/about-test.png',
    title: 'Occaecat in voluptate',
    description:
      'Eu fugiat reprehenderit nisi officia ea deserunt magna aliquip aliquip. Nisi ipsum ea commodo aliquip excepteur velit ad pariatur. Excepteur mollit ea dolor pariatur ut.',
    projectLink: 'https://www.google.com',
    codeLink: 'https://www.google.com',
    tags: ['React', 'Next js', 'Sanity'],
  },
  {
    image: '/about-test.png',
    title: 'Occaecat in voluptate',
    description:
      'Eu fugiat reprehenderit nisi officia ea deserunt magna aliquip aliquip. Nisi ipsum ea commodo aliquip excepteur velit ad pariatur. Excepteur mollit ea dolor pariatur ut.',
    projectLink: 'https://www.google.com',
    codeLink: 'https://www.google.com',
    tags: ['React', 'Next js', 'Sanity'],
  },
  {
    image: '/about-test.png',
    title: 'Occaecat in voluptate',
    description:
      'Eu fugiat reprehenderit nisi officia ea deserunt magna aliquip aliquip. Nisi ipsum ea commodo aliquip excepteur velit ad pariatur. Excepteur mollit ea dolor pariatur ut.',
    projectLink: 'https://www.google.com',
    codeLink: 'https://www.google.com',
    tags: ['React', 'Next js', 'Sanity'],
  },
];

const Works: React.FC<IWorks> = () => {
  return (
    <section
      id="work"
      className="mt-16 mb-8 flex flex-col items-center justify-center bg-primary-color"
    >
      <h2 className="text-2xl font-bold text-black-color sm:text-5xl">
        My <span className="text-secondary-color">Portfolio</span> Section
      </h2>

      <motion.div
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex flex-wrap items-center justify-center"
      >
        {works.map((item, index) => (
          <WorkCard {...{ ...item }} key={`work-${index}`} />
        ))}
      </motion.div>
    </section>
  );
};

export default Works;
