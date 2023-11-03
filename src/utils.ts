import { Attachment, Collection } from "discord.js";

export const attachmentsToString = (
  attachments: Collection<string, Attachment>
) =>
  attachments.reduce(
    (acc, attachment) =>
      `${acc}\n[${attachment.contentType}](${
        attachment.url || attachment.proxyURL
      })`,
    ""
  );
