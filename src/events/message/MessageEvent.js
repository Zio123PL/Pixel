const { DiscordAPIError } = require (`discord.js`);
const BaseEvent = require('../../utils/structures/BaseEvent');
const Discord = require(`discord.js`);

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
    if (message.author.bot) return;

    const mentionedMember = message.mentions.members.first();
    const role = message.guild.roles.cache.get(`803002663263666231`);

    if (mentionedMember){
      if (mentionedMember.roles.cache.has(role.id)) {
        const pingEmbed = new Discord.MessageEmbed()
          .setTitle(`${message.author.tag} Hol' up don't ping him kid...`)
          .setColor("#fc00ff")
          .setImage('https://tenor.com/5kA3.gif')
        await message.reply(pingEmbed).catch(err => console.log(err));
      }
    }

    if (message.author.bot) return;
    if (message.content.startsWith(client.prefix)) {
      const [cmdName, ...cmdArgs] = message.content
      .slice(client.prefix.length)
      .trim()
      .split(/\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        command.run(client, message, cmdArgs);
      }
    }
  }
}