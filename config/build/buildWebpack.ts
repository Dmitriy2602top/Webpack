import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack from "webpack"
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";


export function buildWebpack(options): webpack.Configuration {
    return {
        mode: env.mode ?? "development",
        entry: path.resolve(__dirname, "src", "index.tsx"),

        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                },
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },

            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        devtool: isDev ? 'inline-source-map' : false,
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "[name].[contenthash].js",
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public", "index.html"),
            }),
            !isDev && new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash:8].css', chunkFilename: 'css/[name].[contenthash:8].css' }),
            new webpack.ProgressPlugin(),
        ],
        devServer: isDev ? {
            open: true,
            port: env.port ?? 4000,
        } : undefined,
    };
}