let arch = require('process').arch;
let dllPath = require('./dllpath');
let ffi = require('ffi');

let libborderlessundertale = ffi.Library(dllPath(), {
  'MakeWindow': [arch === 'x64' ? 'uint64' : 'uint32', ['string']],
  'MoveUTWindow': ['void', [arch === 'x64' ? 'uint64' : 'uint32', 'int', 'int']]
});

module.exports = libborderlessundertale;
