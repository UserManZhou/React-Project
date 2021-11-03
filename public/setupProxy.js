const Proxy = require('http-proxy-middleware')

module.exports =function (app) {

    app.use(
        Proxy('/user/login/',{
            target:'http://localhost:8080',
            changeOrigin:true,
            pathRwrite: {'^/user/login/' : ''}
        })

    )

}