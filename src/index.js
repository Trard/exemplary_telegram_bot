const bot = require('./telegram_bot');
const localtunnel = require('localtunnel');

const startAll = async () => {
    const tunnel = await localtunnel({ port: 3000 });
    
    bot.launch({
        webhook: {
            domain: tunnel.url,
            port: 3000
        }
    });
};

startAll()