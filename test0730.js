var a = 1;
console.log(a);

var arr = [1, 2, 3];
console.log(arr);

var b = arr.indexOf(3);
console.log(b);

let arr1 = arr.slice(1);
console.log(arr1);

//[)
let arr2 = arr.slice(0, 2);
console.log(arr2);

//push pop
let len = arr.push(4);
console.log(arr);
console.log(len);
arr.pop();
console.log(arr);

let len2 = arr.push(4, 5);
console.log(arr);
console.log(len2);

arr.push([6, 7]);
console.log(arr);
let lastEle = arr.pop();
console.log(arr);
console.log(lastEle);

arrEmpty = [];
let eleEmpty = arrEmpty.pop();
console.log(eleEmpty);

//数组头部增加、删除元素（增加可以是多个，删除只能是1个。unshift单词更长，对应多个，用于增加）
console.log(arr);
let firstEle = arr.shift();
console.log(firstEle);
console.log(arr);

arr.unshift(0, 1);
console.log(arr);

//指定位置删除和添加
let spliceEle = arr.splice(1, 2);
console.log(arr);
console.log(spliceEle);

arr.splice(1, 2, 7, 8);
console.log(arr);

//sort reverse
arr.reverse();
console.log(arr);

arr.sort();
console.log(arr);

let arrString  = ["i", "love", "you"]
let newArr = arr.concat.arrString;//❎ 用法
let newArr2 = arr.concat(arrString);
console.log(arr);
console.log(newArr);
console.log(newArr2);

let arrString3 = ["i", "love", "you", [5, 2, 0]]
let newArr3 = arr.concat(arrString3);
console.log(newArr3);

let arrString4 = ["i", "love", "you", ["5", "2"]]
let newArr4 = arr.concat(arrString4);
console.log(newArr4);

let arrString5 = [0, [1, 2], [3, 4]];
let newArr5 = ["a", "b"].concat(arrString5);
console.log(newArr5);

//只有元素为纯数字的数组，在有多个参数时，对首层数组进行压平。此特性较难理解，少用为好。
let newArr6 = arr.concat([[4,4],5, 6], [7, 8]);
console.log(newArr6);

let newArr7 = ["1", "2"].concat(["3",["4", "5"]]);
console.log(newArr7);

let newArr8 = ["1", "2"].concat([["3", "4"],["5", "6"]]);
console.log(newArr8);


console.log(newArr4);
let joinedStr = newArr4.join("-");
console.log(newArr4);
console.log(joinedStr);

//多维数组
var multiDimArr = [[1,2], [3,4,[5,6]]];
console.log(multiDimArr[0][1]);
console.log(multiDimArr[1][0]);
console.log(multiDimArr[1][2]);
console.log(multiDimArr[1][2][1]);
console.log(multiDimArr[1][3]);

// 练习：在新生欢迎会上，你已经拿到了新同学的名单，请排序后显示：欢迎XXX，XXX，XXX和XXX同学！：
'use strict';
var arr4Pratise = ['小明', '小红', '大军', '阿黄'];
let sortedArr = arr4Pratise.sort();
console.log(sortedArr);
let str = "欢迎" + sortedArr.slice(0,3).join(",") + "和" + sortedArr.pop() + "同学！";
console.log(str);
