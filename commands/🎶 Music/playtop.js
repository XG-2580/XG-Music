const {
  MessageEmbed
} = require(`discord.js`);
const config = require(`${process.cwd()}/botconfig/config.json`);
const ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const playermanager = require(`${process.cwd()}/handlers/playermanager`);
const { handlemsg } = require(`${process.cwd()}/handlers/functions`);
    module.exports = {
  name: `playtop`,
  category: `Song`,
  aliases: [`ptop`, `pt`],
  description: `Adds a song with the given name/url on the top of the queue`,
  usage: `playtop <link/query>`,
  parameters: {
    "type": "music",
    "activeplayer": true,
    "check_dj": true,
    "previoussong": false
  },
  type: "queue",
  run: async (client, message, args, cmduser, text, prefix, player) => {
    
    let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
    if (!client.settings.get(message.guild.id, "MUSIC")) {
      return message.reply({embeds :[new MessageEmbed()
        .setColor(es.wrongcolor)
        .setFooter(es.footertext, es.footericon)
        .setTitle(client.la[ls].common.disabled.title)
        .setDescription(handlemsg(client.la[ls].common.disabled.description, {prefix: prefix}))
      ]});
    }
    //if no args added return error message if allowed to send an embed
    if (!args[0])
      return message.reply({embeds : [new MessageEmbed()
        .setColor(es.wrongcolor)
        .setTitle(eval(client.la[ls]["cmds"]["music"]["playtop"]["variable1"]))
      ]});
    return playermanager(client, message, args, `playtop:youtube`);
  }
};
/**
 * @INFO
 * Bot Coded by Limsathya#2846 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Limsathyacord | https://limsathya.netlify.app/
 * @INFO
 * Please mention Him / Limsathyacord, when using this Code!
 * @INFO
 */
