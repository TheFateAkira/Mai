const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'kiss',
  aliases: [],
  guildOnly: true,
  clientPermissions: [
    'EMBED_LINKS',
    'ADD_REACTIONS'
  ],
  group: 'action',
  description: 'Show your love to someone!',
  examples: [ 'kiss @user' ],
  parameters: [ 'User Mention' ],
  run: async ( client, message, args ) => {

    // Filter out args so that args are only user-mention formats.
    args = args.filter(x => /<@!?\d{17,19}>/.test(x))

    const url = client.images.kiss();
    const embed = new MessageEmbed()
    .setColor('GREY')
    .setImage(url)
    .setFooter(`Hora! Ikuzo! | \©️${new Date().getFullYear()} Neko`);

    if (!message.mentions.members.size){

      return message.channel.send(`${message.author}, you desperate enough to kiss the air?!`);

    } else if (new RegExp(`<@!?${client.user.id}>`).test(args[0])){

      return message.channel.send(embed.setDescription(`${message.member}!`));

    } else if (new RegExp(`<@!?${message.author.id}>`).test(args[0])){

      return message.channel.send(`${message.author}, ever heard of a mirror?`);

    } else {

      return message.channel.send(
        embed.setDescription(`${message.member} kissed ${args[0]}!`)
      );

    };
  }
};
