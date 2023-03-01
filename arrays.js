var name = ["john","chris","mike","dan"];
name.pop();
var sn = [72,56,92,12];
sn.shift();
var tl = [true,true,false,true];
tl.pop();

// these are the 4 names and dan (4th) was removed from the last place
console.log(name);
// these are the serial numbers and 72 (1st) was removed from slot 0
console.log(sn);
// these are the team leaders and the true was removed from the last slot (4th)
console.log(tl);