/* 
cobra bot developer
cobra dev
*/

const cobra = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const Language = require('../language');
const YTV_DESC = "Song Downloader V2"
const YT_NEED = "*need word!*"
const DWLOAD_VID = "*Downloading your song...*"
const YTV_UP = "*Uploading your song...*"
const NO_RESULT = "*can't Find Anything...*"


if (Config.WORKTYPE == 'private') {

    cobra.addCommand({ pattern: 'audio ?(.*)', fromMe: true, desc: YTV_DESC,  deleteCommand: false}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text);
        await axios
          .get(`https://hadi-api.herokuapp.com/api/ytplay?q=${link}`)
          .then(async (response) => {
            const {
              download_audio,
              title,
            } = response.data.result
    
            const audioBuffer = await axios.get(download_audio, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(audioBuffer.data), MessageType.document, {filename: title + '.mp3', mimetype: 'audio/mpeg'})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
}

else if (Config.WORKTYPE == 'public') {
    cobra.addCommand({ pattern: 'audio ?(.*)', fromMe: false, desc: YTV_DESC}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text, {quoted: message.data})
         await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text)
        await axios
          .get(`https://hadi-api.herokuapp.com/api/ytplay?q=${link}`)
          .then(async (response) => {
            const {
              download_audio,
              title,
            } = response.data.result
    
            const audioBuffer = await axios.get(download_audio, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text, {quoted: message.data});
            await message.client.sendMessage(message.jid,Buffer.from(audioBuffer.data), MessageType.document, {filename: title + '.mp3', mimetype: 'audio/mpeg'})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
}
