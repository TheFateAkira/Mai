const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'pat',
  aliases: ['headpat'],
  guildOnly: true,
  clientPermissions: [
    'EMBED_LINKS',
    'ADD_REACTIONS'
  ],
  group: 'action',
  description: 'It\'s not like I want you to use this, baka!',
  examples: [ 'pat @user' ],
  parameters: [ 'User Mention' ],
  run: async ( client, message, args ) => {

    // Filter out args so that args are only user-mention formats.
    args = args.filter(x => /<@!?\d{17,19}>/.test(x))

    const url = client.images.pat();
    const embed = new MessageEmbed()
    .setColor('GREY')
    .setImage(url)
    .setFooter(`Hora! Ikuzo! | \©️${new Date().getFullYear()} Neko`);

    if (!message.mentions.members.size){

      message.channel.send(embed.setDescription(`Here you go ${message.member}!`));

    } else if (new RegExp(`<@!?${client.user.id}>`).test(args[0])){

      return message.channel.send(embed.setDescription('Aw, sweet!'));

    } else if (new RegExp(`<@!?${message.author.id}>`).test(args[0])){

      return message.channel.send(embed.setDescription(`Here you go ${message.member}!`));

    } else {

      return message.channel.send(
        embed.setDescription(`${message.member} pats ${args[0]}!`)
      );

    };
  }
};
