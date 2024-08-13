import fetch from 'node-fetch';

// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const datas = global;
    const idioma = datas.db.data.users[m.sender].language;
    const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`));
    const tradutor = _translate.plugins.menu_menu;
    // const pp = imagen7;

    // let vn = './media/menu.mp3';
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, { weekday: 'long' });
    const date = d.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const { money, joincount } = global.db.data.users[m.sender];
    const { exp, limit, level, role } = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0';
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `${tradutor.texto1[0]}

${tradutor.texto1[1]} ${taguser}

> ★ Moonlight Team ★

${tradutor.texto1[2]}

${tradutor.texto1[3]} ${level}
${tradutor.texto1[4]} ${exp}
${tradutor.texto1[5]} ${role}
${tradutor.texto1[6]} ${limit}
${tradutor.texto1[7]} ${money}
${tradutor.texto1[8]} ${joincount}
${tradutor.texto1[9]} ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
 ${readMore}

 ${tradutor.texto1[10]}
 
  ╭───── • ◆ • ─────╮ 
  ├❧ _${usedPrefix}menuaudios_
  ├❧ _${usedPrefix}menuanimes_
  ├❧ _${usedPrefix}labiblia_
  ├❧ _${usedPrefix}lang_ 
  ├❧ _${usedPrefix}langgroup_ 
  ├❧ _${usedPrefix}glx_
  ╰───── • ◆ • ─────╯
 
  ${tradutor.texto1[11]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}terminosycondiciones_
  ├❧ _${usedPrefix}grupos_
  ├❧ _${usedPrefix}estado_
  ├❧ _${usedPrefix}infobot_
  ├❧ _${usedPrefix}speedtest_
  ├❧ _${usedPrefix}donar_
  ├❧ _${usedPrefix}owner_
  ├❧ _${usedPrefix}script_
  ├❧ _${usedPrefix}reporte *<txt>*_
  ├❧ _${usedPrefix}join *<wagp_url>*_
  ├❧ _${usedPrefix}fixmsgespera_
  ├❧ _bot_ (sin prefijo)
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[12]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}serbot --code_
  ├❧ _${usedPrefix}serbot_
  ├❧ _${usedPrefix}deletebot_
  ├❧ _${usedPrefix}token_
  ├❧ _${usedPrefix}stop_
  ├❧ _${usedPrefix}bots_
  ├❧
  ├❧ _${usedPrefix}enable restrict_
  ├❧ _${usedPrefix}disable restrict_
  ├❧ _${usedPrefix}enable autoread_
  ├❧ _${usedPrefix}disable autoread_
  ├❧ _${usedPrefix}enable antispam_
  ├❧ _${usedPrefix}disable antispam_
  ├❧ _${usedPrefix}enable anticall_
  ├❧ _${usedPrefix}disable anticall_
  ├❧ _${usedPrefix}enable modoia_
  ├❧ _${usedPrefix}disable modoia_
  ├❧ _${usedPrefix}enable audios_bot_
  ├❧ _${usedPrefix}disable audios_bot_
  ├❧ _${usedPrefix}enable antiprivado_
  ├❧ _${usedPrefix}disable antiprivado_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[13]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
  ├❧ _${usedPrefix}fake *<txt1> <@tag> <txt2>*_
  ├❧ _${usedPrefix}ppt *<papel / tijera /piedra>*_
  ├❧ _${usedPrefix}prostituto *<nombre / @tag>*_
  ├❧ _${usedPrefix}prostituta *<nombre / @tag>*_
  ├❧ _${usedPrefix}gay2 *<nombre / @tag>*_
  ├❧ _${usedPrefix}lesbiana *<nombre / @tag>*_
  ├❧ _${usedPrefix}pajero *<nombre / @tag>*_
  ├❧ _${usedPrefix}pajera *<nombre / @tag>*_
  ├❧ _${usedPrefix}puto *<nombre / @tag>*_
  ├❧ _${usedPrefix}puta *<nombre / @tag>*_
  ├❧ _${usedPrefix}manco *<nombre / @tag>*_
  ├❧ _${usedPrefix}manca *<nombre / @tag>*_
  ├❧ _${usedPrefix}rata *<nombre / @tag>*_
  ├❧ _${usedPrefix}love *<nombre / @tag>*_
  ├❧ _${usedPrefix}doxear *<nombre / @tag>*_
  ├❧ _${usedPrefix}pregunta *<txt>*_
  ├❧ _${usedPrefix}suitpvp *<@tag>*_
  ├❧ _${usedPrefix}slot *<apuesta>*_
  ├❧ _${usedPrefix}ttt ${tradutor.texto1[32]}
  ├❧ _${usedPrefix}delttt_
  ├❧ _${usedPrefix}acertijo_
  ├❧ _${usedPrefix}simi *<txt>*_
  ├❧ _${usedPrefix}top *<txt>*_
  ├❧ _${usedPrefix}topgays_
  ├❧ _${usedPrefix}topotakus_
  ├❧ _${usedPrefix}formarpareja_
  ├❧ _${usedPrefix}verdad_
  ├❧ _${usedPrefix}reto_
  ├❧ _${usedPrefix}cancion_
  ├❧ _${usedPrefix}pista_
  ├❧ _${usedPrefix}akinator_
  ├❧ _${usedPrefix}wordfind_
  ├❧ _${usedPrefix}glx (RPG Mundo)_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[14]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}enable *welcome*_
  ├❧ _${usedPrefix}disable *welcome*_
  ├❧ _${usedPrefix}enable *modohorny*_
  ├❧ _${usedPrefix}disable *modohorny*_
  ├❧ _${usedPrefix}enable *antilink*_
  ├❧ _${usedPrefix}disable *antilink*_
  ├❧ _${usedPrefix}enable *antilink2*_
  ├❧ _${usedPrefix}disable *antilink2*_
  ├❧ _${usedPrefix}enable *detect*_
  ├❧ _${usedPrefix}disable *detect*_
  ├❧ _${usedPrefix}enable *restrict*_
  ├❧ _${usedPrefix}disable *restrict*_
  ├❧ _${usedPrefix}enable *pconly*_
  ├❧ _${usedPrefix}disable *pconly*_
  ├❧ _${usedPrefix}enable *gconly*_
  ├❧ _${usedPrefix}disable *gconly*_
  ├❧ _${usedPrefix}enable *anticall*_
  ├❧ _${usedPrefix}disable *anticall*_
  ├❧ _${usedPrefix}enable *antiprivado*_
  ├❧ _${usedPrefix}disable *antiprivado*_
  ├❧ _${usedPrefix}enable *modoadmin*_
  ├❧ _${usedPrefix}disable *modoadmin*_
  ╰───── • ◆ • ─────╯
  
  ${tradutor.texto1[15]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}pussy *<nombre / @tag>*_
  ├❧ _${usedPrefix}follar *<nombre / @tag>*_
  ├❧ _${usedPrefix}puta *<nombre / @tag>*_
  ├❧ _${usedPrefix}hornycard *<@tag>*_
  ├❧ _${usedPrefix}hornymeter *<@tag>*_
  ├❧ _${usedPrefix}sex_
  ├❧ _${usedPrefix}pornovids_
  ├❧ _${usedPrefix}nsfwloli_
  ├❧ _${usedPrefix}nsfwfoot_
  ├❧ _${usedPrefix}nsfwass_
  ├❧ _${usedPrefix}nsfwbdsm_
  ├❧ _${usedPrefix}nsfwcum_
  ├❧ _${usedPrefix}nsfwero_
  ├❧ _${usedPrefix}nsfwfemdom_
  ├❧ _${usedPrefix}nsfwfoot_
  ├❧ _${usedPrefix}nsfwglasses_
  ├❧ _${usedPrefix}nsfworgy_
  ├❧ _${usedPrefix}nsfwneko_
  ├❧ _${usedPrefix}nsfwneko2_
  ├❧ _${usedPrefix}nsfwblowjob_
  ├❧ _${usedPrefix}nsfwfutanari_
  ├❧ _${usedPrefix}nsfwfeet_
  ├❧ _${usedPrefix}nsfw_
  ├❧ _${usedPrefix}nsfwgif_
  ├❧ _${usedPrefix}nsfwthighs_
  ├❧ _${usedPrefix}nsfwpanties_
  ├❧ _${usedPrefix}panties_
  ├❧ _${usedPrefix}yuri_
  ├❧ _${usedPrefix}yuri2_
  ├❧ _${usedPrefix}trapito_
  ├❧ _${usedPrefix}hentai_
  ├❧ _${usedPrefix}hentai2_
  ╰───── • ◆ • ─────╯
 
  ${tradutor.texto1[16]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}pinterest *<txt>*_
  ├❧ _${usedPrefix}imagen *<txt>*_
  ├❧ _${usedPrefix}qrcode *<txt>*_
  ├❧ _${usedPrefix}covid *<txt>*_
  ├❧ _${usedPrefix}styletext *<txt>*_
  ├❧ _${usedPrefix}translate *<txt>*_
  ├❧ _${usedPrefix}wikipedia *<txt>*_
  ├❧ _${usedPrefix}ytsearch *<txt>*_
  ├❧ _${usedPrefix}buscarpornhub *<txt>*_
  ├❧ _${usedPrefix}letra *<txt>*_
  ├❧ _${usedPrefix}mediafire *<txt>*_
  ├❧ _${usedPrefix}playstore *<txt>*_
  ├❧ _${usedPrefix}clima *<país>*_
  ├❧ _${usedPrefix}consejo_
  ├❧ _${usedPrefix}morse *<txt>*_
  ├❧ _${usedPrefix}fraseromantica_
  ├❧ _${usedPrefix}historiaromantica_
  ├❧ _${usedPrefix}verifynumber_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[17]}

  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}afk *<txt>*_
  ├❧ _${usedPrefix}ocr *<responde a imagen>*_
  ├❧ _${usedPrefix}acortar *<link / url>*_
  ├❧ _${usedPrefix}calc *<operacion math>*_
  ├❧ _${usedPrefix}delchat_
  ├❧ _${usedPrefix}join *<link / url>*_
  ├❧ _${usedPrefix}spamwa *<numero|txt|cantidad>*_
  ├❧ _${usedPrefix}tamaño *<cantidad>*_
  ├❧ _${usedPrefix}readqr *<responde a imagen>*_
  ├❧ _${usedPrefix}encuesta *<txt>*_
  ├❧ _${usedPrefix}horario_
  ├❧ _${usedPrefix}solicitar *<txt>*_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[18]}
  
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}destraba_
  ├❧ _${usedPrefix}protect_
  ├❧ _${usedPrefix}cut_ 
  ├❧ _${usedPrefix}doxear_
  ├❧ _${usedPrefix}doxear2_
  ├❧ _${usedPrefix}doxear3_
  ├❧ _${usedPrefix}fakelocation_
  ├❧ _${usedPrefix}next_
  ├❧ _${usedPrefix}next2_
  ├❧ _${usedPrefix}url2img_
  ├❧ _${usedPrefix}play_
  ├❧ _${usedPrefix}playdoc_
  ├❧ _${usedPrefix}upload_
  ├❧ _${usedPrefix}sticker_
  ├❧ _${usedPrefix}sticker2_
  ├❧ _${usedPrefix}sticker3_
  ├❧ _${usedPrefix}sticker4_
  ├❧ _${usedPrefix}takesticker_
  ├❧ _${usedPrefix}write_
  ├❧ _${usedPrefix}vocabulario_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[19]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}topgays_
  ├❧ _${usedPrefix}topotakus_
  ├❧ _${usedPrefix}formarpareja_
  ├❧ _${usedPrefix}verdad_
  ├❧ _${usedPrefix}reto_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[20]}

  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}allmenu_
  ╰───── • ◆ • ─────╯`;

    conn.sendMessage(m.chat, { text: str, mentions: conn.parseMention(str) }, { quoted: m });
  } catch (e) {
    conn.reply(m.chat, 'Ocurrió un error al mostrar el menú', m);
    throw e;
  }
};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = /^(menu|help|menuprincipal)$/i;
export default handler;

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}
