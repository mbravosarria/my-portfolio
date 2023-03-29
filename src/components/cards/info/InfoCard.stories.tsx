import { ComponentMeta, ComponentStory } from '@storybook/react';
import InfoCard, { IInfoCard } from './InfoCard';
import { mockInfoCardProps } from './InfoCard.mocks';

export default {
  title: 'cards/InfoCard',
  component: InfoCard,
  argTypes: {},
} as ComponentMeta<typeof InfoCard>;

const Template: ComponentStory<typeof InfoCard> = (args) => (
  <InfoCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockInfoCardProps.base,
} as IInfoCard;
