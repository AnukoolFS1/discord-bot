require('dotenv').config()
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const botKey = process.env.Bot_key

client.on("messageCreate", (message) => {
    console.log(message.content);
})

client.login(botKey)