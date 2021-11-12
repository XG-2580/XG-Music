const {
  readdirSync
} = require("fs");
const Enmap = require("enmap");
console.log("Welcome to SERVICE HANDLER /--/ By https://limsathya.netlify.app/ /--/ Discord: Limsathya#2846".yellow);
module.exports = (client) => {
  try {
    readdirSync("./commands/").forEach((dir) => {
      const commands = readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith(".js"));
      for (let file of commands) {
        try{
          let pull = require(`../commands/${dir}/${file}`);
          if (pull.name) {
            client.commands.set(pull.name, pull);
            //console.log(`    | ${file} :: Ready`.brightGreen)
          } else {
            console.log(`    | ${file} :: error -> missing a help.name,or help.name is not a string.`.brightRed)
            continue;
          }
          if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach((alias) => client.aliases.set(alias, pull.name));
        }catch(e){
          console.log(String(e.stack).grey.bgRed)
        }
      }
    });
  } catch (e) {
    console.log(String(e.stack).grey.bgRed)
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
