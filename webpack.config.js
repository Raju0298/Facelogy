const path = require('path'); // <-get absolute location for saving
const pkg = require('./package.json');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: "./src/index.js", // <- starting point for bundle 
  output: {
    path: path.resolve(__dirname, 'dist'), //<-where to save ur bundle 
    filename: "index.js", //<-filename for bundled file
    library: 'Facelogy',
    libraryTarget: "umd" //<- to which version are we compiling js 
  },
  mode:'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
 },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
 }
 ]
  },
  target: 'node',
  externals: {
    react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'React',
    },
    'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom',
        root: 'ReactDOM',
    }
  }
  // if we need to bundle anything extra with our code, if nothing entered means nothing else to compile, else we can mention, if, in case we want to bundle a particular third party code with our codebase
  // if we need to bundle anything extra with our code (3rd party package),we can add it as an argument to this method.
  // else, if nothing is passed as argument means no additional dependency to compile.
};