/*
cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot 
coded by cobradev- sisula welgamage
cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot cobra bot 
*/


const cobra = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const { errorMessage, infoMessage } = require('../helpers');
const Language = require('../language');
const PHONEDE_DESC = "It Send Github User Data."
const NEED_WORDC = "කරුණාකර නමක් ඇතුළත් කරන්න"
const USAGE = "..."
const LOADING = "Fetching User Data"
const PHN_PHN = "Name-:"
const PHN_NAME = "BIO-:"
const PHN_RDATE = "Company-:"
const PHN_SIZE = "Email-:"
const PHN_ANDRO = "Public Repo-:"
const PHN_STOR = "Public Gists-:"
const PHN_DISP = "Followers-:"
const PHN_INCH = "Following-:"
const PHN_PIX = "Location-:"
const PHN_VPIX = "Type-:"
const NOT_FOUND = "*Can't Find Anything!.*"



if (Config.WORKTYPE == 'private') {

cobra.addCommand({ pattern: 'github ?(.*)', fromMe: true, usage: USAGE, desc: PHONEDE_DESC }, async (message, match) => {

    const pname = match[1]

    if (!pname) return await message.sendMessage(errorMessage(NEED_WORDC))

    await message.sendMessage(infoMessage(LOADING))

    await axios
      .get(`https://hadi-api.herokuapp.com/api/githubstalk?username=${pname}`)
      .then(async (response) => {
        const {
              avatar,
              bio,
              company,
              email,
              public_repo, 
              public_gists, 
              follower,
              following,
              location,
              Type,

        } = response.data.result

        const profileBuffer = await axios.get(avatar, {responseType: 'arraybuffer'})

        const msg = `
        *${PHN_PHN}* ${pname} 
        *${PHN_NAME}* ${bio} 
        *${PHN_RDATE}* ${company} 
        *${PHN_SIZE}* ${email} 
        *${PHN_ANDRO}* ${public_repo} 
        *${PHN_STOR}* ${public_gists} 
        *${PHN_DISP}* ${follower} 
        *${PHN_INCH}* ${following} 
        *${PHN_PIX}* ${location} 
        *${PHN_VPIX}* ${Type}` 
        
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg +'\n'+'*Copyright © 2021 COBRABOT*'
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(NOT_FOUND + userName)),
      )
  },

 )
}
if (Config.WORKTYPE == 'public') {

cobra.addCommand({ pattern: 'github ?(.*)', fromMe: false, usage: USAGE, desc: PHONEDE_DESC }, async (message, match) => {

    const pname = match[1]

    if (!pname) return await message.sendMessage(errorMessage(NEED_WORDC))

    await message.sendMessage(infoMessage(LOADING))

    await axios
      .get(`https://hadi-api.herokuapp.com/api/githubstalk?username=${pname}`)
      .then(async (response) => {
        const {
              avatar,
              bio,
              company,
              email,
              public_repo, 
              public_gists, 
              follower,
              following,
              location,
              Type,

        } = response.data.result

        const profileBuffer = await axios.get(avatar, {responseType: 'arraybuffer'})

        const msg = `
        *${PHN_PHN}* ${pname} 
        *${PHN_NAME}* ${bio} 
        *${PHN_RDATE}* ${company} 
        *${PHN_SIZE}* ${email} 
        *${PHN_ANDRO}* ${public_repo} 
        *${PHN_STOR}* ${public_gists} 
        *${PHN_DISP}* ${follower} 
        *${PHN_INCH}* ${following} 
        *${PHN_PIX}* ${location} 
        *${PHN_VPIX}* ${Type}` 
        
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg +'\n'+'*Copyright © 2021 COBRABOT*'
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(NOT_FOUND + pname)),
      )
  },

 )
}
