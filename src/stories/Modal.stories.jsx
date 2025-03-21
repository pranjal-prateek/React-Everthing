import React, { useState } from 'react';
import CustomModal from '../Machine Coding/Modal/Modal';

export default {
  title: 'Components/CustomModal',
  component: CustomModal,
  argTypes: {
    title: { control: 'text', defaultValue: 'Sample Modal Title' },
    description: { control: 'text', defaultValue: 'This is a sample modal description.' },
    handleClose: { action: 'closed' },
    children: { control: 'text', defaultValue: 'This is modal content.' },
  },
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    args.handleClose();
  };

  return (
    <>
      {isOpen && <CustomModal {...args} handleClose={handleClose}>{args.children}</CustomModal>}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Default Modal Title',
  description: 'This is a description for the default modal.',
  children: 'Default Modal Content',
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  title: 'Custom Content Modal',
  description: 'This modal has custom content.',
  children: <button onClick={() => alert('Button Clicked')}>Click Me</button>,
};
