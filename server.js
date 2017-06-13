import express  from 'express'
import path  from 'path'
import webpack  from 'webpack'
import webpackDevMiddleware  from 'webpack-dev-middleware'
import WebpackDevServer  from 'webpack-dev-server'
import webpackHotMiddleware  from 'webpack-hot-middleware'


const app = express();
const config = require('./webpack.config');
const router = express.Router();
const compiler = webpack(config);




app.use(webpackDevMiddleware(compiler, {
    entry: './app/app.js',
    output: {
        path: "/"
    }
}, {
    noInfo: false, // display no info to console (only warnings and errors)
    quiet: false, // display nothing to the console
    lazy: false, // switch into lazy mode
    watchOptions: {
        aggregateTimeout: 150,
        poll: true
    }, // watch options (only lazy: false)
    publicPath: config.output.publicPath,
    // headers: { "X-Custom-Header": "yes" }, // custom headers
    stats: { colors: true } // options for formating the statistics
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}))


app.use(express.static(path.join(__dirname, 'public'), {
  dotfiles: 'ignore',
  index: false
}));




app.get('*', function(req, res, next) {
  console.log('Request: [GET]', req.originalUrl)
  res.sendFile(path.resolve(__dirname, 'index.html'));
});




app.use(function(req, res, next) {
  console.log('404')
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.sendStatus(err.status || 500);
});




app.use(router);

const port = 3000;
app.listen(port);

console.log('Serving: localhost:' + port);
