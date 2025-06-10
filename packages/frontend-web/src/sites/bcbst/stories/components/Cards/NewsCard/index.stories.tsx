import type { Meta, StoryObj } from '@storybook/react';
import data from './data.json';

const meta: Meta = {
  title: 'Components/Cards/News Card',
  tags: ['autodocs'],
  render: (args) => {
    return <div className={args.styles.join(' ')}>
      {args.image.length > 0 &&
        <a className="bcbst-card__img" href={args?.ctaLink?.href} target="_blank">
          <picture>
            <source srcSet={args.image[0]} media="(min-width: 1280px)" />
            <source srcSet={args.image[1]} media="(min-width: 768px)" />
            <img src={args.image[2]} alt="Card image alt text" />
          </picture>
          {args.topic && <span className='bcbst-card__topic'>{args.topic}</span>}
        </a>
      }
      <div className="bcbst-card__body">
        {args.heading && <a aria-label={args.heading} href={args?.ctaLink?.href} className="bcbst-card__heading" dangerouslySetInnerHTML={{ __html: args.heading }}></a>}
        {args.description && <div className="bcbst-card__description" dangerouslySetInnerHTML={{ __html: args.description }} />}
      </div>
      <div className="bcbst-card__cta">
        <a
          className={`bcbst-btn bcbst-btn--text-primary  ${args?.icon}`}
          href={args.ctaLink.href}
          aria-label={args.ctaLink.label}
        >
          {args.ctaLink.label}
        </a>
      </div>
    </div>
  }
};

export default meta;

type Story = StoryObj;

export const NewsCard: Story = {
  args: {
    ...data,
    styles: ['bcbst-card', 'bcbst-card--news'],
  },
} satisfies Story;