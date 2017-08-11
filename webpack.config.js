module.exports = {
    entry: "./app.jsx",
    output: {
        path: __dirname,
        filename: "./statics/bundle.js"
    },
    module: {
        loaders: [
            {
                loaders: "babel-loader",
                query: 
                {
                    presets: ["react","es2015"]    
                },
                test: /\.jsx?$/,
                exclude: /node_modules/
            }
        ]
    }
};