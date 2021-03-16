const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'ODIwMjM1ODU0Njc2MjMwMTg2.YEyOKw.iCNOM_Y0oAqmSJdgtkJsn-X_XmA';
const prefix = '#'

bot.on('ready', () => {
    console.log('Your bot is now online!')
    bot.user.setActivity('Atlantic Logistics Support', { type: "PLAYING"})
        .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
        .catch(console.error);
    bot.user.setStatus('online')
        .then(console.log)
        .catch(console.error)
})

bot.on("message", message => {
    if(message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

    if(command === 'ping') {
        message.channel.send('pong!');
    }
    if(command === 'join') {
        message.channel.send('You can apply here on our website - https://atlantic-logistics.jimdosite.com/')
    }
    if(command === 'ets2livemaps') {
        message.channel.send('You can view our live drivers map here https://map.vtlog.net/map/eut2?vtc=10331')
    }
    if(command === 'ets2livemapspromods') {
        message.channel.send('You can view our live drivers map here https://map.vtlog.net/map/eut2promods?vtc=10331')
    }
    if(command === 'atslivemaps') {
        message.channel.send('You can view our live drivers map here https://map.vtlog.net/map/ats?vtc=10331')
    }
    if(command === 'atslivemapspromods') {
        message.channel.send('You can view our live drivers map here https://map.vtlog.net/map/atsc2canada?vtc=10331')
    }
})

bot.login(token);