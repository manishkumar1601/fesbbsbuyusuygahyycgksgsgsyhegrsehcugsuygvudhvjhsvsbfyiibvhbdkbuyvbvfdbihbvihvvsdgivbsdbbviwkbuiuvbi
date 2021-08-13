/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v1.3.2 Global Stable',
    CHANNEL: 'https://t.me/remasterplugin',
    SESSION: process.env.ASENA_SESSION === undefined ? '' : process.env.ASENA_SESSION,
    ANTİLİNK: process.env.ANTİ_LİNK === undefined ? 'false' : process.env.ANTİ_LİNK,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'false' : process.env.AUTO_BİO,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    ALIVE_GIF: process.env.ALIVE_GIF === undefined ? 'https://telegra.ph/file/94e26aec7db113b927ab3.mp4' : process.env.ALIVE_GIF,
    WELCOME_GIF: process.env.WELCOME_GIF === undefined ? 'https://tinyurl.com/queenamdi-welcome' : process.env.WELCOME_GIF,
    BYE_GIF: process.env.BYE_GIF === undefined ? 'https://tinyurl.com/queenamdi-goodbye' : process.env.BYE_GIF,
    XTEAM_API: process.env.XTEAM_API === undefined ? 'e790c2e470fd0a63' : process.env.XTEAM_API,
    ZEKS_API: process.env.ZEKS_API === undefined ? 'odsMYXx67ZhT38w5hp5mgRKO8En' : process.env.ZEKS_API,
    LOLHUMAN_API: process.env.LOLHUMAN_API === undefined ? 'notnow' : process.env.LOLHUMAN_API,
    SONG_DOWN: process.env.SONG_DOWN === undefined ? '*ේ ගීතය Download කරමින් පවතී...*' : process.env.SONG_DOWN,
    SONG_UP: process.env.SONG_UP === undefined ? '*♦️ ඔබේ ගීතය Upload කරමින් පවතී...*' : process.env.SONG_UP,
    VIDEO_DOWN: process.env.VIDEO_DOWN === undefined ? '*♦️ ඔබේ වීඩියෝව Download කරමින් පවතී...*' : process.env.VIDEO_DOWN,
    VIDEO_UP: process.env.VIDEO_UP === undefined ? '*♦️ ඔබේ වීඩියෝව Upload කරමින් පවතී...*' : process.env.VIDEO_UP,
    CMDP_MSG: process.env.CMDP_MSG === undefined ? 'default' : process.env.CMDP_MSG,
    CMDPB_MSG: process.env.CMDPB_MSG === undefined ? 'default' : process.env.CMDPB_MSG,
    LOGOPK_IMG: process.env.LOGOPK_IMG === undefined ? 'https://telegra.ph/file/a1b5345cf2bb012740646.jpg' : process.env.LOGOPK_IMG,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    FULLEVA: process.env.FULL_EVA === undefined ? 'false' : process.env.FULL_EVA,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT: "905524317852-1612300121",
    SUPPORT2: "905511384572-1617736751",
    SUPPORT3: "905511384572-1621015274",
    OWN: "94766239744,0"
};
