import { AnyThreadChannel, ChannelType } from "discord.js";

export default async (thread: AnyThreadChannel, _newlyCreated: boolean) => {
  if (thread.parent?.type !== ChannelType.GuildForum) return;
  if (thread.parentId !== process.env.REACTIONS_CHANNEL_ID) return;

  const firstMessage = await thread.messages
    .fetch()
    .then(messages => messages.first());

  if (!firstMessage) return;
  if (firstMessage.author.bot) return;

  const reactions = ["✅", "❌"];
  reactions.forEach(reaction => firstMessage.react(reaction));
};
