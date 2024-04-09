# White Labeling with Vite, React, and TypeScript

This project is a demo of white labeling, enabling dynamic theme and configuration changes. 
To switch the demo for a specific client, follow these instructions:

1. Find the `.env.example` file at the root of the project.
2. Rename `.env.example` to `.env`. This file is where Vite will look to load your environment variables.
3. Inside the `.env` file, the `VITE_CLIENT` variable dictates the client theme and configuration that the application will use. 

This demo includes the following client options:
- `DreamWorks`
- `WaltDisney` (default)

To add a new client:
1. **Create a Configuration File**:
- Go to the `src/config/clients` directory.
- Add a new JSON file named after the client (e.g., `Pixar.json`). This file will contain the specific configuration for the client.

2. **Add the Client's Logo**:
- Place the client's logo image in the `public/` directory.

3. **Update the Environment Variable**:
- To switch the application theme to the newly added client, update the `VITE_CLIENT` variable in the `.env` file to match the new client's configuration file name (excluding the `.json` extension).

That's it!



<--- Below this line is the original README content --->

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
