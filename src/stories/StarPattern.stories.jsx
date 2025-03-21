import React, { useState } from 'react';
import StarPattern from '../Machine Coding/Star Pattern/StarPattern';

export default {
  title: 'Components/StarPattern',
  component: StarPattern,
  argTypes: {
    totalStars: { control: { type: 'number' }, defaultValue: 5 },
    initialRating: { control: { type: 'number' }, defaultValue: 0 },
    starSize: { control: { type: 'text' }, defaultValue: '24px' },
    filledColor: { control: { type: 'color' }, defaultValue: 'red' },
    emptyColor: { control: { type: 'color' }, defaultValue: 'black' },
    onRatingChange: { action: 'ratingChanged' },
  },
};

export const Default = (args) => <StarPattern {...args} />;

export const CustomColors = (args) => <StarPattern {...args} />;
CustomColors.args = {
  filledColor: 'blue',
  emptyColor: 'gray',
};

export const LargeStars = (args) => <StarPattern {...args} />;
LargeStars.args = {
  starSize: '40px',
};

export const WithInitialRating = (args) => <StarPattern {...args} />;
WithInitialRating.args = {
  initialRating: 3,
};

export const DynamicRating = (args) => {
  const [rating, setRating] = useState(args.initialRating);
  return <StarPattern {...args} initialRating={rating} onRatingChange={setRating} />;
};

