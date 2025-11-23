const mineflayer = require('mineflayer')
const { pathfinder, Movements } = require('mineflayer-pathfinder')

const BOT_NAME = 'ahmet'             // bot ismi
const PASSWORD = '123456'            // şifreni buraya yaz (örnek: 123456)

const bot = mineflayer.createBot({
  host: 'BenMc.enderman.cloud',
  port: 25565,
  username: BOT_NAME,
  version: '1.20.2'
})

bot.loadPlugin(pathfinder)

bot.once('spawn', () => {
  console.log('ahmet bağlandı, kayıt ve login yapılıyor...')

  // İlk girişte register, sonraki girişlerde login
  setTimeout(() => bot.chat(`/register \( {PASSWORD} \){PASSWORD}`), 3000)
  setTimeout(() => bot.chat(`/login ${PASSWORD}`), 6000)

  // Anti-AFK: her 2 dakikada zıpla + mesaj
  setInterval(() => {
    bot.setControlState('jump', true)
    setTimeout(() => bot.setControlState('jump', false), 300)
    bot.chat('/me AFK')
  }, 120000)
})

bot.on('kicked', (reason) => console.log('Atıldım: ' + reason))
bot.on('error', (err) => console.log(err))
