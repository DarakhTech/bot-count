var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = ">" //The text before commands, you can put anything that you prefer

    if(message.author.id != "728885419604705354" && message.channel.id === "728840748170084435"){
        if(msg.startsWith('>', 0)){
            if(msg === prefix + "cash" && message.channel.id === "728840748170084435"){
                message.channel.send('This is your cash amount') // Sends a message to the channel, with the content
            }
            else{
                message.channel.send("use >cash:) ")
            }
        }
        else{
            message.delete();
            message.channel.send(sender + " this bot only accepts commands which starts with '>' dot.");
        }
    }
});

bot.login(process.env.BOT_TOKEN)
