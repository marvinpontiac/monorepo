import type { Meta, StoryObj } from '@storybook/react';
import data from './data.json';

const meta: Meta = {
  title: 'Components/Cards/Promo Card',
  tags: ['autodocs'],

  render: (args) => {
    return (
      <div className={args.styles.join(' ')}>
        <a className="bcbst-card__img" href={args?.ctaLink?.href} target="_blank">
          <picture>
            <source srcSet={args.image[0]} media="(min-width: 1280px)" />
            <source srcSet={args.image[1]} media="(min-width: 768px)" />
            <img src={args.image[2]} alt="Card image alt text" />
          </picture>
          {args.hasVideo && (
            <div className="bcbst-card__video-thumbnail">
              <svg focusable="false">
                <use href="/bcbst-icons.svg#bcbst-icon--global_content-video"></use>
              </svg>
            </div>
          )}
        </a>
        <div className="bcbst-card__body">
          {args.description && <div className="bcbst-card__description" dangerouslySetInnerHTML={{ __html: args.description }} />}
        </div>
        <div className="bcbst-card__cta">
          <a
            className={`bcbst-btn bcbst-btn--text-primary  ${args?.icon}`}
            href={args.ctaLink.href}
            target="_blank"
          >
            {args.ctaLink.label}
          </a>
        </div>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj;

export const PromoCard: Story = {
  args: {
    ...data,
    hasVideo: false,
    icon: 'bcbst-btn--video',
    styles: ['bcbst-card', 'bcbst-card--promo'],
  },
} satisfies Story;
