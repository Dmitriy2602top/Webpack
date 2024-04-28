import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack, { Configuration } from "webpack";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export const buildPlugins = (
  options: BuildOptions
): Configuration["plugins"] => {
  const isDev = options.mode === "development";
  const { path } = options;

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({ template: path.html }),
  ];

  if (isDev) plugins.push(new webpack.ProgressPlugin());

  if (!isDev)
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      }),
      options.analyzer && new BundleAnalyzerPlugin()
    );

  return plugins;
};
