// ================= isograma ============

//  var str = 'moOse';

// var charRepeats = function(str) {
//     strOne = str.toLowerCase()
//     for (var i=0; i<strOne.length; i++) { 
//       if ( strOne.indexOf(strOne[i]) !== strOne.lastIndexOf(strOne[i]) ) {
//         return false; // repeats
//       }
//     }
//   return true;
// }

// console.log( charRepeats(str) );

// ===================== countVowels ==========================

// let str = 'uzu3 u i'

// const countVowels = str => Array.from(str)
//   .filter(letter => 'aeiou'.includes(letter)).length;

// function getCount(str) {
//     let vowelsCount
//     let arr = Array.from(str)
//      vowelsCount=arr.filter(str => 'aeiou'.includes(str)).length
//     return vowelsCount;
//   }

// console.log(getCount(str));

// =================== = printError = ===================

// let str= 'aaaxbbbbyyhwawiwjjjwwm'

// function errWord(str) {
//     const errWor = str.replace(/[a-m]/g,'').length
//     return `"${errWor}/${str.length}"`
// }

// ==================== pongram ==========
// let word = 'The quick brown fox jumps over the lazy dog'
// function isPonagram(w) {
//     w = w.toLowerCase()
//     let arrFromW = Array.from(w)
//     let noDublicateArr = [...new Set(arrFromW)]
//     let filter = noDublicateArr.filter(w => /[a-z]/.test(w))
//     console.log(filter)
//     return filter.length === 26 ? true : false
// }
// console.log(isPonagram(word))

// ====== сортировка пузырьком ======

// const array = [1, 4, 2, 3, 5, 45, 0,1, 4, 2, 3, 5]
// let count = 0

// function start(array) {
//     for (let j = 0; j < array.length; j++) {

//         for (let index = 0; index < array.length -1 -j; index++) {
//             console.log(`${array[index]} c ${array[index + 1]}`)

//             if (array[index] > array[index + 1]) {
//                 let tmp = array[index]
//                 array[index] = array[index + 1]
//                 array[index + 1] = tmp
//             }
//             count += 1
//         }
//     }
//     return array
// }


// console.log(start(array))
// console.log(count)


// ================== Дубликат кодировщика ============

// let str = 'recede'

// function name(str) {

//     let result = ''

//     for (let i = 0; i < str.length; i++) {
//         str.indexOf(str[i])===str.lastIndexOf(str[i]) ? result += '(' : result += ')'
//     }
//     return result
// }

// console.log(name(str));


//  ===================== Найдите нечетное число ================

// const a = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]
// function findOdd(arr) {
//     let summDublicate = []
//     let summ = 0
//     for (let i = 0; i < arr.length; i++) {

//         for (let i = 0; i < arr.length; i++) {
//             if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
//                 let tmp = arr[i]
//                 arr[i] += summ
//                 summ += 1
//                 summDublicate.push(summ)

//             }
//         }
//     }


//     return summDublicate

// }
// console.log(findOdd(a));

// const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

// function oddInt(array) {
//     var count = 0;
//     var element = 0;
//     for(var i = 0; i < array.length; i++) {
//       var tempInt = array[i];
//       var tempCount = 0;
//         for(var j = 0; j <array.length; j++) {
//            if(array[j]===tempInt) {
//            tempCount++;
//              if(tempCount % 2 !== 0 && tempCount > count) {
//              count = tempCount; 
//              element = array[j];
//            }
//           }
//          }
//         }
//       return element;
//       }
//       console.log(oddInt([1,2,2,2,4,4,4,4,4,4,5,5]));

//   function findOdd(numbers) {
//     var count = 0;
//     for(var i = 0; i<numbers.length; i++){

//       for(var j = 0; j<numbers.length; j++){

//         if(numbers[i] == numbers[j]){
//           count++;

//         }
//       }
//       if(count % 2 != 0 ){
//         return numbers[i];
//       }
//     }
//   };

//   console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); //5
//   console.log(findOdd([1,2,3,1,1,1,10,1,1,1,1])); //10

//  =================== полиндром

// function isPolindrom(word) {
//     let wordReverse = Array.from(word).reverse().join('')
//     return word == wordReverse? true:false  
// }
// console.log(isPolindrom('фяф'));

// удаление дубликатов

// function name(arr) {
//     count = []
//     for (let v = 0; v < arr.length; v++) {
//         const outEl = arr[v];
//         if(arr.indexOf(outEl) === arr.lastIndexOf(outEl)){
//             count.push(outEl)
//         }
//     }
//     return count  
// }

// console.log(name(
//     [1,1,2,3,4,4,5,6,6,7,7,8,9]
// ));

// ======================= Возврат отрицательный ====================

// function returnMinus(num) {
//     if(num > 0){
//         return num = -Math.abs(num)
//     }else{
//         return num
//     }
// }
// console.log(returnMinus(45));


// Удалить первый и последний символы


// function removeChar(str) {
//     return str.substring(1, str.length-1);
// }
// console.log(removeChar('asa'));



// function arrayDiff(a, b) {
// if (arrOne.length === 0) return arrOne
// else if (arrTwo.length === 0) return arrOne

// let count = 0

// for (let i = 0; i < arrTwo.length; i++) {
//     let elArTwo = arrTwo[i];
//     for (let j = 0; j < arrOne.length; j++) {
//         let elArrOne = arrOne[j]
//         if(elArTwo==elArrOne){
//             count ++
//             arrOne.splice(j,count)
//         }

//     }
// }
// return arrOne
// let result = a.filter(x => b.indexOf(x) === -1 )

// return result

// }
// function arrayDiff (a, b) {
//     return a.filter(x => b.indexOf(x) === -1 );
// }

// console.log(arrayDiff([1,2,2,3], [1,2]));

// const date = [1,2,3]
// console.log(date.indexOf(14));
// ======================= Take a Ten Minute Walk  ==========

//You live in the city of Cartesia where all roads are laid out in
// a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go
// for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the
// button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only 
//a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that
// will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, 

//return you to your starting point. Return false otherwise.
// let date = ['n','s','n','s','n','s','n','s','n','s']
// function isValidWalk(walk) {
//     let nordSouth = 0
//     let westEast = 0
//     for (let i = 0; i < walk.length; i++) {
//         const el = walk[i];

//         if ( el == 'n'){
//             nordSouth++
//         }else if (el =='s'){
//             nordSouth--
//         }else if (el == 'w'){
//             westEast++
//         }else if (el == 'e'){
//             westEast--
//         }

//     }

//     return walk.length == 10 && nordSouth == 0 && westEast == 0 ? true :false
// }


// console.log(isValidWalk(date));\

// ===================================== Jaden Casing Strings ===============================

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The
//  strings are actual quotes from Jaden Smith, but they are not capitalized in the
//   same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// let w = "How can mirrors be real if our eyes aren't real"
// String.prototype.toJadenCase = function () {
//     let result = this.toLowerCase()
//     result = result.split(' ')

//     var stringItog = [];

//     for (let i = 0; i < result.length; i++) {
//         let Name = result[i];
//         let First = Name.substring(0, 1).toUpperCase();
//         let Leftovers = Name.substring(1, Name.length)
//         stringItog.push(First + Leftovers ) 
//     }

//     return stringItog.join(" ")
// };

// console.log(w.toJadenCase());


// function filter_list(l) {
//     let arr = []
//     for (let i = 0; i < l.length; i++) {
//         const element = l[i];
//         if(typeof(element)=='number'){
//             arr.push(element)
//         }
        
//     }
//     return arr
// }

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// var maxSequence = function(arr){
//     let maxSum = 0;
//     let partialSum = 0;
    
//     for (let item of arr) { 
//       partialSum += item; 
//       maxSum = Math.max(maxSum, partialSum); 
//       if (partialSum < 0) partialSum = 0
//     }
    
//     return maxSum;
// }

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));












