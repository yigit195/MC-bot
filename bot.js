const mineflayer = require('mineflayer')
const { pathfinder, Movements } = require('mineflayer-pathfinder')

const BOT_NAME = 'ahmet'
const PASSWORD = '123456'

const bot = mineflayer.createBot({
  host: 'serverfor.minefort.com',  // <-- İSTEDİĞİN IP BURADA
  port: 25565,
  username: BOT_NAME,
  version: '1.20.2'
})

bot.loadPlugin(pathfinder)

bot.once('spawn', () => {
  console.log('ahmet bağlandı, kayıt ve login yapılıyor...')

  // register
  setTimeout(() => bot.chat(`/register ${PASSWORD} ${PASSWORD}`), 3000)
  // login
  setTimeout(() => bot.chat(`/login ${PASSWORD}`), 6000)

  // anti-afk
  setInterval(() => {
    bot.setControlState('jump', true)
    setTimeout(() => bot.setControlState('jump', false), 300)
    bot.chat('/me AFK')
  }, 120000)
})

bot.on('kicked', (reason) => console.log('Atıldım: ' + reason))
bot.on('error', (err) => console.log(err))const mineflayer = require('mineflayer')
const { pathfinder, Movements } = require('mineflayer-pathfinder')

const BOT_NAME = 'ahmet'
const PASSWORD = '123456'

const bot = mineflayer.createBot({
  host: 'serverfor.minefort.com',  // <-- İSTEDİĞİN IP BURADA
  port: 25565,
  username: BOT_NAME,
  version: '1.20.1'
})

bot.loadPlugin(pathfinder)

bot.once('spawn', () => {
  console.log('ahmet bağlandı, kayıt ve login yapılıyor...')

  // register
  setTimeout(() => bot.chat(`/register ${PASSWORD} ${PASSWORD}`), 3000)
  // login
  setTimeout(() => bot.chat(`/login ${PASSWORD}`), 6000)

  // anti-afk
  setInterval(() => {
    bot.setControlState('jump', true)
    setTimeout(() => bot.setControlState('jump', false), 300)
    bot.chat('/me AFK')
  }, 120000)
})

bot.on('kicked', (reason) => console.log('Atıldım: ' + reason))
bot.on('error', (err) => console.log(err))
