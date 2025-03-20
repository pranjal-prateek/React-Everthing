import React from "react";
import StarPattern from "../Machine Coding/Star Pattern/StarPattern";

export default {
  title: "Components/StarPattern",
  component: StarPattern,
  argTypes: {
    totalStars: { control: { type: "number", min: 1, max: 10 } },
    initialRating: { control: { type: "number", min: 0, max: 10 } },
    starSize: { control: "text" },
    filledColor: { control: "color" },
    emptyColor: { control: "color" },
    onRatingChange: { action: "rating changed" },
  },
};

const Template = (args) => <StarPattern {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalStars: 5,
  initialRating: 3,
  starSize: "24px",
  filledColor: "red",
  emptyColor: "black",
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  totalStars: 5,
  initialRating: 4,
  starSize: "30px",
  filledColor: "gold",
  emptyColor: "gray",
};

export const SmallStars = Template.bind({});
SmallStars.args = {
  totalStars: 5,
  initialRating: 2,
  starSize: "16px",
  filledColor: "blue",
  emptyColor: "lightgray",
};
