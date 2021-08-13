/* Copyright (C) 2020 cobrabot
coded by cobradev

*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_GIF, {responseType: 'arraybuffer'})
                    const msg = `
        ══════════════════ 
        ██╗░░██╗██╗██████
        ██║░░██║██║██╔═██ 
        ╚██╗██╔╝██║██████
        ░╚████╔╝██║██╔═══ 
        ░░╚██╔╝░██║██║░░░` 
 
         
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.video, {mimetype: Mimetype.gif, caption: msg + '\n\n▪️ᴏᴡɴᴇʀ    🔗ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ\n▪️ʙʀᴀɴᴄʜ   🔗ᴍᴀꜱᴛᴇʀ\n▪️ᴛʜᴇ ᴛʏᴘᴇ ᴏꜰ ʙᴏᴛ 🔗ᴄᴏʙʀᴀʙᴏᴛ🐍\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n▪️ʙᴏᴛ ᴰᴱⱽᴱᴸᴼᴾᴱᴿ   🔗ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ\n▪️ʜᴇʟᴘᴇᴅ ᴛᴏ ᴍᴀᴋᴇᴅ ᴛʜᴇ ʙᴏᴛ🔗ʙʟᴀᴄᴋ ᴀᴍᴅᴀ\n▪️ʙᴏᴛ ᴅᴇꜱɪɢɴᴇᴅ ʙʏ    🔗ᴅ.ᴋͥᴇᷧꜱᷟʜᴀʟ\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n╔═══════════════════════════╗\n║ᴛʏᴘᴇ .alive/cpanel ꜰᴏʀ ɢᴇᴛ ᴄᴏᴍᴍᴀɴᴅꜱ ʟɪꜱᴛ ║\n╚═══════════════════════════╝'})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_GIF, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.video, {mimetype: Mimetype.gif, caption: Config.ALIVEMSG + '\n\n*ᴄᴏʙʀᴀʙᴏᴛ ᴠɪᴘ ᴇᴅɪᴛɪᴏɴ*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_GIF, {responseType: 'arraybuffer'})
                    const msg = `
        ══════════════════ 
        ██╗░░██╗██╗██████
        ██║░░██║██║██╔═██ 
        ╚██╗██╔╝██║██████
        ░╚████╔╝██║██╔═══ 
        ░░╚██╔╝░██║██║░░░` 
 
         
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.video, {mimetype: Mimetype.gif, caption: msg + '\n\n▪️ᴏᴡɴᴇʀ    🔗ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ\n▪️ʙʀᴀɴᴄʜ   🔗ᴍᴀꜱᴛᴇʀ\n▪️ᴛʜᴇ ᴛʏᴘᴇ ᴏꜰ ʙᴏᴛ 🔗ᴄᴏʙʀᴀʙᴏᴛ🐍\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n▪️ʙᴏᴛ ᴰᴱⱽᴱᴸᴼᴾᴱᴿ   🔗ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ\n▪️ʜᴇʟᴘᴇᴅ ᴛᴏ ᴍᴀᴋᴇᴅ ᴛʜᴇ ʙᴏᴛ🔗ʙʟᴀᴄᴋ ᴀᴍᴅᴀ\n▪️ʙᴏᴛ ᴅᴇꜱɪɢɴᴇᴅ ʙʏ    🔗ᴅ.ᴋͥᴇᷧꜱᷟʜᴀʟ\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n╔═══════════════════════════╗\n║ᴛʏᴘᴇ .alive/cpanel ꜰᴏʀ ɢᴇᴛ ᴄᴏᴍᴍᴀɴᴅꜱ ʟɪꜱᴛ ║\n╚═══════════════════════════╝'})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_GIF, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.video, {mimetype: Mimetype.gif, caption: Config.ALIVEMSG + '\n\n*ᴄᴏʙʀᴀʙᴏᴛ ᴠɪᴘ ᴇᴅɪᴛɪᴏɴ*' })
     }
    }));


    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
} 
