const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  let row = new Discord.ActionRowBuilder().addComponents(
    new Discord.ButtonBuilder()
      .setLabel("Penguin GitHub")
      .setURL("")
      .setStyle(Discord.ButtonStyle.Link)
  );

  client.embed(
    {
      title: `${client.user.username}・Donate`,
      desc: "_____ \n\nClick the button below for the sponsor page \n**Pay attention! sponsor is not required**",
      thumbnail: client.user.avatarURL({ dynamic: true }),
      url: "",
      components: [row],
      type: "editreply",
    },
    interaction
  );
};
