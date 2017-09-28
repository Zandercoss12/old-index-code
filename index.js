const Discord = require('discord.js');
const TOKEN = "MzYxOTQ0MDIxMTc1NjMxODcy.DKreTQ.hn9jNeJW6fL0VdlkGR3X-bieTtk";
const PREFIX = "-+";

var fortunes = [
  "**ZanderBot says:**\n```css\nYes```",
  "**ZanderBot says:**\n```fix\nNo```",
  "**ZanderBot says:**\n```fix\nhm? Did you say something?```",
  "**ZanderBot says:**\n```css\nYes```",
  "**ZanderBot says:**\n```css\nNo```",
  "**ZanderBot says:**\n```fix\nU dumb```",
  "**ZanderBot says:**\n```css\nMaybe so...```",
  "**ZanderBot says:**\n```fix\nI do not think so.```",
  "**ZanderBot says:**\n```css\nThe world may never know...```",
  "**ZanderBot says:**\n```fix\nNever in a million years.```"
];


var facts = [
  "**Gud and not false fact**\nSchool is cool.",
  "**Gud and not false fact**\nTacos are the best.",
  "**Gud and not false fact**\nEverything I say is true.",
  "**Gud and not false fact**\nBurritos are bad.",
  "**Gud and not false fact**\nU dumb.",
  "**Gud and not false fact**\nDon't touch me!!!",
  "**Gud and not false fact**\nTACOS",
  "**Gud and not false fact**\nScientists have proven that buildings can't jump.",
  "**Gud and not false fact**\nA lethal dose is a lifetime supply.",
  "**Gud and not false fact**\nSchool is fun (in a million years)",
  "**Gud and not false fact**\nMusic is enjoyable.",
  "**Gud and not false fact**\nMy name is ZanderBot.",
  "**Gud and not false fact**\nZandercross12 created me.",
  "**Gud and not false fact**\nWhat I said last was a lie.",
  "**Gud and not false fact**\nDoing drugs hurts you gradually.",
  "**Gud and not false fact**\nDon't text and drive.",
  "**Gud and not false fact**\nIf you build an elevator to mars, the elevator would break.",
  "**Gud and not false fact**\nIf you were to drop an ant from the highest height, it would not die.",
  "**Gud and not false fact**\nIf you jump, you go up.",
  "**Gud and not false fact**\nIf you fall from a very tall height, you may die.",
  "**Gud and not false fact**\nI was programmed to say this stuff."

];

var bot = new Discord.Client();

bot.on('ready', () => {
  bot.user.setPresence({status:'online',game:{name:'-+help for commands!'}});
  console.log('I am ready!');
});

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "general").sendMessage(member.toString() + " Welcome taco brethren!");

    member.addRole(member.guild.roles.find("name", "Member"));
});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0].toLowerCase()) {
    case "8ball ":
       if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
       else message.channel.sendMessage("```diff\n- I do not understand ;-;```");
       break;
    case "info":
        var embed = new Discord.RichEmbed()
            .setThumbnail(message.author.avatarURL)
            .addField("What I am", "I am a bot created by: Zandercross12!")
            .addField("This is you ------>")
            .addField("What I do", "Random Stuff? I guess.")
            .addField("Am I a good bot?", "no")
            .setColor(0x00FFFF)
        message.channel.sendEmbed(embed);
        break;
    case "tacos":
      message.channel.sendMessage("```fix\nTACOS R DA BEST```");
      break;
    case "help":
      message.author.sendMessage("```md\n|--------<Commands>--------|\n[1]: help,\n[2]: 8ball <message>,\n[3]: info,\n[4]: TACOS,\n[5]: TACOS,\n[6]: dumbfact,\n|--------<Commands>--------|``` **Always start your commands with -+**");
      message.channel.sendMessage("**I just messaged you the commands, go check your dm's!**");
      break;
    case "dumbfact":
      if (args[0]) message.channel.sendMessage(facts[Math.floor(Math.random() * facts.length)]); 
       else message.channel.sendMessage("```diff\n- I do not understand ;-;```");
      break;

    	

      default:
        message.channel.sendMessage("```md\n[1]: Invalid Command...```");
  }
});

bot.login(TOKEN);
