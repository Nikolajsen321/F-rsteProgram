function compareSort(compare){
    let retur = function(list){
        return list.sort(compare)
    }
    return retur

}

let lengthSort = compareSort(compareLen)
let ignoreCase = compareSort(comareIgnoreCase)

let list = ["Benja","Anne","Jens"]

console.log(lengthSort(list))
console.log(ignoreCase(list))


function compareLen(s1, s2) {
    if (s1.length<s2.length) {
        return -1;
    } else if (s1.length>s2.length) {
        return 1;
    } else {return 0;}    
}


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