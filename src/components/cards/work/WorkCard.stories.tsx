import { ComponentMeta, ComponentStory } from '@storybook/react';
import WorkCard, { IWorkCard } from './WorkCard';
import { mockWorkCardProps } from './WorkCard.mocks';
import WorkCardSkeleton from './WorkCard.skeleton';

export default {
  title: 'cards/WorkCard',
  component: WorkCard,
  argTypes: {},
} as ComponentMeta<typeof WorkCard>;

const Template: ComponentStory<typeof WorkCard> = (args) => (
  <div className="flex">
    <WorkCard {...args} />
    <WorkCardSkeleton />
  </div>
);

export const Base = Template.bind({});

Base.args = {
  ...mockWorkCardProps.base,
} as IWorkCard;
