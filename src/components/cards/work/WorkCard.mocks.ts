import { IWorkCard } from './WorkCard';

const base: IWorkCard = {
  image: {
    asset: {
      _ref: 'image-0bf702ae9dc9a512d8fa09d3b3d9915dda2551f3-2040x2040-jpg',
      _type: 'reference',
    },
  },
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
