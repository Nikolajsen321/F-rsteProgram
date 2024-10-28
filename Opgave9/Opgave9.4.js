function AddOne(a) {
    return a+1
}
function MultBy2(a) {
    return 2 * a
}

function compose(f1,f2,a){
    return f1(f2(a))
}

console.log(compose(AddOne,MultBy2,3))

function compose2(f1,f2){
    let retur = function(a){
        return f1(f2(a))
    }
    return retur
}


let newFunction1 = compose2(AddOne,MultBy2)
let a = 1
console.log(newFunction1(17))