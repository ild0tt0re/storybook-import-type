# `Import meta` for Storybook and Next.js for Storybook

## How to run

1. `yarn` or `npm install`
2. `nx storybook web` to run Storybook for the `Next.js` app
3. `nx storybook react-app` to run Storybook for the `React` app

## Things to pay attention to

### Storybook Configuration for Next.js app

1. Look into the following file: [`apps/web/.storybook/main.js`](apps/web/.storybook/main.js).
2. See the `addons` used for Next.js
3. The `'@nrwl/react/plugins/storybook'` has been removed

### Storybook Configuration for React app

Everything stays as is, and Storybook works with the `import type` syntax.

## The `import type` stories

1. [`apps/web/components/one/one.stories.tsx`](apps/web/components/one/one.stories.tsx)
2. [`apps/react-app/src/app/four/four.stories.tsx`](apps/react-app/src/app/four/four.stories.tsx)

These two stories, one in the React app and the other in the Next.js app, both use the `import type` syntax. Storybook still works!

The rest of the stories use the React-specific `import { ComponentStory, ComponentMeta }` syntax. They work as expected, as well.
