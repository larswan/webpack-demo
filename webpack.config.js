module.exports = {
    mode: 'development', // 
    entry: './src/index.js',
    output: {
        filename: "bundle.js", // name of the bundled output
        path: __dirname + '/dist' // output directory. __dirname is a 
    }
}