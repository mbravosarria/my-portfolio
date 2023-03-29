import { ComponentMeta, ComponentStory } from '@storybook/react';
import About, { IAbout } from './About';
import { mockAboutProps } from './About.mocks';

export default {
  title: 'sections/About',
  component: About,
  argTypes: {},
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = (args) => <About {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockAboutProps.base,
} as IAbout;
