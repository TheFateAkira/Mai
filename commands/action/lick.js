const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'lick',
  aliases: [],
  guildOnly: true,
  clientPermissions: [
    'EMBED_LINKS',
    'ADD_REACTIONS'
  ],
  group: 'action',
  description: 'Lick. Lick like a yandere.',
  examples: [ 'lick @user' ],
  parameters: [ 'User Mention' ],
  run: async ( client, message, args ) => {

    // Filter out args so that args are only user-mention formats.
    args = args.filter(x => /<@!?\d{17,19}>/.test(x))

    const url = client.images.lick();
    const disgust = client.images.disgust();
    const embed = new MessageEmbed()
    .setColor('GREY')
    .setImage(url)
    .setFooter(`Hora! Ikuzo! | \©️${new Date().getFullYear()} Neko`);

    if (!message.mentions.members.size){

      return message.channel.send(embed);

    } else if (new RegExp(`<@!?${client.user.id}>`).test(args[0])){

      return message.channel.send(embed.setImage(disgust).setDescription(`${message.member}`));

    } else if (new RegExp(`<@!?${message.author.id}>`).test(args[0])){

      return message.channel.send(`${message.author}, ever heard of a mirror?`);

    } else {

      return message.channel.send(
        embed.setDescription(`${message.member} licked ${args[0]}!`)
      );

    };
  }
};
