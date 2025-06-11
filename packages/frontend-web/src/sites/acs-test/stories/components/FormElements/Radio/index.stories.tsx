import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/FormElements/Radio',
  tags: ['autodocs'],
  render: (args) => (
    <>
      <input
        className="acs-test-form-radio"
        type="radio"
        id="CustomRadio"
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
      <label htmlFor="CustomRadio" className="acs-test-form-radio__label">
        Custom radio selection
      </label>
    </>
  ),
};

export default meta;

type Story = StoryObj;

export const CustomRadio: Story = {} satisfies Story;
