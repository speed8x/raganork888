const { WAConnection, MessageType } = require('@adiwajshing/baileys');

async function handleSticker(conn, m) {
    if (m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.quotedMessage && m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage) {
        const imageMsg = m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage;
        const media = await conn.downloadMediaMessage(imageMsg);
        await conn.sendImageAsSticker(m.key.remoteJid, media, { 
            packname: '  🅾  ꜰᴛ.ᴀɴᴀxᴅʜᴜ 🐣', 
            author: '  🅾  ꜰᴛ.ᴀɴᴀxᴅʜᴜ 🐣' 
        });
    }
}

module.exports = { handleSticker };
