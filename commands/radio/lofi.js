const utils = require('../utils');



module.exports.run = async (client, message, args) => {
  
   if(message.guild === null)return;
  

    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
        var VC = message.member.voiceChannel;
  
        var newUserChannel = message.member.voiceChannel;

  
        if (!VC)return;
    VC.join()
        .then(connection => {
      message.reply("🎶Playing Lo-fi radio in😎" + newUserChannel)
            const dispatcher = connection.playStream('http://hyades.shoutca.st:8043/stream');
            dispatcher.on("end", end => {VC.leave()});
      

        })
        .catch(console.error);
};
 


module.exports.help = {
    command: 'betaintesting'
};