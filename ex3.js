//ex3: There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. 
//The winner with the highest average score wins a trophy!
//Data1 
const DolphinsTeam = [96, 108, 89]
const KoalasTeam = [88, 91, 110]
    //Data2
const DolphinsTeam2 = [97, 112, 101]
const KoalasTeam2 = [109, 95, 123]
    //Data3
const DolphinsTeam3 = [97, 112, 101]
const KoalasTeam3 = [109, 95, 106]
    //Data1
let DolphinsAverage = (DolphinsTeam[0] + DolphinsTeam[1] + DolphinsTeam[2]) / 3
let KoalasAverage = (KoalasTeam[0] + KoalasTeam[1] + KoalasTeam[2]) / 3
    //Data2
let DolphinsAverage2 = (DolphinsTeam2[0] + DolphinsTeam2[1] + DolphinsTeam2[2]) / 3
let KoalasAverage2 = (KoalasTeam2[0] + KoalasTeam2[1] + KoalasTeam2[2]) / 3
    //Data3
let DolphinsAverage3 = (DolphinsTeam3[0] + DolphinsTeam3[1] + DolphinsTeam3[2]) / 3
let KoalasAverage3 = (KoalasTeam3[0] + KoalasTeam3[1] + KoalasTeam3[2]) / 3

// if (DolphinsAverage > KoalasAverage)
//     console.log("Data1:", "DolphinsAverage:", DolphinsAverage, "KoalasAverage", KoalasAverage, "DolphinsTeam Win")
// else if (DolphinsAverage < KoalasAverage)
//     console.log("Data1:", "DolphinsAverage:", DolphinsAverage, "KoalasAverage", KoalasAverage, "KoalasTeam Win")
// else
//     console.log("DolphinsTeam = KoalasTeam")
//c>Include a requirement for a minimum score of 100. With this rule, a
//team only wins if it has a higher score than the other team, and the same time a
//score of at least 100 points. Hint: Use a logical operator to test for minimum
//score, as well as multiple else-if blocks �

//data1
if (DolphinsAverage > KoalasAverage && DolphinsAverage >= 100)
    console.log("Data1:", "DolphinsAverage:", DolphinsAverage, "KoalasAverage", KoalasAverage, "DolphinsTeam Win")

else if (DolphinsAverage < KoalasAverage && KoalasAverage >= 100)
    console.log("Data1:", "DolphinsAverage:", DolphinsAverage, "KoalasAverage", KoalasAverage, "KoalasTeam Win")
else if ((DolphinsAverage == KoalasAverage && KoalasAverage >= 100))
    console.log("DolphinsTeam = KoalasTeam")
else
    console.log("No team won")
    //data2
if (DolphinsAverage2 > KoalasAverage2 && DolphinsAverage2 >= 100)
    console.log("Data2:", "DolphinsAverage:", DolphinsAverage2, "KoalasAverage", KoalasAverage2, "DolphinsTeam Win")

else if (DolphinsAverage2 < KoalasAverage2 && KoalasAverage2 >= 100)
    console.log("Data2:", "DolphinsAverage:", DolphinsAverage2, "KoalasAverage", KoalasAverage2, "KoalasTeam Win")
else if ((DolphinsAverage2 == KoalasAverage2 && KoalasAverage2 >= 100))
    console.log("DolphinsTeam = KoalasTeam")
else
    console.log("No team won")
    //data3
if (DolphinsAverage3 > KoalasAverage3 && DolphinsAverage3 >= 100)
    console.log("Data2:", "DolphinsAverage:", DolphinsAverage3, "KoalasAverage", KoalasAverage3, "KoalasTeam Win")
else if ((DolphinsAverage3 == KoalasAverage3 && KoalasAverage3 >= 100))
    console.log("DolphinsTeam = KoalasTeam")
else
    console.log("No team won")