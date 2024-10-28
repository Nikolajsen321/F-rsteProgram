let list1 = [1,2,3,4,5]
let list2 = [6,7,8,9,10]

let listSamlet =[]

let i1 = 0
let i2 = 0
let iSamlet = 0

while(list1.length >i1 && list2.length > i1 ){
    if(list1[i1] < list2[i2]){
        listSamlet[iSamlet] = list1[i1]
        i1++
    }
    else{
        listSamlet[iSamlet] = list2[i2]
        i2++
    }
    iSamlet++
}
    while(i1 < list1.length){
        listSamlet[iSamlet] = list1[i1]
        i1 ++
        iSamlet++
    
    }

    while(i2 < list2.length){
        listSamlet[iSamlet] = list2[i2]
        i2++
        iSamlet++
    }



console.log(listSamlet)