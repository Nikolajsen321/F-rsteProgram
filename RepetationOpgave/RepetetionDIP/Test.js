function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };



  let mand = new Person("Hans","JENS",20,"Blå")
  Person.prototype.nationality = "English";
  
  console.log(mand.nationality)