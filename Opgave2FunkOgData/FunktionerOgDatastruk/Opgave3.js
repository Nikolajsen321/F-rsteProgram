
function compare(s1,s2){
    if(s1 == s2){
        return 0
    }
    else if( s1 > s2){
        return 1
    }
    else{
        return -1
    }
}

let a = "Abb"
let b = "Hans"
let c = "Ace"
let d = "Morten"

console.log(compare(a,c))
console.log(compare(a,b))

function compareLen(s1,s2){
    if(s1.length == s2.length){
        return 0
    }
    else if(s1.length > s2.length){
        return 1
    }
    else{
        return -1
    }
}

console.log(compareLen(d,a))

function comareIgnoreCase(s1,s2){
    let lS1 = s1.toLowerCase()
    let lS2 = s2.toLowerCase()

    if(lS1== lS2){
        return 0
    }
    else if(lS1 > lS2){
        return 1
    }
    else{
        return -1
    }
}

console.log(comareIgnoreCase("HANS","hans"))


//bublesort
function bubbleSort(list1){
    function swap(list1,index1,index2){
        let temp = list1[index1];
        list1[index1] = list1[index2];
        list1[index2] = temp;
    }
for (let i = list1.length - 1; i >= 0; i--) {
for (let j = 0; j <= i - 1; j++) {
if (compare(list1[j], list1[j + 1]) > 0) {
    swap(list1,j,j+1)
}
}
}
return list1
}

let list1 = [7, 13, 9, 8, 4, 1, 2, 16, 0];
console.log(bubbleSort(list1)); // => 0,1,2,4,7,8,9,13,16