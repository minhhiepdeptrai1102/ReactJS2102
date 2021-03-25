alert("Chao moi nguoi");
//name for variable. đặt tên biến không được đặt kiểu số là kí tự đầu. js sẽ hiểu đó là một value của biến
var a = 20;
let b = 30;
b = 60;
const C = 40;
//đặt biến kiểu const nên đặt tên kiểu in hoa

console.log("a", a, "b", b, "c", C);

//các phép toán
// var age = 2021 - 1999;
var currentyear = 2021;
var birthyear = 1999;
var age = currentyear - birthyear;
console.log("age", age);
console.log("3 + 4", 3 + 4);
console.log("3 - 4", 3 - 4);
console.log("3 * 4", 3 * 4);
console.log("3 / 4", 3 / 4);
console.log("3 / 0", 3 / 0);
console.log("3 / 'a' = ", 3 / "a");

//number
console.log('3 + "2"', 3 + "2", typeof(3 + "2")); // chú ý toán tử cộng kiểu string
console.log('3 - "2"', 3 - "2", typeof(3 - "2"));
console.log('3 * "2"', 3 * "2", typeof(3 * "2"));
console.log('3 / "2"', 3 / "2", typeof(3 / "2"));

//string
let studentname1 = "\"ng minh hiep\"";
let studentname2 = '"ng minh nhat"';

console.log("studentname1", studentname1);
console.log("studentname2", studentname2);
console.log(studentname1 + studentname2);

//template string
let studentname = "duong";
let studentage = 2;
let classname = "mam non lien co";
let intro = "Name: " + studentname + "; age: " + studentage;

let temintro = `Name: ${studentname}; age: ${studentage}; class: ${classname}`
console.log("intro: ", intro, temintro);

//object
var student = {
    namee: "hai",
    agee: 29,
    classnamee: "truong doi"
}
console.log("studentname", student);

//array
let age3 = [10, 20, 30, 40]
console.log("age: ", age3);

//boolean
let isaboy = true; //false

//instrutment... cac cau lenh
//if - else if - else
// "==": so sanh tuong doi. "===": so sanh tuyet doi
let today = "5";// 5
let weathergood = false
// let istuesday = (today === 3);
// if se chay tu trai sang phai, se check va dung lai o dieu kien sai dau tien de hien thi ket qua.
//if ((today === 3 || today === 5) && weathergood) {
if ((today === 3 && weathergood) || today === 5) {
    console.log("go to class")
}

// else if (today === 5) {
//     console.log("go to class")
// }

else {
    console.log("don't go to class")
}

//switch case
let month = 5;
if (month === 1) {
    console.log("jan")
} else if (month === 2) {
    console.log("feb")
} else if (month === 3) {
    console.log("mar")
} else {
    console.log("don't know")
}

switch (month) {
    case 1:
        console.log("jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("mar")
        break;
    default:
        console.log("don't know")
}

//loop - for - while - do while
let begin = 1;
let end = 19;
for(let i = begin; i <= end; i = i + 1){
    console.log("i: " + i);
}

for (let i = 0; i < end; i ++){
    console.log("i: " + (i + 1))
}

let i = 0;
while (true) {
    if (i>=end){
        break;
    }
    console.log("i: " + i)
    i++;
}

i = 17;
do {
    console.log("mot cai gi do")
} while (i < 16)

//get value from user input
let value = window.prompt("enter a number", 0)
console.log("value: ", value, typeof(value))

if (value % 2 === 0) {
    console.log("sochan")
} else {
    console.log("sole")
}