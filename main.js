#!/usr/bin/env node
/*
Link for app id and keys:
https://discord.com/developers/applications/1015727097177706506/information
*/
// Required packages for bundling.
const { Client, GatewayIntentBits } = require('./node_modules/discord.js');
// Required hidden token for logging in.
const token_file = require('./token_file.json');
// Create the bot aka client alongside its intents (permissions).
// For testing and dev, set intents: 32767 for everything.
// MessageContent is a privileged intent that requires special enabling.
const client = new Client({
  intents: [GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.GuildMessageReactions,
            GatewayIntentBits.MessageContent]
});
// Log into console.
client.once('ready', () => {
  console.log("EmojiSpammer Activated. *Horse Reacts*")
});
// Upon Event, do something.
client.on('messageCreate', message => {
  // Make sure you're not reacting yourself first.
  if (message.author.bot)
    return;
  // Dump to console.
  console.log('messageCreate event detected:', message.content);
  // Copy and paste from: https://www.emojicopy.com/
  message.react('🐴')
//    .then(() => message.react('🍇'))
    .catch(error => console.error('One of the emojis failed to react:', error));
  return;
});


// Bots only need a token to login. This part last.
client.login(token_file.token);
