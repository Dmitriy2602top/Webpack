import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const cssModulesOptions = {
    loader: "css-loader",

    options: isDev && {
      sourceMap: true,
      importLoaders: 1,
      modules: {
        localIdentName: "[local]__[hash:base64:8]",
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssModulesOptions,
      "sass-loader",
    ],
  };

  const tsLoader = {
    // ts-loader умеет работать с JSX
    // Если б мы не использовали тайпскрипт: нужен был бы babel-loader
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: [
      {
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
  };

  return [scssLoader, tsLoader];
}