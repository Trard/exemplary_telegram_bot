const { Telegraf } = require('telegraf');
const winston = require('winston');
require('dotenv').config();

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error'
      }),
        new winston.transports.File({
            filename: 'logs/combined.log'
    }),
  ],
});

const bot = new Telegraf(process.env.BOT_TOKEN);

//logger middleware
bot.use((ctx) => {
    logger.info(ctx.update);
});

bot.command('hi', (ctx) => {
    ctx.reply(`Hello!`);
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));