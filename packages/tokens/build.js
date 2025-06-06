const StyleDictionary = require('style-dictionary');
const StyleDictionaryPackage = require('style-dictionary');

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

const PLATFORMS = ['web', 'frontend'];
const BRANDS = ['bcbst'];

function getStyleDictionaryConfig(brand, platform) {
  return {
    source: [`brands/${brand}/**/*.json`, 'globals/**/*.json', `platforms/${platform === 'frontend' ? 'web' : platform}/**/*.json`],
    platforms: {
      'web/js': {
        transforms: ['attribute/cti', 'name/cti/constant', 'size/pxToRem', 'color/hex'],
        buildPath: `build/web/${brand}/`,
        files: [
          {
            destination: 'tokens.module.js',
            format: 'javascript/module',
          },
          {
            destination: 'tokens.object.js',
            format: 'javascript/object',
          },
          {
            destination: 'tokens.es6.js',
            format: 'javascript/es6',
          },
        ],
      },
      'web/json': {
        transforms: ['attribute/cti', 'name/cti/constant', 'size/pxToRem', 'color/hex'],
        buildPath: `build/web/${brand}/`,
        files: [
          {
            destination: 'tokens.json',
            format: 'json/flat',
          },
        ],
      },
      'web/scss': {
        transforms: ['attribute/cti', 'name/cti/kebab', 'time/seconds', 'content/icon', 'size/pxToRem', 'color/css'],
        buildPath: `build/web/${brand}/`,
        files: [
          {
            destination: 'tokens.scss',
            format: 'scss/variables',
          },
          {
            destination: 'tokens-variables.css',
            format: 'css/variables',
          },
          {
            destination: 'tokens-variables.scss',
            format: 'css/variables',
          },
          {
            destination: 'tokens-mixin-css-variable.scss',
            format: 'scss-mixin/css-variables',
            brand
          },
        ],
      },
      'frontend/scss': {
        transforms: ['attribute/cti', 'name/cti/kebab', 'time/seconds', 'content/icon', 'size/pxToRem', 'color/css'],
        buildPath: `../frontend-web/src/sites/${brand}/styles/`,
        files: [
          {
            destination: '_tokens.scss',
            format: 'scss/variables',
          },
          {
            destination: '_root.scss',
            format: 'css/variables',
          },
        ],
      },
      'frontend/js': {
        transforms: ['attribute/cti', 'name/cti/constant', 'time/seconds', 'content/icon', 'size/pxToRem', 'color/css'],
        buildPath: '../frontend-web/',
        files: [
          {
            destination: `.storybook/themes/${brand}/tokens.es6.js`,
            format: 'javascript/es6',
          },
          {
            destination: `src/sites/${brand}/data/tokens.es6.js`,
            format: 'javascript/es6',
          },
        ],
      },
      'frontend/json': {
        transforms: ['attribute/cti', 'name/cti/kebab', 'time/seconds', 'content/icon', 'size/pxToRem', 'color/css'],
        buildPath: `../frontend-web/src/sites/${brand}/data/`,
        files: [
          {
            destination: 'tokens.json',
            format: 'json/flat',
          },
        ],
      },
      ios: {
        transformGroup: 'ios',
        buildPath: `build/ios/${brand}/`,
        format: 'ios/colors.h',
        className: 'StyleDictionaryColor',
        type: 'StyleDictionaryColorName',
        filter: {
          attributes: {
            category: 'color',
          },
        },
        files: [
          {
            destination: 'tokens-all.plist',
            template: 'ios/plist',
          },
          {
            destination: 'tokens-colors.plist',
            template: 'ios/plist',
            filter: {
              type: 'color',
            },
          },
        ],
      },
    },
  };
}

StyleDictionaryPackage.registerFormat({
  name: 'json/flat',
  formatter: function (dictionary) {
    return JSON.stringify(dictionary.allProperties, null, 2);
  },
});

StyleDictionaryPackage.registerFormat({
  name: 'scss-mixin/css-variables',
  formatter: (dictionary) => {
    return(
      `@mixin theme {` + 
      `\n` + 
      dictionary.allProperties.map((token) => `--${token.name}: ${token.value};`).join(`\n`) +
      `\n` +
      '}'
    )
  }
})

StyleDictionaryPackage.registerTransform({
  name: 'size/pxToPt',
  type: 'value',
  matcher: function (prop) {
    return prop.value.match(/^[\d.]+px$/);
  },
  transformer: function (prop) {
    return prop.value.replace(/px$/, 'pt');
  },
});

StyleDictionaryPackage.registerTransform({
  name: 'size/pxToDp',
  type: 'value',
  matcher: function (prop) {
    return prop.value.match(/^[\d.]+px$/);
  },
  transformer: function (prop) {
    return prop.value.replace(/px$/, 'dp');
  },
});

StyleDictionaryPackage.registerTransformGroup({
  name: 'tokens-json',
  transforms: ['attribute/cti', 'name/cti/kebab', 'size/px', 'color/css'],
});

console.log('Build started...');

// Loop through platforms and brands

PLATFORMS.map(function (platform) {
  BRANDS.map(function (brand) {
    console.log('\n==============================================');
    console.log(`\nProcessing: [${platform}] [${brand}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(brand, platform));

    switch (platform) {
      case 'web':
        StyleDictionary.buildPlatform('web/js');
        StyleDictionary.buildPlatform('web/json');
        StyleDictionary.buildPlatform('web/scss');
        break;
      case 'frontend':
        StyleDictionary.buildPlatform('frontend/scss');
        StyleDictionary.buildPlatform('frontend/json');
        StyleDictionary.buildPlatform('frontend/js');
        break;
      default:
        break;
    }

    console.log('\nEnd processing');
  });
});

console.log('\n==============================================');
console.log('\nBuild completed!');
