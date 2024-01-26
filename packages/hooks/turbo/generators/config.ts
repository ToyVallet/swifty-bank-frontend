import type { PlopTypes } from '@turbo/gen';

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator('hooks', {
    description: 'Adds a new react custom hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the custom hook?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{camelCase name}}.ts',
        templateFile: 'templates/hooks.hbs',
      },
    ],
  });
}
