import * as nextImage from 'next/image';

const OriginalNextImage = nextImage.default;

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized loader={({ src }) => src} />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: {
      mobile1: {
        name: 'Small mobile',
        styles: {
          height: '568px',
          width: '320px',
        },
        type: 'mobile',
      },
      mobile2: {
        name: 'Large mobile',
        styles: {
          height: '896px',
          width: '414px',
        },
        type: 'mobile',
      },
      tablet: {
        name: 'Tablet',
        styles: {
          height: '1112px',
          width: '768px',
        },
        type: 'tablet',
      },
      ipad: {
        name: 'iPad',
        styles: {
          height: '1024px',
          width: '768px',
        },
        type: 'tablet',
      },
      tablet2: {
        name: 'Big Tablet',
        styles: {
          height: '1112px',
          width: '992px',
        },
        type: 'tablet',
      },
      laptop: {
        name: 'Laptop',
        styles: {
          height: '1024px',
          width: '1366px',
        },
        type: 'laptop',
      },
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
