import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import sveltePreprocess from "svelte-preprocess";
import Dotenv from "dotenv-webpack";
import CopyPlugin from "copy-webpack-plugin";

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

module.exports = {
	entry: {
		"build/bundle": ["./src/main.ts"],
	},
	resolve: {
		alias: {
			svelte: path.dirname(require.resolve("svelte/package.json")),
			$config: path.resolve(__dirname, "src/config"),
			$lib: path.resolve(__dirname, "src/lib"),
			$ui: path.resolve(__dirname, "src/ui"),
			$generated: path.resolve(__dirname, "src/generated"),
		},
		extensions: [".mjs", ".js", ".ts", ".svelte"],
		mainFields: ["svelte", "browser", "module", "main"],
		// fallback: {
		// 	"util": require.resolve("util/"),
		// }
	},
	output: {
		path: path.join(__dirname, "/build"),
		filename: "[name].js",
		chunkFilename: "[name].[id].js",
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.svelte$/,
				use: {
					loader: "svelte-loader",
					options: {
						compilerOptions: {
							dev: !prod,
						},
						emitCss: prod,
						hotReload: !prod,
						preprocess: sveltePreprocess({
							sourceMap: !prod,
							scss: {
								includePaths: [__dirname + "/src/styles"],
								prependData: `
										@use "prepend";
									`,
							},
						}),
					},
				},
			},
			{
				test: /\.s?[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				// required to prevent errors from Svelte on Webpack 5+
				test: /node_modules\/svelte\/.*\.mjs$/,
				resolve: {
					fullySpecified: false,
				},
			},
		],
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		new Dotenv({
			systemvars: true,
		}),
		new CopyPlugin({
			patterns: [{ from: "public" }],
		}),
	],
	devtool: prod ? false : "source-map",
	devServer: {
		hot: true,
		port: 4000,
		static: {
			directory: path.resolve(__dirname, "./public"),
		},
		historyApiFallback: true,
	},
};
