import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/FormElements/Select',
  tags: ['autodocs'],
  render: (args) => (
    <select className='acs-test-form-select' name={args.name} id={args.id}>
      <option value="optionOne">Option Number 1</option>
      <option value="optionTwo">Option Number 2</option>
      <option value="optionThree">Option Number 3</option>
      <option value="optionFour">Option Number 4</option>
    </select>
  ),
};

export default meta;

type Story = StoryObj;

export const Select: Story = {} satisfies Story;
