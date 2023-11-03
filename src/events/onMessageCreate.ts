import { Message } from "discord.js";

export default async (message: Message) => {
  if (message.author.bot) return;

  const { channel: thread } = message;

  if (!thread.isThread()) return;
  if (thread.parentId !== process.env.REACTIONS_CHANNEL_ID) return;
  if (thread.messageCount! > 1) return;

  const reactions = ["✅", "❌"];
  reactions.forEach(reaction => message.react(reaction));
};
