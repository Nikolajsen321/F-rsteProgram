function compareSort(compare) {
    if(typeof compare !== "function") throw Error("Ikke function")
    let retur = function(list) {
        if (list.length === 0)  throw  Error('Ingen data i liste');
        
        let type = typeof list[0];
        if (type !== 'number' && type !== 'string')  throw  Error("Forkert type mikkel");
    
        
        if (!list.every(e => typeof e === type))   throw  Error('Ej samme type');

        return list.sort(compare);
    };
    return retur
}


let lengthSort = compareSort(compareLen)
let ignoreCase = compareSort(comareIgnoreCase)

let list = ["Benja","Anne","Jens"]
let list1 = [null,null]

console.log(lengthSort(list))
console.log(ignoreCase(list))
console.log(ignoreCase(list1))



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