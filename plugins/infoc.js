/* coded by sisula welgamage
cobra dev.
c
o
v
i         p
d e t a i l
          u
          g
          i
          n
*/

const cobra = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const Language = require('../language');
//language support____
const FONT_DESC = "රටවල දෛනික සහ සමස්ත කොවිඩ් වගුව පෙන්වයි."
const FONT_NEED = "කරුණාකර රටක් ඇතුළත් කරන්න"
const UP_BAR = "╔══════════════════"
const DOWN_BAR = "╠══════════════════"
const DOWN_DOWN = "╚════════════════"
const CVD_COUN = "║🌎 COUNTRY -:"
const CVD_CASE = "║😷 CASES -:"
const CVD_TCASE = "║🥵 TODAY CASES -:"
const CVD_DEATHS = "║🏳️ DEATHS -:"
const CVD_TDEATHS = "║⚰️TODAY DEATHS -:"
const CVD_RECO = "║🏡 RECOVERED -:"
const CVD_ACTIVE = "║🤒 ACTIVE -:"
const CVD_CIRT = "║😑 CRITICAL -:"
const CVD_TTEST = "║🧑‍🔬TOTAL TEST -:"
const NO_RESULT = "*මට මෙම නම සහිත රටක් සොයාගත නොහැකි විය.😔*"
//end language

if (Config.WORKTYPE == 'private') {

    cobra.addCommand({ pattern: 'covid ?(.*)', fromMe: true, desc: FONT_DESC,  deleteCommand: false}, async (message, match) => {
        if (!match[1]) return await message.client.sendMessage(message.jid,FONT_NEED,MessageType.text)
        var r_text = new Array ();
                  r_text[0] = "*😷Stay Safe*";
                  r_text[1] = "*🧼🖐Wash Hands*";
                  r_text[2] = "*🧍↔️🧍Keep a 1m Away*";
                  r_text[3] = "*🚫🤦Don't Touch Your Face*";
                  r_text[4] = "*🤧💪 Do Sneeze Into Your Elbow*";
                  r_text[5] = "*😷Wearing a Mask In Public*";
        var i = Math.floor(6*Math.random())
        
        await axios
          .get(`https://coronavirus-19-api.herokuapp.com/countries/${match[1]}`)
          .then(async (response) => {
            const {//site datas
                country,//                        ██╗░░░██╗██╗██████╗░
                cases,//                          ██║░░░██║██║██╔══██╗
                todayCases,//                     ╚██╗░██╔╝██║██████╔╝
                deaths,//                         ░╚████╔╝░██║██╔═══╝░
                todayDeaths,//                    ░░╚██╔╝░░██║██║░░░░░	
                recovered,//                      ░░░╚═╝░░░╚═╝╚═╝░░░░░	
                active,//                      
                critical,//               ░█████╗░░█████╗░██████╗░██████╗░░█████╗░
                casesPerOneMillion,//     ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔══██╗
                deathsPerOneMillion,//    ██║░░╚═╝██║░░██║██████╦╝██████╔╝███████║
                totalTests,//             ██║░░██╗██║░░██║██╔══██╗██╔══██╗██╔══██║
                testsPerOneMillion,//     ╚█████╔╝╚█████╔╝██████╦╝██║░░██║██║░░██║
            } = response.data
            const msg =`${UP_BAR}` + `\n` + `*${CVD_COUN}* ${country}` + `\n` +
                  `${DOWN_BAR}` + `\n\n` +
                  `*${CVD_CASE}* ${cases}` + `\n` +                   
                  `*${CVD_TCASE}* ${todayCases}` + `\n` +
                  `*${CVD_DEATHS}* ${deaths}` + `\n` +
                  `*${CVD_TDEATHS}* ${todayDeaths}` + `\n` +
                  `*${CVD_RECO}* ${recovered}` + `\n` +
                  `*${CVD_ACTIVE}* ${active}` + `\n` +
                  `*${CVD_CIRT}* ${critical}` + `\n` +
                  `*${CVD_TTEST}* ${totalTests}` + `\n` +
                  `${DOWN_DOWN}` + `\n`
                                                    
            await message.client.sendMessage(message.jid,msg ,MessageType.text)
            await message.client.sendMessage(message.jid,`${r_text[i]}`,MessageType.text)
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
}

if (Config.WORKTYPE == 'public') {

    cobra.addCommand({ pattern: 'covid ?(.*)', fromMe: false, desc: FONT_DESC,  deleteCommand: false}, async (message, match) => {
        if (!match[1]) return await message.client.sendMessage(message.jid,FONT_NEED,MessageType.text)
        var r_text = new Array ();
                  r_text[0] = "*😷Stay Safe*";
                  r_text[1] = "*🧼🖐Wash Hands*";
                  r_text[2] = "*🧍↔️🧍Keep a 1m Away*";
                  r_text[3] = "*🚫🤦Don't Touch Your Face*";
                  r_text[4] = "*🤧💪 Do Sneeze Into Your Elbow*";
                  r_text[5] = "*😷Wearing a Mask In Public*";
        var i = Math.floor(6*Math.random())
        
        await axios
          .get(`https://coronavirus-19-api.herokuapp.com/countries/${match[1]}`)
          .then(async (response) => {
            const {//site datas
                country,//                        ██╗░░░██╗██╗██████╗░
                cases,//                          ██║░░░██║██║██╔══██╗
                todayCases,//                     ╚██╗░██╔╝██║██████╔╝
                deaths,//                         ░╚████╔╝░██║██╔═══╝░
                todayDeaths,//                    ░░╚██╔╝░░██║██║░░░░░	
                recovered,//                      ░░░╚═╝░░░╚═╝╚═╝░░░░░	
                active,//                      
                critical,//               ░█████╗░░█████╗░██████╗░██████╗░░█████╗░
                casesPerOneMillion,//     ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔══██╗
                deathsPerOneMillion,//    ██║░░╚═╝██║░░██║██████╦╝██████╔╝███████║
                totalTests,//             ██║░░██╗██║░░██║██╔══██╗██╔══██╗██╔══██║
                testsPerOneMillion,//     ╚█████╔╝╚█████╔╝██████╦╝██║░░██║██║░░██║
            } = response.data
            const msg =`${UP_BAR}` + `\n` + `*${CVD_COUN}* ${country}` + `\n` +
                  `${DOWN_BAR}` + `\n\n` +
                  `*${CVD_CASE}* ${cases}` + `\n` +                   
                  `*${CVD_TCASE}* ${todayCases}` + `\n` +
                  `*${CVD_DEATHS}* ${deaths}` + `\n` +
                  `*${CVD_TDEATHS}* ${todayDeaths}` + `\n` +
                  `*${CVD_RECO}* ${recovered}` + `\n` +
                  `*${CVD_ACTIVE}* ${active}` + `\n` +
                  `*${CVD_CIRT}* ${critical}` + `\n` +
                  `*${CVD_TTEST}* ${totalTests}` + `\n` +
                  `${DOWN_DOWN}` + `\n`
                                                    
            await message.client.sendMessage(message.jid,msg ,MessageType.text)
            await message.client.sendMessage(message.jid,`${r_text[i]}`,MessageType.text)
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
}
