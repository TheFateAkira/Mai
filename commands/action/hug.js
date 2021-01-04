const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'hug',
  aliases: [],
  guildOnly: true,
  clientPermissions: [
    'EMBED_LINKS',
    'ADD_REACTIONS'
  ],
  group: 'action',
  description: 'Hug special people.',
  examples: [ 'hug @user' ],
  parameters: [ 'User Mention' ],
  run: async ( client, message, args ) => {

    // Filter out args so that args are only user-mention formats.
    args = args.filter(x => /<@!?\d{17,19}>/.test(x))

    const url = client.images.hug();
    const embed = new MessageEmbed()
    .setColor('GREY')
    .setImage(url)
    .setFooter(`Hora! Ikuzo! | \©️${new Date().getFullYear()} Neko`);

    if (!message.mentions.members.size){

      return message.channel.send(embed.setDescription(`${message.member} Here! Thought you needed a hug!`));

    } else if (new RegExp(`<@!?${client.user.id}>`).test(args[0])){

      return message.channel.send(embed.setDescription(`${message.member} How thoughtful! Thank you!`));

    } else if (new RegExp(`<@!?${message.author.id}>`).test(args[0])){

      return message.channel.send(embed.setDescription(`${message.member} Here! Thought you needed a hug!`));

    } else {

      return message.channel.send(
        embed.setDescription(`${args[0]} got a hug from ${message.member}!`)
      );

    };
  }
};
