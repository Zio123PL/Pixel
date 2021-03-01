const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require(`discord.js`);

module.exports = class PixelinfoCommand extends BaseCommand {
  constructor() {
    super('pixelinfo', 'information', []);
  }

  async run(client, message, args) {
    const youtubeEmbed = new Discord.MessageEmbed()
      .setTitle('PixelWolfAnimation')
      .setURL('https://www.youtube.com/channel/UCLhSJ9SUOsBm2hEbw9jWA_w')
      .setColor('#ff0000')
      .addField('Check Out PixelWolfAnimation\'s YouTube Channel.', 'Epic countryballs stories and adventures :O (Link above)')
      .setTimestamp()
      .setFooter("PixelWolfAnimation", "https://yt3.ggpht.com/ytc/AAUvwngrbHV9PRfn-c_G5WpJd_piTh2d_9tA6XnlLtPhGw=s100-c-k-c0x00ffffff-no-rj");

    const discordEmbed = new Discord.MessageEmbed()
      .setTitle(`Remember to invite friends into PWA discord!`)
      .setURL('https://discord.gg/pGgj6GQxB5')
      .setColor("#7289da")
      .addField('Some infos:' , 'Countryballs,mapping,MC server :O,CoUnTinG,bot support')
      .setTimestamp()
      .setFooter("PixelWolfAnimation", "https://yt3.ggpht.com/ytc/AAUvwngrbHV9PRfn-c_G5WpJd_piTh2d_9tA6XnlLtPhGw=s100-c-k-c0x00ffffff-no-rj");

    message.channel.send(youtubeEmbed).catch(err => console.log(err));
    message.channel.send(discordEmbed).catch(err => console.log(err));
  }
}