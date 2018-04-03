const autoprefixer = require('autoprefixer');


const path = require('path');

const webpack = require('webpack');




const config = {
  // resolve: {
  //   modules: [
  //     path.resolve('./lib'),
  //     path.resolve('./node_modules'),
  //   ]

  // },
  // entry: ['babel-polyfill', './lib/renderes/dom.js'],
  entry:  {

    index: ['babel-polyfill', './lib/renderes/dom.js'],
    style: ['babel-polyfill', './lib/renderes/styledom.js'],
    radium: ['babel-polyfill', './lib/renderes/raduimdom.js'],
    tictac: ['babel-polyfill', './lib/renderes/ticdom.js'],
    gaming: ['babel-polyfill', './lib/renderes/gamedom.js'],
    webone: ['babel-polyfill', './lib/renderes/web1dom.js'],
    bamesweb: ['babel-polyfill', './lib/renderes/bamesdom.js'],
    bameswebwork: ['babel-polyfill', './lib/renderes/bamesworkdom.js'],
    bameswebabout: ['babel-polyfill', './lib/renderes/bamesaboutdom.js'],




    image0: ['babel-polyfill','./Images/n.png'],
    image1: ['babel-polyfill','./Images/1.jpg'],
    image2: ['babel-polyfill','./Images/2.jpg'],
    image3: ['babel-polyfill','./Images/3.jpg'],
    image4: ['babel-polyfill','./Images/4.png'],
    image5: ['babel-polyfill','./Images/a.jpg'],
    image6: ['babel-polyfill','./Images/b.jpg'],
    image7: ['babel-polyfill','./Images/c.jpg'],
    image8: ['babel-polyfill','./Images/d.jpg'],
    image9: ['babel-polyfill','./Images/e.jpg'],
    image10: ['babel-polyfill','./Images/f.jpeg'],
    image11: ['babel-polyfill','./Images/n.png'],
    image12: ['babel-polyfill','./Images/h.jpg'],
    image13: ['babel-polyfill','./Images/i.jpg'],
    image14: ['babel-polyfill','./Images/j.jpg'],
    image15: ['babel-polyfill','./Images/k.jpg'],
    image16: ['babel-polyfill','./Images/l.jpg'],
    image17: ['babel-polyfill','./Images/m.jpg'],
    image18: ['babel-polyfill','./Images/repeat.jpg'],
    image18: ['babel-polyfill','./Images/logo.svg'],








  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'


  },


  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},



    // { test: /\.css$/, loader: "style-loader!css-loader" },








//        { test: /\.(png|jp(e*)g|svg)$/, loaders: 'url-loader', exclude: /node_modules/,
//        options: {
//        limit: 8000, // Convert images < 8kb to base64 strings
//        name: 'images/[name].[ext]'
//                 }
// },




      { test: /\.(png|jpg|jpeg|svg)$/, loaders: 'url-loader', exclude: /node_modules/,
                                      options: {
                                      limit: 8000, // Convert images < 8kb to base64 strings
                                      name: 'images/[name].[ext]'
                                               }
      },





      //cssssssssssssssssssssssss


      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('postcss-nested'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ],
      },




    ]

  },



};

module.exports = config;




