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

//turn into constructor objects with methods to remove global varialbles

function list() {
  this.items = []
  this.UL = document.getElementById('list')
}

list.prototype.clearUL = function() {
  this.UL.innerHTML = ""
}

list.prototype.renderList = function() {
  for (var i = 0; i < this.items.length; i++) {
    var li = document.createElement('li')
    li.textContent = this.items[i]
    this.UL.appendChild(li)
  }
}

var aList = new list()

//event listeners  that does array methods: push, sort, pop, and shift
document.getElementById('button').addEventListener('click', 
  function() {
    var input = document.getElementById('input') 
    //prevents default with our form
    if (input.value) {
      aList.items.push(input.value) 
      aList.clearUL()
      aList.renderList()
    }
  }
)

document.getElementById('button2').addEventListener('click',
  function() {
    aList.items.sort()
    aList.clearUL()
    aList.renderList()
  }
)

document.getElementById('button3').addEventListener('click',
  function() {
    aList.items.pop()
    aList.clearUL()
    aList.renderList()
  }
)

document.getElementById('button4').addEventListener('click', 
  function() {
    aList.items.shift()
    aList.clearUL()
    aList.renderList()
  }
)

