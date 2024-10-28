let strengen = "HEJ MIKKEL DU SKAL IKKE DRÆBE FOLK NÅR DE GÅR FRA WAYSTONEN HEJ "

let map = {}

const chars = strengen.split(" ")

console.log(chars)

for (e of chars) {
    if (e in map) {
        map[e]++
    }
    else {
        map[e] = 1
    }

}

console.log(map)




