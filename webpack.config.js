const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path") // Es una librería que trae por defecto node y que nos permite acceder al sistema de archivos de nuestro computador

module.exports = {

    entry: {
        main: path.resolve(__dirname, './src/app.js'), // El main, va a entrar por "path.resolve" dirname, es la dirección en donde estoy

    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'deploy')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Hola mi gente"
        })
    ],
};