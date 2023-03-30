import { IWorkCard } from './WorkCard';

const base: IWorkCard = {
  image: '/about-test.png',
  title: 'Occaecat in voluptate',
  description:
    'Eu fugiat reprehenderit nisi officia ea deserunt magna aliquip aliquip. Nisi ipsum ea commodo aliquip excepteur velit ad pariatur. Excepteur mollit ea dolor pariatur ut.',
  projectLink: 'https://www.google.com',
  codeLink: 'https://www.google.com',
  tags: ['React', 'Next js', 'Sanity'],
};

export const mockWorkCardProps = {
  base,
};
