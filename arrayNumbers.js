//only print the value in the array that are type number
var arr = ['age', 22, 44, 'hello', 'hi', 332, 45]

for (var i=0 ; i < arr.length ; i++) {

  if (parseInt(arr[i])){
    console.log(parseInt(arr[i]))
  }

    }
// to print all the values in the array console.log(arr[i])
//another way  if(typeof arr[i]==='number') 
