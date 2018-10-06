var webpack=require('webpack');
var path=require('path');

module.exports={
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/app.js'
    ],
    externals:{
        jquery:'jQuery'
    },
    plugins:[
       new webpack.ProvidePlugin({
            '$':'jquery',
            'jQuery':'jquery'
        })
    ],

    output:{
        path: __dirname,
        filename: 'public/bundle.js'
    
},
resolve:{
    root:__dirname,
    modulesDirectories:[
        'node-modules',
        './app/components',
        './app/api'
    ],
    alias:{
        applicationStyles:'app/styles/app.scss'
    }
   },
    module :{
        rules: [
            {
                loader:'babel-loader',
                query:{
                    presets:['react','es2015','stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
plugins:[
new webpack.LoaderOptionsPlugin({
    options: {
    sassLoader:{
    includePaths:[
        path.resolve(__dirname, './node_modules/foundation-sites/scss')
    
    ]
}
}
})
],
devtool:'cheap-module-eval-source-map'
};    
