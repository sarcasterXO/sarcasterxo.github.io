import config from '@imranbarbhuiya/oxc-config/oxfmt';
import { defineConfig } from 'oxfmt';

export default defineConfig({
	...config,
	ignorePatterns: ['.next', 'node_modules', 'plans'],
});
