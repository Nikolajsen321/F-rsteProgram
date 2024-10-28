class Person {
    constructor(navn) {
        this.navn = navn;
    }

    toString() {
        return this.navn;
    }

    static compareTo(p1, p2) {
        if (p1.navn > p2.navn) {
            return 1;
        } else if (p1.navn < p2.navn) {
            return -1;
        } else {
            return 0;
        }
    }

    equals(person) {
        if (person instanceof Person) {
            return this.navn === person.navn;
        }
        return false;
    }
}

class Studerende extends Person {
    constructor(navn, id) {
        super(navn);
        this.id = id;
    }

    toString() {
        return super.toString() + ": " + this.id;
    }

    equals(studerende) {
        if (studerende instanceof Studerende) {
            return this.navn === studerende.navn && this.id === studerende.id;
        }
        return false;
    }
}

class Kat {
    constructor(navn) {
        this.navn = navn;
    }

    toString() {
        return 'Kat: ' + this.navn;
    }
}

let p1 = new Person("Viggo");
let p2 = new Person("Børge");
let s1 = new Studerende("Ida", 123);
let s2 = new Studerende("Ole", 123);
let k1 = new Kat("Misser");
let k2 = new Kat("Kattemis");

let liste = [p1, p2, s1, s2, k1, k2];

console.log("Uordnet liste:");
liste.forEach(person => {
    console.log(person.toString());
});

let sortedList = function (liste) {
    for (let i = liste.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (Person.compareTo(liste[j], liste[j + 1]) > 0) {
                let temp = liste[j];
                liste[j] = liste[j + 1];
                liste[j + 1] = temp;
            }
        }
    }
    return liste;
};

console.log("\nSorteret liste:");
sortedList(liste).forEach(person => {
    console.log(person.toString());
});

p1.equals(p2);
p1.equals(10);
p1.equals(k1);

s1.equals(s1);
s1.equals(s2);
s1.equals(p1);
