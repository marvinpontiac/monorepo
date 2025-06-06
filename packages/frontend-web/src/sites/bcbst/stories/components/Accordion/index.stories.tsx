import { composeStories, type Meta, type StoryObj } from '@storybook/react';
import * as secondaryHeroStories from '../BigFeature/index.stories';
import data from '../FeatureCarousel/data.json';
const { BasicFeature } = composeStories(secondaryHeroStories);

const meta: Meta = {
  title: 'Components/Accordion',
  tags: ['autodocs'],
  render: (args) => {
    return (
      <div className={"bcbst-accordion " + (args.background === "gray" ? "bcbst-accordion--gray" : "")}>
        <div className="bcbst-grid">
          <div className="bcbst-grid__col-12">
            <h2 className="bcbst-accordion__title">Product Selection Tools</h2>
            <div className="bcbst-rich-text">
              <p>
                Find the suitable models for your application and access comprehensive product information for your Refrigeration products.
              </p>
            </div>
          </div>
          <div className="bcbst-grid__col-12">
            <details open>
              <summary>
                Service Centers
                <svg focusable="false"><use href="/bcbst-icons.svg#bcbst-icon--global_accordion-collapse"></use></svg>
              </summary>
              <div className="bcbst-accordion__content">
                <div className="bcbst-content-area">
                  <BasicFeature {...args.data} />
                </div>
              </div>
            </details>
            <details>
              <summary>
                Service Centers
                <svg focusable="false"><use href="/bcbst-icons.svg#bcbst-icon--global_accordion-expand"></use></svg>
              </summary>
              <div className="bcbst-accordion__content">
                <div className="bcbst-content-area">
                  <BasicFeature {...args.data} />
                </div>
              </div>
            </details>
            <details>
              <summary>
                Service Centers
                <svg focusable="false"><use href="/bcbst-icons.svg#bcbst-icon--global_accordion-expand"></use></svg>
              </summary>
              <div className="bcbst-accordion__content">
                <div className="bcbst-content-area">
                  <BasicFeature {...args.data} />
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    );
  }
};

export default meta;

type Story = StoryObj;

export const Accordion: Story = {
  args: {
    data: data,
  },
} satisfies Story;

export const GrayAccordion: Story = {
  name: "Gray",
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    data: data,
    background: "gray"
  },
} satisfies Story;
