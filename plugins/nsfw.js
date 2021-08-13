/* special thanks black amda script
re maker  cobra botdev
cobra dev
*/

const cobra = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const Language = require('../language');
const YTV_DESC = "Download NSFW Videos(only vip)"
const YT_NEED = "*need link!*"
const DWLOAD_VID = "*Download Your Video*"
const YTV_UP = "*Uploading Your Video*"
const NO_RESULT = "*can't Find Anything...*"


if (Config.WORKTYPE == 'private') {

   cobra.addCommand({ pattern: 'getx ?(.*)', fromMe: true, desc: YTV_DESC}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text, {quoted: message.data})
         await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text)
        await axios
          .get(`https://zenzapi.xyz/api/xnxx?url=${link}&apikey=e75b25d89d`)
          .then(async (response) => {
            const {
              url,
            } = response.data.result
    
            const videoBuffer = await axios.get(url, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text, {quoted: message.data});
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.document, {mimetype: Mimetype.mp4, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
}

if (Config.WORKTYPE == 'public') {

   cobra.addCommand({ pattern: 'getx ?(.*)', fromMe: false, desc: YTV_DESC}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text, {quoted: message.data})
         await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text)
        await axios
          .get(`https://zenzapi.xyz/api/xnxx?url=${link}&apikey=e75b25d89d`)
          .then(async (response) => {
            const {
              url,
            } = response.data.result
    
            const videoBuffer = await axios.get(url, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text, {quoted: message.data});
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.document, {mimetype: Mimetype.mp4, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
}
