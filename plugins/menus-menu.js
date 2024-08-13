import MessageType from '@adiwajshing/baileys';

const handler = async (m, { conn, usedPrefix }) => {
  try {
    const ppgroup = await conn.profilePictureUrl(m.chat, "image");
    const uptime = process.uptime() * 1000;
    const uptimeString = clockString(uptime);
    
    const wm = 'Nombre del Bot';
    const str = `╭───── • ◆ • ─────╮
│   Bot activo durante: ${uptimeString}
╰───── • ◆ • ─────╯

*Comandos disponibles:*

╭───── • ◆ • ─────╮
├❧ _${usedPrefix}ping_
├❧ _${usedPrefix}menu_
├❧ _${usedPrefix}help_
╰───── • ◆ • ─────╯`;

    await conn.sendMessage(m.chat, {
      image: { url: ppgroup },
      mimetype: "image/jpeg",
      caption: str,
      contextInfo: {
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363318622514917@newsletter",
          serverMessageId: 1,
          newsletterName: "no sé",
        },
        externalAdReply: {
          mediaUrl: "https://whatsapp.com/channel/0029VakDx9I0gcfFXnzZIX2v",
          mediaType: 'VIDEO',
          description: 'canal del grupo',
          title: wm,
          body: "testing bot",
          thumbnailUrl: await conn.profilePictureUrl(m.sender, "image"),
          sourceUrl: "https://whatsapp.com/channel/0029VakDx9I0gcfFXnzZIX2v"
        }
      }
    }, { quoted: m });
    
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
