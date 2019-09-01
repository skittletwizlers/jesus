const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NjE3MDMxNDk3OTUzODM3MDU2.XWlWTw.F_ycnaUlc6N3eS_ogoQsFMpKCCU';
const PREFIX = '!';

client.on('ready', () => {
    client.user.setPresence({ game: { name: 'socializing' }, status: 'online' })
    console.log('Komi-san woke up')
})   

const cook1 = "./cooking/1.PNG"; 
const cook2 = "./cooking/2.PNG"; 
const cook3 = "./cooking/3.PNG"; 
const cook4 = "./cooking/4.PNG";    
const cat1 = "./komi/komicat1.PNG";    
const cat2 = "./komi/komicat2.PNG";   
const cat3 = "./komi/komicat3.PNG";    
const cat4 = "./komi/catgif.gif";    
const hey1 = "./komi/komigif1.gif";  
const gif2 = "./komi/komigif2.gif";  
const gif3 = "./komi/komigif3.gif";  

client.on('message', msg=>{
   
    let args = msg.content.substring(PREFIX.length).split(" ")

    switch(args[0]) {
        case 'help':
            msg.channel.sendMessage({embed: {
                color: 3447003,
                title: ". . .",
                fields: [
                  { name: "Commands", value: "!help\n!test\n!test", inline: true},
                  { name: "Inclusive Commands", value: "komi san\nkomicat\ncook me", inline: true}
                ]
              }
            });
            break;
        case 'hello':
            msg.channel.sendMessage('test')
            break;
        case 'test':
            if(args[1] === 'ok'){
                msg.channel.sendMessage('test1');
            }else{
                msg.channel.sendMessage('Invalid Argument')
            }
        break;
    }
    if (msg.content.includes("cook me")) {
        number = 4;
        var random = Math.floor (Math.random() * (number - 1 + 1) + 1);
        switch (random) {
            case 1: msg.channel.send({ files: [cook1] }); break;
            case 2: msg.channel.send({ files: [cook2] }); break;
            case 3: msg.channel.send({ files: [cook3] }); break;
            case 4: msg.channel.send({ files: [cook4] }); break;
        } 
    }
    else if (msg.content.includes("komicat")) {
        number = 4;
        var random = Math.floor (Math.random() * (number - 1 + 1) + 1);
        switch (random) {
            case 1: msg.channel.send({ files: [cat1] }); break;
            case 2: msg.channel.send({ files: [cat2] }); break;
            case 3: msg.channel.send({ files: [cat3] }); break;
            case 3: msg.channel.send({ files: [cat4] }); break;
        } 
    }
    else if (msg.content.includes("komi san"))  {
        number = 3;
        var random = Math.floor (Math.random() * (number - 1 + 1) + 1);
        switch (random) {
            case 1: msg.channel.send({ files: [hey1] }); break;
            case 2: msg.channel.send({ files: [hey1] }); break;
            case 3: msg.channel.send({ files: [hey1] }); break;
        } 
    }
})

client.login(process.env._l0q6zqk9G9p2UBbHnS2I5IOvFExuVnn);
