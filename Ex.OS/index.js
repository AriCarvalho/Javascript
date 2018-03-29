//provides a number of operating system-related utility methods
const os = require('os');

//A string constant defining the operating system-specific end-of-line marker:
console.log("os.EOL:",os.EOL);

//returns a string identifying the operating system CPU architecture for which the Node.js binary was compiled.
//'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', and 'x64'
console.log("os.arch():",os.arch());

//Returns an object containing commonly used operating system specific constants for error codes, process signals, and so on.
console.log("os.constants:",os.constants);

//Returns an array of objects containing information about each logical CPU core.
console.log("os.cpus():",os.cpus());

//Returns a string identifying the endianness of the CPU for which the Node.js binary was compiled.
console.log("os.endianness():",os.endianness());

//Returns the amount of free system memory in bytes as an integer.
console.log("os.freemem()",os.freemem());

//Returns the home directory of the current user as a string.
console.log("os.homedir()",os.homedir());

//Returns the hostname of the operating system as a string.
console.log("os.hostname()",os.hostname());

//Returns an array containing the 1, 5, and 15 minute load averages.
console.log("os.loadavg()",os.loadavg());

//Returns an object containing only network interfaces that have been assigned a network address.
console.log("os.networkInterfaces()",os.networkInterfaces());

//Returns a string identifying the operating system platform as set during compile time of Node.js.
//'aix' 'darwin' 'freebsd' 'linux' 'openbsd' 'sunos' 'win32' 'android'
console.log("os.platform()",os.platform());

//Returns a string identifying the operating system release.
console.log("os.release()",os.release());

//Returns a string specifying the operating system's default directory for temporary files.
console.log("os.tmpdir()",os.tmpdir());

//Returns the total amount of system memory in bytes as an integer.
console.log("os.totalmem()",os.totalmem());

//Returns a string identifying the operating system 
//'Linux' on Linux, 'Darwin' on macOS and 'Windows_NT' on Windows.
console.log("os.type()",os.type());

//Returns the system uptime in number of seconds.
console.log("os.uptime()",os.uptime());

//Returns information about the currently effective user 
console.log("os.userInfo()",os.userInfo());

console.log("-END-");