

let array = [1, 2]
array.sum = sumFunktion



console.log(array.sum())

function sumFunktion() {
    let sumTal = 0
    for (let i = 0; i < this.length; i++) {
       
        sumTal += this[i]
    }
    return sumTal
}

array.max = max
console.log(array.max())



function max() {
    let maxTal = 0
    for (i in this) {
        if (this[i] > maxTal) {
            maxTal = this[i]

        }
    }
    return maxTal
}


array.contains =contains
console.log(array.contains(2))



function contains(a){
    let sogte = a
    for(i in this){
        if(sogte == this[i]){
        return true
        }
    }
    return false
}

