import { ComponentMeta, ComponentStory } from '@storybook/react';
import Skills, { ISkills } from './Skills';
import { mockSkillsProps } from './Skills.mocks';

export default {
  title: 'sections/Skills',
  component: Skills,
  argTypes: {},
} as ComponentMeta<typeof Skills>;

const Template: ComponentStory<typeof Skills> = () => <Skills />;

export const Base = Template.bind({});

Base.args = {
  ...mockSkillsProps.base,
} as ISkills;
