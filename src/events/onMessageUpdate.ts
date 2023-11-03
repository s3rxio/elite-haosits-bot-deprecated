import { Message, PartialMessage } from "discord.js";
import { client } from "..";
import { attachmentsToString } from "../utils";

export default async (
  oldMessage: Message | PartialMessage,
  newMessage: Message | PartialMessage
) => {
  const { attachments: oldAttachments } = oldMessage;
  const { attachments: newAttachments, author } = newMessage;

  if (
    oldMessage.channelId === process.env.LOGS_CHANNEL_ID ||
    author?.id === client.user?.id ||
    author?.bot ||
    oldAttachments.size <= 0 ||
    newAttachments.size <= 0
  )
    return;

  const channel = newMessage.guild?.channels.resolve(
    process.env.LOGS_CHANNEL_ID!
  );

  if (!channel?.isTextBased()) return;

  const diff = newAttachments.difference(oldAttachments);
  const content = attachmentsToString(diff);

  if (!content) return;
  channel.send({ content });
};
