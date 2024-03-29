const { MessageEmbed } = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
module.exports = {
    name: "toggleplaymessage",
    aliases: ["toggleplaymsg", "playmessage", "playmsg", "toggleprunning", "pruning", "prunning", "toggeldebug", "debug"],
    category: "⚙️ Settings",
    description: "Toggles playmessage (same as pruning...). If its true a message of playing a new track will be sent, even if your afk. If false it wont send any message if a new Track plays! | Default: true aka send new Track information",
    usage: "toggleplaymessage",
    memberpermissions: ["ADMINISTRATOR"],
    type: "music",
    run: async (client, message, args, cmduser, text, prefix) => {
    
    let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
    try{
      client.settings.ensure(message.guild.id, {
        playmsg: true
      });
      
      client.settings.set(message.guild.id, !client.settings.get(message.guild.id, "playmsg"), "playmsg");
      
      return message.reply({embeds : [new MessageEmbed()
        .setFooter(es.footertext, es.footericon).setColor(es.color).setThumbnail(es.thumb ? es.footericon : null)
        .setTitle(eval(client.la[ls]["cmds"]["settings"]["togglepruning"]["variable1"]))
        .setDescription(eval(client.la[ls]["cmds"]["settings"]["togglepruning"]["variable2"]))
      ]});
    } catch (e) {
        console.log(String(e.stack).grey.bgRed)
        return message.reply({embeds : [new MessageEmbed()
            .setColor(es.wrongcolor)
						.setFooter(es.footertext, es.footericon)
            .setTitle(client.la[ls].common.erroroccur)
            .setDescription(`\`\`\`${String(e.message ? e.message : e).substr(0, 2000)}\`\`\``)
        ]});
    }
  }
};
/**
  * @INFO
  * Bot Coded by Limsathya#2846 | https://discord.gg/uYRDDx7yFn
  * @INFO
  * Work for Limsathyacord | https://limsathya.netlify.app/
  * @INFO
  * Please mention him / Limsathyacord, when using this Code!
  * @INFO
*/


/**
  * @INFO
  * Bot Coded by Limsathya#2846 | https://discord.gg/uYRDDx7yFn
  * @INFO
  * Work for Limsathyacord | https://limsathya.netlify.app/
  * @INFO
  * Please mention him / Limsathyacord, when using this Code!
  * @INFO
*/
