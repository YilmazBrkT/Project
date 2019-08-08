const { Client } = require("discord.js");
const client = new Client({ disableEveryone: true });

client.on("ready", () => {
  console.log(`${client.user.tag} est connecté !`);
});

client.on("message", msg => {
  if (msg.content === "Sven ?") msg.channel.send("AHAHAHAH PUTE");
  if (msg.content === "everyone")
    msg.channel.send("@everyone, salut à tous !", { disableEveryone: false });
  if (msg.content === "noteveryone")
    msg.channel.send("@everyone (noteveryone), salut à tous !");
});

client.login("NjA4OTgzNTI5NzE1NTMxNzc2.XUwKGw.ztISCoyf_9vqF387VHxpmdw7uwA");
