import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/FormElements/Checkbox',
  tags: ['autodocs'],
  render: (args) => (
    <>
      <input
        className="acs-test-form-checkbox"
        type="checkbox"
        id="CustomCheckbox"
        name={args.name}
        maxLength={args.maxLength}
        minLength={args.minLength}
        pattern={args.pattern}
        required={args.required}
        aria-aria-required={args.required}
        aria-describedby={args.describedby}
        autoComplete={args.autoComplete}
        placeholder={args.placeholder}
        defaultValue={args.defaultValue}
      />
      <label htmlFor="CustomCheckbox" className="acs-test-form-checkbox__label">
        Custom checkbox selection
      </label>
    </>
  ),
};

export default meta;

type Story = StoryObj;

export const CustomCheckbox: Story = {} satisfies Story;
