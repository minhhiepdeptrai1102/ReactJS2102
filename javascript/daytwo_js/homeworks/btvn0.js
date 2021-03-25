let n = window.prompt("enter a number", 0)
var test = true
if (n < 2) {
    test = false
    console.log(n, "khong phai so nguyen to")
}

for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
        test = false
        break;
    }
}
if (test == true) {
    console.log(n, "la so nguyen to")
}
if (test == false) {
    console.log(n, "khong phai la so nguyen to")
}