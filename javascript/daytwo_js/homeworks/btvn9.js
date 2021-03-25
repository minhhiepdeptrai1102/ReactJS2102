var n = window.prompt("enter a number", 0)
let r;
var s = 0;
let t;
for (t = n; n > 0; n = n/10) {
    r = n % 10;
    s = s * 10 + r;
}
if (t == s) {
    console.log(t, "la so doi xung");
} else {
    console.log(t, "khong la so doi xung");
}