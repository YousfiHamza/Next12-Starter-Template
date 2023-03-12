import React from 'react';
import { Story, Meta } from '@storybook/react';

import Card from './index';
import { CardProps } from './types';

export default {
  title: 'Elements/Card',
  component: Card,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: '#',
  title: 'Custom Card',
  content: 'This is the content of a Custom Card.',
};
