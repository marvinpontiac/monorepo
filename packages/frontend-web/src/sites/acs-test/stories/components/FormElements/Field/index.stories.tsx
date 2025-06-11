import { composeStories, type Meta, type StoryObj } from '@storybook/react';

// reuse stories
import * as inputStories from '../Input/index.stories';
const { Placeholder } = composeStories(inputStories);

import * as labelStories from '../Label/index.stories';
const { OptionalLabel } = composeStories(labelStories);

import * as selectStories from '../Select/index.stories';
const { Select } = composeStories(selectStories);

import * as errorStories from '../InlineError/index.stories';
const { InlineError } = composeStories(errorStories);

const meta: Meta = {
  title: 'Components/FormElements/Field',
  tags: ['autodocs'],
  render: (args) => (
    <>
      <div className="acs-test-form-field">
        <OptionalLabel {...args.labelOne} />
        <Placeholder {...args.fieldOne} />
      </div>
      <div className="acs-test-form-field">
        <OptionalLabel {...args.labelTwo} />
        <Select {...args.fieldTwo} />
        <InlineError />
      </div>
    </>
  ),
};

export default meta;

type Story = StoryObj;

export const CustomCheckbox: Story = {
  args: {
    labelOne: {
      for: "textbox12345"
    },
    fieldOne: {
      id: "textbox12345",
    },
    labelTwo: {
      for: "select12345"
    },
    fieldTwo: {
      id: "select12345",
    }
  }
} satisfies Story;
