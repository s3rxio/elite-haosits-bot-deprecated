import { Message, PartialMessage } from "discord.js";
import { client } from "..";
import { attachmentsToString } from "../utils";

export default async (message: Message | PartialMessage) => {
  const { attachments, author } = message;

  if (
    message.channelId === process.env.LOGS_CHANNEL_ID ||
    author?.id === client.user?.id ||
    author?.bot ||
    attachments.size <= 0
  )
    return;

  const channel = message.guild?.channels.resolve(process.env.LOGS_CHANNEL_ID!);

  if (!channel?.isTextBased()) return;
  const content = attachmentsToString(attachments);

  if (!content) return;
  channel.send({ content });
};
