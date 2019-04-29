// import readline-sync module, don't touch!
const READLINE = require("readline-sync");

const helpMe = "Help Me!"
// Write your program below!
// First line should get user input (year) and store it in variable y.

// Let y be the year (such as 1583 or 2003).
let y = READLINE.question("Enter the year. Make sure it is in this format: 1990 >> ");

// Divide y by 19 and call the remainder a. Ignore the quotient.
let a= Math.floor(y%19);
console.log("a = " + a);

// Divide y by 100 and get a quotient b and remainder c.
let b = y/100;
b = Math.floor(b);
console.log("b = " + b);

let c = y%100
c= Math.floor(c);
// Divide b by 4 and get quotient d and remainder e.
let d = b/4;
d = Math.floor(d);

let e = b%4
e=Math.floor(e);

console.log("e = " +e)

// Divide b + 8 by 25 and get quotient f. Ignore the remainder.
let f = (b+8)/25
f = Math.floor(f);

// Divide b - f + 1 by 3 and get quotient g. Ignore the remainder.
let g = (b-f+1)/3
g= Math.floor(g);
// Divide 19 * a + b - d - g + 15 by 30 and get remainder h. Ignore the quotient.
console.log("g = " +g)


let h = (19*a+b-d-g +15)%30
h=Math.floor(h)
console.log("h = " +h)
// Divide c by 4 and get quotient i and remainder k.
let i = c/4;
i=Math.floor(i)

let k = c%4
k=Math.floor(k);

console.log('and k = ' + k);

// Divide 32 + 2 * e + 2 * i - h - k by 7 and get remainder r. Ignore the quotient.
let r = (32+2*e+2*i-h-k)%7;
r=Math.floor(r)
console.log("r = " +r);
// Divide a + 11 * h + 22 * r by 451 and get quotient m. Ignore the remainder.
 let m = (a+11*h+22*r)/451;
m = Math.floor(m);
// Divide h + r - 7 * m + 114 by 31 and get quotient n and remainder p.
let n = (h +r -7 *m +114)/31
 n= Math.floor(n)

let p = (h +r -7 *m +114)%31
p=Math.floor(p)

console.log(`In ${y} Easter falls on ${n}/${p+1}`);
console.log ("Done!");