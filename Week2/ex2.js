// Steven is still building his tip calculator, using the same rules as before: Tip 15 % of
// the bill
// if the bill value is between 50 and 300, and
// if the value is different, the tip is
// 20 % .
const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = bills.map(bill => calcTip(bill)) //map se lap qua tung phan tu cua bills va tra ve 1 mang moi chua cac gia tri boa
const total = bills.map((biil, index) => biil + tips[index]);
console.log(bills);
console.log(tips);
console.log(total);