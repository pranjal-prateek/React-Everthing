import React from 'react';
import ProgressBar from '../Machine Coding/ProgressBar/ProgressBar';

// Default export with component info
export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
};

// Template to render the component
const Template = (args) => <ProgressBar {...args} />;

// Default ProgressBar
export const Default = Template.bind({});
Default.args = {};

// Custom ProgressBar Example
export const CustomStartValue = Template.bind({});
CustomStartValue.args = {
  startValue: 30,
};

// Infinite ProgressBar (Demo Only)
export const InfiniteProgress = () => <ProgressBar />;
