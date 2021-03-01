const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require(`discord.js`)

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'moderation', []);
  }

  async run(client, message, args) {
    //check perms
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have permission to ban a member sir.");
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I dont have perms to ban.");

    //variables yes
    let reason = args.slice(1).join(" ");
    const mentionedMember = message.mentions.members.first();

    //input checks
    if (!reason) reason = 'No reason given.';
    if (!args[0]) return message.channel.send('You must actually mention someone to ban. \`-ban @user reason\`');
    if (!mentionedMember) return message.channel.send('This member is not in the server.')
    if (!mentionedMember.bannable) return message.channel.send('How are you supposed to ban this member???');

    //executing (people lol funneh)
    const banEmbed = new Discord.MessageEmbed()
      .setTitle(`You got banned from ${message.guild.name}`)
      .setDescription(`Reason of being banned: ${reason}`)
      .setColor("#0c0000")
      .setTimestamp();

    await mentionedMember.send(banEmbed).catch(err => console.log(err));
    await mentionedMember.ban({
      days: 7,
      reason: reason
    }).catch(err => console.log(err)).then(() => message.channel.send("Successfully banned" +  mentionedMember.user.tag));

  }
}