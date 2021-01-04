const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'disgust',
  aliases: [],
  guildOnly: true,
  clientPermissions: [
    'EMBED_LINKS',
    'ADD_REACTIONS'
  ],
  group: 'action',
  description: 'Eww!',
  examples: [ 'User Mention' ],
  parameters: [],
  run: async ( client, message, args ) => {

    // Filter out args so that args are only user-mention formats.
    args = args.filter(x => /<@!?\d{17,19}>/.test(x))

    const url = client.images.disgust();
    const embed = new MessageEmbed()
    .setColor('GREY')
    .setImage(url)
    .setFooter(`Hora! Ikuzo! | \©️${new Date().getFullYear()} Neko`);

    if (!message.mentions.members.size){

      return message.channel.send(embed.setDescription(`${message.member} is disgusting..`));

    } else if (new RegExp(`<@!?${client.user.id}>`).test(args[0])){

      return message.react('💢');

    } else if (new RegExp(`<@!?${message.author.id}>`).test(args[0])){

      return message.channel.send(embed.setDescription(`${message.member} is disgusting..`));

    } else {

      return message.channel.send(
        embed.setDescription(`${args[0]}, eww~!`)
      );

    };
  }
};
