const {
  MessageEmbed
} = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
const ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
module.exports = {
  name: "defaultautoplay",
  category: "💰 Premium",
  aliases: ["default-autoplay", "defaultap", "default-ap"],
  cooldown: 10,
  usage: "defaultautoplay",
  description: "Toggles if it Autoplay should be enabled on default or not! [Default: true]",
  memberpermissions: ["ADMINISTRATOR"],
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix) => {
    let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
    try {
      client.settings.ensure(message.guild.id, {
        defaultap: true,
      });

      
      client.settings.set(message.guild.id, !client.settings.get(message.guild.id, "defaultap"), "defaultap");
      
      return message.reply({embeds : [new MessageEmbed()
        .setFooter(es.footertext, es.footericon).setColor(es.color).setThumbnail(es.thumb ? es.footericon : null)
        .setTitle(eval(client.la[ls]["cmds"]["settings"]["defaultautoplay"]["variable1"]))
        .setDescription(eval(client.la[ls]["cmds"]["settings"]["defaultautoplay"]["variable2"]))
      ]});
    } catch (e) {
      console.log(String(e.stack).grey.bgRed)
      return message.reply({embeds : [new MessageEmbed()
        .setFooter(es.footertext, es.footericon).setColor(es.wrongcolor)
        .setTitle(client.la[ls].common.erroroccur)
        .setDescription(`\`\`\`${String(e.message ? e.message : e).substr(0, 2000)}\`\`\``)
      ]});
    }
  }
}
/**
 * @INFO
 * Bot Coded by Limsathya#2846 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Limsathyacord | https://limsathya.netlify.app/
 * @INFO
 * Please mention Him / Limsathyacord, when using this Code!
 * @INFO
 */
