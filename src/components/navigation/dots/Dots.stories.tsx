import { ComponentMeta, ComponentStory } from '@storybook/react';
import Dots, { IDots } from './Dots';
import { mockDotsProps } from './Dots.mocks';

export default {
  title: 'navigation/Dots',
  component: Dots,
  argTypes: {},
} as ComponentMeta<typeof Dots>;

const Template: ComponentStory<typeof Dots> = (args) => <Dots {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockDotsProps.base,
} as IDots;
