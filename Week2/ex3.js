// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)

const obj = [{
        name: "Mark Miller",
        height: 1.69,
        mass: 78
    },
    {
        name: "John Smith",
        height: 1.95,
        mass: 92
    }
]

const BMI = (height, mass) => {
    return mass / (height * height)
}
var BMIMark = BMI(obj[0].height, obj[0].mass);
var BMIJohn = BMI(obj[1].height, obj[1].mass);

if (BMIMark > BMIJohn) {
    console.log('mark BMI(%d)  is higher than John BMI(%d)', BMIMark, BMIJohn);
} else if (BMIJohn > BMIMark) {
    console.log('John BMI(%d)  is higher than Mark BMI(%d)', BMIJohn, BMIMark);
} else {
    console.log("Ca hai co chi so BMI bang nhau");

}