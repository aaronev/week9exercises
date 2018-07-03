var arr = ['anaconda', 'banana', 'cake', 'dude', 'elk']

console.log(arr.length)


for (i = 0; i < arr.length; i++) {
  console.log(arr[i].length)
}

//This is impure function manipulating the original array
//console.log(arr.reverse())

//This is another way to reverse the array using a copied array

// var copied = arr.slice()

// console.log(copied.reverse())


var newArr = []

for (var i = 0; i < arr.length; i++) {
  newArr.push(arr[i])
}

console.log(newArr.reverse())

console.log(newArr.sort())


var numArr = [12, 10, 45, 36, 88, 22]

console.log(numArr.sort((a,b)=>a-b))
console.log(numArr.sort((a,b)=>b-a))

var threeItemStrArr = ['hello', 'yes', 'okay']