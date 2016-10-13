const NODE_ENV = process.env.NODE_ENV;
const dotenv = require('dotenv');

const webpack = require('webpack');
const fs      = require('fs');
const path    = require('path'),
        join    = path.join,
        resolve = path.resolve;

const getConfig = require('hjs-webpack');

const isDev  = NODE_ENV === 'development';
const isTest = NODE_ENV === 'test';

const root    = resolve(__dirname);
const src     = join(root, 'src');
const modules = join(root, 'node_modules');
const dest    = join(root, 'dist');

var addBodyHtml = '\
<div id="root"></div> \
                    '
var addHeadHtml ='\
<script type="text/javascript">\
!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="3.1.0";\
analytics.load("YbR5oGgxRw0T96B5lu4ZZpXJAZGE8FxG");\
analytics.page()\
}}();\
</script>\
<link rel="shortcut icon" type="image/x-icon" href="https://storage.googleapis.com/dnavid/faviconDNAvID.ico" />\
'

var config = getConfig({
        isDev: isDev,
        inline:true,
        https: isDev ? false : true,
        port: isDev ? 80 : 443,
        hostname:'0.0.0.0', 
        in: join(src, 'app.js'),
        out: dest,
        html: function (context) {
                return {
                        'index.html': context.defaultTemplate({
                                title: 'DNAvID - Claim your genome',
                                publicPath: isDev ? '' : '',
                                meta: {
                                        'name': 'DNAvID - Family DNA Network',
                                        'description': 'Discuss, protect, and use our DNA information'
                                },
                                html:addBodyHtml,
                                head:addHeadHtml
                        })
                }
        }
});

// ENV variables
const dotEnvVars = dotenv.config();
const environmentEnv = dotenv.config({
        path: join(root, 'config', `${NODE_ENV}.config.js`),
        silent: true,
});
const envVariables =
        Object.assign({}, dotEnvVars, environmentEnv);

const defines =
        Object.keys(envVariables)
                .reduce((memo, key) => {
                        const val = JSON.stringify(envVariables[key]);
                        memo[`__${key.toUpperCase()}__`] = val;
                        return memo;
                }, {
                        __NODE_ENV__: JSON.stringify(NODE_ENV)
                });

                config.plugins = [
                        new webpack.DefinePlugin(defines)
                ].concat(config.plugins);
                // END ENV variables

                // CSS modules
                const cssModulesNames = `${isDev ? '[path][name]__[local]__' : ''}[hash:base64:5]`;

                const matchCssLoaders = /(^|!)(css-loader)($|!)/;

                const findLoader = (loaders, match) => {
                        const found = loaders.filter(l => l && l.loader && l.loader.match(match))
                        return found ? found[0] : null;
                }
                // existing css loader
                const cssloader =
                        findLoader(config.module.loaders, matchCssLoaders);

                const newloader = Object.assign({}, cssloader, {
                        test: /\.module\.css$/,
                        include: [src],
                        loader: cssloader.loader.replace(matchCssLoaders, `$1$2?modules&localIdentName=${cssModulesNames}$3`)
                })
                config.module.loaders.push(newloader);
                cssloader.test = new RegExp(`^(?!.*(module|bootstrap)).*${cssloader.test.source}`)
                cssloader.loader = newloader.loader

                config.module.loaders.push({
                        test: /bootstrap\.css$/,
                        include: [modules],
                        loader: 'style-loader!css-loader'
                })

                // postcss
                config.postcss = [].concat([
                        require('precss')({}),
                        require('autoprefixer')({}),
                        require('cssnano')({})
                ])
                // END postcss

                // Roots
                config.resolve.root = [src, modules]
                config.resolve.alias = {
                        'css': join(src, 'styles'),
                        'containers': join(src, 'containers'),
                        'components': join(src, 'components'),
                        'utils': join(src, 'utils'),
                        'styles': join(src, 'styles')
                }
                // end Roots

                // Testing
                if (isTest) {
                        config.externals = {
                                'react/addons': true,
                                'react/lib/ReactContext': true,
                                'react/lib/ExecutionEnvironment': true,
                        }
                        config.module.noParse = /[/\\]sinon\.js/;
                        config.resolve.alias['sinon'] = 'sinon/pkg/sinon';

                        config.plugins = config.plugins.filter(p => {
                                const name = p.constructor.toString();
                                const fnName = name.match(/^function (.*)\((.*\))/)

                                const idx = [
                                        'DedupePlugin',
                                        'UglifyJsPlugin'
                                ].indexOf(fnName[1]);
                                return idx < 0;
                        })
                }
                // End Testing

                module.exports = config;
