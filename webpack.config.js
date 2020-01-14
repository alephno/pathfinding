const path = require("path")

module.exports = {
  entry: path.join(__dirname, "/src/js/Index.jsx"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "pathfinding.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}