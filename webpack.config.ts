import path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  entry: './src/index.ts', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file name
  },
  resolve: {
    extensions: ['.ts', '.js'], // File extensions to resolve
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Use ts-loader for .ts files
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
//   devServer: {
//     contentBase: path.join(__dirname, 'dist'), // Serve content from the 'dist' directory
//     compress: true,
//     port: 3000,
//   },
};

export default config;
