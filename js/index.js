// var arr = ['anaconda', 'banana', 'cake', 'dude', 'elk']

// console.log(arr.length)


// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i].length)
// }

// //This is impure function manipulating the original array
// //console.log(arr.reverse())

// //This is another way to reverse the array using a copied array

// // var copied = arr.slice()

// // console.log(copied.reverse())

// var newArr = []

// for (var i = 0; i < arr.length; i++) {
//   newArr.push(arr[i])
// }

// console.log(newArr.reverse())

// console.log(newArr.sort())


// var numArr = [12, 10, 45, 36, 88, 22]

// console.log(numArr.sort((a,b)=>a-b))
// console.log(numArr.sort((a,b)=>b-a))

// var itemStrArr = ['hello', 'yes', 'okay']

// itemStrArr.push('what')
// itemStrArr.push('no')

// console.log(itemStrArr)

// itemStrArr.shift()
// console.log(itemStrArr  )

// =========================================================NUMBER 17 COMPLETED

//global variables
//Was told not do use global, but that's challnenging?!?!
//my theory to doing that is to turn the global variables into an object function
//within the object function will be a method that has a container array or use this (function())()


var list = document.getElementById('list')
var newArr = []

//helper functions
function clearUL() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function renderLI() {
  for (var i = 0; i < newArr.length; i++) {
    var li = document.createElement('li')
    li.textContent = newArr[i]
    list.appendChild(li)
  }
}

//event listeners  that does array methods: push, sort, pop, and shift
document.getElementById('button').addEventListener('click', 
  function() {
    var input = document.getElementById('input') 
    newArr.push(input.value) 
    clearUL()
    renderLI()
  }
)

document.getElementById('button2').addEventListener('click',
  function() {
    newArr.sort()   
    clearUL()
    renderLI()
  }
)

document.getElementById('button3').addEventListener('click',
  function() {
    newArr.pop()
    clearUL()
    renderLI()
  }
)

document.getElementById('button4').addEventListener('click', 
  function() {
    newArr.shift()
    clearUL()
    renderLI()
  }
)

