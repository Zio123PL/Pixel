const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class Command extends BaseCommand {
  constructor() {
    super('', 'say', []);
  }

  run(client, message, args) {
    message.channel.send(' command works');
  }
}