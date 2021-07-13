const bot = require('./telegram_bot');
const localtunnel = require('localtunnel');

const start_telegram_bot = async () => {
    const tunnel = await localtunnel({ port: 3000 });

    bot.launch({
        webhook: {
            domain: tunnel.url,
            port: 3000
        }
    });
};

start_telegram_bot()