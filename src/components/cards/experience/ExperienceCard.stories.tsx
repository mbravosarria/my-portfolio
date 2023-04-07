import { ComponentMeta, ComponentStory } from '@storybook/react';
import ExperienceCard, { IExperienceCard } from './ExperienceCard';
import { mockExperienceCardProps } from './ExperienceCard.mocks';
import ExperienceCardSkeleton from './ExperienceCard.skeleton';

export default {
  title: 'cards/ExperienceCard',
  component: ExperienceCard,
  argTypes: {},
} as ComponentMeta<typeof ExperienceCard>;

const Template: ComponentStory<typeof ExperienceCard> = (args) => (
  <div className="flex">
    <ExperienceCard {...args} />
    <ExperienceCardSkeleton />
  </div>
);

export const Base = Template.bind({});

Base.args = {
  ...mockExperienceCardProps.base,
} as IExperienceCard;
