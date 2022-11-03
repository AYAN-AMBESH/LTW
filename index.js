// let CWD = json_Sandbox.env;
let CWD = "home";
var dir = [];
const json_Sandbox = {
  env: {
    bin: ["cat", "ls", "cd", "write"],
    home: {
      "about_me.txt":
        "Hi i go by the alias Sinister Draco\nIm a programmer and also cybersecurity enthusiast \nI'm passaionate about cybersecurity and i love studying about it so much",
      "status.txt": "Dopamine comes from root shell quote by a wise man",
      "contact_me.txt": "You can contact me at ambesh12k@gmail.com",
      projects: {
        Amabarsariya:
          "<a target='_blank' href='https://github.com/AYAN-AMBESH/Ambarsariya'> A stegnography based tool</a>",
        SAV: "<a target='_blank' href='https://github.com/AYAN-AMBESH/SAV'>A static analysis tool for antivirus</a>",
        Trident:
          "<a target='_blank' href='https://github.com/AYAN-AMBESH/trident'>Password Manager</a>",
        nestedProjects: {
          Amabarsariya:
            "<a target='_blank' href='https://github.com/AYAN-AMBESH/Ambarsariya'> A stegnography based tool</a>",
          SAV: "<a target='_blank' href='https://github.com/AYAN-AMBESH/SAV'>A static analysis tool for antivirus</a>",
          Trident:
            "<a target='_blank' href='https://github.com/AYAN-AMBESH/trident'>Password Manager</a>",
        },
      },
    },
    etc: {
      passwd: {
        user: "Rahul Kumar",
        Key: "Osint the user",
        "safe-exe":
          "<a target='_blank' href='https://drive.google.com/drive/folders/1a8Ni8ln6unFmKOQneqH93ByFzUQEKOMP?usp=sharing'> A safe applicattion with hidden stuff</a>",
      },
      shadow:
        "Here is some info about the user\n The user loves anime and his favourite one is bleach",
    },
  },
  command: ["cat", "ls", "dir", "cd", "write", "pwd", "clear"],
};
let activeFileStructure = [...Object.keys(json_Sandbox.env.home)];
let previousFileStructure = [...Object.keys(json_Sandbox.env.home)];

let counter = 0;

function deepIterator(target) {
  counter++;

  if (typeof target === "object") {
    for (const key in target) {
      deepIterator(target[key]);
    }
  } else {
    console.log(target);
  }
}

deepIterator(json_Sandbox.env.home);

function pwd() {
  return [`${CWD}`];
}

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

function listDir(params) {
  if (!params) {
    return activeFileStructure;
  } else if (
    activeFileStructure.includes(params) &&
    typeof json_Sandbox.env[params] === "object"
  ) {
    return Object.keys(json_Sandbox.env[params]);
  } else {
    return ["No such directory"];
  }
}

function changeDir(params) {
  console.log(previousFileStructure);
  if (params === "~") {
    CWD = "home";
    previousFileStructure = activeFileStructure;
    activeFileStructure = [...Object.keys(json_Sandbox.env.home)];
    return ["Changed to home"];
  } else if (activeFileStructure.includes(params)) {
    CWD = params;
    previousFileStructure = [...activeFileStructure];
    activeFileStructure = [...Object.keys(json_Sandbox.env.home[params])];
    return ["Changed to " + params];
  } else if ("..") {
    CWD = params;
    activeFileStructure = [...previousFileStructure];
    return ["Changed to home"];
  } else {
    return ["No such directory"];
  }
}

function run(params, params2) {
  if (json_Sandbox.command.includes(params)) {
    switch (params) {
      case "cat":
        return ["Hello cat "];
      case "ls":
        return listDir(params2);
      case "help":
        return ["Hello help"];
      case "pwd":
        return pwd();
      case "cd":
        return changeDir(params2 ?? "~");
      case "write":
        break;
      // case "clear":
      // return clear();
    }
  } else {
    return ["command not found!!"];
  }
}

var el = document.getElementById("input");
el.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    var output = document.getElementById("output");
    var input = document.getElementById("command").value;
    const split_input = input.split(" ");
    // console.log(split_input)
    output.innerHTML += "<pre>$ " + input + "</pre>";
    if (split_input[0] == "clear") {
      clear();
      // var newdisplay = document.createElement("pre");
      // newdisplay.HTML += '<div class="output" id="output">'+'<pre>'+'Ambash(build 1.0) initializing...done'+'<br>'+'starting OS...'+'<br>'+'---------'+'<br>'+"Sinister Draco's homepage"+'<br>'+'Try poking around the filesystem!'+'<br>'+'For help, run "help"'+'<br>'+'---------'+'</pre>'+'</div>'+'<div class="input" id="input">'+'<pre>$ <input class="command" id="command" name="command" type="text"/></pre>'+'</div>';
    } else {
      var out = run(split_input[0], split_input[1]);
      output.innerHTML += "<pre>" + out + "</pre>";
    }
    var input = (document.getElementById("command").value = "");
    this.focus();
  }
});
