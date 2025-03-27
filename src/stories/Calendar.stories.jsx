// .storybook/Calendar.stories.jsx
import React from 'react';
import Calendar from '../Machine Coding/Calendar/Calendar';

export default {
  title: 'Components/Calendar',
  component: Calendar,
};

const Template = (args) => <Calendar {...args} />;

// Default Calendar
export const Default = Template.bind({});
Default.args = {};

// Calendar with specific date
export const CustomDate = Template.bind({});
CustomDate.args = {
  initialDate: new Date(2025, 2, 15), // March 15, 2025
};
