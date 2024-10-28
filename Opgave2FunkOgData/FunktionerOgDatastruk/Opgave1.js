let o = [2, 1, 3, 4, 5]


function max(array) {
    let maxTal = 0
    for (i in array) {
        if (array[i] > maxTal) {
            maxTal = array[i]

        }
    }
    return maxTal
}

function contains(array,a){
    let sogte = a
    for(i in array){
        if(sogte == array[i]){
        return true
        }
    }
    return false
}

function sum(array){
    let sumTal =0
    for(i in array){
        sumTal += array[i]
    }
    return sumTal
}


console.log(max(o))

console.log(contains(o,1))

console.log(sum(o))
