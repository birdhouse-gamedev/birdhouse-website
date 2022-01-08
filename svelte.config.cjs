const sveltePreprocess = require("svelte-preprocess");

module.exports = {
	preprocess: sveltePreprocess({
		defaults: {
			script: "typescript",
		},
		scss: {
			includePaths: [__dirname + "/src/styles"],
			prependData: `
        @use "prepend";
      `,
		},
	}),
	hotReload: false,
};
