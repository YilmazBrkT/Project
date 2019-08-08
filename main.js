const { Client } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableEveryone: true });

client.on("message", msg => {
  if (msg.author.bot) return;
  const args = msg.content.split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd === `${PREFIX}waf`)
    msg.channel.send("WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOF");
  if (cmd === `${PREFIX}r`) {
    msg.channel.send(args.join(" "));
    msg.delete({ timeout: 0 });
  }
  if (cmd === `${PREFIX}role`) {
    const channel = client.channels.find(r => r.name === "silent-logs");
    const role = msg.guild.roles.find(r => r.name === args[0]);
    if (!role) return msg.channel.send("Ce rôle n'existe pas !");
    if (msg.member.roles.find(r => r.name === args[0])) {
      msg.member.roles.remove(role);
      channel.send(`J'ai supprimé le rôle ${role} a ${msg.author}.`);
      msg.delete({ timeout: 0 });
    } else {
      msg.member.roles.add(role);
      channel.send(`J'ai ajouté le rôle ${role} a ${msg.author}.`);
      msg.delete({ timeout: 0 });
    }
  }
});

client.on("guildMemberAdd", member => {
  member.send("Salut à toi !");
  const channel = client.channels.find(r => r.name === "〔📃〕les-nouveaux");
  channel.send(`${member} a rejoint le serveur !`);
});

client.login(TOKEN);

client.on("ready", () => console.log("=== Sven est prêt ! ==="));
client.on("error", console.error);
client.on("warn", console.warn);
client.on("debug", console.log);
