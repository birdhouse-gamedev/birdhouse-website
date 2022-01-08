module.exports = {
	useTabs: true,
	singleQuote: false,
	trailingComma: "all",
	printWidth: 100,
	plugins: ["./node_modules/prettier-plugin-svelte"],
	overrides: [
		{
			files: "*.svelte",
			options: { parser: "svelte" },
		},
	],
};