import { ComponentMeta, ComponentStory } from '@storybook/react';
import ExperienceCard, { IExperienceCard } from './ExperienceCard';
import { mockExperienceCardProps } from './ExperienceCard.mocks';

export default {
  title: 'cards/ExperienceCard',
  component: ExperienceCard,
  argTypes: {},
} as ComponentMeta<typeof ExperienceCard>;

const Template: ComponentStory<typeof ExperienceCard> = (args) => (
  <ExperienceCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockExperienceCardProps.base,
} as IExperienceCard;
