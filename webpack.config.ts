import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';

type Mode = "production" | "development"

interface EnvVariable {
  mode: Mode, port: number
}

export default (env: EnvVariable) => {
  const isDev = env.mode === 'development'
  const config: webpack.Configuration = buildWebpack()
  return config;
}


