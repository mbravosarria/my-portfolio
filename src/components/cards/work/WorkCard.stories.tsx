import { ComponentMeta, ComponentStory } from '@storybook/react';
import WorkCard, { IWorkCard } from './WorkCard';
import { mockWorkCardProps } from './WorkCard.mocks';

export default {
  title: 'cards/WorkCard',
  component: WorkCard,
  argTypes: {},
} as ComponentMeta<typeof WorkCard>;

const Template: ComponentStory<typeof WorkCard> = (args) => (
  <WorkCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockWorkCardProps.base,
} as IWorkCard;
