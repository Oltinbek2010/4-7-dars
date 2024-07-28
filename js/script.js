// 1-QISM

// 1-masala

// function kvIldiz (num) {
//     let ildiz = Math.sqrt(num)
//     return ildiz;
// }
// console.log(kvIldiz(9));

// 2-masala

// function ikkiSonAyirmasi(num1, num2) {
//     return num1 - num2;
// }
// console.log(ikkiSonAyirmasi(9, 3));

// 3-masala

// function stringniTakrorlash(string, num) {
//     let array = [];
//     for (let i = 1; i <= num; i++) {
//         array.push(string);
//     }
//     return array.toString();
// }
// console.log(stringniTakrorlash(`hello`, 5));

// 4-masala

// function cubeOfNumber(num) {
//     return num ** 3;
// }
// console.log(cubeOfNumber(3));

// 5-masala

// function bolinmaningButunQismi(num1, num2) {
//     return Math.trunc(num1 / num2)
// }
// console.log(bolinmaningButunQismi(12, 5));

// 6-masala

// function asrniAniqla(year) {
//     return Math.floor(year / 100 + 1);
// }
// console.log(asrniAniqla(2024));

// 7-masala

// function factorial(num) {
//     let p = 1;
//     for (let i = 1; i <= num; i++) {
//         p *= i;
//     }
//     return p;
// }
// console.log(factorial(5));

// 8-masala

// function countVowels(text) {
//     const vowels = 'aeiouAEIOU';
//     let count = 0; 
  
//     for (const iterator of text) {
//       if (vowels.includes(iterator)) {
//         count++;
//       }
//     }
    
//     return count;
// }
// console.log(countVowels(`Hello, my name is Oltinbek!`));  

// 9-masala

// function kesibOl(str, n) {
//     return str.slice(0, -n);
// }
// console.log(kesibOl(`Hello, my name is Oltinbek!`, 9));

// 10-masala

// function faqatRaqamlar(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] < '0' || str[i] > '9') {
//             return false;
//         }
//     }
//     return str.length > 0;  
// }
// console.log(faqatRaqamlar('904087803'));

// 11-masala

// function daraja(son, daraja) {
//     return son ** daraja;
// }
// console.log(daraja(3, 3));

// 12-masala

// function stringBoshliq(string) {
   
//     return string.replaceAll(' ', '')
// }
// console.log(stringBoshliq(`Salom xayr salom`));

// 13-masala

// function joinTwoString(str1, str2) {
//     return str1.concat(str2)
// }
// console.log(joinTwoString('salom', 'xayr'));

// 14-masala

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomNumber(12, 20));

// 15-masala

// function capitalizeWords(str) {
//     return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
// }
// console.log(capitalizeWords('salom men oltinbekman'));

// 2-QISM

// 1-masala

// function sumAllNumbers(array) {
//     let sum = 0;
//     for (const iterator of array) {
//         sum += iterator;
//     }
//     return sum;
// }
// console.log(sumAllNumbers([1, 2, 3, 4, 5]));

// 2-masala

// function findMax(array) {
//     let max = array[0];
//     for (const iterator of array) {
//         if (max <= iterator) {
//             max = iterator;
//         }
//     }
//     return max;
// }
// console.log(findMax([67, 78, 89, 90, 12, 23, 34, 45, 56]));

// 3-masala

// function reverseArray(arr) {
//     return arr.reverse();
// }  
// console.log(reverseArray([1, 2, 3, 4, 5]));
  
// 4-masala

// function filter(arr) {
//     return arr.filter(number => number > 0)
// }
// console.log(filter([1, 2, 3, -4, -5]));

// 5-masala

// function kvadrat(arr) {
//     let newArr = [];
//     for (const iterator of arr) {
//         newArr.push(iterator ** 2);
//     }
//     return newArr
// }
// console.log(kvadrat([2, 3, 4, 5]));

// 6-masala

// function removeDuplicates(arr) {
//     const uniqueArray = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (!uniqueArray.includes(arr[i])) {
//         uniqueArray.push(arr[i]);
//       }
//     }
//     return uniqueArray;
// }
// console.log(removeDuplicates([1, 2, 3, 4, 5, 3, 2, 1]));
  
// 7-masala

// function joinTwoArray(arr1, arr2) {
//     return arr1.concat(arr2);
// }
// console.log(joinTwoArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));

// 8-masala

// function countOddNums(arr) {
//     let counter = 0;
//     for (const iterator of arr) {
//         if (iterator % 2 == 1) {
//             counter ++;
//         }
//     }
//     return counter;
// }
// console.log(countOddNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 9-masala

// function array(arr, son) {
//     let newArr = [];
//     for (const iterator of arr) {
//         newArr.push(iterator + son);
//     }
//     return newArr;
// }
// console.log(array([1, 2, 3, 4, 5], 5));

// 10-masala

function findMinElement(arr) {
    let min = arr[0];
    for (const iterator of arr) {
        if (min > iterator) {
            min = iterator;
        }
    }
    return min;
}
console.log(findMinElement([101, 72, 83, 94, 34, ]));