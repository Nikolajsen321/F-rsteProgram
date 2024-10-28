

// binarysearch.js
let sogteTal = 4
let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];

function binarysearch(list,sogteTal){
let fundetTal = false
let i = 0
let left =0
let right = list.length-1

while(fundetTal == false && i < list.length){
     m = Math.floor((left +right) / 2)
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
return fundetTal
}
console.log(binarysearch(list,sogteTal))



// bubbleSort.js
function bubbleSort(list1){
    function swap(list1,index1,index2){
        let temp = list1[index1];
        list1[index1] = list1[index2];
        list1[index2] = temp;
    }
for (let i = list1.length - 1; i >= 0; i--) {
for (let j = 0; j <= i - 1; j++) {
if (list1[j] > list1[j + 1]) {
    swap(list1,j,j+1)
}
}
}
return list1
}

let list1 = [7, 13, 9, 8, 4, 1, 2, 16, 0];
console.log(bubbleSort(list1)); // => 0,1,2,4,7,8,9,13,16



