const { MessageEmbed, MessageActionRow, MessageButton } = require(`discord.js`);
const config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
module.exports = {
    name: `premium`,
    category: `⚙️ Settings`,
    description: `Requests Premium for this Server`,
    usage: `premium`,
    memberpermissions: [`ADMINISTRATOR`],
    type: "bot",
    run: async (client, message, args, cmduser, text, prefix) => {
    
      let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
      try{
        if(client.premium.get("global", "guilds").includes(message.guild.id)){
          return message.reply(`❌ **This Guild is already a \`PREMIUM-GUILD\`**`)
        }
        let theowner = "NO OWNER DATA! ID: ";
        await message.guild.fetchOwner().then(({ user }) => {
          theowner = user;
        }).catch(() => {})
        let embed = new MessageEmbed()
          .setColor("GREEN")
          .setTitle(`✅ A new Server requests **PREMIUM**`)
          .addField("Guild Info", `>>> \`\`\`${message.guild.name} (${message.guild.id})\`\`\``)
          .addField("Owner Info", `>>> \`\`\`${theowner ? `${theowner.tag} (${theowner.id})` : `${theowner} (${message.guild.ownerId})`}\`\`\``)
          .addField("Member Count", `>>> \`\`\`${message.guild.memberCount}\`\`\``)
          .addField("Requested By:", `>>> \`\`\`${message.author.tag} (${message.author.id})\`\`\``)
          .setThumbnail(message.guild.iconURL({dynamic: true}))
          .setFooter(`${message.author.id}-${message.guild.id}`, message.author.displayAvatarURL({dynamic: true}))
        for(const owner of config.ownerIDS){
          client.users.fetch(owner).then(user => {
            user.send({ embeds: [embed], components: [
              new MessageActionRow().addComponents([
                new MessageButton().setStyle("SUCCESS").setEmoji("✅").setCustomId("PREMIUM-ACCEPT").setLabel("Accept"),
                new MessageButton().setStyle("DANGER").setEmoji("❌").setCustomId("PREMIUM-DENY").setLabel("Deny")
              ])
            ] }).catch(() => {});
          }).catch(() => {});
        }
        return message.reply(`✅ **APPLIED FOR PREMIUM**`)
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
