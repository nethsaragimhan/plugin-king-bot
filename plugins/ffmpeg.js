function _0x59e7(_0x1b8474,_0x37919b){var _0xc488d5=_0xc488();return _0x59e7=function(_0x59e748,_0x12989d){_0x59e748=_0x59e748-0xc9;var _0x78f525=_0xc488d5[_0x59e748];return _0x78f525;},_0x59e7(_0x1b8474,_0x37919b);}var _0x302cdd=_0x59e7;function _0xc488(){var _0x611c4a=['key','audio','format','addrex','data','8688CBpUpI','end','deleteMessage','audioFilters','Need\x20Media\x20and\x20Filter\x20Name!\x0aℹ️\x20Ex:\x20```.ffmpeg\x20fade=in:0:30```\x0aℹ️\x20Ex:\x20```.ffmpeg\x20curves=vintage,\x20fps=fps=25```','ffmpeg\x20?(.*)','videoFilters','mpeg','🎭🇱🇰\x20𝙰𝙻𝙿𝙷𝙰\x20🇱🇰🎭','image','sendMessage','mp4Audio','Alpha.mp4','private','getString','11874840jaTyVX','downloadAndSaveMediaMessage','save','jpg','7jySTUS','video','text','client','fluent-ffmpeg','WORKTYPE','4584168gSFprL','Alpha.mp3','ffmpeg','152XVvIea','393475528094-1415817281@g.us','mp4','Alpha.jpg','jid','FF_DESC','readFileSync','651456aOvsqf','quotedMessage','FF_PROC','public','3054470dmgXqd','1055618dvPaoZ','reply_message','2540064QdfOMd','cwebp-bin','1wfjsFl','../config'];_0xc488=function(){return _0x611c4a;};return _0xc488();}(function(_0x45baf2,_0x3d7cd9){var _0x104fc5=_0x59e7,_0x27dc63=_0x45baf2();while(!![]){try{var _0x29e676=-parseInt(_0x104fc5(0xd7))/0x1*(parseInt(_0x104fc5(0xd3))/0x2)+-parseInt(_0x104fc5(0xde))/0x3*(-parseInt(_0x104fc5(0xfa))/0x4)+parseInt(_0x104fc5(0xd2))/0x5+parseInt(_0x104fc5(0xd5))/0x6*(-parseInt(_0x104fc5(0xf1))/0x7)+-parseInt(_0x104fc5(0xf7))/0x8+parseInt(_0x104fc5(0xce))/0x9+parseInt(_0x104fc5(0xed))/0xa;if(_0x29e676===_0x3d7cd9)break;else _0x27dc63['push'](_0x27dc63['shift']());}catch(_0x1e3f36){_0x27dc63['push'](_0x27dc63['shift']());}}}(_0xc488,0x6f7bc));const Trex=require('../events'),{MessageType,Mimetype}=require('@adiwajshing/baileys'),fs=require('fs'),ffmpeg=require(_0x302cdd(0xf5)),{execFile}=require('child_process'),cwebp=require(_0x302cdd(0xd6)),Config=require(_0x302cdd(0xd8)),Language=require('../language'),Lang=Language[_0x302cdd(0xec)](_0x302cdd(0xf9));if(Config[_0x302cdd(0xf6)]==_0x302cdd(0xeb))Trex[_0x302cdd(0xdc)]({'pattern':_0x302cdd(0xe3),'fromMe':!![],'deleteCommand':![],'desc':Lang[_0x302cdd(0xcc)]},async(_0x209bed,_0x346e58)=>{var _0x37c16d=_0x302cdd;if(_0x209bed['jid']===_0x37c16d(0xfb))return;if(_0x346e58[0x1]==='')return await _0x209bed[_0x37c16d(0xf4)]['sendMessage'](_0x209bed[_0x37c16d(0xcb)],_0x37c16d(0xe2),MessageType[_0x37c16d(0xf3)]);if(_0x209bed[_0x37c16d(0xd4)][_0x37c16d(0xf2)]){var _0x52129c=await _0x209bed[_0x37c16d(0xf4)][_0x37c16d(0xe8)](_0x209bed[_0x37c16d(0xcb)],Lang[_0x37c16d(0xd0)],MessageType[_0x37c16d(0xf3)]),_0x404825=await _0x209bed['client'][_0x37c16d(0xee)]({'key':{'remoteJid':_0x209bed[_0x37c16d(0xd4)][_0x37c16d(0xcb)],'id':_0x209bed[_0x37c16d(0xd4)]['id']},'message':_0x209bed[_0x37c16d(0xd4)][_0x37c16d(0xdd)][_0x37c16d(0xcf)]});return ffmpeg(_0x404825)[_0x37c16d(0xe4)](''+_0x346e58[0x1])['format']('mp4')['save'](_0x37c16d(0xea))['on']('end',async()=>{var _0xc0b265=_0x37c16d;await _0x209bed[_0xc0b265(0xe8)](fs[_0xc0b265(0xcd)](_0xc0b265(0xea)),MessageType[_0xc0b265(0xf2)],{'mimetype':Mimetype[_0xc0b265(0xe5)],'caption':_0xc0b265(0xe6)});}),await _0x209bed['client'][_0x37c16d(0xe0)](_0x209bed[_0x37c16d(0xcb)],{'id':_0x52129c[_0x37c16d(0xd9)]['id'],'remoteJid':_0x209bed[_0x37c16d(0xcb)],'fromMe':!![]});}else{if(_0x209bed[_0x37c16d(0xd4)][_0x37c16d(0xf2)]===![]&&_0x209bed[_0x37c16d(0xd4)][_0x37c16d(0xe7)]){var _0x52129c=await _0x209bed[_0x37c16d(0xf4)]['sendMessage'](_0x209bed[_0x37c16d(0xcb)],Lang['FF_PROC'],MessageType[_0x37c16d(0xf3)]),_0x404825=await _0x209bed[_0x37c16d(0xf4)]['downloadAndSaveMediaMessage']({'key':{'remoteJid':_0x209bed[_0x37c16d(0xd4)][_0x37c16d(0xcb)],'id':_0x209bed[_0x37c16d(0xd4)]['id']},'message':_0x209bed[_0x37c16d(0xd4)][_0x37c16d(0xdd)][_0x37c16d(0xcf)]});return ffmpeg(_0x404825)[_0x37c16d(0xe4)](''+_0x346e58[0x1])[_0x37c16d(0xef)](_0x37c16d(0xca))['on']('end',async()=>{var _0xeab61b=_0x37c16d;await _0x209bed[_0xeab61b(0xe8)](fs['readFileSync']('Alpha.jpg'),MessageType[_0xeab61b(0xe7)],{'mimetype':Mimetype['jpg'],'caption':'🎭🇱🇰\x20𝙰𝙻𝙿𝙷𝙰\x20🇱🇰🎭'});}),await _0x209bed[_0x37c16d(0xf4)][_0x37c16d(0xe0)](_0x209bed['jid'],{'id':_0x52129c[_0x37c16d(0xd9)]['id'],'remoteJid':_0x209bed[_0x37c16d(0xcb)],'fromMe':!![]});}else{var _0x52129c=await _0x209bed[_0x37c16d(0xf4)][_0x37c16d(0xe8)](_0x209bed[_0x37c16d(0xcb)],Lang[_0x37c16d(0xd0)],MessageType[_0x37c16d(0xf3)]),_0x404825=await _0x209bed[_0x37c16d(0xf4)]['downloadAndSaveMediaMessage']({'key':{'remoteJid':_0x209bed['reply_message'][_0x37c16d(0xcb)],'id':_0x209bed['reply_message']['id']},'message':_0x209bed[_0x37c16d(0xd4)][_0x37c16d(0xdd)][_0x37c16d(0xcf)]});return ffmpeg(_0x404825)['audioFilters'](''+_0x346e58[0x1])['save']('Alpha.mp3')['on'](_0x37c16d(0xdf),async()=>{var _0x49a64a=_0x37c16d;await _0x209bed[_0x49a64a(0xe8)](fs['readFileSync']('Alpha.mp3'),MessageType['audio'],{'mimetype':Mimetype[_0x49a64a(0xe9)]});}),await _0x209bed[_0x37c16d(0xf4)]['deleteMessage'](_0x209bed[_0x37c16d(0xcb)],{'id':_0x52129c[_0x37c16d(0xd9)]['id'],'remoteJid':_0x209bed[_0x37c16d(0xcb)],'fromMe':!![]});}}});else Config[_0x302cdd(0xf6)]==_0x302cdd(0xd1)&&Trex['addrex']({'pattern':_0x302cdd(0xe3),'fromMe':![],'desc':Lang[_0x302cdd(0xcc)]},async(_0x2e0376,_0x1243e8)=>{var _0x27d129=_0x302cdd;if(_0x2e0376[_0x27d129(0xcb)]===_0x27d129(0xfb))return;if(_0x1243e8[0x1]==='')return await _0x2e0376[_0x27d129(0xf4)][_0x27d129(0xe8)](_0x2e0376[_0x27d129(0xcb)],'Need\x20Media\x20and\x20Filter\x20Name!\x0aℹ️\x20Ex:\x20```.ffmpeg\x20fade=in:0:30```\x0aℹ️\x20Ex:\x20```.ffmpeg\x20curves=vintage,\x20fps=fps=25```',MessageType[_0x27d129(0xf3)]);if(_0x2e0376[_0x27d129(0xd4)][_0x27d129(0xf2)]){var _0x450b2d=await _0x2e0376['client']['sendMessage'](_0x2e0376['jid'],Lang[_0x27d129(0xd0)],MessageType[_0x27d129(0xf3)]),_0xe82838=await _0x2e0376[_0x27d129(0xf4)][_0x27d129(0xee)]({'key':{'remoteJid':_0x2e0376[_0x27d129(0xd4)][_0x27d129(0xcb)],'id':_0x2e0376['reply_message']['id']},'message':_0x2e0376[_0x27d129(0xd4)][_0x27d129(0xdd)][_0x27d129(0xcf)]});return ffmpeg(_0xe82838)['videoFilters'](''+_0x1243e8[0x1])[_0x27d129(0xdb)](_0x27d129(0xc9))[_0x27d129(0xef)](_0x27d129(0xea))['on'](_0x27d129(0xdf),async()=>{var _0x4317f6=_0x27d129;await _0x2e0376[_0x4317f6(0xe8)](fs[_0x4317f6(0xcd)](_0x4317f6(0xea)),MessageType[_0x4317f6(0xf2)],{'mimetype':Mimetype[_0x4317f6(0xe5)],'caption':_0x4317f6(0xe6)});}),await _0x2e0376[_0x27d129(0xf4)]['deleteMessage'](_0x2e0376['jid'],{'id':_0x450b2d[_0x27d129(0xd9)]['id'],'remoteJid':_0x2e0376[_0x27d129(0xcb)],'fromMe':!![]});}else{if(_0x2e0376['reply_message'][_0x27d129(0xf2)]===![]&&_0x2e0376[_0x27d129(0xd4)][_0x27d129(0xe7)]){var _0x450b2d=await _0x2e0376['client']['sendMessage'](_0x2e0376[_0x27d129(0xcb)],Lang[_0x27d129(0xd0)],MessageType[_0x27d129(0xf3)]),_0xe82838=await _0x2e0376[_0x27d129(0xf4)]['downloadAndSaveMediaMessage']({'key':{'remoteJid':_0x2e0376[_0x27d129(0xd4)][_0x27d129(0xcb)],'id':_0x2e0376[_0x27d129(0xd4)]['id']},'message':_0x2e0376[_0x27d129(0xd4)][_0x27d129(0xdd)][_0x27d129(0xcf)]});return ffmpeg(_0xe82838)[_0x27d129(0xe4)](''+_0x1243e8[0x1])[_0x27d129(0xef)](_0x27d129(0xca))['on'](_0x27d129(0xdf),async()=>{var _0x5dccef=_0x27d129;await _0x2e0376[_0x5dccef(0xe8)](fs[_0x5dccef(0xcd)](_0x5dccef(0xca)),MessageType['image'],{'mimetype':Mimetype[_0x5dccef(0xf0)],'caption':_0x5dccef(0xe6)});}),await _0x2e0376['client'][_0x27d129(0xe0)](_0x2e0376[_0x27d129(0xcb)],{'id':_0x450b2d['key']['id'],'remoteJid':_0x2e0376[_0x27d129(0xcb)],'fromMe':!![]});}else{var _0x450b2d=await _0x2e0376['client'][_0x27d129(0xe8)](_0x2e0376[_0x27d129(0xcb)],Lang[_0x27d129(0xd0)],MessageType['text']),_0xe82838=await _0x2e0376[_0x27d129(0xf4)][_0x27d129(0xee)]({'key':{'remoteJid':_0x2e0376[_0x27d129(0xd4)][_0x27d129(0xcb)],'id':_0x2e0376[_0x27d129(0xd4)]['id']},'message':_0x2e0376['reply_message'][_0x27d129(0xdd)][_0x27d129(0xcf)]});return ffmpeg(_0xe82838)[_0x27d129(0xe1)](''+_0x1243e8[0x1])[_0x27d129(0xef)]('Alpha.mp3')['on'](_0x27d129(0xdf),async()=>{var _0xc77d10=_0x27d129;await _0x2e0376[_0xc77d10(0xe8)](fs[_0xc77d10(0xcd)](_0xc77d10(0xf8)),MessageType[_0xc77d10(0xda)],{'mimetype':Mimetype[_0xc77d10(0xe9)]});}),await _0x2e0376['client']['deleteMessage'](_0x2e0376[_0x27d129(0xcb)],{'id':_0x450b2d['key']['id'],'remoteJid':_0x2e0376[_0x27d129(0xcb)],'fromMe':!![]});}}});
