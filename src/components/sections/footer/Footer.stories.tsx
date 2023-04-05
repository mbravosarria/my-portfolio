import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer, { IFooter } from './Footer';
import { mockFooterProps } from './Footer.mocks';

export default {
  title: 'sections/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Base = Template.bind({});

Base.args = {
  ...mockFooterProps.base,
} as IFooter;
