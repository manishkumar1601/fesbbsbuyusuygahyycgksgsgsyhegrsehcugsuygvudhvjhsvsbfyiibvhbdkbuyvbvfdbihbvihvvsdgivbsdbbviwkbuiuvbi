const cobra = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('wallpaper');

if (Config.WORKTYPE == 'private') {
cobra.addCommand({pattern: 'spack', fromMe: true, desc: Lang.TET_DESC}, (async (message, match) => {

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: `*━━━━━🐍COBRA LOGO PACK🐍━━━━━*
*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .metalic 
🔹𝙐𝙨𝙚➜ .metalic (.metalic cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .cup  
🔹𝙐𝙨𝙚➜ .cup (.cup cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .romantic  
🔹𝙐𝙨𝙚➜ .romantic (.romantic cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .burnp
🔹𝙐𝙨𝙚➜   .burnp (.burnp cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .ccup 
🔹𝙐𝙨𝙚➜   .ccup (.ccup cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .love 
🔹𝙐𝙨𝙚➜   .love (.love cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .cofee  
🔹𝙐𝙨𝙚➜ .cofee (.cofee cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .grass 
🔹𝙐𝙨𝙚➜ .grass (.grass cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .hwood 
🔹𝙐𝙨𝙚➜ (.hwood cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .bwood 
🔹𝙐𝙨𝙚➜ (.bwood cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .summer 
🔹𝙐𝙨𝙚➜ (.summer cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .nature 
🔹𝙐𝙨𝙚➜  (.nature cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .uwater 
🔹𝙐𝙨𝙚➜ (.uwater cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .nsummer  
🔹𝙐𝙨𝙚➜ (.nsummer cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .ufall  
🔹𝙐𝙨𝙚➜ (.ufall cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .geon 
🔹𝙐𝙨𝙚➜ (.geon cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .nsky  
🔹𝙐𝙨𝙚➜ (.nsky cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .ucube 
🔹𝙐𝙨𝙚➜ (.ucube cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .fur  
🔹𝙐𝙨𝙚➜ (.fur cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .crisp 
🔹𝙐𝙨𝙚➜ (.crisp cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .embro 
🔹𝙐𝙨𝙚➜ (.embro cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .uweb 
🔹𝙐𝙨𝙚➜ (.uweb cobra/1-5 number)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gleave 
🔹𝙐𝙨𝙚➜ (.gleave cobra/1-5 number)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .bfly 
🔹𝙐𝙨𝙚➜   (.bfly cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .zwood  
🔹𝙐𝙨𝙚➜   (.zwood cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .harrypo  
🔹𝙐𝙨𝙚➜   (.harrypo cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .nlight 
🔹𝙐𝙨𝙚➜   .nlight cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .scary  
🔹𝙐𝙨𝙚➜  (.scary cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .blwood 
🔹𝙐𝙨𝙚➜  (.blwood cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .xtrypo 
🔹𝙐𝙨𝙚➜ (.xtrypo cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .uflower  
🔹𝙐𝙨𝙚➜ (.uflower cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .flower  
🔹𝙐𝙨𝙚➜ (.flower cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .partyneon  
🔹𝙐𝙨𝙚➜ (.partyneon  cobra/1-5 number)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .dmetal  
🔹𝙐𝙨𝙚➜ (.dmetal cobra/1-29 number)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gocs  
🔹𝙐𝙨𝙚➜ (.gocs cobra/1-5 numer)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .zgrafiti  
🔹𝙐𝙨𝙚➜ (.zgrafiti cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .kbattle  
🔹𝙐𝙨𝙚➜ (.kbattle cobra/cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .devil   
🔹𝙐𝙨𝙚➜ (.devil cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .turi  
🔹𝙐𝙨𝙚➜ (.turi  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .ubeach   
🔹𝙐𝙨𝙚➜ (.ubeach  cobra/1-5 number)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .zwater   
🔹𝙐𝙨𝙚➜ (.zwater  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .bear   
🔹𝙐𝙨𝙚➜ (.bear    cobra)

⚠️අවසානෙට ඉලක්කම් දාන්න තියන 
command වල ඉලක්කම අනිවාරෙන් දාන්න
background වෙනස් වෙනව ඒකෙන්...

*━━━━━🐍COBRA LOGO PACK🐍━━━*
_*🌍ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ*_
`}) 

 }));
}

if (Config.WORKTYPE == 'public') {
cobra.addCommand({pattern: 'spack', fromMe: false, desc: Lang.TET_DESC}, (async (message, match) => {

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: `*━━━━━🐍COBRA LOGO PACK🐍━━━━━*
*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .metalic 
🔹𝙐𝙨𝙚➜ .metalic (.metalic cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .cup  
🔹𝙐𝙨𝙚➜ .cup (.cup cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .romantic  
🔹𝙐𝙨𝙚➜ .romantic (.romantic cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .burnp
🔹𝙐𝙨𝙚➜   .burnp (.burnp cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .ccup 
🔹𝙐𝙨𝙚➜   .ccup (.ccup cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .love 
🔹𝙐𝙨𝙚➜   .love (.love cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .cofee  
🔹𝙐𝙨𝙚➜ .cofee (.cofee cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .grass 
🔹𝙐𝙨𝙚➜ .grass (.grass cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .hwood 
🔹𝙐𝙨𝙚➜ (.hwood cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .bwood 
🔹𝙐𝙨𝙚➜ (.bwood cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .summer 
🔹𝙐𝙨𝙚➜ (.summer cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .nature 
🔹𝙐𝙨𝙚➜  (.nature cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .uwater 
🔹𝙐𝙨𝙚➜ (.uwater cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .nsummer  
🔹𝙐𝙨𝙚➜ (.nsummer cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .ufall  
🔹𝙐𝙨𝙚➜ (.ufall cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .geon 
🔹𝙐𝙨𝙚➜ (.geon cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .nsky  
🔹𝙐𝙨𝙚➜ (.nsky cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .ucube 
🔹𝙐𝙨𝙚➜ (.ucube cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .fur  
🔹𝙐𝙨𝙚➜ (.fur cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .crisp 
🔹𝙐𝙨𝙚➜ (.crisp cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .embro 
🔹𝙐𝙨𝙚➜ (.embro cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .uweb 
🔹𝙐𝙨𝙚➜ (.uweb cobra/1-5 number)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gleave 
🔹𝙐𝙨𝙚➜ (.gleave cobra/1-5 number)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .bfly 
🔹𝙐𝙨𝙚➜   (.bfly cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .zwood  
🔹𝙐𝙨𝙚➜   (.zwood cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .harrypo  
🔹𝙐𝙨𝙚➜   (.harrypo cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .nlight 
🔹𝙐𝙨𝙚➜   .nlight cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .scary  
🔹𝙐𝙨𝙚➜  (.scary cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .blwood 
🔹𝙐𝙨𝙚➜  (.blwood cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .xtrypo 
🔹𝙐𝙨𝙚➜ (.xtrypo cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .uflower  
🔹𝙐𝙨𝙚➜ (.uflower cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .flower  
🔹𝙐𝙨𝙚➜ (.flower cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .partyneon  
🔹𝙐𝙨𝙚➜ (.partyneon  cobra/1-5 number)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .dmetal  
🔹𝙐𝙨𝙚➜ (.dmetal cobra/1-29 number)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gocs  
🔹𝙐𝙨𝙚➜ (.gocs cobra/1-5 numer)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .zgrafiti  
🔹𝙐𝙨𝙚➜ (.zgrafiti cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .kbattle  
🔹𝙐𝙨𝙚➜ (.kbattle cobra/cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .devil   
🔹𝙐𝙨𝙚➜ (.devil cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .turi  
🔹𝙐𝙨𝙚➜ (.turi  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .ubeach   
🔹𝙐𝙨𝙚➜ (.ubeach  cobra/1-5 number)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .zwater   
🔹𝙐𝙨𝙚➜ (.zwater  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .bear   
🔹𝙐𝙨𝙚➜ (.bear    cobra)

⚠️අවසානෙට ඉලක්කම් දාන්න තියන 
command වල ඉලක්කම අනිවාරෙන් දාන්න
background වෙනස් වෙනව ඒකෙන්...

*━━━━━🐍COBRA LOGO PACK🐍━━━*
_*🌍ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ*_
`}) 

 }));
}
