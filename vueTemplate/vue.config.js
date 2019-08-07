module.exports = {
    dev: {
        proxyTable: {
            '/schoolmanage': {
                target: 'http://127.0.0.1:8081/',
                changeOrigin: true,
                // ws: true,
                // pathRewrite: {  '^/api': ''}
            },
            '/login': {
                target: 'http://127.0.6.1:8081/',
                changeOrigin: true,
                // ws: true,
                // pathRewrite: {  '^/api': ''}
            }
        }
    }
}