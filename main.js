let P = require('autoresolve');

let libborderlessundertale = require(P('lib/libborderlessundertale'));
let Q = require('q');

let utwindow = null;

Q.fcall(function() {
  utwindow = libborderlessundertale.MakeWindow('C:\\Users\\snuggles08\\Documents\\UNDERTALE NoSteam\\UNDERTALE.exe');
})
.delay(2500)
.then(function() {
  libborderlessundertale.MoveUTWindow(utwindow, 50, 50);
});
