// Silahkan Ubah Sesuka Hati Jangan Hapus Tanda ' ' agar script tidak eror.

const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6285723949522']
global.name = 'Dedi Dont cry'
global.namebot = 'Dedii Botz'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blueBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
/*
    Yt: @LinsBotz
    Ig: @rijalsavior
    wa: +6281911317205
© Lins Official
*/
// Jangan Dihapus Creditnya Sebagai Tanda Ucapan Terima Kasih 😊