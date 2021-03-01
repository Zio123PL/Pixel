const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require(`discord.js`)

module.exports = class PurgeCommand extends BaseCommand {
  constructor() {
    super('purge', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You cannot and dont try it.');
    if (!message.guild.me.hasPermission("MANAGE_MEMBERS")) return message.channel.send("I do not have \`MANAGE_MESSAGES\` permission.");
    if (!args[0]) return message.channel.send("Big brain, state a number to purge... \`-purge number\`");
    const amonutToDelete = Number(args[0], 10);

    if (isNaN(amonutToDelete)) return message.channel.send("Bro, write numbers not letters.");
    if (!Number.isInteger(amonutToDelete)) return message.channel.send("no commas or anything, WHOLE numbers please ;)");
    if (!amonutToDelete || amonutToDelete < 2 || amonutToDelete >100) return message.channel.send('The number must be between 2 and 100.');
    const fetched = await message.channel.messages.fetch({
      limit: amonutToDelete
    });

    try {
      await message.channel.bulkDelete(fetched)
       .then(messages => message.channel.send(`Yeeted ${messages.size} messages :D`));
    } catch (err) {
      console.log(err)
      message.channel.send(`Unbale to delete the message. They must e within 14 days old.`);
    }
  }
}