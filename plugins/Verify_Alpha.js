const Trex = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');


Trex.addrex({pattern: 'check', fromMe: false, deleteCommand: true, desc: 'verify 👿',}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] ="0420 🎭🇱🇰𝙰𝙻𝙿𝙷𝙰🇱🇰🎭 v5 CONFIRMED  2022|>";
    r_text[2] ="0421 🎭🇱🇰𝙰𝙻𝙿𝙷𝙰🇱🇰🎭 v5 CONFIRMED  2023|>";
    r_text[3] ="0771 🎭🇱🇰𝙰𝙻𝙿𝙷𝙰🇱🇰🎭 v5 CONFIRMED  2024|>";
    r_text[4] ="0891 🎭🇱🇰𝙰𝙻𝙿𝙷𝙰🇱🇰🎭 v5 CONFIRMED  2025|>";
    r_text[5] ="0957 🎭🇱🇰𝙰𝙻𝙿𝙷𝙰🇱🇰🎭 v5 CONFIRMED  2026|>";
    r_text[6] ="0582 🎭🇱🇰𝙰𝙻𝙿𝙷𝙰🇱🇰🎭 v5 CONFIRMED  2027|>";
    r_text[7] ="0719 🎭🇱🇰𝙰𝙻𝙿𝙷𝙰🇱🇰🎭 v5 CONFIRMED  2028|>";
    r_text[8] ="0269 🎭🇱🇰𝙰𝙻𝙿𝙷𝙰🇱🇰🎭 v5 CONFIRMED  2029|>";
  

    var i = Math.floor(08*Math.random())

    await message.client.sendMessage(
        message.jid,(r_text[i])+'.', MessageType.text);

    }));
