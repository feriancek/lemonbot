// Using https://github.com/mullwar/telebot
var fs = require('fs');

var TeleBot;
var bot;

fs.readFile("/run/secrets/apiToken", "utf8", function(err, fileContent){
    initializeBot(fileContent.trim());
});

function initializeBot(secret) {
    TeleBot = require('telebot');
    bot = new TeleBot({
        token: secret,
        pluginConfig: {
            shortReply: {
                replyMode: true
            }
        }
    });

    bot.on(['/roll', '/chance', '/salt'], (msg) => {
        msg.reply.text(getRandomInt(100));
    });
    bot.on(['/ab', '/AB'], (msg) => 
    {
        var response = ['A','B'];
        msg.reply.text(response[getRandomInt(2)]);
    });
    bot.on(['/sucks', '/suck'], (msg) => 
    {
        var response = ['https://www.youtube.com/watch?v=rQ28FcRePAo','https://youtu.be/Qy-Y3HJNU_s?t=1m11s'];
        msg.reply.text(response[getRandomInt(2)]);
    });
    bot.on(['/nato', '/NATO'], (msg) => 
    {
        var response = ['Alpha','Bravo','Charlie','Delta','Echo','Foxtrot','Golf','Hotel','India','Juliet','Kilo','Lima','Mike','November','Oscar','Papa','Quebec','Romeo','Sierra','Tango','Uniform','Victor','Whiskey','Xray','Yankee','Zulu'];
        msg.reply.text(response[getRandomInt(26)]);
    });

    bot.on(['/solution'], (msg) => msg.reply.text('http://i.imgur.com/hXnCtIN.gif'));
    bot.on(['/kenshiro', '/KENSHIRO'], (msg) => msg.reply.text('https://i.imgur.com/DZEF9VX.png'));
    bot.on(['/AHHHH','/AHHHH!'], (msg) => msg.reply.text('https://www.youtube.com/watch?v=qEjGsegAwpI'));
    bot.on(['/whme', '/warhammer'], (msg) => msg.reply.text('https://i.imgur.com/HgLeQ7r.jpg'));
    bot.on(['/whv'], (msg) => msg.reply.text('https://i.imgur.com/EW9UcD8.jpg'));
    bot.on(['/wack', '/WACK], (msg) => msg.reply.text('https://i.imgur.com/ciL01wx.jpg'));
    bot.on(['/list', '/start', '/LIST'], (msg) => msg.reply.text('AB, AHHHH!, CHANCE, KENSHIRO, NATO, ROLL, SALT, SOLUTION, SUCKS, WACK, WHME, WHV'));

    bot.start();
}

function getRandomInt(max) 
{
    return Math.floor(Math.random() * Math.floor(max));
};

