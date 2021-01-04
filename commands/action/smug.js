const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'smug',
  aliases: [],
  guildOnly: true,
  clientPermissions: [
    'EMBED_LINKS',
    'ADD_REACTIONS'
  ],
  group: 'action',
  description: 'The epitome of arguments.',
  examples: [ 'smug' ],
  parameters: [],
  run: async ( client, message, args ) => {

    return message.channel.send(
      new MessageEmbed()
      .setDescription(`${message.author} smugs.`)
      .setColor('GREY')
      .setImage(client.images.smug())
      .setFooter(`Hora! Ikuzo! | \©️${new Date().getFullYear()} Neko`)
    );
  }
};
