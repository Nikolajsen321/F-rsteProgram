let i = 2
let divider = 0

let list = []
let test = true
let j = 2

while(i < 100){
    let j = 2
    while(j < i-1){
        if( i % j == 0 ){
           test = false
        }
        j++
    }
    
    if(test == true){
        list[divider] = i
        divider++
    }
    i++
    j = 0

    test = true
}

console.log(list)