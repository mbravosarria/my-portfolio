import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navbar, { INavbar } from './Navbar';
import { mockNavbarProps } from './Navbar.mocks';

export default {
  title: 'templates/Navbar',
  component: Navbar,
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockNavbarProps.base,
} as INavbar;
