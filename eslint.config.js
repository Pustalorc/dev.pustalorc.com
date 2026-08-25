import babelParser from '@babel/eslint-parser';
import js from '@eslint/js';
import astroParser from 'astro-eslint-parser';
import astro from 'eslint-plugin-astro';
import perfectionist from 'eslint-plugin-perfectionist';
import prettier from 'eslint-plugin-prettier';
import unicorn from 'eslint-plugin-unicorn';
import fs from 'fs';
import path from 'path';

import noClassTemplateLiteral from './.eslint-custom-rules/no-class-template-literal.js';
import noConfusableUnicode from './.eslint-custom-rules/no-confusable-unicode.js';
import noHardcodedHtmlText from './.eslint-custom-rules/no-hardcoded-html-text.js';
import noRelativeImports from './.eslint-custom-rules/no-relative-imports.js';
import noUnnecessaryTemplateLiterals from './.eslint-custom-rules/no-unnecessary-template-literals.js';

// Read .gitignore patterns and normalize for ESLint Flat Config
const gitignorePath = path.resolve(process.cwd(), '.gitignore');
const gitignorePatterns = fs.existsSync(gitignorePath)
  ? fs
      .readFileSync(gitignorePath, 'utf-8')
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith('#'))
      .map((pattern) => (pattern.startsWith('/') ? pattern.slice(1) : pattern))
  : [];

const browserGlobals = {
  window: 'readonly',
  document: 'readonly',
  navigator: 'readonly',
  location: 'readonly',
  console: 'readonly',
  setTimeout: 'readonly',
  clearTimeout: 'readonly',
  setInterval: 'readonly',
  clearInterval: 'readonly',
  requestAnimationFrame: 'readonly',
  cancelAnimationFrame: 'readonly',
  getComputedStyle: 'readonly',
  fetch: 'readonly',
  localStorage: 'readonly',
  CustomEvent: 'readonly',
  IntersectionObserver: 'readonly'
};

// TypeScript syntax is parsed via Babel (not @typescript-eslint), which does not
// depend on the `typescript` package and its version at all. typescript-eslint
// does not yet support TypeScript 7 (see typescript-eslint#10940), and since this
// project doesn't use any type-aware lint rules, Babel's syntax-only TS parsing
// is sufficient here.
const babelParserOptions = {
  requireConfigFile: false,
  babelOptions: {
    presets: [['@babel/preset-typescript', { ignoreExtensions: true }]],
    plugins: ['@babel/plugin-syntax-jsx']
  }
};

// Core `no-undef`/`no-unused-vars` don't understand TypeScript-only syntax
// positions (type annotations, `import type`, interface members) once Babel
// strips them from the AST, so they're disabled here in favor of `tsc --noEmit`
// (which has `noUnusedLocals`/`noUnusedParameters` enabled for the same coverage).
const typescriptSyntaxRules = {
  'no-undef': 'off',
  'no-unused-vars': 'off'
};

export default [
  {
    ignores: [...gitignorePatterns, '.astro/', '.eslint-plugin.js']
  },
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.js'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module',
        ...babelParserOptions
      },
      globals: browserGlobals
    },
    plugins: {
      perfectionist,
      unicorn,
      prettier,
      'no-confusable-unicode': { rules: { 'no-confusable-unicode': noConfusableUnicode } },
      'no-relative-imports': { rules: { 'no-relative-imports': noRelativeImports } },
      'no-unnecessary-template-literals': {
        rules: { 'no-unnecessary-template-literals': noUnnecessaryTemplateLiterals }
      }
    },
    rules: {
      ...typescriptSyntaxRules,
      'prettier/prettier': 'error',
      'unicorn/prevent-abbreviations': 'off',
      'no-confusable-unicode/no-confusable-unicode': 'error',
      'no-relative-imports/no-relative-imports': 'error',
      'no-unnecessary-template-literals/no-unnecessary-template-literals': 'error',
      'perfectionist/sort-imports': ['error', { type: 'alphabetical', order: 'asc' }]
    }
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: '@babel/eslint-parser',
        extraFileExtensions: ['.astro'],
        ...babelParserOptions
      },
      globals: browserGlobals
    },
    plugins: {
      astro,
      perfectionist,
      unicorn,
      prettier,
      'no-class-template-literal': {
        rules: { 'no-class-template-literal': noClassTemplateLiteral }
      },
      'no-confusable-unicode': { rules: { 'no-confusable-unicode': noConfusableUnicode } },
      'no-hardcoded-html-text': { rules: { 'no-hardcoded-html-text': noHardcodedHtmlText } },
      'no-relative-imports': { rules: { 'no-relative-imports': noRelativeImports } },
      'no-unnecessary-template-literals': {
        rules: { 'no-unnecessary-template-literals': noUnnecessaryTemplateLiterals }
      }
    },
    rules: {
      ...typescriptSyntaxRules,
      'no-class-template-literal/no-class-template-literal': 'error',
      'no-confusable-unicode/no-confusable-unicode': 'error',
      'no-hardcoded-html-text/no-hardcoded-html-text': 'error',
      'no-relative-imports/no-relative-imports': 'error',
      'no-unnecessary-template-literals/no-unnecessary-template-literals': 'error',
      'prettier/prettier': 'error',
      'unicorn/prevent-abbreviations': 'off',
      'perfectionist/sort-imports': ['error', { type: 'alphabetical', order: 'asc' }]
    }
  },
  {
    files: ['eslint.config.js'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        process: 'readonly'
      }
    },
    rules: {
      'no-relative-imports/no-relative-imports': 'off'
    }
  },
  {
    // Its own confusables map necessarily contains the literal characters it checks for.
    files: ['.eslint-custom-rules/no-confusable-unicode.js'],
    rules: {
      'no-confusable-unicode/no-confusable-unicode': 'off'
    }
  }
];
