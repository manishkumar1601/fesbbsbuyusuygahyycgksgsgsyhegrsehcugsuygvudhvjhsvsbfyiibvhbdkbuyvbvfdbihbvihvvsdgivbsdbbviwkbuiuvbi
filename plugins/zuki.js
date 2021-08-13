
/* Codded by @sisula
blank page
*/
const cobra = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

if (Config.WORKTYPE == 'private') {
  
  cobra.addCommand({pattern: 'glitch ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/tiktok-effect?teks=${topText}&teks2=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

     }));
  
 cobra.addCommand({pattern: 'naruto ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/manga-naruto?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
 cobra.addCommand({pattern: 'flame ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/flaming-fire?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

     }));
  
cobra.addCommand({pattern: 'metalic ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/metalic-gold?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
cobra.addCommand({pattern: 'shadow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/shadow-sky?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
cobra.addCommand({pattern: 'cup ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/teks-cup?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'romantic ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/romantic-messages?teks=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'burnp ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/burn-paper?teks=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
   cobra.addCommand({pattern: 'ccup ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/funny-cup?teks=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'love ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/love-messages?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'cofee ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/coffee-cup?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'grass ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/under-grass?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'hwood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/wood-hearth?teks=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'bwood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/wooden-boards?teks=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'summer ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/3d-summer?teks=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'nature ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/nature-3d?teks=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'uwater ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/underwater?teks=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'yrose ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/golden-roses?teks=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'nsummer ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/summer-nature-bg?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'ufall ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/under-fall?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'gneon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/neon-glow?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'ucube ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/under-cube?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'gavatar ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/gradient-avatar?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'rainbow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/glow-rainbow?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'nsky ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/write-stars?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'fur ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/fur-effect?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
   cobra.addCommand({pattern: 'crisp ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/crisp-chrome?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'embro ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/embroidery-text?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'uweb ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/under-web-matrix?teks=${topText}&background=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

     }));
  
  cobra.addCommand({pattern: 'gleave ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/green-leaves?teks=${topText}&font=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

     }));
  
  cobra.addCommand({pattern: 'bfly ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/butter-fly?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'zwood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/wooden-3d-black?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'harrypo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/harry-poter?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'nlight ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/neon-lights?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'scary ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/text-on-scary?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'blwood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/woodblock-effect?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'xtrypo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/smoke-typography?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'andy ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/sweet-candy?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'uflower ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/under-orchids?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'flower ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/flower-typography?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'partyneon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/party-neon?teks=${topText}&background=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

     }));
  
  cobra.addCommand({pattern: 'dmetal ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/dark-metal?teks=${topText}&background=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

     }));
  
  cobra.addCommand({pattern: 'gocs ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/csgo?teks=${topText}&background=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

     }));
  
  cobra.addCommand({pattern: 'zgrafiti ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/grafiti-text-cover?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'fbattle ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/battlefield-4-rising?teks=${topText}&teks2=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

     }));
  
  cobra.addCommand({pattern: 'devil ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/textpro/neon-devil-wings?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'turi ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/textpro/futuristic-technology?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'ubeach ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/textpro/on-the-beach?teks=${topText}&background=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

     }));
  
  cobra.addCommand({pattern: 'zwater ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/textpro/3d-underwater-text?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'bear ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/textpro/black-white-bear-mascot?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
}

if (Config.WORKTYPE == 'public') {
  
  cobra.addCommand({pattern: 'glitch ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/tiktok-effect?teks=${topText}&teks2=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

     }));
  
 cobra.addCommand({pattern: 'naruto ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/manga-naruto?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
 cobra.addCommand({pattern: 'flame ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/flaming-fire?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

     }));
  
cobra.addCommand({pattern: 'metalic ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/metalic-gold?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
cobra.addCommand({pattern: 'shadow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/shadow-sky?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
cobra.addCommand({pattern: 'cup ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/teks-cup?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'romantic ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/romantic-messages?teks=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'burnp ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/burn-paper?teks=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
   cobra.addCommand({pattern: 'ccup ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/funny-cup?teks=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'love ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/love-messages?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'cofee ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/coffee-cup?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'grass ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/under-grass?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'hwood ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/wood-hearth?teks=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'bwood ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/wooden-boards?teks=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'summer ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/3d-summer?teks=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'nature ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/nature-3d?teks=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'uwater ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/underwater?teks=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'yrose ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/golden-roses?teks=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'nsummer ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/summer-nature-bg?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'ufall ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/under-fall?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'gneon ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/neon-glow?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'ucube ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/under-cube?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'gavatar ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/gradient-avatar?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'rainbow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/glow-rainbow?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'nsky ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/write-stars?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'fur ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/fur-effect?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
   cobra.addCommand({pattern: 'crisp ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/crisp-chrome?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'embro ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/embroidery-text?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'uweb ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/under-web-matrix?teks=${topText}&background=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

     }));
  
  cobra.addCommand({pattern: 'gleave ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/green-leaves?teks=${topText}&font=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

     }));
  
  cobra.addCommand({pattern: 'bfly ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/butter-fly?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'zwood ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/wooden-3d-black?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'harrypo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/harry-poter?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'nlight ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/neon-lights?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'scary ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/text-on-scary?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'blwood ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/woodblock-effect?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'xtrypo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/smoke-typography?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'andy ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/sweet-candy?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'uflower ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/under-orchids?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'flower ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/flower-typography?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'partyneon ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/party-neon?teks=${topText}&background=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

     }));
  
  cobra.addCommand({pattern: 'dmetal ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/dark-metal?teks=${topText}&background=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

     }));
  
  cobra.addCommand({pattern: 'gocs ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/csgo?teks=${topText}&background=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

     }));
  
  cobra.addCommand({pattern: 'zgrafiti ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/grafiti-text-cover?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'fbattle ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/battlefield-4-rising?teks=${topText}&teks2=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

     }));
  
  cobra.addCommand({pattern: 'devil ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/textpro/neon-devil-wings?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'turi ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/textpro/futuristic-technology?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'ubeach ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/textpro/on-the-beach?teks=${topText}&background=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

     }));
  
  cobra.addCommand({pattern: 'zwater ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/textpro/3d-underwater-text?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
  
  cobra.addCommand({pattern: 'bear ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/textpro/black-white-bear-mascot?teks=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 🐍COBRABOT🐍'})

    }));
}
 
