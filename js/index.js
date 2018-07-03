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

var newArr = []

document.getElementById('button').addEventListener('click', 
  function() {
    var input = document.getElementById('input')
    var li = document.createElement('li')
    var list = document.getElementById('list')
    newArr.push(input.value)
    for ( i = 0 ; i < newArr.length; i++) {
      li.textContent = newArr[i]
      list.appendChild(li)
    }
  }
)

document.getElementById('button2').addEventListener('click',
  function() {
    newArr.sort()   
    var list = document.getElementById('list')
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
    for ( i = 0; i < newArr.length; i++) {
      var li = document.createElement('li')
      li.textContent = newArr[i]
      list.appendChild(li)
    }
  }
)

document.getElementById('button3').addEventListener('click',
  function() {
    newArr.pop()
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
    for ( i = 0; i < newArr.length; i++) {
      var li = document.createElement('li')
      li.textContent = newArr[i]
      list.appendChild(li)
    }
  }
)

document.getElementById('button4').addEventListener('click', 
  function() {
    newArr.shift()
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
    for ( i = 0; i < newArr.length; i++) {
      var li = document.createElement('li')
      li.textContent = newArr[i]
      list.appendChild(li)
    }
  }
)


