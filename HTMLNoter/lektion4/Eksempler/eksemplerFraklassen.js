let tabel = '<table>' 
let values = ['a','b','c']
for(let i = 0; i <3; i++){
    tabel+= '<tr>' +'<td>'+i +'</td>'
    tabel +='<td>'+ values[i] + '</td>'
    tabel += '</tr>'
}
tabel += '</table>'
let tablediv = document.querySelector('#tablediv')/*måde man kan give id # ved hvor der kan være mange */
tablediv.innerHTML = tabel
