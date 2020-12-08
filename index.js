const Discord = require('discord.js')
const client = new Discord.Client();
const alexa = require('alexa-bot-api')
var chatbot = new alexa('aw2plm')
const prefix = ',,'
          
client.on('ready', () => {
  console.log(`I Am Ready To Kill Discord Users`);
   
});

client.on('message', async message => {
    if (message.author.bot) return;
    if(message.channel.id !== "782193685562654720") return;
    let content = message.content;
   chatbot.getReply(content).then(r => message.channel.send(r))
  });
        
client.on('message' , message => {
 if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
    
   if([`say`].includes(command)){
  const sayMessage = args.join(" ");
  message.delete()
  message.channel.send(sayMessage) 
   }
  })
client.login('NzgyMTYwMjk5OTk4MTgzNDI1.X8IJiw.-zZnKOltleO2w3wyNLi4u5-7PGU');
