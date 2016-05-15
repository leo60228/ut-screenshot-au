let os = require('os');
let packpath = require('packpath');
let path = require('path');

let arch = process.arch;
let platform = os.platform();

module.exports = (() => {
  let dllpath = path.join(packpath.self(), 'dll');

  if (platform === 'win32') {
    dllpath = path.join(dllpath, 'win');
  } else {
    console.error(`Platform ${platform} not supported!`);
    process.exit(1);
  }

  if (arch === 'x64') {
    dllpath += '64';
  } else if (arch === 'ia32') {
    dllpath += '32';
  } else {
    console.error(`Arch ${arch} not supported!`);
    process.exit(1);
  }

  return dllpath;
})();
