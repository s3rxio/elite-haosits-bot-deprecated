export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      BOT_TOKEN: string;
      LOGS_CHANNEL_ID: string;
      REACTIONS_CHANNEL_ID: string;
    }
  }
}
