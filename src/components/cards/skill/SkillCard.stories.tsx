import { ComponentMeta, ComponentStory } from '@storybook/react';
import SkillCard, { ISkillCard } from './SkillCard';
import { mockSkillCardProps } from './SkillCard.mocks';
import SkillCardSkeleton from './SkillCard.skeleton';

export default {
  title: 'cards/SkillCard',
  component: SkillCard,
  argTypes: {},
} as ComponentMeta<typeof SkillCard>;

const Template: ComponentStory<typeof SkillCard> = (args) => (
  <div className="flex flex-row items-center">
    <SkillCard {...args} />
    <SkillCardSkeleton />
  </div>
);

export const Base = Template.bind({});

Base.args = {
  ...mockSkillCardProps.base,
} as ISkillCard;
