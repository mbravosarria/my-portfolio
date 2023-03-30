import { ComponentMeta, ComponentStory } from '@storybook/react';
import SkillCard, { ISkillCard } from './SkillCard';
import { mockSkillCardProps } from './SkillCard.mocks';

export default {
  title: 'cards/SkillCard',
  component: SkillCard,
  argTypes: {},
} as ComponentMeta<typeof SkillCard>;

const Template: ComponentStory<typeof SkillCard> = (args) => (
  <SkillCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSkillCardProps.base,
} as ISkillCard;
