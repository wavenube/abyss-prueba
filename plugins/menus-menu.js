import fetch from 'node-fetch';
import fs from 'fs';

const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  try {
    const img = './src/abyss.png';
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
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
Hola ${taguser},

> ★ Abyss Bot ★

Nivel: ${level}
Experiencia: ${exp}
Rol: ${role}
Límite: ${limit}
Dinero: ${money}
Contador de uniones: ${joincount}
Es premium: ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
${readMore}

Comandos:

  ╭───── • ◆ • ─────╮ 
  ├❧ _${usedPrefix}menuaudios_
  ├❧ _${usedPrefix}menuanimes_
  ├❧ _${usedPrefix}labiblia_
  ├❧ _${usedPrefix}lang_ 
  ├❧ _${usedPrefix}langgroup_ 
  ├❧ _${usedPrefix}glx_
  ╰───── • ◆ • ─────╯

Más comandos:

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

Otros comandos:

  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}serbot --code_
  ├❧ _${usedPrefix}serbot_
  ├❧ _${usedPrefix}deletebot_
  ├❧ _${usedPrefix}token_
  ├❧ _${usedPrefix}stop_
  ├❧ _${usedPrefix}bots_
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
`;

    await conn.sendFile(m.chat, img, './src/abyss2.png', str, m);
  } catch (e) {
    console.error(e);
  }
};

const clockString = (ms) => {
  let h = Math.floor(ms / 3600000) % 24;
  let m = Math.floor(ms / 60000) % 60;
  let s = Math.floor(ms / 1000) % 60;
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
};

export default handler;
