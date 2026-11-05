import apiError from '@imranbarbhuiya/oxc-config/api-error';
import common from '@imranbarbhuiya/oxc-config/common';
import edge from '@imranbarbhuiya/oxc-config/edge';
import i18n from '@imranbarbhuiya/oxc-config/i18n';
import module from '@imranbarbhuiya/oxc-config/module';
import next from '@imranbarbhuiya/oxc-config/next';
import node from '@imranbarbhuiya/oxc-config/node';
import react from '@imranbarbhuiya/oxc-config/react';
import tailwind from '@imranbarbhuiya/oxc-config/tailwind';
import typescript from '@imranbarbhuiya/oxc-config/typescript';
import { defineConfig } from 'oxlint';

export default defineConfig({
	extends: [common, node, typescript, module, react, next, edge, tailwind, i18n, apiError],
	ignorePatterns: ['.github/**', '.next/**', 'node_modules/**', 'next-env.d.ts', 'plans/**'],
	env: {
		node: true,
		browser: true,
	},
	options: {
		typeAware: true,
	},
	settings: {
		react: {
			version: '19.3.1',
		},
		tailwindcss: {
			entryPoint: 'app/globals.css',
		},
	},
});
