"use strict";
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];
const words = ["pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis", "sekmadienis"];
console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
    function lastIndexOfArr(arr) {
        console.log(arr.length - 1);
    }
    console.log(numbers);
    lastIndexOfArr(numbers);
    console.log(words);
    lastIndexOfArr(words);
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
    function indexInRow(arr) {
        for (let i = 0; i < arr.length; i++)
            console.log(i);
    }
    console.log(numbers);
    indexInRow(numbers);
    console.log(words);
    indexInRow(words);
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
    function arrMeaningInRow(arr) {
        for (let i = 0; i < arr.length; i++)
            console.log(arr[i]);
    }
    console.log(numbers);
    arrMeaningInRow(numbers);
    console.log(words);
    arrMeaningInRow(words);
}
console.groupEnd();
console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
    function arrIndexPlusMeaning(arr) {
        for (let i = 0; i < arr.length; i++)
            console.log(`[${i}] => ${arr[i]}`);
    }
    console.log(numbers);
    arrIndexPlusMeaning(numbers);
    console.log(words);
    arrIndexPlusMeaning(words);
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
    function arrIndexReverse(arr) {
        for (let i = arr.length - 1; i >= 0; i--)
            console.log(arr[i]);
    }
    console.log(numbers);
    arrIndexReverse(numbers);
    console.log(words);
    arrIndexReverse(words);
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
    function arrIndexOneRow(arr) {
        const res = arr.map((_, i) => i).join(' ');
        console.log(res);
        // console.log(...arr.map((_, i) => i));
    }
    console.log(numbers);
    arrIndexOneRow(numbers);
    console.log(words);
    arrIndexOneRow(words);
}
console.groupEnd();
console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
    function arrMeaningInOneRow(arr) {
        const res = arr.join(' ');
        console.log(res);
        // console.log(...arr);
    }
    console.log(numbers);
    arrMeaningInOneRow(numbers);
    console.log(words);
    arrMeaningInOneRow(words);
}
console.groupEnd();
console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17, [1]=>8, [2]=>88 ..
{
    function arrIndexAndMeaningInOneRow(arr) {
        const res = arr.map((x, i) => `[${i}]=>${x}`).join(', ');
        console.log(res);
        // console.log(...arr.map((x, i) => `[${i}]=>${x} `));
    }
    console.log(numbers);
    arrIndexAndMeaningInOneRow(numbers);
    console.log(words);
    arrIndexAndMeaningInOneRow(words);
}
console.groupEnd();
console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
    function doubleArray(arr) {
        return arr.map(x => x * 2);
    }
    const result = doubleArray(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
    function squareArray(arr) {
        return arr.map(x => x ** 2);
    }
    const result = squareArray(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
    function arrayElementsAndIndexMultiplication(arr) {
        return arr.map((x, i) => x * i);
    }
    const result = arrayElementsAndIndexMultiplication(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
    function returnPositiveElementArrOfInitialArray(arr) {
        return arr.filter((x) => x > 0);
    }
    const result = returnPositiveElementArrOfInitialArray(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
    function returnNegativeElementArrOfInitialArray(arr) {
        return arr.filter((x) => x <= 0);
    }
    const result = returnNegativeElementArrOfInitialArray(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
    function returnEqualElementArrOfInitialArray(arr) {
        return arr.filter((x) => x % 2 === 0);
    }
    const result = returnEqualElementArrOfInitialArray(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
    function returnOddElementArrOfInitialArray(arr) {
        return arr.filter((x) => Math.abs(x) % 2 === 1);
    }
    const result = returnOddElementArrOfInitialArray(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
    function returnArrayMakeAllElementPositive(arr) {
        return arr.map((x) => x < 0 ? x * -1 : x);
    }
    const result = returnArrayMakeAllElementPositive(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
