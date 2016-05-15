let P = require('autoresolve'); // for finding local modules

let arch = require('process').arch; // for finding whether a window handle is a uint64 or 32
let dllPath = require(P('lib/dllpath')); // for finding where the library is
let ffi = require('ffi'); // for using the library

let libborderlessundertale = ffi.Library(dllPath, { // require the library
  'MakeWindow': [arch === 'x64' ? 'uint64' : 'uint32', ['string']], // define a function called MakeWindow that takes a string and returns either a uint64 or 32
  'MoveUTWindow': ['void', [arch === 'x64' ? 'uint64' : 'uint32', 'int', 'int']] // define a function called MoveUTWindow that takes a uint64 or 32 and 2 ints and returns nothing
});

module.exports = libborderlessundertale;
