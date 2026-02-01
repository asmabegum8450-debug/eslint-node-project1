# Configuring ESLint in a Node.js Project

## Steps I followed
1. Created a new Node.js project folder and ran `npm init` to generate `package.json`.
2. Ran `npm init @eslint/config` to install and configure ESLint.
3. Edited `eslint.config.mjs` to customize the rules:
   - `semi`: disallow semicolons
   - `quotes`: require single quotes
4. Created `yourfile.js` and ran ESLint using `npx eslint yourfile.js`.

## Issues encountered and how I fixed them
- I accidentally typed `npm init @eslint/config` inside the `npm init` prompts. I fixed it by canceling with Ctrl+C and running the command separately.
- ESLint initially reported errors for double quotes and semicolons, which I fixed by updating the code to match the configured rules.

## Observations
ESLint helps maintain consistent code style and catches common issues early, reducing bugs and improving code quality.

## Screenshot
![ESLint Output](eslint-run.png)
