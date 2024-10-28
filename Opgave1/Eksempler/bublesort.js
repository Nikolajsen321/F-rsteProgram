// bubbleSort.js
let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];
for (let i = list.length - 1; i >= 0; i--) {
for (let j = 0; j <= i - 1; j++) {
if (list[j] > list[j + 1]) {
let temp = list[j];
list[j] = list[j+1];
list[j+1] = temp;
}
}
}
console.log(list); // => 0,1,2,4,7,8,9,13,16

let sogteTal = 4
let fundetTal = false
let i = 0
let left =0
let right = list.length-1

while(fundetTal == false && i < list.length){
     m = Math.floor(left +right) / 2
    let tal = list[m]
    if(tal == sogteTal){
        console.log(tal)
        fundetTal = true
        console.log("Indexet er " + i)
    }
    else if(tal > sogteTal ){
        right = m -1
    } 
    else{
        left = m +1
    }
    i++
}
console.log(fundetTal)