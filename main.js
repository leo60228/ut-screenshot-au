let ref = require('ref');
let ffi = require('ffi');
let Q = require('q');

let arch = require('process').arch;

let libborderlessundertale = ffi.Library(dllPath(), {
  'MakeWindow': [arch === 'x64' ? 'uint64' : 'uint32', ['string']],
  'MoveUTWindow': ['void', [arch === 'x64' ? 'uint64' : 'uint32', 'int', 'int']]
});

let utwindow = null;

Q.fcall(function() {
  utwindow = libborderlessundertale.MakeWindow('C:\\Users\\snuggles08\\Documents\\UNDERTALE NoSteam\\UNDERTALE.exe');
})
.delay(2500)
.then(function() {
  libborderlessundertale.MoveUTWindow(utwindow, 50, 50);
});
