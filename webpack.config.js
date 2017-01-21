module.exports = {

    loaders: [
        { test: /\.svg$/, loader: 'babel?presets[]=es2015,presets[]=react!svg-react' }
    ],

}