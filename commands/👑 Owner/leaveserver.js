const {
  MessageEmbed
} = require(`discord.js`);
var config = require(`${process.cwd()}/botconfig/config.json`);
var emoji = require(`${process.cwd()}/botconfig/emojis.json`);
module.exports = {
  name: `leaveserver`,
  type: "info",
  category: `👑 Owner`,
  aliases: [`serverleave`, "kickbot"],
  description: `Make the Bot Leave a specific Server`,
  usage: `leaveserver <GUILDID>`,
  run: async (client, message, args, cmduser, text, prefix) => {
    
    let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
    if (!config.ownerIDS.includes(message.author.id))
      return message.channel.send({embeds :[new MessageEmbed()
        .setColor(es.wrongcolor)
        .setFooter(client.user.username, es.footericon)
        .setTitle(eval(client.la[ls]["cmds"]["owner"]["leaveserver"]["variable1"]))
      ]});
    if (!args[0])
      return message.channel.send({embeds :[new MessageEmbed()
        .setColor(es.wrongcolor)
        .setFooter(client.user.username, es.footericon)
        .setTitle(eval(client.la[ls]["cmds"]["owner"]["leaveserver"]["variable2"]))
        .setDescription(eval(client.la[ls]["cmds"]["owner"]["leaveserver"]["variable3"]))
      ]});
    try {
      let guild = client.guilds.cache.get(args[0]);
      if(!guild) return message.reply({content : eval(client.la[ls]["cmds"]["owner"]["leaveserver"]["variable4"])})
      guild.leave().then(g=>{
        message.channel.send({content : eval(client.la[ls]["cmds"]["owner"]["leaveserver"]["variable5"])})
      }).catch(e=>{
        message.reply(`${e.message ? e.message : e}`, {code: "js"})
      })
    } catch (e) {
      console.log(String(e.stack).dim.bgRed)
      return message.channel.send({embeds : [new MessageEmbed()
        .setColor(es.wrongcolor)
        .setFooter(es.footertext, es.footericon)
        .setTitle(client.la[ls].common.erroroccur)
        .setDescription(`\`\`\`${String(e.message ? e.message : e).substr(0, 2000)}\`\`\``)
      ]});
    }
  },
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
