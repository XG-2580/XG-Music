const {
	MessageEmbed, MessageButton, MessageActionRow
} = require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { handlemsg } = require(`${process.cwd()}/handlers/functions`)
module.exports = {
  name: "invite",
  category: "🔰 Info",
  aliases: ["add"],
  usage: "invite",
  description: "Gives you an Invite link for this Bot",
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix) => {
    
    let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
    try {
      let user = message.mentions.users.first() || client.user;
      if(user) {
        if(!user.bot) return interaction.reply({ephemeral: true, content: "<:no:833101993668771842> You can't Invite a Normal user! **IT MUST BE A BOT**"})
        let button_public_invite = new MessageButton().setStyle('LINK').setLabel(handlemsg(client.la[ls].cmds.info.invite.buttons.public)).setURL("https://discord.com/api/oauth2/authorize?client_id=734513783338434591&permissions=8&scope=bot%20applications.commands")
        let button_support_dc = new MessageButton().setStyle('LINK').setLabel(handlemsg(client.la[ls].cmds.info.invite.buttons.server)).setURL("https://discord.gg/uYRDDx7yFn")
        let button_invite = new MessageButton().setStyle('LINK').setLabel("Invite " + user.username).setURL(`https://discord.com/api/oauth2/authorize?client_id=${user.id}&permissions=8&scope=bot%20applications.commands`)
        //array of all buttons
        const allbuttons = [new MessageActionRow().addComponents([button_public_invite, button_support_dc, button_invite])]
        message.reply({ 
          embeds: [new MessageEmbed()
            .setColor(ee.color)
            .setTitle(`Invite: __**${user.tag}**__`)
            .setDescription(`||[*Click here for an Invitelink without Slash Commands*](https://discord.com/api/oauth2/authorize?client_id=${user.id}&permissions=8&scope=bot)||`)
            .setURL(`https://discord.com/api/oauth2/authorize?client_id=${user.id}&permissions=8&scope=bot%20applications.commands`)
            .setFooter(`${user.username} | powered by limsathya.netlify.app`, "https://cdn.discordapp.com/attachments/867334683566014474/900288030772965416/143378347-ls-logo-letter-monogram-with-triangle-shape-design-template-isolated-on-black-background.jpg")],
          components: allbuttons
        });
      }
    } catch (e) {
      console.log(String(e.stack).grey.bgRed)
      return message.reply({embeds: [new MessageEmbed()
        .setColor(es.wrongcolor)
        .setFooter(es.footertext, es.footericon)
        .setTitle(client.la[ls].common.erroroccur)
        .setDescription(`\`\`\`${String(e.message ? e.message : e).substr(0, 2000)}\`\`\``)
      ]});
    }
  }
}
/**
 * @INFO
 * Bot Coded by Limsathya#2846 | https://discord.gg/uYRDDx7yFn
 * @INFO
 * Work for Limsathyacord | https://limsathya.netlify.app/
 * @INFO
 * Please mention him / Limsathyacord, when using this Code!
 * @INFO
 */
