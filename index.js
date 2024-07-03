const { Telegraf, Markup } = require('telegraf')
const { message } = require('telegraf/filters')
const { createServer } = require('node:http');
require('dotenv').config()       // подключаем модуль, который будет прятать токен бота
const module_with_commands= require('./const')

const bot = new Telegraf(process.env.Bot_Token)     // токен бота вынесен в другой файл
bot.start((ctx) => ctx.reply(`привет ${ctx.message.from.first_name}`))
bot.help((ctx) => ctx.reply(text.commands))






bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))




const hostname = '0.0.0.0';
const port = 10000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('');
});

server.listen(port, hostname, () => console.log(`Port ${10000} is opened`));

