import * as dotenv from "dotenv";
dotenv.config({
  path: `.env`
});

import { Client, GatewayIntentBits } from "discord.js";
import {
  onReady,
  onMessageCreate,
  onMessageDelete,
  onMessageUpdate,
  onThreadCreate
} from "./events";

export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on("ready", onReady);
client.on("messageCreate", onMessageCreate);
client.on("messageDelete", onMessageDelete);
client.on("messageUpdate", onMessageUpdate);
client.on("threadCreate", onThreadCreate);

client.login(process.env.BOT_TOKEN);
