//Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
//gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!

const calcAverage = (a, b, c) => {
        return (a + b + c) / 3;
    }
    //data1
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);
//data2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
        if (avgDolphins > 2 * avgKoalas) {
            console.log('Dophins win (%d vs %d)', avgDolphins, avgKoalas);
        } else if (avgKoalas > 2 * avgDolphins) {
            console.log('Koalas win (%d vs %d)', avgKoalas, avgDolphins);
        } else {
            console.log('Khong co doi win');
        }
    }
    //check
checkWinner(avgDolphins1, avgKoalas1)
checkWinner(avgDolphins2, avgKoalas2)