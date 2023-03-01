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

// to demonstrate my understanding of index positions, i will write an explanation of the reasoning behind using pop and shift. shift will remove the index position 0 because it is first, pop will remove the last index position, in the case of the name variable, dan is removed from index position 3 with the shift command. in the case of the sn, 72 was femoved from index position 0.