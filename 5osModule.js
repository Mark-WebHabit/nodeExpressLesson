const os = require("os");

// info about current user
const user = os.userInfo();

// method that returns the system uptime in seconds
console.log(os.uptime());

const currentOS = {
  name: os.type(),
  release: os.release(),
  titalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
