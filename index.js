//Mark and John are trying to compare their BMI (Body Mass Index), which is
//calculated using the formula:
//BMI = mass / height ** 2 = mass / (height * height) (mass in kg
//and height in meter).



// Data 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

// Data 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

//ham tinh BMI
function BMI(mass, height) {
    return mass / (height * height);
}
//tinh toan BMI cua Mark va John
let BMIMark1 = BMI(markMass1, markHeight1)
let BMIJohn1 = BMI(johnMass1, johnHeight1)

let BMIMark2 = BMI(markMass2, markHeight2)
let BMIJohn2 = BMI(johnMass2, johnHeight2)
    //Boolean 
let markHigherBMI1 = BMIMark1 > BMIJohn1
let markHigherBMI2 = BMIMark2 > BMIJohn2
    //Output Data1
    // console.log("Data1:Mark BMI", BMIMark1);
    // console.log("Data1:John BMI", BMIJohn1);
    // console.log("Mark has a higher BMI than John.", markHigherBMI1);
    //Output Data2
    // console.log("Data1:Mark BMI", BMIMark2);
    // console.log("Data1:John BMI", BMIJohn2);
    // console.log("Mark has a higher BMI than John.", markHigherBMI2);

//ex2 : Use the BMI example from Challenge #1, and the code you already wrote, and improve it.\
//Data1
if (BMIMark1 > BMIJohn1)
    console.log("Mark's BMI is higher than John's!", "Mark BMI:", BMIMark1, "cao hon John BMI:", BMIJohn1);
else
    console.log("John's BMI is higher than Mark's!", "John BMI:", BMIJohn1, "cao hon Mark BMI:", BMIMark1);
//Data2
if (BMIMark2 > BMIJohn2)
    console.log("Mark's BMI is higher than John's!", "Mark BMI:", BMIMark2, "cao hon John BMI:", BMIJohn2);
else
    console.log("John's BMI is higher than Mark's!", "John BMI:", BMIJohn2, "cao hon Mark BMI:", BMIMark2);