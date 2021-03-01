const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run(client) {
    console.log(client.user.tag + ' has logged in.');
    client.user.setPresence({
       activity: {
          name: `PixelWolfAnimation channel`,
          type: "WATCHING"
        }, 
        status: 'dnd' 
      })
      .catch(console.error);
    client.user.setUsername(` ${client.user.username}`)
      .then(user => console.log(`My new username is ${user.username}`))
      .catch(console.error);
  }
}