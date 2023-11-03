import { Client, OAuth2Scopes, PermissionFlagsBits } from "discord.js";

export default async (client: Client) => {
  if (!client.user) {
    throw new Error("Client is not ready");
  }
  console.log(`Logged in as ${client.user.tag}!`);

  const inviteLink = client.generateInvite({
    scopes: [OAuth2Scopes.Bot],
    permissions: [
      PermissionFlagsBits.SendMessages,
      PermissionFlagsBits.EmbedLinks,
      PermissionFlagsBits.AttachFiles,
      PermissionFlagsBits.ViewChannel,
      PermissionFlagsBits.ReadMessageHistory
    ]
  });

  console.log(`Invite link: ${inviteLink}`);
};
