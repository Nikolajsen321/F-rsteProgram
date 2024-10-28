let array = [{name:"Hans",mail:"Hans@mail",mobilNr:225554},
{name:"Jens",mail:"Jens@mail",mobilNr:55443}]

console.log(array)
array[2] = {name:"Mads",mail:"Mads@mail",mobilNr:554433}
console.log(array)
delete array[1]
console.log(array)
