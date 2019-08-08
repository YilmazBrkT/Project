const { Client } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableEveryone: true });

client.on("ready", () => {
  console.log("Sven est connecté !");
});

client.on("message", msg => {
  if (msg.content.startsWith(`${PREFIX}Sven ?`))
    msg.channel.send("WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOF");
});

client.login(TOKEN);
