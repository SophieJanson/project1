import React from 'react';
import { Meta, Story } from '@storybook/react';
import Die, {  DieProps } from './Die';

export default {
    title: 'Example/Die',
    component: Die,
  } as Meta;

const Template: Story<DieProps> = (args) => <Die {...args} />;

export const DieStory = Template.bind({});