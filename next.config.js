
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');

module.exports = withTypescript(withCSS({
    webpack: config => {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        })

        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            'react-native$': 'react-native-web'
        }
        return config
    }
}))