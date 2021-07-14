const { Telegraf } = require('telegraf');
const winston = require('winston');

const { getRandomIntInclusive } = require('./randomer')

require('dotenv').config();

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({
            filename: 'logs/telegram_bot/error.log',
            level: 'error'
      }),
        new winston.transports.File({
            filename: 'logs/telegram_bot/combined.log'
    }),
  ],
});

const bot = new Telegraf(process.env.BOT_TOKEN);

//logger middleware
bot.use(async (ctx, next) => {
    await next();
    ctx.update.message.response_time = new Date().getTime();
    delete ctx.tg
    logger.info(ctx);
});

bot.command("getRandomNumber", async (ctx) => {
    ctx.reply(getRandomIntInclusive(1,10))
});

module.exports = bot;