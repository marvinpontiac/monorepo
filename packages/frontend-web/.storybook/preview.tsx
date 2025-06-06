import React from 'react';
import type { Preview } from '@storybook/react';

// TODO: Conditional statement for non-development builds?
import '@site-theme';

const customViewports = {
  FigmaDesktop: {
    name: 'Figma Desktop (>= 1280px)',
    styles: {
      width: '1280px',
      height: '812px',
    },
  },
  FigmaTablet: {
    name: 'Figma Tablet (>= 768px)',
    styles: {
      width: '768px',
      height: '812px',
    },
  },
  FigmaMobile: {
    name: 'Figma Mobile (375px)',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  iPhoneX: {
    name: 'iPhone X',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  iPhone11Pro: {
    name: 'iPhone 11 pro',
    styles: {
      width: '414px',
      height: '763px',
    },
  },
  iPad: {
    name: 'iPad',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  LargeTablet: {
    name: 'Large Tablet',
    styles: {
      width: '992px',
      height: '1024px',
    },
  },
  SmallDesktop: {
    name: 'Small Desktop',
    styles: {
      width: '1200px',
      height: '1024px',
    },
  },
  lapTopHiDpiScreen: {
    name: 'Laptop with HiPDI screen',
    styles: {
      width: '1440px',
      height: '900px',
    },
  },
  LargeDesktop: {
    name: '1920 Desktop',
    styles: {
      width: '1920px',
      height: '1200px',
    },
  },
};

const preview: Preview = {
  globalTypes: {
    grid: {
      description: 'Overlay grid',
      toolbar: {
        title: 'Grid Overlay',
        items: ['None', 'Full Width 12 Col'],
      },
    },
  },
  decorators: [
    (Story, context) => (
      <>
        {context.globals.grid === 'Full Width 12 Col' && (
          <div
            className="bcbst-container"
            style={{
              pointerEvents: 'none',
              position: 'fixed',
              inset: '0',
              height: '100vh',
              opacity: '.2',
              background: 'green',
              zIndex: '999',
            }}
          >
            <div className="bcbst-grid" style={{ background: 'blue', height: '100%' }}>
              <div className="bcbst-grid__col-1" style={{ background: 'red', height: '100%' }} />
              <div className="bcbst-grid__col-1" style={{ background: 'red', height: '100%' }} />
              <div className="bcbst-grid__col-1" style={{ background: 'red', height: '100%' }} />
              <div className="bcbst-grid__col-1" style={{ background: 'red', height: '100%' }} />
              <div className="bcbst-grid__col-1" style={{ background: 'red', height: '100%' }} />
              <div className="bcbst-grid__col-1" style={{ background: 'red', height: '100%' }} />
              <div className="bcbst-grid__col-1" style={{ background: 'red', height: '100%' }} />
              <div className="bcbst-grid__col-1" style={{ background: 'red', height: '100%' }} />
              <div className="bcbst-grid__col-1" style={{ background: 'red', height: '100%' }} />
              <div className="bcbst-grid__col-1" style={{ background: 'red', height: '100%' }} />
              <div className="bcbst-grid__col-1" style={{ background: 'red', height: '100%' }} />
              <div className="bcbst-grid__col-1" style={{ background: 'red', height: '100%' }} />
            </div>
          </div>
        )}

        <Story />
      </>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      exclude: ['_containerBackground', '_containerPadding'],
    },
    viewport: {
      viewports: {
        ...customViewports,
      },
    },
    backgrounds: {
      default: null,
      values: [
        {
          name: 'Reversed',
          value: '#000',
        },
      ],
    },
  },
};

export default preview;
