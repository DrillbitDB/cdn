exports.cmd = (str,message)=>{
  console.log(str);
  let cmdstr = str.split(" ");
  switch(cmdstr[0]){
    case "sudo":
      sudo(cmdstr.join(" "),message);
      break;
    default:
      message.channel.send("Hey <@" + message.author.id + ">, you may have accidentally put a space after the prefix or forgot to type the/typed the wrong command!")
  }
}

// Commands
function sudo(string,mobj){
  if(mobj.member.hasPermission("ADMINISTRATOR")){
    if(!((string[1].startsWith("["))&&(string[1].endsWith("]")))){
      mobj.author.send("Uhh, hi there, I think you just sent a \/sudo command that had an faulty array.\nOr... the devs f*ked up real bad,\neither way, here's the error: (send it to DedSocks#5138 aka the main dev for this bot)\n\n`"+error+"`");  
    }
    let params = JSON.parse(string[1]);
    params.includes("")
  }
  
}

// Chatting:
/*




*/