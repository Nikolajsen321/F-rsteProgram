const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];
let tabel = '<tablestyle="border: 1px solid red;border-collapse: collapse;>'
MOUNTAINS.forEach(element => {
    tabel += '<tr><td style="border: 1px solid blue;">' + element.name + '</td><td style="border: 1px solid blue;"> ' 
    + element.height + '</td><td style="border: 1px solid blue;">' + element.place + '</td></tr></table>'
});
tabel += '</table>'
let tablediv = document.querySelector('#tablediv')
tablediv.innerHTML = tablediv.innerHTML + tabel


