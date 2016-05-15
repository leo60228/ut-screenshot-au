let P = require('autoresolve'); // for loading internal modules

let libborderlessundertale = require(P('lib/libborderlessundertale')); // internal c++ lib
let Q = require('q'); // for async

let utwindow = null; // holds handle for window, is actually floating point for small values on 64-bit and always on 32-bit, is a string for large values on 64-bit

Q.fcall(function() {
  utwindow = libborderlessundertale.MakeWindow('C:\\Users\\snuggles08\\Documents\\UNDERTALE NoSteam\\UNDERTALE.exe'); // creates undertale for my local path, should be changed later
})
.delay(2500) // for testing
.then(function() {
  libborderlessundertale.MoveUTWindow(utwindow, 50, 50); // also for testing
});
