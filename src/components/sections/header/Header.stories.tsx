import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header, { IHeader } from './Header';
import { mockHeaderProps } from './Header.mocks';

export default {
  title: 'sections/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Base = Template.bind({});

Base.args = {
  ...mockHeaderProps.base,
} as IHeader;
