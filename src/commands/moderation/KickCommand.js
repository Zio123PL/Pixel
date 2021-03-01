const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'moderation', []);
  }

  async run (client, message, args) {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You cannot kick yet. ;)")
    const mentionedMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason given";
    const kickEmbed = new Discord.MessageEmbed()
     .setTitle(`You got kicked from ${message.guild.name}`)
     .setDescription(`Why?: ${reason}`)
     .setColor("#bd1a1a")
     .setTimestamp()
     .setFooter(client.user.tag, client.user.displayAvatarURL());

    //supposed to be -kick user reason this is the ^ embed so it is epic yay
    if (!args[0]) return message.channel.send("You need to use the proper command! \`-kick @user reason\`.");
    if (!mentionedMember) return message.channel.send("No one named like this was found.");
    if (!mentionedMember.kickable) return message.channel.send('How are you supposed to kick this member???');
    try{
      await mentionedMember.send(kickEmbed);
    } catch (err) {
      console.log(`he has DMs blocked m8.`);
    }

    try {
      await mentionedMember.kick(reason)
    } catch (err) {
      console.log(err);
      return message.channel.send("Unable to kick the member.");
    }
  }
}