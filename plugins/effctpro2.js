const cobra = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('wallpaper');

if (Config.WORKTYPE == 'private') {
cobra.addCommand({pattern: 'prologo', fromMe: true, desc: Lang.TET_DESC}, (async (message, match) => {

    var respoimage = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*━━━━━🐍COBRA LOGO PACK🐍━━━━━*
*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .breakwall 
🔹𝙐𝙨𝙚➜ (.breakwall cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .flame 
🔹𝙐𝙨𝙚➜ (.flame cobra) 

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .zglow 
🔹𝙐𝙨𝙚➜ (.zglow cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .pubg 
🔹𝙐𝙨𝙚➜ (.pubg cobra/bot)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .rainbow
🔹𝙐𝙨𝙚➜ (.rainbow cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .pentakill
🔹𝙐𝙨𝙚➜ (.pentakill cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gavatar
🔹𝙐𝙨𝙚➜ (.gavatar cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .woodblock
🔹𝙐𝙨𝙚➜ (.woodblock cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .joker
🔹𝙐𝙨𝙚➜ (.joker cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .coverlol
🔹𝙐𝙨𝙚➜ (.coverlol cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gerband
🔹𝙐𝙨𝙚➜ (.gerband cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .tryposmoke
🔹𝙐𝙨𝙚➜  (.tryposmoke cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .warface
🔹𝙐𝙨𝙚➜ (.warface cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .1917
🔹𝙐𝙨𝙚➜ (.1917 cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .xmas 
🔹𝙐𝙨𝙚➜ (.xmas cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .minion
🔹𝙐𝙨𝙚➜ (.minion cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .sumsand
🔹𝙐𝙨𝙚➜ (.sumsand cobra)

*━━━━━LOGO PACK━━━*
_*🌍ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ*_
`}) 

 }));
}

if (Config.WORKTYPE == 'public') {
cobra.addCommand({pattern: 'prologo', fromMe: false, desc: Lang.TET_DESC}, (async (message, match) => {

    var respoimage = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*━━━━━🐍COBRA LOGO PACK🐍━━━━━*
*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .breakwall 
🔹𝙐𝙨𝙚➜ (.breakwall cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .flame 
🔹𝙐𝙨𝙚➜ (.flame cobra) 

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .zglow 
🔹𝙐𝙨𝙚➜ (.zglow cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .pubg 
🔹𝙐𝙨𝙚➜ (.pubg cobra/bot)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .rainbow
🔹𝙐𝙨𝙚➜ (.rainbow cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .pentakill
🔹𝙐𝙨𝙚➜ (.pentakill cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gavatar
🔹𝙐𝙨𝙚➜ (.gavatar cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .woodblock
🔹𝙐𝙨𝙚➜ (.woodblock cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .joker
🔹𝙐𝙨𝙚➜ (.joker cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .coverlol
🔹𝙐𝙨𝙚➜ (.coverlol cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gerband
🔹𝙐𝙨𝙚➜ (.gerband cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .tryposmoke
🔹𝙐𝙨𝙚➜  (.tryposmoke cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .warface
🔹𝙐𝙨𝙚➜ (.warface cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .1917
🔹𝙐𝙨𝙚➜ (.1917 cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .xmas 
🔹𝙐𝙨𝙚➜ (.xmas cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .minion
🔹𝙐𝙨𝙚➜ (.minion cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .sumsand
🔹𝙐𝙨𝙚➜ (.sumsand cobra)

*━━━━━LOGO PACK━━━*
_*🌍ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ*_
`}) 

 }));
}

  
