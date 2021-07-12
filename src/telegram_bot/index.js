const { Telegraf } = require('telegraf');
const winston = require('winston');
require('dotenv').config();

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({
            filename: 'logs/bot/error.log',
            level: 'error'
      }),
        new winston.transports.File({
            filename: 'logs/bot/combined.log'
    }),
  ],
});

const bot = new Telegraf(process.env.BOT_TOKEN);

//logger middleware
bot.use((ctx, next) => {
    logger.info(ctx.update);
    next();
});

bot.command('hi', (ctx) => {
    ctx.reply(`Hello!`);
});

module.exports = bot;