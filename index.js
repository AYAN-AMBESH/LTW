// let CWD = json_Sandbox.env;
let CWD = 'home';
var dir = [];
const json_Sandbox = {
    "env": {
        "bin": ["cat", "ls", "cd", "write"],
        "home": {
            "about_me.txt": "Hi i go by the alias Sinister Draco\nIm a programmer and also cybersecurity enthusiast \nI'm passaionate about cybersecurity and i love studying about it so much",
            "status.txt": "Dopamine comes from root shell quote by a wise man",
            "contact_me.txt": "You can contact me at ambesh12k@gmail.com",
            "projects": {
                "Amabarsariya": "<a target='_blank' href='https://github.com/AYAN-AMBESH/Ambarsariya'> A stegnography based tool</a>",
                "SAV": "<a target='_blank' href='https://github.com/AYAN-AMBESH/SAV'>A static analysis tool for antivirus</a>",
                "Trident": "<a target='_blank' href='https://github.com/AYAN-AMBESH/trident'>Password Manager</a>"
            }
        },
        "etc": {
            "passwd": {
                "user": "Rahul Kumar",
                "Key": "Osint the user",
                "safe-exe":"<a target='_blank' href='https://drive.google.com/drive/folders/1a8Ni8ln6unFmKOQneqH93ByFzUQEKOMP?usp=sharing'> A safe applicattion with hidden stuff</a>"
            },
            "shadow": "Here is some info about the user\n The user loves anime and his favourite one is bleach"
        }
    },
    "command": ["cat", "ls", "dir", "cd", "write","pwd","clear"]
}


let counter = 0;

function deepIterator (target) {
  counter++;

  if (typeof target === 'object') {
    for (const key in target) {
      deepIterator(target[key]);
    }
  } else {
    console.log(target);
  }
}

deepIterator(json_Sandbox.env.home)

function pwd() {
    return [`${CWD}`]
}

// function ls() {
//     var out = [];
//     if (CWD == "home") {
//         out = Object.keys(json_Sandbox.env.home);
//     } else if (CWD == "bin") {
//         out = json_Sandbox.env.bin;
//     }
//     return out;
// }

// function help() {
//     var help = [
//         "cat   :prints the content of a file",
//         "ls    :list all the files in the directory",
//         "pwd   :prints the working directory",
//         "cd    :changes directory",
//         "Write :writes to a file",
//         "clear : Clears the screen"
//     ]
//     return help;
// }

function clear() {
    // location.reload()
    var e = document.getElementById("output");
    var main = e;
    var child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
    return main;
}

// function cat(input) {
//     var out = [];
//     for (let i = 0; i < input.length; i++) {
//         if (input[i] in json_Sandbox.env[CWD]) {
//             out.push(json_Sandbox.env[CWD][input[i]]);
//         } else {
//             out.push("file not found!");
//         }
//     }
//     return out;
// }

// function run(command) {
//     const token = command.split(" ");
//     if (json_Sandbox.command.includes(token[0])) {
//         switch (token[0]) {
//             case "cat":
//                 return cat(token.slice(1, token.length));
//             case "ls":
//                 return ls();
//             case "help":
//                 return help();
//             case "pwd":
//                 return pwd();
//             case "cd":
//                 return cd(token[1]);
//             case "write":
//                 break;
//             case "clear":
//                 clear();
//         }
//     } else {
//         return ["command not found!!"];
//     }
// }
// console.log(json_Sandbox.populate)
function changeDir(params){
// for(var key in json_Sandbox.env){
//     if(params == key){
//         CWD = params;
//         return [`changed directory to ${CWD}`]
//     }
// }
}


function run(params,params2) {
    if (json_Sandbox.command.includes(params)) {
    switch (params) {
                    case "cat":
                        return ["Hello cat "];
                    case "ls":
                        return ["Hello list"];
                    case "help":
                        return ["Hello help"];
                    case "pwd":
                        return pwd();
                    case "cd":
                        return changeDir(params2);
                    case "write":
                        break;
                    // case "clear":
                        // return clear();
                }
        }
    else
        {
            return ["command not found!!"];
        }

}









// var el = document.getElementById("input");
// el.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//         var output = document.getElementById("output");
//         var input = document.getElementById("command").value;
//         output.innerHTML += "<pre>$ " + input + "</pre>";

//         var out = run(input);
//         // for (let i = 0; i < out.length; i++) {
//         output.innerHTML += "<pre>" + out+ "</pre>";
//         // }
//         var input = (document.getElementById("command").value = "");
//         this.focus();
//     }
// });

// document.getElementById('command').addEventListener('blur', function () {
//     this.value.length > 3 || this.focus();
// });

var el = document.getElementById("input");
el.addEventListener("keydown",function(event){
    if (event.key == "Enter"){
        var output = document.getElementById("output");
        var input = document.getElementById("command").value;
        const split_input = input.split(" ");
        // console.log(split_input)
        output.innerHTML += "<pre>$ " + input + "</pre>";
        if(split_input[0]== "clear"){
            clear();
            // var newdisplay = document.createElement("pre");
            // newdisplay.HTML += '<div class="output" id="output">'+'<pre>'+'Ambash(build 1.0) initializing...done'+'<br>'+'starting OS...'+'<br>'+'---------'+'<br>'+"Sinister Draco's homepage"+'<br>'+'Try poking around the filesystem!'+'<br>'+'For help, run "help"'+'<br>'+'---------'+'</pre>'+'</div>'+'<div class="input" id="input">'+'<pre>$ <input class="command" id="command" name="command" type="text"/></pre>'+'</div>';
        }
        else{
            var out = run(split_input[0],split_input[1])
            output.innerHTML += "<pre>" + out + "</pre>";
        }
        var input = (document.getElementById("command").value = "");
        this.focus();
    }
});