let age = 18;
ageinfloat = parseFloat(age);
console.log(typeof ageinfloat)
var fname = "Rajesh"
var lname = "Arulprakash"
console.log(fname + lname)
if (age < 18){
    console.log("You are not eligible to vote");
}
else{
    console.log("You are eligible to vote");
}


for(i = 1; i < 10; ++i){
    console.log(i);
}


// Single line comment
/*
    Multiline comment
*/

//Array, Object

// In C - int arr[] = {1, 2,3};
// arr[0]

let arr = [1,2,3.986,"Apple"];
console.log(arr[3])
arr[6] = "Orange"
console.log(arr)


//Object - Dictionary

let obj = {
    Name: "Rajesh",
    Age : 20,
    Gender : "Male",
    teammembers : {
        member1 : "Deepika",
        member2 : "kanila",
        member3 : "Jayanthi"
    }
};

console.log(obj.Age)


//Function
//return-type fname() {
//    fbody
//}

function add(a, b) {
    console.log(a+b)
}
let a = 20;
let b = 30;
add(a, b)