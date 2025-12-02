
import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config'
import prettierConfig from "eslint-config-prettier";


export default defineConfig([
    {
        ignores: ['dist', 'node_modules', 'drizzle/migrations'],
    },
    {
        files: ['**/*.ts'],
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
        ],

        languageOptions: {
            globals: {
                ...globals.node,
            },
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                project: './tsconfig.json',
            },
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'warn',
            'no-console': 'warn',
            'eqeqeq': 'error',
        }
    },
    prettierConfig,
])
