
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
	],
});
const targetUserID = '298790908277686274'; // Replace with your target user's ID
const channelID = '565192520804335621'; // Replace with the actual channel ID where you want to send notifications

client.on('ready', () => {
  console.log('Bot is ready!');
});

client.on('presenceUpdate', (oldMember, newMember) => {
    if (newMember.userId !== targetUserID) {
    return;
  }

  const oldStatus = oldMember["status"];
  const newStatus = newMember.status;

  if (oldStatus !== newStatus && newStatus === 'online') {
    const channel = client.channels.cache.get(channelID);
    if (!channel) return console.error('Invalid channel.');

    channel.send(`ล้อหมุนเว้ย ไปเว้ยยย :red_car:`);
  }
});

client.login('MTEyMDY4MjczOTczNDE1NTM0NQ.Gk5YPp.xda5K3wsHo03xxTbIy2koPPIQpySXsu3vldVEc');
