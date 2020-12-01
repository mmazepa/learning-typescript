let array1:number[] = [1, 2, 3, 4, 5, 1, 1]
let array2:number[] = [5, 4, 3, 2, 1]
let array3:number[] = []

const returnLongerLength = (array1, array2):number => {
  if (array1.length > array2.length)
    return array1.length
  else
    return array2.length
}

const sumArrays = (array1, array2):number[] => {
  for (var i = 0; i < returnLongerLength(array1, array2); i++) {
    if (isNaN(array1[i]))
      array3[i] = array2[i]
    else if (isNaN(array2[i]))
      array3[i] = array1[i]
    else
      array3[i] = array1[i] + array2[i]
  }
  return array3
}

console.log("Array1:          " + array1)
console.log("Array2:          " + array2)
array3 = sumArrays(array1, array2)
console.log("Array1 + Array2: " + array3)
