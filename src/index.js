const bot = require('./telegram_bot');
const localtunnel = require('localtunnel');

const start_all = async () => {
    const tunnel = localtunnel({ port: 3000 });
    
    bot.launch({
        webhook: {
            domain: tunnel.url,
            port: 3000
        }
    });
};

start_all()