const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require(`discord.js`);

module.exports = class UnbanCommand extends BaseCommand {
  constructor() {
    super('unban', 'moderation', []);
  }

  async run(client, message, args) {
    //check perms
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have permission to unban a member sir.");
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I dont have perms to unban.");

    //variables yes
    let reason = args.slice(1).join(" ");
    let userID = args[0];

    //input checks
    if (!reason) reason = 'No reason given.';
    if (!args[0]) return message.channel.send('You must actually mention someone to unban. \`-unban ID reason\`');
    if (isNaN(args[0])) return message.channel.send('The ID stated is not a number. \`-unban ID reason\` ');

    //executing (people lol funneh)
    message.guild.fetchBans().then(async bans => {
      if (bans.size == 0) return message.channel.send('Looks liek no one is banned here.');
      let bUser = bans.find(b => b.user.id == userID);
      if (!bUser) return message.channel.send('The user ID stated is not banned.');
      await message.guild.members.unban(bUser.user, reason).catch(err =>{
        console.log(err);
        return message.channel.send('Something wrong happend unbanning the id.');
      }).then(() => {
        message.channel.send(`Successfully Unbaned ${args[0]}`)
      });
    });
  }
}