const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class HornyCommand extends BaseCommand {
  constructor() {
    super('horny', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send(" ```ALARM, HORNY ALERT!!!!!! FIND THE HIGHEST PLACE AND DO NOT MOVE! ``` ");
  }
}