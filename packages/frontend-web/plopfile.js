export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/sites/acs-test/stories/components/{{pascalCase name}}/index.stories.tsx',
        templateFile: './plop-templates/Component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: './src/global/styles/components/_{{kebabCase name}}.scss',
        templateFile: './plop-templates/styles.scss.hbs',
      },
      {
        type: 'append',
        path: './src/global/styles/components/index.scss',
        pattern: /[;]/,
        template: '@import "./{{kebabCase name}}";',
      },
    ],
  });
  plop.setGenerator('documentation', {
    description: 'Create a storybook documentation page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your document page name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/sites/acs-test/stories/information/{{pascalCase name}}/index.mdx',
        templateFile: './plop-templates/Documentation.mdx.hbs',
      },
      {
        type: 'add',
        path: './src/sites/acs-test/stories/information/{{pascalCase name}}/TokenExample.tsx',
        templateFile: './plop-templates/TokenExample.tsx.hbs',
      },
    ],
  });
}
